import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'components';

class molecule extends Component {
    constructor (props) {
        super(props)
        
        this.handleRegister = this.handleRegister.bind(this);
    }
    
    handleRegister() {
        console.log('handleRegister');
    };

    render() {
        const { onChangeInput } = this.props;
        
        return (
            <div className="card-content">
                <div className="row">
                    <div>
                        <Input name="username" type="text" onChange={onChangeInput}/>
                        <Input name="password" type="password" onChange={onChangeInput}/>
                    </div>
                    <a onClick={this.handleRegister} className="waves-effect waves-light btn">CREATE</a>
                </div>
            </div>
        );
    }
}

molecule.propTypes = {
    onRegister: PropTypes.func
};

molecule.defaultProps = {
    onRegister: (id, pw) => { console.log('Register function not defined'); }
}

export default molecule;