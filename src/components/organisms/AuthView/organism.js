import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { LoginView, RegisterView } from 'components';
class organism extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    };

    handleChangeInput = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleRegister = () => {
        let id = this.state.username;
        let pw = this.state.password;

        console.log('handleRegister: ', id, ', ', pw);
    }
    render() {
        return (
            <div className="auth">
                <Link className="logo" to="/">MEMOPAD AUTH</Link>
                <div className="ui grid">
                    <div className="row">
                        <div className="four wide column"/>
                        <div className="eight wide column">
                            <div className="ui segments">
                            <div className="ui inverted orange segment">
                                <div className="ui inverted header">
                                    {this.props.mode ? "LOGIN" : "REGISTER"}
                                </div>
                            </div>
                            {this.props.mode ? <LoginView/> : <RegisterView onChangeInput={this.handleChangeInput} onRegisterAuth={this.handleRegister}/> }
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