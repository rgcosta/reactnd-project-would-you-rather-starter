import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialLoad } from "../actions/initialLoad";
import Dashboard from "./Dashboard";
import LoadingBar from 'react-redux-loading'
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewQuestion from "./NewQuestion";
import QuestionPage from "./QuestionPage";

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialLoad());
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    <div className='container'>
                        <div className="row justify-content-md-center">
                            <div className="col-md-8">
                                <Navbar/>
                                {this.props.isLoading
                                    ? null
                                    : <div>
                                        <Route exact path='/' component={Dashboard}/>
                                        <Route path='/add' component={NewQuestion}/>
                                        <Route path='/question/:question_id' component={QuestionPage}/>
                                    </div>
                                    }
                            </div>
                        </div>
                    </div>
                </Fragment>
            </Router>
        )
    }
}

export default connect((state) => ({
    isLoading: state.loadingBar?.default || false
}))(App);
