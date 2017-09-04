import React, { Component } from 'react';
import { InputBoxes } from 'components';
import { Link } from 'react-router-dom'

class molecule extends Component {
    render() {
        return (
            <div>
                <div className="card-content">
                    <div className="row">
                        <InputBoxes/>
                        <a className="waves-effect waves-light btn" onClick={this.handleLogin}>SUBMIT</a>
                    </div>
                </div>


                <div className="footer">
                    <div className="card-content">
                        <div className="right" >
                        New Here? <Link to="/register">Create an account</Link>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default molecule;