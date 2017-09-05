import { fork, call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from 'store/modules/authentication';

export function* watchRegister() {
  yield call(delay, 1000);
  yield put(actions.register());
}

export default function* root() {
	yield fork(watchRegister);
}