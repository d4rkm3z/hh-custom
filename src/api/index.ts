import { getData } from './fetch';

export async function vacancies(): Promise<any[]> {
  let data = await getData('/vacancies?area=2');
  return data.items;
}

export function areas() {
  return getData('/areas');
}

