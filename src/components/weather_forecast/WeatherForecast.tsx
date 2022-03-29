import * as React from 'react';
import {useEffect} from 'react';
import {getWeatherByData} from '../../redux/actions/actionCreators';
import {View, Text, Button} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {useDispatch} from 'react-redux';
import {useTypedSelector} from '../../hooks/useTypeSelector';
import {timeConverter} from '../../config/Utils';

function WeatherForecast() {
  let selectedDayTimeStamp: number;
  const dispatch = useDispatch();
  const data = useTypedSelector(state => state.weather);

  const {forecast} = data;
  console.log('DATA BY DATA', data);

  //const {}
  return (
    <View style={{flex: 1}}>
      <Calendar
        onDayPress={day => {
          selectedDayTimeStamp = day.timestamp;
          dispatch(getWeatherByData(selectedDayTimeStamp));
        }}
      />
      <View>
        <Text>kjbskbvksbdv</Text>
      </View>
    </View>
  );
}

export default WeatherForecast;
