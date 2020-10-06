import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {

    render() {
        return (
            <div>
                Hellow Dashboard!
            </div>
        )
    }
}

export default connect()(Dashboard);