import React, { Component } from 'react';
import { InputBoxes } from 'components';

class Memo extends Component {
    render() {
        const {...rest} = this.props;
        
        return (
            <div className="card-content">
                <div className="row">
                <InputBoxes {...rest}/>
                    <a onClick={this.handleRegister} className="waves-effect waves-light btn">CREATE</a>
                </div>
            </div>
        );
    }
}

export default Memo;