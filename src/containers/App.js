import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { HomePage, LoginPage, RegisterPage } from '../components';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={ HomePage } />
                <Route path="/login" component={ LoginPage } />
                <Route path="/register" component={ RegisterPage } />
            </div>
        );
    }
}

export default App;