import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import CounterActions from '../actions/counter';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../theme/themeFile';
import Counter from '../components/Counter';

class App extends PureComponent {
    static propTypes = {
        counter: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired,
    };

    render() {
        const { counter, actions } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <Header />
                    <Counter counter={counter} actions={actions} />
                </div>
            </MuiThemeProvider>
        );
    }
}


function mapStateToProps(state) {
    return {
        counter: state.counter,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, CounterActions), dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
