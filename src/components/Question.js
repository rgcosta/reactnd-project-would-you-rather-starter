import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Question extends Component {
    state = {
        shortText: '',

    }

    componentDidMount() {
        this.formatQuestions();
    }

    formatQuestions(){
        this.setState({
            shortText: this.props.question.optionOne.text.substr(0,8) + '... OR ' +
                this.props.question.optionTwo.text.substr(0,8) + '...'
        })
    }

    render() {
        console.log('questionProps', this.props);
        const { question, hideOptions, author, isAnswered, authUser } = this.props;
        const votes = question.optionOne.votes.length + question.optionTwo.votes.length;
        const percentOptionOne = (question.optionOne.votes.length / votes)*100;
        const percentOptionTwo = (question.optionTwo.votes.length / votes)*100;


        return (
            <div className="card mb-3">
                <div className="card-header">
                    { author + ' asks'}
                </div>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img
                            src='https://tylermcginnis.com/would-you-rather/sarah.jpg'
                            className="img-fluid img-thumbnail rounded-circle"
                            alt="AA"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Would You Rather</h5>
                            {
                                hideOptions &&
                                (
                                    <div>
                                        <p className="card-text">{ this.state.shortText }</p>
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary btn-block"
                                        >View Poll
                                        </button>
                                    </div>
                                )
                            }
                            {
                                isAnswered
                                    ? (
                                        !hideOptions &&
                                        <div>
                                            <div
                                                className={question.optionOne.votes.includes(authUser)
                                                    ? 'card text-white bg-primary mb-3'
                                                    : 'card bg-light mb-3'}>
                                                <div className="card-body">
                                                    <h5 className="card-title">{ question.optionOne.text }</h5>
                                                    <div className="progress">
                                                        <div
                                                            className={question.optionOne.votes.includes(authUser)
                                                                ? 'progress-bar bg-white text-primary'
                                                                : 'progress-bar'}
                                                            role="progressbar"
                                                            style={{width: percentOptionOne + '%'}}
                                                            aria-valuenow={percentOptionOne}
                                                            aria-valuemin="0"
                                                            aria-valuemax="100">{percentOptionOne}%
                                                        </div>
                                                    </div>
                                                    <p className='text-center'>{question.optionOne.votes.length} out of {votes}</p>
                                                </div>
                                            </div>
                                            <div className={question.optionTwo.votes.includes(authUser)
                                                ? 'card text-white bg-primary mb-3'
                                                : 'card bg-light mb-3'}>
                                                <div className="card-body">
                                                    <h5 className="card-title">{ question.optionTwo.text}</h5>
                                                    <div className="progress">
                                                        <div
                                                            className={question.optionTwo.votes.includes(authUser)
                                                                ? 'progress-bar bg-white text-primary'
                                                                : 'progress-bar'}
                                                            role="progressbar"
                                                            style={{width: percentOptionTwo + '%'}}
                                                            aria-valuenow={percentOptionTwo}
                                                            aria-valuemin="0"
                                                            aria-valuemax="100">{percentOptionTwo}%
                                                        </div>
                                                    </div>
                                                    <p className='text-center'>{question.optionTwo.votes.length} out of {votes}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    : (
                                        !hideOptions &&
                                        <div style={{marginTop: '30px'}}>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="exampleRadios"
                                                       id="exampleRadios1" value="option1" checked/>
                                                <label className="form-check-label" htmlFor="exampleRadios1">
                                                    { question.optionOne.text }
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="exampleRadios"
                                                       id="exampleRadios2" value="option2"/>
                                                <label className="form-check-label" htmlFor="exampleRadios2">
                                                    { question.optionTwo.text }
                                                </label>
                                            </div>
                                            <div>
                                                <button
                                                    type="button"
                                                    className="btn btn-primary btn-block"
                                                    style={{marginTop: '30px'}}
                                                >Submit
                                                </button>
                                            </div>
                                        </div>
                                    )
                            }
                            <p className="card-text text-right"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Question.propTypes = {
    question: PropTypes.object.isRequired,
    hideOptions: PropTypes.bool,
    author: PropTypes.string.isRequired,
    isAnswered: PropTypes.bool.isRequired,
    authUser: PropTypes.string
}

export default connect((state, {question, hideOptions = false}) => ({
    authUser: state.authUser,
    hideOptions: hideOptions,
    author: state.users[question.author].name,
    isAnswered: question.optionOne.votes.includes(state.authUser) || question.optionTwo.votes.includes(state.authUser)
}))(Question);