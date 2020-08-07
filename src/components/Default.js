import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                        <div className="col-10 mx-auto text-center text-title pt-5">
                           <h1>404</h1>
                           <h1>Error</h1>
                           <h2>Pang Not Found</h2>
                           <h3>Beh Requested URL <span className="text-danger">
                                {this.props.location.pathname}
                                </span> {" "} Was not found </h3>
                                <hr/>
                        </div>
                </div>
            </div>
        )
    }
}
