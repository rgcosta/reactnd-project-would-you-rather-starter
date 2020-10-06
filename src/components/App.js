import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialLoad } from "../actions/initialLoad";

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialLoad());
    }

    render() {
        return (
            <div>
                Hello World!
            </div>
        )
    }
}

export default connect()(App);
