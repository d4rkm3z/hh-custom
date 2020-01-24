import { all } from 'redux-saga/effects';
import vacanciesSaga from './Vacancies/sagas';

export default function* rootSaga () {
  yield all([
    vacanciesSaga()
  ]);
}