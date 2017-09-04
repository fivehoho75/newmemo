import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { LoginView, RegisterView } from 'components';
class organism extends Component {

    handleChangeInput = (e) => {
        const { name, value } = e.target;

        console.log('change: ', name, ', ', value);
      }

    render() {
        return (
            <div className="container auth">
                <Link className="logo" to="/">MEMOPAD AUTH</Link>
                <div className="card">
                    <div className="header blue white-text center">
                        <div className="card-content">
                            {this.props.mode ? "LOGIN" : "REGISTER"}
                        </div>
                    </div>
                    {this.props.mode ? <LoginView/> : <RegisterView onChangeInput={this.handleChangeInput}/> }
                </div>
            </div>
        );
    }
}

export default organism;