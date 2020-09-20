import React, {useState} from 'react';
import {Container, Grid} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";
import {goToGraphPage} from "../utils/navFunctions";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    grid: {
        marginTop: "45px",
        backgroundColor: "#0eacd4",
        borderLeft: "10px solid #017787",
        borderRight: "10px solid #017787",
        backgroundColor: "#0eacd4",
        borderLeft: "10px solid #017787",
        borderRight: "10px solid #017787",
    },
    button:{
        margin: 30,
    },
}));

const HomePage = () => {

    const classes = useStyles();
    let {push} = useHistory();
    
    return (
        <Container>
            <Button className={classes.button} variant="contained" size="large" color="primary" type="submit">
                Crear Ambiente
            </Button>
            <Button className={classes.button} variant="contained" size="large" color="primary" type="submit">
                Visualizar archivo JSON
            </Button>
            <Button className={classes.button} variant="contained" size="large" color="primary" type="submit" onClick={goToGraphPage(push)}>
                Graficar
            </Button>
        </Container>
    );
}

export default HomePage;