import React, {useState} from 'react';
import {Typography, Container, Grid} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Graph from "../components/Graph";

const GraphPage = () => {
    const [ambientes, setAmbientes] = useState([]);

    return (
        <Container>
            <Graph graphProps={ambientes} isDraggable={true} />
        </Container>
    );
}

export default GraphPage;