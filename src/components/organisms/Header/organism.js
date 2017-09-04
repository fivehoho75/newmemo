import React, { Component } from 'react';
import { BrandLogo, SearchButton, LoginButton, LogoutButton } from 'components';

class organism extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="ui blue inverted three item menu">
                        <SearchButton/>
                        <BrandLogo/>
                        <div className="right">
                            <ul>
                            { this.props.isLoggedIn ? <LogoutButton/> : <LoginButton/> }
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        );
    }
}

export default organism;