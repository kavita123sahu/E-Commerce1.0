import React, { Component } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import splash from './codechef/splash';
import Detailspage from './codechef/Detailspage';
import FirstScreen from './codechef/FirstScreen';
import SearchSection from './codechef/SearchSection';
import Categories from './codechef/Categories';
import Wishlist from './codechef/Wishlist';
import Orders from './codechef/Orders';
import Allcategory from './codechef/Allcategory';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Buttonnavigation from './codechef/Buttonnavigation';
// import DetailScreen from './codechef/detailScreen';
// import Topnavigation from './codechef/Topnavigation';


const Stack = createNativeStackNavigator();

const App = () => {

  return (

    <NavigationContainer>
      
{/* <Stack.Screen name=" splash" component={splash} options={{
          headerShown: false,

          headerStyle: {
            backgroundColor: 'pink'
          }
        }} /> */}

      <Stack.Navigator initialRouteName="FirstScreen">
     
        <Stack.Screen name="FirstScreen" component={FirstScreen} options={{
          headerShown: false,

          headerStyle: {
            backgroundColor: 'pink'
          }
        }} />

        

        
        <Stack.Screen name="SearchSection" component={SearchSection} options={{
       headerShown: false,

          headerStyle: {
            backgroundColor: 'pink'
          }
        }} />

        {/* <Stack.Screen name="DetailScreen" component={DetailScreen} options={{
          headerShown: false,

          headerStyle: {
            backgroundColor: 'pink'
          }
        }} /> */}

<Stack.Screen name="Categories" component={Categories} options={{
          title:'Categories',
           headerTintColor:'white',
          headerStyle: {
            backgroundColor: 'pink'
          }
        }} />

<Stack.Screen name="Wishlist" component={Wishlist} options={{
          headerShown: false,
          title:'Wishlist',
          headerStyle: {
            backgroundColor: 'pink',
          


          }
        }} />

<Stack.Screen name="Orders" component={Orders} options={{
        headerTintColor:'white',
          title:'Orders',
          
          headerStyle: {
            backgroundColor: 'pink',
            
          }


        }}
         />
         
<Stack.Screen name="Allcategory" component={Allcategory} options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: 'pink'
          }
        }} />

              
<Stack.Screen name="Detailspage" component={Detailspage} options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: 'pink'
          }
        }} />


      </Stack.Navigator>
    </NavigationContainer>




  );
};



export default App;



