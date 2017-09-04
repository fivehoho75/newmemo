import React, { Component } from 'react';
import { BrandLogo, SearchButton, LoginButton, LogoutButton } from 'components';

class organism extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="ui secondary blue inverted three menu">
                        <div className="left menu">
                            <SearchButton/>
                        </div>
                        <BrandLogo/>
                        <div className="right menu">
                            { this.props.isLoggedIn ? <LogoutButton/> : <LoginButton/> }
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        );
    }
}

export default organism;