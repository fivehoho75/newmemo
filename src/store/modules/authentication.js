import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

export const REGISTER_LOAD = 'register/LOAD';
const REGISTER_REQUEST = 'register/REQUEST';
const REGISTER_SUCCESS = 'register/SUCCESS';
const REGISTER_FAILURE = 'register/FAILURE';

export const registerLoad = createAction(REGISTER_LOAD);
export const registerRequest = createAction(REGISTER_REQUEST);
//export const registerLoad2 = createAction(REGISTER_REQUEST, (username, password) => ({ username, password }));

const initialState = Map({
    username: '',
	password: '',
	status: 'WAITING'
});

export default handleActions({
    [REGISTER_LOAD]: (state, action) => {
		const { username, password } = action.payload;
        return state.set('username', username)
					.set('password', password)
					.set('status', 'LOAD');
    },
	[REGISTER_REQUEST]: (state, action) => {
        return state.set('status', 'REQUEST');
    }
}, initialState);