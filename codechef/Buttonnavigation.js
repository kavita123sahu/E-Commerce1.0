import React from 'react';
import { StyleSheet} from 'react-native'; 
import FirstScreen from '../FirstScreen';
import detailScreen from '../detailScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FirstScreen from '../FirstScreen';

const Tab = createBottomTabNavigator();

const Buttonnavigation  = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name='FirstScreen' component={FirstScreen} options={{headerShown:false,
          title: 'Firstpage ',
          
          headerStyle: {
            backgroundColor: 'green'
          }
        }} />

        <Tab.Screen name='detailScreen ' component={detailScreen} options={{ 
          headerShown:false,
          title: 'Explore ', 
          headerStyle: {
            backgroundColor: 'green',
          }
        
        }} />

<Tab.Screen name='Categories ' component={detailScreen} options={{ 
          headerShown:false,
          title: 'Explore ', 
          headerStyle: {
            backgroundColor: 'green',
          }
        
        }} />
       
      </Tab.Navigator>
    );
}
const styles = StyleSheet.create({})

export default Buttonnavigation;
