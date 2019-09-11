import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/AddCircle'
import RemoveIcon from '@material-ui/icons/RemoveCircle'
import { withStyles } from '@material-ui/styles';

const styles = {
    button: {
        margin: 5,
    },
};

class Counter extends PureComponent {
    static propTypes = {
        counter: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    render() {
        const { counter, actions, classes } = this.props;
        return (
            <div style={{ width: '100%' }}>
                <div className="centerTable">
                    <h2>count={counter.value}</h2>
                </div>
                <div className="centerTable">
                    <Button onClick={actions.increment}>
                        増加
                        <AddIcon />
                    </Button>
                    <Button onClick={actions.decrement}>
                        減少
                        <RemoveIcon />
                    </Button>
                </div>

            </div>


        );
    }
}

export default withStyles(styles)(Counter);