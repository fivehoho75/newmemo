import React, { Component } from 'react';
import { Header } from 'components';

class template extends Component {
    render() {
        return (
            <Header>
                {this.props.children}
            </Header>
        );
    }
}

export default template;