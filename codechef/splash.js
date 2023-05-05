import React, { useEffect } from 'react';
import { Component } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { stopClock } from 'react-native-reanimated';
// import HomeScreen from './HomeScreen';
import FirstScreen from './FirstScreen';
import Searchbar from './SearchSection';
// import { NavigationContainer } from '@react-navigation/native';

const splash = ({ navigation }) => {

  useEffect(() => {

    setTimeout(() => {
      navigation.navigate('FirstScreen')
    }, 3000)

  }, []);

  return (
    <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center',height:400}}>
      <Image style={{ width: 160, height: 50 }} source={require('../codechef/logo.png')} />
    </View>


  );
};

export default splash;

