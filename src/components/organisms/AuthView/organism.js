import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { LoginView, RegisterView } from 'components';
class organism extends Component {
    render() {
		const { onChange, onRegister } = this.props;
		
        return (
            <div className="auth">
                <div className="ui grid">
                    <div className="row">
                        <div className="four wide column"/>
                        <div className="eight wide column">
                            <div className="ui segments">
                            <div className="ui inverted orange segment">
                                <div className="ui inverted header">
                                    <Link className="title" to="/">
                                        {this.props.mode ? "LOGIN" : "REGISTER"}
                                    </Link>
                                </div>
                            </div>
                            {this.props.mode ? <LoginView/> : <RegisterView onChange={onChange} onRegister={onRegister}/> }
                            </div>
                        </div>
                        <div className="four wide column"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default organism;