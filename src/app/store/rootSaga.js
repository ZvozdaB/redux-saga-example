import { TodoSaga } from './todo/saga';
import { fork, all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([fork(TodoSaga)]);
}
