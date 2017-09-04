import React, { Component } from 'react';

class atom extends Component {
    render() {
        return (
            <div className="item">
                <a onClick={this.props.onLogout}>
                    <i className="material-icons">lock_open</i>
                </a>
            </div>
        );
    }
}

export default atom;