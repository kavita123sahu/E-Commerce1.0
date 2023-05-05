import React, { Component } from 'react';
import {} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Stacknavigationfile from './codechef/navigation/Stacknavigationfile';
// import { color } from 'react-native-reanimated';


const Stack = createNativeStackNavigator();

const App = () => {

  return (

    <Stacknavigationfile />

  );
};



export default App;



