import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class atom extends Component {
    render() {
        return (
            <li>
                <Link to="login">
                    <i className="material-icons">vpn_key</i>
                </Link>
            </li>
        );
    }
}

export default atom;