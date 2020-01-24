import * as io from 'io-ts';

export const Subway = io.type({
  station_name: io.string,
  line_name: io.string,
  station_id: io.number,
  line_id: io.number,
  lat: io.number,
  lng: io.number,
});

export const Contact = io.type({
  name: io.string,
  email: io.string,
  phones: io.array(io.type({
    comment: io.union([io.null, io.string]),
    city: io.string,
    number: io.string,
    country: io.string,
  })),
});

export const Address = io.type({
  id: io.string,
  city: io.string,
  street: io.string,
  building: io.string,
  description: io.string,
  lat: io.number,
  lng: io.number,
  raw: io.unknown,
  metro: Subway,
  metro_stations: io.array(Subway),
});

export const Salary = io.type({ from: io.number, to: io.number, currency: io.string, gross: io.boolean });

export const LogoUrls = io.type({
  90: io.string,
  240: io.string,
  original: io.string,
});

export const Employer = io.type({
  id: io.string,
  name: io.string,
  url: io.string,
  alternate_url: io.string,
  logo_urls: LogoUrls,
  vacancies_url: io.string,
  trusted: io.boolean,
});

export const Snippet = io.type({
  requirement: io.string,
  responsibility: io.string,
});

export const Item = io.type({
  id: io.string,
  premium: io.boolean,
  name: io.string,
  department: io.union([io.null, io.string]),
  has_test: io.boolean,
  response_letter_required: io.boolean,
  area: io.type({ id: io.string, name: io.string, url: io.string }),
  salary: Salary,
  type: io.type({ id: io.string, name: io.string }),
  address: Address,
  response_url: io.union([io.null, io.string]),
  sort_point_distance: io.union([io.null, io.string]),
  employer: Employer,
  published_at: io.string,
  created_at: io.string,
  archived: io.boolean,
  apply_alternate_url: io.string,
  insider_interview: io.union([io.null, io.string]),
  url: io.string,
  alternate_url: io.string,
  relations: io.unknown,
  snippet: Snippet,
  contacts: Contact,
});

export type ILogoUrls = io.TypeOf<typeof LogoUrls>;

export type IItem = io.TypeOf<typeof Item>;

export interface IVacancies {
  items: IItem[];
  found: number;
  pages: number;
  per_page: number;
  page: number;
  clusters: any;
  arguments: any;
  alternate_url: string;
}


