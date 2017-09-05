import React, { Component } from 'react';
import { Input } from 'components';

class molecule extends Component {
    render() {
        const { onChange, onRegister } = this.props;
        
        return (
            <div className="ui segment">
                <div className="ui form">
                    <Input name="username" type="text" onChange={onChange}/>
                    <Input name="password" type="password" onChange={onChange}/>
                    <a className="ui teal fluid button" onClick={onRegister}>CREATE</a>
                </div>
            </div>
        );
    }
}

export default molecule;