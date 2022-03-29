import {Weather, Forecast} from '../reducers/weatherReducer';

/*export const GET_WEATHER = 'GET_WEATHER';
export const GET_WEATHER_RECEIVED = 'GET_WEATHER_RECEIVED';
export const GET_WEATHER_FAILED = 'GET_WEATHER_FAILED';
export const GET_WEATHER_FORECAST_RECEIVED = 'GET_WEATHER_FORECAST_RECEIVED';
export const GET_WEATHER_FOR_CITY_RECEIVED = 'GET_WEATHER_FOR_CITY_RECEIVED';
export const BASE_URL_CURRENT =
  'https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml';

export const BASE_URL_FORECAST =
  'https://community-open-weather-map.p.rapidapi.com/forecast?q=san%20francisco%2Cus';*/

export enum ActionType {
  GET_WEATHER_PENDING = 'GET_WEATHER_PENDING',
  GET_WEATHER_BY_DATA_PENDING = 'GET_WEATHER_BY_DATA_PENDING',
  GET_WEATHER__BY_DATA_RECEIVED = 'GET_WEATHER__BY_DATA_RECEIVED',
  GET_WEATHER_FAILED = 'GET_WEATHER_FAILED',
  GET_WEATHER_BY_DATA_FAILED = 'GET_WEATHER_BY_DATA_FAILED',
  GET_WEATHER_FORECAST_RECEIVED = 'GET_WEATHER_FORECAST_RECEIVED',
}

export enum Const {
  BASE_URL_FORECAST = 'https://community-open-weather-map.p.rapidapi.com/forecast?q=san%20francisco%2Cus&units=metric',
  BASE_URL_BY_DATE = 'https://community-open-weather-map.p.rapidapi.com/onecall/timemachine?lat=37.774929&lon=-122.419418&dt=',
}

export interface getWeatherPending {
  type: ActionType.GET_WEATHER_PENDING;
}

export interface getWeatherByDataPending {
  type: ActionType.GET_WEATHER_BY_DATA_PENDING;
}

export interface getWeatherSuccess {
  type: ActionType.GET_WEATHER__BY_DATA_RECEIVED;
  payload: Forecast[];
}

export interface getWeatherForecastSuccess {
  type: ActionType.GET_WEATHER_FORECAST_RECEIVED;
  payload: Forecast[];
}

export interface getWeatherFailure {
  type: ActionType.GET_WEATHER_FAILED;
  payload: string;
}
export interface getWeatherByDataFailure {
  type: ActionType.GET_WEATHER_BY_DATA_FAILED;
  payload: string;
}

export type Action =
  | getWeatherPending
  | getWeatherByDataPending
  | getWeatherSuccess
  | getWeatherForecastSuccess
  | getWeatherFailure
  | getWeatherByDataFailure;
