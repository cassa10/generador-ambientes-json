import React, {useState} from 'react';
import {Container, Dialog, DialogTitle, Typography, DialogContent, DialogActions, Button } from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {goToGraphPage} from "../utils/navFunctions";
import { makeStyles } from "@material-ui/core/styles";
import {ambientesJSON} from "../assets/examplesAmbientesJSON";

const useStyles = makeStyles((theme) => ({
    grid: {
        marginTop: "45px",
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
    
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const getAmbientesJSON = () => ambientesJSON;

    const dialog = () => (
        <Dialog
            fullWidth={true}
            maxWidth="lg"
            open={open}
            onClose={handleClose}
            aria-labelledby="max-width-dialog-title"
        >
        <DialogTitle id="max-width-dialog-title">Visualizando ambientes.json</DialogTitle>
        <DialogContent>
            <Typography variant="body1" style={{whiteSpace: 'break-spaces'}}>
            {getAmbientesJSON()}
            </Typography>
        </DialogContent>
            <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
                Close
            </Button>
            <Button autoFocus onClick={handleClose} color="primary">
                Save
            </Button>
            </DialogActions>
        </Dialog>  
    );
    
    return (
        <Container>
            <Button className={classes.button} variant="contained" size="large" color="primary" type="submit">
                Crear Ambiente
            </Button>
            <div>
                <Button className={classes.button} variant="contained" size="large" color="primary" type="submit" onClick={handleClickOpen}>
                    Visualizar archivo JSON
                </Button>
                {dialog()}
            </div>
            
            <Button className={classes.button} variant="contained" size="large" color="primary" type="submit" onClick={goToGraphPage(push,getAmbientesJSON())}>
                Graficar
            </Button>
        </Container>
    );
}

export default HomePage;