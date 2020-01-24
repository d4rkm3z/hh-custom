import { call, put, takeEvery } from 'redux-saga/effects';
import {
  VACANCIES_FETCH_FAILED,
  VACANCIES_FETCH_REQUESTED,
  VACANCIES_FETCH_SUCCEEDED
} from './types';
import { vacancies } from 'api';

function* fetchVacancies() {
  try {
    const data = yield call(vacancies);
    yield put({ type: VACANCIES_FETCH_SUCCEEDED, data });
  } catch (e) {
    yield put({ type: VACANCIES_FETCH_FAILED, message: e.message });
  }
}

export default function* vacanciesSaga() {
  yield takeEvery(VACANCIES_FETCH_REQUESTED, fetchVacancies);
}