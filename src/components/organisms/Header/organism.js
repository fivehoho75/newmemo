import React, { Component } from 'react';
import { BrandLogo, SearchButton, LoginButton, LogoutButton } from 'components';

class organism extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper blue darken-1">
                        <BrandLogo/>
                        <SearchButton/>

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