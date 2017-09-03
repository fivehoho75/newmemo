import React, { Component } from 'react';
import { PageTemplate, AuthView } from 'components';

class page extends Component {
    render() {
        return (
            <PageTemplate>
                <div className="search-screen white-text">
                    <AuthView mode={false}/>
                </div>
            </PageTemplate>
        );
    }
}

export default page;