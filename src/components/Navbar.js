import React, { Component } from "react";
import { connect } from 'react-redux';

class Navbar extends Component {

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
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">New Question</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Leader Board</a>
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
                                src="https://tylermcginnis.com/would-you-rather/sarah.jpg"
                                width="45"
                                height="45"
                                alt=""
                                loading="lazy"/>
                            <a className="nav-link text-secondary" href="#">Logout</a>
                        </form>
                    }
                </div>
            </nav>
        )
    }
}

export default connect((state) => ({
    authUser: state.authUser,
    userObj: state.users[state.authUser]
}))(Navbar);