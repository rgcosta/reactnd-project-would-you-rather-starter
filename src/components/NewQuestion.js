import React, { Component } from "react";

class NewQuestion extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-header text-center">
                    <h4>Create New Question</h4>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Would You Rather ...</h5>
                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder='Enter Option One Text Here'
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
                                id="exampleInputPassword1"
                                placeholder='Enter Option Two Text Here'
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default NewQuestion;