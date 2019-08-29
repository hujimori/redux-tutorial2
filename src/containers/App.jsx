import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import CounterActions from '../actions/counter';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from '../theme/themeFile';

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
                    <h2>count={counter.value}</h2>
                    <button onClick={actions.increment}>増加</button>
                    <button onClick={actions.decrement}>減少</button>
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
