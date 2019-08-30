import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class Header extends PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    render() {
        const { classes } = this.props;
        return (
            <header className="header">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Typography type="title" color="inherit" className={classes.flex}>
                            カウンターAPI
                        </Typography>
                        <Button color="inherit" className={classes.menuButton}>Login</Button>
                    </Toolbar>
                </AppBar>
            </header>
        );
    }
}

export default withStyles(styles)(Header);