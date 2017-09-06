import { fork, call, put, take } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from 'store/modules/authentication';

function* loadRegister() {
  //yield call(fetchUser)
}

export function* watchRegister() {
  while(true) {
    yield take(actions.REGISTER_LOAD);
	yield put(actions.registerRequest());
	//yield fork(loadRegister);
  }
}

export default function* root() {
	yield fork(watchRegister);
}