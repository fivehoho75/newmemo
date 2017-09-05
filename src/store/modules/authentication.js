import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

function createRequestTypes(base) {
    return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
          acc[type] = `${base}_${type}`
          return acc
      }, {});
};

export const LOGIN = createRequestTypes('LOGIN');
export const REGISTER = createRequestTypes('REGISTER');

export const LOAD_REGISTER = 'LOAD_REGISTER';

function action(type, payload = {}) {
    return {type, ...payload}
}

export const register = {
    request: fullName => action(REGISTER[REQUEST], {fullName}),
    success: (fullName, response) => action(REGISTER[SUCCESS], {fullName, response}),
    failure: (fullName, error) => action(REGISTER[FAILURE], {fullName, error}),
  }
  
  export const loadRegister = (login, requiredFields = []) => action(LOAD_REGISTER, {login, requiredFields})
