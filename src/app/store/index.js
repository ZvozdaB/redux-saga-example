import { createStore, combineReducers, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import { todoReducer } from './todo/reducer';
import { authReducer } from './auth/reducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  todo: todoReducer,
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
export default store;
