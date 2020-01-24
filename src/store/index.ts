import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import vacanciesReducer from './Vacancies/reducers';
import rootSaga from './sagas';

const rootReducer = combineReducers({
  vacancies: vacanciesReducer,
});

export type IStore = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);

  return store;
}