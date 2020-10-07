import React, { Component } from "react";

class Question extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div>
                        {this.props.question.optionOne.text}
                    </div>
                    or
                    <div>
                        {this.props.question.optionTwo.text}
                    </div>
                </div>
            </div>
        )
    }
}

export default Question;