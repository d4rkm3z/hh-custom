import { getData } from './fetch';

async function vacancies(): Promise<any[]> {
  return await getData('/vacancies?area=2').then(data => data);
}

async function areas() {
  return getData('/areas');
}

export {
  vacancies,
  areas
}