import {StyleSheet, Text, View,  SafeAreaView as SafeAreaIOS} from 'react-native';
import React from 'react';
import Navigation from './src/Navigation/Navigation';
import {SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  const SafeArea = Platform.OS === 'ios' ? SafeAreaIOS : SafeAreaView;

  return (
    <SafeArea style={{flex: 1}}>
      <Navigation />
    </SafeArea>
  ) ;
};

export default App;

const styles = StyleSheet.create({});