import { takeEvery, all, call, put } from 'redux-saga/effects';
import { todoServices } from '../../services/todo.service';
import { todoActions, todoConsts } from './actions';

function* handleGetTodoList(action) {
  const response = yield call(todoServices.getList, action);
  yield put(todoActions.getListResponse(response));
}
function* handleGetCommentList(action) {
  const response = yield call(todoServices.getComments, action);
  yield put(todoActions.getCommentResponse(response));
}

export function* TodoSaga() {
  yield all([takeEvery(todoConsts.TODO_GET_LIST, handleGetTodoList)]);
  yield all([takeEvery(todoConsts.TODO_GET_COMMENT, handleGetCommentList)]);
}
