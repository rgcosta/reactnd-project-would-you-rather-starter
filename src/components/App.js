import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialLoad } from "../actions/initialLoad";
import Dashboard from "./Dashboard";
import LoadingBar from 'react-redux-loading'
import Navbar from "./Navbar";

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialLoad());
    }

    render() {
        return (
            <div className='container'>
                <div className="row justify-content-md-center">
                    <div className="col-md-8">
                        <LoadingBar/>
                        <Navbar/>
                        {this.props.isLoading ? null : <Dashboard /> }
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state) => ({
    isLoading: state.loadingBar?.default || false
}))(App);
