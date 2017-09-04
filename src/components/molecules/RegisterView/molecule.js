import React, { Component } from 'react';
import { Input } from 'components';

class molecule extends Component {
    render() {
        const { onChangeInput, onRegisterAuth } = this.props;
        
        return (
            <div className="ui segment">
                <div className="ui form">
                    <Input name="username" type="text" onChange={onChangeInput}/>
                    <Input name="password" type="password" onChange={onChangeInput}/>
                    <a className="ui teal fluid button" onClick={onRegisterAuth}>CREATE</a>
                </div>
            </div>
        );
    }
}

export default molecule;