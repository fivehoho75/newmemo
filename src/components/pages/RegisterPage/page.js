import React, { Component } from 'react';
import { PageTemplate, AuthView } from 'components';
import { connect } from 'react-redux';
import * as actions from 'store/modules/authentication';
import { bindActionCreators } from 'redux';

class page extends Component {
	constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    };
	
    handleChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleRegister = () => {
		const { RegisterActions } = this.props;
        RegisterActions.registerLoad(this.state);
    }
	
    render() {
        return (
        <PageTemplate>
            <div className="search-screen white-text">
                <AuthView mode={false} onChange={this.handleChange} onRegister={this.handleRegister}/>
            </div>
        </PageTemplate>
        );
    }
}
const mapStateToProps = (state) => ({
    user: state
});

const mapToDispatch = (dispatch) => ({
    RegisterActions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapToDispatch)(page);