import { fork, call, put, take } from 'redux-saga/effects';
import * as actions from 'store/modules/authentication';
import { api } from 'services';

function* loadRegister(username, password) {
  yield put(actions.registerRequest());
  const {response, error} = yield call(api.fetchReg, username, password);

  console.log('response: ', JSON.stringify(response.data));
  console.log('error: ', JSON.stringify(error));
  if(response)
    yield put(actions.registerSuccess(response));
  else
    yield put(actions.registerFailure(error));
}

export function* registerFlow() {
  while(true) {
    let request = yield take(actions.REGISTER_LOAD);
    const { username, password } = request.payload;
    console.log('params: ', JSON.stringify(request));
	  yield fork(loadRegister, username, password);
  }
}

export default function* root() {
	yield fork(registerFlow);
}