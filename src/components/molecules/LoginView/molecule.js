import React, { Component } from 'react';
import { Input } from 'components';
import { Link } from 'react-router-dom'

class molecule extends Component {
    render() {
        const { onChangeInput } = this.props;

        return (
            <div className="ui segment">
                <div className="ui form">
                    <Input name="username" type="text" onChange={onChangeInput}/>
                    <Input name="password" type="password" onChange={onChangeInput}/>
                    <a className="ui teal fluid button" onClick={this.handleLogin}>SUBMIT</a>
                </div>

                <div className="ui divider"></div>
                <div className="ui right aligned container">
                    New Here? <Link to="/register">Create an account</Link>
                </div>
            </div>
        );
    }
}

export default molecule;