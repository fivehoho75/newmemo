import React, { Component } from 'react';
import { PageTemplate, AuthView } from 'components';

class page extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleRegister(id, pw) {
        console.log('Register.js - handleRegister: ', id, ', ', pw);
    }

    render() {
        return (
            <PageTemplate>
                <div className="search-screen white-text">
                    <AuthView mode={false} onRegister={this.handleRegister}/>
                </div>
            </PageTemplate>
        );
    }
}

export default page;