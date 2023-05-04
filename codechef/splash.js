
import React from 'react';
import  { Component } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { stopClock } from 'react-native-reanimated';
// import HomeScreen from './HomeScreen';
import FirstScreen from './FirstScreen';
import Searchbar from './SearchSection';
// import { NavigationContainer } from '@react-navigation/native';

const splash = ({navigation}) => {

  useEffect(() => {
  
    setTimeout(()=>{
      navigation.navigate('FirstScreen')
    },3000)
  }, []);

  return (
    <TouchableOpacity onPress={() => { navigation.navigate('FirstScreen') }}>

      <Image style={{ width: 160, height: 50, marginLeft: 100, top: 300, }} source={require('/React-native projects/Ecommerce/codechef/logo.png')} />
      
    </TouchableOpacity>
    

  );
};

export default splash;

