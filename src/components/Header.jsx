import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import {Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {StyledLink} from "../styled/Styles";

const Header = (props) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                    Movie API
                </Typography>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/contact">My contact</StyledLink>
            </Toolbar>
        </AppBar>
    )
};

export default Header;
