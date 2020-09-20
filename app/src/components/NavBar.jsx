import React from 'react';
import {AppBar, Toolbar} from "@material-ui/core";
import {goToHomePage} from "../utils/navFunctions";
import {useHistory} from "react-router";
import Logo from "../assets/images/tsoft-logo.png";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    img: {
        width: '100px',
        minWidth: '100px',
        cursor: 'pointer'
    },
}));

const NavBar = () => {

    const classes = useStyles();
    let { push } = useHistory();

    return (
        <AppBar position="static">
            <Toolbar>
                <img
                    className={classes.img}
                    src={Logo}
                    alt="logo"
                    onClick={goToHomePage(push)}
                />
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;