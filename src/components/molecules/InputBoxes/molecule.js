import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputBoxes extends Component {    
    render() {
        const {...rest} = this.props;
        
        return (
            <div>
                <div className="input-field col s12 username">
                    <label>Username</label>
                    <input
                    name="username"
                    type="text"
                    className="validate"
                    {...rest}/>
                </div>
                <div className="input-field col s12">
                    <label>Password</label>
                    <input
                    name="password"
                    type="password"
                    className="validate"
                    {...rest} />
                </div>
            </div>
        );
    }
}

InputBoxes.propTypes = {
    onChange: PropTypes.func
};

export default InputBoxes;