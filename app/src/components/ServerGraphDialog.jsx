import React, {useState} from 'react';
import {Dialog, DialogTitle, Typography, DialogContent, DialogActions, Button } from "@material-ui/core";
import PropTypes from 'prop-types';

const ServerGraphDialog = ({serverData}) => {
    
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            fullWidth={true}
            maxWidth="lg"
            open={open}
            onClose={handleClose}
            aria-labelledby="max-width-dialog-title"
        >
        <DialogTitle id="max-width-dialog-title">{serverData.nombre}</DialogTitle>
        <DialogContent>
            <Typography variant="body1">
                DATA AMBIENTE
            </Typography>
        </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>  
    )
}

ServerGraphDialog.propTypes = {
    serverData: PropTypes.object
};

export default ServerGraphDialog;