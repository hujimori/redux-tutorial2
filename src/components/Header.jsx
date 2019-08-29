import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';


import { Toolbar } from 'material-ui';
import { IconButton } from 'material-ui';


class Header extends Component {
    render() {
        return (
            <header className="header">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit">

                        </IconButton>
                    </Toolbar>

                    <h1>ヘッダ</h1>
                </AppBar>
            </header>
        );
    }
}

export default Header;