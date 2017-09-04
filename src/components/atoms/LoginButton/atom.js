import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class atom extends Component {
    render() {
        return (
            <div className="item">
                <Link to="login">
                    <i className="material-icons">vpn_key</i>
                </Link>
            </div>
        );
    }
}

export default atom;