import React, { Component } from "react";
import { connect } from 'react-redux';
import { setAuthUser } from "../actions/authUser";
import { Redirect } from 'react-router-dom';

class Login extends Component {

    login(e) {
        e.preventDefault();
        this.props.dispatch(setAuthUser(this.state.selectedUser));
    }

    render() {

        if (this.props.authUser) {
            return <Redirect to='/' />
        }

        return (
            <div className="card">
                <div className="card-header text-center">
                    <h4>Login</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={(e) => this.login(e)}>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlFile1">Select your username:</label>
                            <select
                                onChange={(e) => this.setState({
                                    selectedUser: e.target.value
                                })}
                                className="form-control form-control-lg">
                                { this.props.users.map(u => (
                                    <option
                                        key={ u.id }
                                        value={ u.id }
                                    >{ u.name }</option>
                                ))}
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                        >Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect((state) => ({
    users: Object.values(state.users),
    authUser: state.authUser
}))(Login);