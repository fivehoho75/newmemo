import React, { Component } from 'react';

class atom extends Component {
    render() {
        return (
            <li>
                <a onClick={this.props.onLogout}>
                    <i className="material-icons">lock_open</i>
                </a>
            </li>
        );
    }
}

export default atom;