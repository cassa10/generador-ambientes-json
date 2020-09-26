/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import FlowGraph, {Controls} from 'react-flow-renderer';

const Graph = ({serversToGraph, isDraggable}) => {

    const axisX = 510;
    
    const difAxisY = 80;

    let axisY = 20;

    const nextAxisY = (distance) => {
        axisY = axisY + distance;
        return axisY;
    }

    let id = 0;
    const nextId = () => {
        id++;
        return id
    }

    let idConnection = 0;
    const nextIdConnection = () => {
        idConnection++;
        return `e-${idConnection}`;
    }

    const getType = (enabled) => enabled?"output":"default";

    const buildServerGraph = (enabled, dataLabel, axisX, axisY) => ({
        id: nextId(),
        type: getType(enabled),
        draggable: isDraggable,
        data: {label: dataLabel},
        position: { x: axisX, y: axisY},
    })

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

    const buildMultipleConnectionSourcesToTarget = (sources,target,animated = false) =>
        sources.map(s => buildConnection(s,target,animated));


    const buildMultipleConnectionSourceToTargets = (source,targets,animated = false) =>
        targets.map(t => buildConnection(source,t,animated));

    
    const parseToGraph = (server) => {
        const preDeployItems = server.preDeploy ? server.preDeploy.map((svPreDeploy) => {}) : [];

        const mainServerItem = buildServerGraph(server.enabled, server.nombre, axisX, nextAxisY(difAxisY));
        const postDeployItems = server.postDeploy ? server.postDeploy.map((svPostDeploy) => {}) : [];
        const concurrentItem = 
            server.servidoresDeployParalelos
                ? buildConcurrentServersGraph(true, server.nombre, server.servidoresDeployParalelos)
                : []

        return [];
    };

    const mapToFlowGraph = (servers) => {
    
        const start = { 
            id: 'start',
            type: 'input',
            draggable: isDraggable,
            data: {label: "Start"},
            position: { x: axisX, y: axisY},
            style: {color: 'black'}
        };
    
        const serversAndConnections = []//servers.map(parseToGraph);
        
        const finish = { 
            id: 'finish',
            type: 'input',
            draggable: isDraggable,
            data: {label: "Finish"},
            position: { x: axisX, y: nextAxisY(difAxisY)}
        };
    
        return [
            start,
            ...serversAndConnections,
            finish
        ];
    };

    const elements = mapToFlowGraph(serversToGraph);
    /*[
        { 
            id: 'start',
            type: 'input',
            draggable: isDraggable,
            data: {label: "Start"},
            position: { x: axisX, y: axisY},
            style: {color: 'black'}
        },
        ...buildConcurrentServers(true, 'Ambientes-1',[{name:'Ambiente 1.A',enabled: true},{name:'Ambiente 1.B',enabled: true},{name:'Ambiente 1.C',enabled: true}]),
        ...buildConcurrentServers(true, 'Ambientes-2',[{name:'Ambiente 2.X',enabled: true},{name:'Ambiente 2.Y',enabled: false},{name:'Ambiente 2.Z',enabled: false}]),
        buildServer(false,'Ambiente 3', axisX, nextAxisY(difAxisY)),
        ...buildConcurrentServers(true, 'Ambientes-4',[{name:'Ambiente 4.A',enabled: false},{name:'Ambiente 4.B',enabled: true},{name:'Ambiente 4.C',enabled: true}]),
        buildServer(true,'Ambiente 5', axisX, nextAxisY(difAxisY)),
        { 
            id: 'finish',
            type: 'input',
            draggable: isDraggable,
            data: {label: "Finish"},
            position: { x: axisX, y: nextAxisY(difAxisY)}
        },
        buildConnection('start','1'),
        ...buildMultipleConnectionSourceToTargets('1',['2','3','4']),
        ...buildMultipleConnectionSourcesToTarget(['2','3','4'],'5'),
        ...buildMultipleConnectionSourceToTargets('5',['6','7','8']),
        ...buildMultipleConnectionSourcesToTarget(['6','7','8'],'9'),
        buildConnection('9','10'),
        ...buildMultipleConnectionSourceToTargets('10',['11','12','13']),
        ...buildMultipleConnectionSourcesToTarget(['11','12','13'],'14'),
        buildConnection('14','finish'),
    ];
    */

    const graphStyles = { width: '100%', height: '800px', border: '1px solid black', margin: '7px', };

    const handleElementClick = (event, elem) => console.log('click', elem);

    return (
        <div>
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