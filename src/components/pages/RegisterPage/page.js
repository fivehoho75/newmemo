import React, { Component } from 'react';
import { PageTemplate, AuthView } from 'components';

class page extends Component {
    render() {
        const {...rest} = this.props;

        return (
            <PageTemplate>
                <div className="search-screen white-text">
                    <AuthView mode={false} {...rest}/>
                </div>
            </PageTemplate>
        );
    }
}

export default page;