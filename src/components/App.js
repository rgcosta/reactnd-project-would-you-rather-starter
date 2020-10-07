import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialLoad } from "../actions/initialLoad";
import Dashboard from "./Dashboard";
import LoadingBar from 'react-redux-loading'

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialLoad());
    }

    render() {
        return (
            <div className='container'>
                <LoadingBar/>
                <div>
                    Hello World!
                </div>
                {this.props.isLoading ? null : <Dashboard /> }
            </div>
        )
    }
}

export default connect((state) => ({
    isLoading: state.loadingBar?.default || false
}))(App);
