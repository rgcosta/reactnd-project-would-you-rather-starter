import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class Dashboard extends Component {
    state = {
        isUnansweredActive: true,
        isAnsweredActive: false,
        questions: []
    }

    componentDidMount() {
        this.filterUnanswered();
    }

    filterUnanswered(){
        const { authUser } = this.props;
        this.setState({
            isUnansweredActive: true,
            isAnsweredActive: false,
            questions: this.props.questions
                .filter((q) => !q.optionOne.votes.includes(authUser) && !q.optionTwo.votes.includes(authUser))
        })
    }

    filterAnswered(){
        const { authUser } = this.props;
        this.setState({
            isUnansweredActive: false,
            isAnsweredActive: true,
            questions: this.props.questions
                .filter((q) => q.optionOne.votes.includes(authUser) || q.optionTwo.votes.includes(authUser))
        })
    }


    render() {
        const { questions } = this.state;

        return (
            <div className="card">
                <div className="card-header bg-transparent">
                    <ul className="nav nav-tabs nav-justified">
                        <li className="nav-item">
                            <a
                                className={ this.state.isUnansweredActive ? "nav-link active" : "nav-link" }
                                onClick={ () => this.filterUnanswered() }
                            >Unanswered Questions</a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={this.state.isAnsweredActive ? "nav-link active" : "nav-link"}
                                onClick={ () => this.filterAnswered() }
                            >Answered Questions</a>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        { questions.map((question) => (
                            <li className="list-group-item" key={question.id}>
                                <Question question={question} hideOptions={true} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect((state) => ({
    authUser: state.authUser,
    questions: Object.values(state.questions)
}))(Dashboard);