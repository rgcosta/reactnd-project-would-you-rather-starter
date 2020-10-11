import React, { Component } from "react";
import { connect } from 'react-redux';
import { handleAddQuestion } from "../actions/questions";
import { withRouter } from 'react-router-dom'

class NewQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: ''
    }

    addNewQuestion(e) {
        e.preventDefault();
        const { optionOneText, optionTwoText } = this.state;
        const question = {
            optionOneText,
            optionTwoText
        }

        this.props.dispatch(handleAddQuestion(question, this.props.history));
    }

    render() {
        const isSubmitDisabled = !this.state.optionOneText || !this.state.optionTwoText;

        return (
            <div className="card">
                <div className="card-header text-center">
                    <h4>Create New Question</h4>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Would You Rather ...</h5>
                    <form onSubmit={(e) => this.addNewQuestion(e)}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder='Enter Option One Text Here'
                                value={this.state.optionOneText}
                                onChange={(e) => this.setState({
                                    optionOneText: e.target.value
                                })}
                            />
                            <small
                                id="emailHelp"
                                style={{marginTop: '15px'}}
                                className="form-text text-center">----- OR -----</small>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder='Enter Option Two Text Here'
                                value={this.state.optionTwoText}
                                onChange={(e) => this.setState({
                                    optionTwoText: e.target.value
                                })}
                            />
                        </div>
                        <button
                            disabled={isSubmitDisabled}
                            type="submit"
                            className="btn btn-primary btn-block">Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(connect((state) => ({
    authUser: state.authUser
}))(NewQuestion));