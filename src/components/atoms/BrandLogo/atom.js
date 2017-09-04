import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class atom extends Component {
    render() {
        return (
            <div className="item">
                <Link to="/" className="brand-logo center">MEMOPAD</Link>
            </div>
        );
    }
}

export default atom;