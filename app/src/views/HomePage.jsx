import React, {useState} from 'react';
import {Container, Dialog, DialogTitle, Typography, DialogContent, DialogActions } from "@material-ui/core";
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

    const getAmbientesJSON = () => {
        const ambientesJSON = `
        {
            "ambientesDeploy": [
                {
                    "nombre":"Ambientes-1", 
                    "dryRun": false,
                    "enabled": true,
                    "preDeploy":[],
                    "postDeploy":[],
                    "servidoresDeployParalelos":[
                        {
                            "nombre": "Ambientes-1.A",
                            "host": "10.76.28.133",
                            "path": "/home/z001534/bd-loader3",
                            "os": "linux",
                            "dryRun": false,
                            "enabled": true
                        },  
                        {
                            "nombre": "Ambientes-1.B",
                            "host": "10.76.28.133",
                            "path": "/home/z001534/bd-loader4",
                            "os": "linux",
                            "dryRun": false,
                            "enabled": true
                        },  
                        {
                            "nombre": "Ambientes-1.C",
                            "host": "10.76.28.133",
                            "path": "/home/z001534/bd-loader4",
                            "os": "linux",
                            "dryRun": false,
                            "enabled": true
                        }
                    ]
                },
                {
                    "nombre":"Ambientes-2", 
                    "dryRun": false,
                    "enabled": true,
                    "preDeploy":[],
                    "postDeploy":[],
                    "servidoresDeployParalelos":[
                        {
                            "nombre": "Ambientes-2.X",
                            "host": "10.76.28.133",
                            "path": "/home/z001534/bd-loader3",
                            "os": "linux",
                            "dryRun": false,
                            "enabled": true
                        },  
                        {
                            "nombre": "Ambientes-2.Y",
                            "host": "10.76.28.133",
                            "path": "/home/z001534/bd-loader4",
                            "os": "linux",
                            "dryRun": false,
                            "enabled": false
                        },  
                        {
                            "nombre": "Ambientes-2.Z",
                            "host": "10.76.28.133",
                            "path": "/home/z001534/bd-loader4",
                            "os": "linux",
                            "dryRun": false,
                            "enabled": false
                        }
                    ]
                },
                {
                    "nombre": "Ambiente 3",
                    "host": "10.76.28.133",
                    "path": "/home/z001534/bd-loader3",
                    "os": "linux",
                    "dryRun": false,
                    "enabled": false,
                    "preDeploy":[],
                    "postDeploy":[]
                },
                {
                    "nombre":"Ambientes-4", 
                    "dryRun": false,
                    "enabled": true,
                    "preDeploy":[],
                    "postDeploy":[],
                    "servidoresDeployParalelos":[
                        {
                            "nombre": "Ambientes-4.A",
                            "host": "10.76.28.133",
                            "path": "/home/z001534/bd-loader3",
                            "os": "linux",
                            "dryRun": false,
                            "enabled": false
                        },  
                        {
                            "nombre": "Ambientes-4.B",
                            "host": "10.76.28.133",
                            "path": "/home/z001534/bd-loader4",
                            "os": "linux",
                            "dryRun": false,
                            "enabled": true
                        },  
                        {
                            "nombre": "Ambientes-4.C",
                            "host": "10.76.28.133",
                            "path": "/home/z001534/bd-loader4",
                            "os": "linux",
                            "dryRun": false,
                            "enabled": true
                        }
                    ]
                },
                {
                    "nombre": "Ambiente 5",
                    "host": "10.76.28.133",
                    "path": "/home/z001534/bd-loader3",
                    "os": "linux",
                    "requiereTicketHelix": false,
                    "esperarPruebas": true,
                    "dryRun": false,
                    "enabled": true,
                    "preDeploy":[],
                    "postDeploy":[]
                }
            ]
        }
        `

        return ambientesJSON
    }

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
            
            <Button className={classes.button} variant="contained" size="large" color="primary" type="submit" onClick={goToGraphPage(push)}>
                Graficar
            </Button>
        </Container>
    );
}

export default HomePage;