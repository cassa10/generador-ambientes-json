import React from 'react';
import {Container} from "@material-ui/core";
import Graph from "../components/Graph";

const GraphPage = () => {

    return (
        <Container>
            <Graph graphProps={[]} isDraggable={true} />
        </Container>
    );
}

export default GraphPage;