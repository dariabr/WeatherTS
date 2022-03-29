import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from './root_stack_param/root_stack_params';
import Weather from '../components/weather';
import WeatherForecast from '../components/weather_forecast';

const Tab = createBottomTabNavigator<RootStackParamList>();

const MainContainer = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Weather" component={Weather} />
        <Tab.Screen name="WeatherForecast" component={WeatherForecast} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
