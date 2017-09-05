import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const LOGIN = "auth/LOGIN";
const REGISTER = "auth/REGISTER";

export const login = createAction(LOGIN);
export const register = createAction(REGISTER);

const initialState = Map({
    login: Map({
        status: 'INIT'
    }),
    register: Map({
        status: 'INIT',
        error: -1
    }),
    status: Map({
        isLoggedIn: false,
        currentUser: ''
    })
});

export default handleActions({
    [LOGIN]: (state, action) => {
        return state.setIn(['login', 'status'], 'WAITING');
    },
	[REGISTER]: (state, action) => {
		return state.set('register', Map({
							status: 'WAITING',
							error: -1 }));
    }
}, initialState);