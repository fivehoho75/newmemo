import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class atom extends Component {
    render() {
        return (
            <div className="item">
                <Link to="login">
                    <i aria-hidden="true" className="unlock large icon"/>
                </Link>
            </div>
        );
    }
}

export default atom;