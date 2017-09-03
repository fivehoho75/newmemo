import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const LOGIN = "auth/LOGIN";

export const login = createAction(LOGIN);

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
        return state.setIn(['login', 'status'], 'WAITING')
    }
}, initialState);