import { createAction, handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';

export const REGISTER_LOAD = 'register/LOAD';
const REGISTER_REQUEST = 'register/REQUEST';
const REGISTER_SUCCESS = 'register/SUCCESS';
const REGISTER_FAILURE = 'register/FAILURE';

export const registerLoad = createAction(REGISTER_LOAD);
export const registerRequest = createAction(REGISTER_REQUEST, (username, password) => ({ username, password }));
export const registerSuccess = createAction(REGISTER_SUCCESS);
export const registerFailure = createAction(REGISTER_FAILURE);
//export const registerLoad2 = createAction(REGISTER_REQUEST, (username, password) => ({ username, password }));

const initialState = Map({
    username: '',
	password: '',
    status: 'WAITING',
    error: ''
});

export function getState(state) {
    console.log('get state: ', JSON.stringify(state));
    return state
}

export function getRegData(state) {
    const iState = fromJS(state);
    console.log('get2 state: ', JSON.stringify(state.authentication));
    const username = iState.getIn(['authentication', 'username']);
    const password = iState.getIn(['authentication', 'password'])
    console.log('get params: ', iState.getIn(['authentication', 'username']), ', ', password);
    return { username, password };
}

export default handleActions({
    [REGISTER_LOAD]: (state, action) => {
        const { username, password } = action.payload;
        console.log('load params: ', username, ', ', password);
        return state.set('username', username)
					.set('password', password)
					.set('status', 'LOAD');
    },
	[REGISTER_REQUEST]: (state, action) => {
        console.log('request action: ', JSON.stringify(action));
        const { username, password } = action.payload;
        console.log('request params: ', username, ', ', password);
        return state.set('status', 'REQUEST');
    },
    [REGISTER_SUCCESS]: (state, action) => {
        return state.set('status', 'SUCCESS');
    },
    [REGISTER_FAILURE]: (state, action) => {
        const { error } = action.payload;
        return state.set('status', 'FAILURE')
                    .set('error', error);
    }
}, initialState);