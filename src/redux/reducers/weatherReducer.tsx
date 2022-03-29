import {Action, ActionType} from '../actions/actionTypes';

interface Main {
  temp: number;
}

interface ListItemType {
  dt: Number;
  main: Main;
  weather: Array<{icon: String; description: String}>;
}

export interface Forecast {
  id: string;
  clouds: number;
  humidity: number;
  pressure: number;
  iconCode: string;
  list: Array<ListItemType>;
}
export interface Weather {
  id: string;
  clouds: number;
  humidity: number;
  pressure: number;
  iconCode: string;
}

interface State {
  weather: Weather[];
  forecast: Forecast[]; //todo
  loading: boolean;
  errorMessage: string | null | undefined;
}

const defaultState = {
  weather: [],
  forecast: [],
  loading: false,
  errorMessage: undefined,
};

const weatherReducer = (state: State = defaultState, action: Action): State => {
  switch (action.type) {
    case ActionType.GET_WEATHER_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ActionType.GET_WEATHER__BY_DATA_RECEIVED:
      return {
        ...state,
        weather: action.payload,
        loading: false,
      };
    case ActionType.GET_WEATHER_FORECAST_RECEIVED:
      return {
        ...state,
        forecast: action.payload,
        loading: false,
      };
    case ActionType.GET_WEATHER_FAILED:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default weatherReducer;
