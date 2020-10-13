import React, { Component } from "react";
import { connect } from 'react-redux';
import { NavLink, withRouter } from "react-router-dom";
import { unsetAuthUser } from "../actions/authUser";

class Navbar extends Component {

    logout() {
        localStorage.clear();
        this.props.dispatch(unsetAuthUser());
        this.props.history.push('/');
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink
                                to='/'
                                exact
                                activeClassName='active'
                                className="nav-link">Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to='/add'
                                activeClassName='active'
                                className="nav-link">New Question
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to='/leaderboard'
                                activeClassName='active'
                                className="nav-link">Leader Board
                            </NavLink>
                        </li>
                    </ul>
                    {
                        this.props.authUser &&
                        <form className="form-inline my-2 my-lg-0">
                            <span
                                className="navbar-text">Hello, { this.props.userObj.name }
                            </span>
                            <img
                                className='rounded-circle'
                                style={{marginLeft: '5px', marginRight: '5px'}}
                                src={this.props.userObj.avatarURL}
                                width="45"
                                height="45"
                                alt=""
                                loading="lazy"/>
                            <a
                                style={{cursor: "pointer"}}
                                onClick={() => this.logout()}
                                className="nav-link text-secondary"
                            >Logout
                            </a>
                        </form>
                    }
                </div>
            </nav>
        )
    }
}

export default withRouter(connect((state) => ({
    authUser: state.authUser,
    userObj: state.users[state.authUser]
}))(Navbar));