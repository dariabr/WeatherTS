/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import type {ReactNode} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Provider} from 'react-redux';
import MainContainer from './src/main/MainContainer';

const App: () => JSX.Element = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MainContainer />
    </SafeAreaView>
  );
};

export default App;
