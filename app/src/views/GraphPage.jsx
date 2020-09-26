import React from 'react';
import {Container} from "@material-ui/core";
import Graph from "../components/Graph";
import {useLocation, useHistory} from "react-router-dom";
import {useEffect} from "react";
import {goToHomePage} from "../utils/navFunctions";

const GraphPage = () => {
    let {push} = useHistory();

    let servers = useLocation().state
    
    useEffect(() => {
        //Redirect to home if servers equals to undefined
        !servers && goToHomePage(push);
        
    }, [servers, push]);

    return (
        <Container>
            {console.log(servers)}
            <Graph graphProps={[]} isDraggable={true} />
        </Container>
    );
}

export default GraphPage;