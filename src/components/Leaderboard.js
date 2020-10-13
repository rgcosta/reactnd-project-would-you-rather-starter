import React, { Component } from "react";
import { connect } from 'react-redux';

class Leaderboard extends Component {

    state = {
        leaders: []
    }

    componentDidMount() {
        this.sortUsers();
    }

    sortUsers() {
        const leaders = this.props.users.sort((a, b) => {
            const scoreA = a.questions.length + Object.keys(a.answers).length;
            const scoreB = b.questions.length + Object.keys(b.answers).length;

            return scoreB - scoreA;
        });
        this.setState({
            leaders
        })
    }

    render() {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Answered Questions</th>
                    <th scope="col">Created Questions</th>
                    <th scope="col">Score</th>
                </tr>
                </thead>
                <tbody>
                { this.state.leaders.map((u, index) => (
                    <tr key={u.id}>
                        <th scope="row">{ index + 1 }</th>
                        <td>{ u.name }</td>
                        <td>{ Object.keys(u.answers).length }</td>
                        <td>{ u.questions.length }</td>
                        <td>{ u.questions.length + Object.keys(u.answers).length }</td>
                    </tr>
                ))}
                </tbody>
            </table>
        )
    }
}

export default connect((state) => ({
    users: Object.values(state.users)
}))(Leaderboard);