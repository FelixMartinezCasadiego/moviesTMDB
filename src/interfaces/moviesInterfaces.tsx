export interface MovieDBMoviesResponse {
  dates?: Dates;
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Dates {
  maximum: string;
  minimum: string;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguage;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export enum OriginalLanguage {
  En = 'en',
  Ja = 'ja',
  Uk = 'uk',
}

export interface MovieFull {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Credits {
  cast: any[];
  data: Data;
  status: number;
  headers: {[key: string]: string};
  config: Config;
  request: Request;
}

export interface Config {
  transitional: Transitional;
  adapter: string[];
  transformRequest: null[];
  transformResponse: null[];
  timeout: number;
  xsrfCookieName: string;
  xsrfHeaderName: string;
  maxContentLength: number;
  maxBodyLength: number;
  env: Env;
  headers: Headers;
  baseURL: string;
  method: string;
  url: string;
}

export interface Env {}

export interface Headers {
  Accept: string;
  Authorization: string;
}

export interface Transitional {
  silentJSONParsing: boolean;
  forcedJSONParsing: boolean;
  clarifyTimeoutError: boolean;
}

export interface Data {
  id: number;
  cast: Cast[];
  crew: Cast[];
}

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: Department;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  cast_id?: number;
  character?: string;
  credit_id: string;
  order?: number;
  department?: Department;
  job?: string;
}

export enum Department {
  Acting = 'Acting',
  Art = 'Art',
  Crew = 'Crew',
  Directing = 'Directing',
  Editing = 'Editing',
  Production = 'Production',
  Sound = 'Sound',
  VisualEffects = 'Visual Effects',
  Writing = 'Writing',
}

export interface Request {
  UNSENT: number;
  OPENED: number;
  HEADERS_RECEIVED: number;
  LOADING: number;
  DONE: number;
  readyState: number;
  status: number;
  timeout: number;
  withCredentials: boolean;
  upload: Env;
  _aborted: boolean;
  _hasError: boolean;
  _method: string;
  _perfKey: string;
  _response: string;
  _url: string;
  _timedOut: boolean;
  _trackingName: string;
  _incrementalEvents: boolean;
  _performanceLogger: PerformanceLogger;
  responseHeaders: {[key: string]: string};
  _requestId: null;
  _headers: HeadersClass;
  _responseType: string;
  _sent: boolean;
  _lowerCaseResponseHeaders: {[key: string]: string};
  _subscriptions: any[];
  responseURL: string;
}

export interface HeadersClass {
  accept: string;
  authorization: string;
}

export interface PerformanceLogger {
  _timespans: {[key: string]: Timespan};
  _extras: Env;
  _points: Points;
  _pointExtras: Env;
  _closed: boolean;
}

export interface Points {
  initializeCore_start: number;
  initializeCore_end: number;
}

export interface Timespan {
  startTime: number;
  endTime: number;
  totalTime: number;
}
