import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class atom extends Component {
    render() {
        return (
            <Link to="/" className="brand-logo center">MEMOPAD</Link>
        );
    }
}

export default atom;