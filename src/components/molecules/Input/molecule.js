import React, { Component } from 'react';

class molecule extends Component {    
    render() {
        const { name, ...rest } = this.props;
        
        return (
            <div className="input-field col s12 {name}">
                <label>{name}</label>
                <input
                name={name}
                type="text"
                className="validate"
                {...rest}/>
            </div>
        );
    }
}

export default molecule;