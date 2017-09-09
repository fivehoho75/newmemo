import { fork, call, put, take, select } from 'redux-saga/effects';
import * as actions from 'store/modules/authentication';
import { api } from 'services';

function* loadRegister(username, password) {
  yield put(actions.registerRequest());
  const {response, error} = yield call(api.fetchReg, username, password);

  console.log('response: ', response);
  if(response)
    yield put(actions.registerSuccess());
  else
    yield put(actions.registerFailure(error));
}

export function* watchRegister() {
  while(true) {
    yield take(actions.REGISTER_LOAD);
    const { username, password } = yield select(actions.getRegData);
    console.log('params: ', username);
	  yield fork(loadRegister, username, password);
  }
}

export default function* root() {
	yield fork(watchRegister);
}