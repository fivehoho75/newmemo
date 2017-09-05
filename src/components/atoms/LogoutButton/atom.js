import React, { Component } from 'react';

class atom extends Component {
    render() {
        return (
            <div className="item">
                <a onClick={this.props.onLogout}>
                <i aria-hidden="true" className="lock large icon"/>
                </a>
            </div>
        );
    }
}

export default atom;