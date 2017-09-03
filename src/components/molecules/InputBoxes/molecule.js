import React, { Component } from 'react';

class Memo extends Component {
    render() {
        return (
            <div>
                <div className="input-field col s12 username">
                    <label>Username</label>
                    <input
                    name="username"
                    type="text"
                    className="validate"
                    onChange={this.handleChange}/>
                </div>
                <div className="input-field col s12">
                    <label>Password</label>
                    <input
                    name="password"
                    type="password"
                    className="validate"
                    onChange={this.handleChange} 
                    onKeyPress={this.handleKeyPress} />
                </div>
            </div>
        );
    }
}

export default Memo;