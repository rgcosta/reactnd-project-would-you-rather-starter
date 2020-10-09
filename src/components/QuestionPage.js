import React, { Component } from "react";
import Question from "./Question";
import { connect } from 'react-redux';

class QuestionPage extends Component {

    render() {
        return (
            this.props.question ? <Question question={this.props.question} /> : <div></div>
        );
    }
}

export default connect((state, props) => {
    const { question_id } = props.match.params;
    const question = state.questions[question_id];

    return {
        question
    }
})(QuestionPage);