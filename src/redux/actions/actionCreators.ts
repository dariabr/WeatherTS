import {Dispatch} from 'redux';

import {Weather} from '../reducers/weatherReducer';

import {ActionType, Action, Const} from './actionTypes';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
    'X-RapidAPI-Key': 'f9d621a0d5msh6759a5d63e462c6p11f874jsn803e80ace16d',
  },
};

export const getWeatherForecast = () => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.GET_WEATHER_PENDING,
  });
  fetch(Const.BASE_URL_FORECAST, options)
    .then(response => response.json())
    .then(data => {
      console.log('DATA####', data);
      dispatch({
        type: ActionType.GET_WEATHER_FORECAST_RECEIVED,
        payload: data,
      });
    })
    .catch(error => {
      console.log('ERROR', error.message);
      dispatch({
        type: ActionType.GET_WEATHER_FAILED,
        payload: error.message,
      });
    });
};

//HISTORICAL WEATHER DATA
export const getWeatherByData =
  (dt: number) => (dispatch: Dispatch<Action>) => {
    const url = Const.BASE_URL_BY_DATE + dt;
    //console.log('CHEEEEEEEEEE', Const.BASE_URL_BY_DATE + dt);
    dispatch({
      type: ActionType.GET_WEATHER_BY_DATA_PENDING,
    });
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        console.log('DATA####', data);
        dispatch({
          type: ActionType.GET_WEATHER__BY_DATA_RECEIVED,
          payload: data,
        });
      })
      .catch(error => {
        console.log('ERROR', error.message);
        dispatch({
          type: ActionType.GET_WEATHER_BY_DATA_FAILED,
          payload: error.message,
        });
      });
  };
