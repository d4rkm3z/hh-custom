import { Action } from 'redux';
import { IVacancies } from 'types';
import { VACANCIES_FETCH_SUCCEEDED } from './types';

const initialStore: IVacancies = {
  items: [],
  found: 0,
  pages: 0,
  per_page: 0,
  page: 0,
  clusters: null,
  arguments: null,
  alternate_url: '',
};

interface IAction extends Action {
  data: IVacancies
}

export default function vacanciesReducer(
  store: IVacancies = initialStore,
  action: IAction,
) {
  switch (action.type) {
    case VACANCIES_FETCH_SUCCEEDED:
      return { ...store, ...action.data };
    default:
      return store;
  }
}