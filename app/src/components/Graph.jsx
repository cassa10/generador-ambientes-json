/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import FlowGraph, { Controls } from 'react-flow-renderer';
import ServerGraphDialog from "./ServerGraphDialog";

const Graph = ({ serversToGraph, isDraggable }) => {

	const axisX = 510;

	const difAxisY = 80;

	let axisY = 20;

	const nextAxisY = (distance) => {
		axisY = axisY + distance;
		return axisY;
	}

	let idGraphElement = 0;
	const nextId = () => {
		idGraphElement++;
		return idGraphElement;
	}

	let idConnection = 0;
	const nextIdConnection = () => {
		idConnection++;
		return `e-${idConnection}`;
	}

	const getType = (enabled) => enabled ? "output" : "default";

	const buildServerGraph = (enabled, dataLabel, axisX, axisY) => ({
		id: nextId(),
		type: getType(enabled),
		draggable: isDraggable,
		data: { label: dataLabel },
		position: { x: axisX, y: axisY },
	});

	const buildConcurrentServersGraph = (enabled, serversNameContainer, listServers) => {
		const containerServer = buildServerGraph(enabled, serversNameContainer, axisX, nextAxisY(difAxisY));

		const concurrentAxisY = nextAxisY(difAxisY - 20);

		let svAxisX = 150;
		let distanceSvX = 180;
		const ys = listServers.map(server => {
			svAxisX = svAxisX + distanceSvX;
			return buildServerGraph(enabled && server.enabled, server.nombre, svAxisX, concurrentAxisY)
		})

		return [containerServer, ...ys]
	}

	const buildConnection = (source, target, animated = false) => ({
		id: nextIdConnection(),
		source: source,
		target: target,
		animated: animated
	});

	const buildMultipleConnectionSourcesToTarget = (sources, target, animated = false) =>
		sources.map(s => buildConnection(s, target, animated));


	const buildMultipleConnectionSourceToTargets = (source, targets, animated = false) =>
		targets.map(t => buildConnection(source, t, animated));

	const parseServerToItemGraph = (server) => {

		const preDeployItems = server.preDeploy ?
			server.preDeploy.map((svPreDeploy) => buildServerGraph(svPreDeploy.enabled, svPreDeploy.nombre, axisX, nextAxisY(difAxisY)))
			: [];

		const concurrentItems = server.servidoresDeployParalelos ?
			buildConcurrentServersGraph(true, server.nombre, server.servidoresDeployParalelos)
			:
			[buildServerGraph(server.enabled, server.nombre, axisX, nextAxisY(difAxisY))];

		const mainServer = concurrentItems.shift();

		const postDeployItems = server.postDeploy ?
			server.postDeploy.map((svPostDeploy) => buildServerGraph(svPostDeploy.enabled, svPostDeploy.nombre, axisX, nextAxisY(difAxisY)))
			: [];

		//La idea de esta constante es que en un futuro voy a hacer el seteo de los ejes aca, 
		//  segun el orden de la lista y luego aplano con los conectores
		let graphItems;
		concurrentItems.length > 0 ?
			graphItems = [...preDeployItems, mainServer, concurrentItems, ...postDeployItems]
			:
			graphItems = [...preDeployItems, mainServer, ...postDeployItems];

		return graphItems;
	};

	const getIds = (list) => list.map(elem => elem.id);

	const connectGraphElements = (graphElementOrElements, index, list) => {
		const nextElem = list[index + 1];
		let connectors;
		//Me fijo si tengo que crear multiples conectores o uno simple
		if (Array.isArray(graphElementOrElements)) {
			//Si nextElem es undefined o null, se vincula con el elemento final
			nextElem ?
				connectors = buildMultipleConnectionSourcesToTarget(getIds(graphElementOrElements), nextElem.id)
				:
				connectors = buildMultipleConnectionSourcesToTarget(getIds(graphElementOrElements), "finish")
		} else {
			//Si nextElem es undefined o null, se vincula con el elemento final
			(nextElem && Array.isArray(nextElem)) ?
				connectors = buildMultipleConnectionSourceToTargets(graphElementOrElements.id, getIds(nextElem))
				:
				connectors = buildConnection(graphElementOrElements.id, nextElem ? nextElem.id : "finish")
		}

		return connectors;
	};

	//All items graph are sort from first deployed to last deployed
	const allItemsGraph = (servers) => {
		const start = {
			id: 'start',
			type: 'input',
			draggable: isDraggable,
			data: { label: "Pipeline Start" },
			position: { x: axisX, y: axisY }
		};

		const allServersItems = servers.map(parseServerToItemGraph).flat();

		const finish = {
			id: 'finish',
			type: 'input',
			draggable: isDraggable,
			data: { label: "Pipeline Finish" },
			position: { x: axisX, y: nextAxisY(difAxisY) }
		};

		//Add at first of the array
		allServersItems.unshift(start)

		//Add at last of the array
		allServersItems.push(finish)
		
		return allServersItems;
	};

	//All graph server items (including start and finish) 
	// Obs: Concurrent elems are array
	const serversGraphElements = allItemsGraph(serversToGraph);

	//Return a list of elems
	const mapToFlowGraph = () => {
		
		let allServerGraphElems = serversGraphElements;

		//Build connectors
		const connectorsOfGraphElements = allServerGraphElems.map(connectGraphElements).flat();

		//Now flat allServerGraphElems
		allServerGraphElems = allServerGraphElems.flat();

		//Create first connection between start and first server elem xor finish elem
		connectorsOfGraphElements.push(buildConnection(serversGraphElements[0].id, serversGraphElements[1].id));

		//Plain servers elements and concat graph elements with connectors
		const serversAndConnections =
			allServerGraphElems.concat(connectorsOfGraphElements);

		return serversAndConnections;
	};

	const elements = mapToFlowGraph();

	const graphStyles = { width: '100%', height: '800px', border: '1px solid black', margin: '7px', };

	const handleElementClick = (event, elem) => openDialogFuncs[elem.id - 1]();

	const openDialogFuncs = allItemsGraph(serversToGraph).map((item) => (
		() => console.log("handleOpen " + item.id)
	));

	const createDialogs = () => serversGraphElements.flat().map((item, i) => <ServerGraphDialog key={i} serverData={item} handleOpen={openDialogFuncs[i]} />);

	return (
		<div>
			{createDialogs()}
			<FlowGraph
				elements={elements}
				style={graphStyles}
				onElementClick={handleElementClick ? handleElementClick : undefined}>
				<Controls />
			</FlowGraph>
		</div>
	);
};

Graph.propTypes = {
	serversToGraph: PropTypes.array.isRequired
};

export default Graph;