import React, { Component } from 'react';
import { InputBoxes } from 'components';
import { Link } from 'react-router-dom'
import styles from './molecule.scss';
import classNames from 'classnames/bind';
import { LoginView, RegisterView } from 'components';
const cx = classNames.bind(styles);

class Memo extends Component {
    render() {
        return (
            <div>
                <div className={cx('card-content')}>
                    <div className={cx('row')}>
                        <InputBoxes/>
                        <a className="waves-effect waves-light btn" onClick={this.handleLogin}>SUBMIT</a>
                    </div>
                </div>


                <div className={cx('footer')}>
                    <div className={cx('card-content')}>
                        <div className="right" >
                        New Here? <Link to="/register">Create an account</Link>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Memo;