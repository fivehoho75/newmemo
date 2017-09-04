import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { LoginView, RegisterView } from 'components';
class organism extends Component {
    render() {
        const {...rest} = this.props;
        
        return (
            <div className="container auth">
                <Link className="logo" to="/">MEMOPAD AUTH</Link>
                <div className="card">
                    <div className="header blue white-text center">
                        <div className="card-content">
                            {this.props.mode ? "LOGIN" : "REGISTER"}
                        </div>
                    </div>
                    {this.props.mode ? <LoginView/> : <RegisterView {...rest}/> }
                </div>
            </div>
        );
    }
}

export default organism;