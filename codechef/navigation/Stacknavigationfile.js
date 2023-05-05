import React from 'react';
import { View, StyleSheet } from 'react-native';
import FirstScreen from '../FirstScreen';
import SearchSection from '../SearchSection';
import Allcategory from '../Allcategory';
// import splash from '../splash';
import Detailspage from '../Detailspage';
import Categories from '../Categories';
import Bannerapi from '../Bannerapi';
import Wishlist from '../Wishlist';
import Orders from '../Orders';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Stacknavigationfile = () => {


    const bottomnavigation = () => {

        return (
            <Tab.Navigator>
                <Tab.Screen name='FirstScreen' component={FirstScreen} options={{
                    headerShown: false,
                    title: 'Firstpage ',
                    headerStyle: {
                        backgroundColor: 'green'
                    }
                }} />
                <Tab.Screen name='SearchSection' component={SearchSection} options={{
                    headerShown: false,
                    title: 'SearchSection ',
                    headerStyle: {
                        backgroundColor: 'green'
                    }
                }} />


            </Tab.Navigator>
        )
    }
    return (

        <NavigationContainer>

            <Stack.Navigator initialRouteName='FirstScreen'>
                {/* <Stack.Screen name=" splash" component={splash} options={{headerShown: false}} /> */}
                <Stack.Screen name="FirstScreen" component={FirstScreen} options={{
                    headerShown: false, headerStyle: { backgroundColor: 'pink' }
                }} />

                <Stack.Screen name="SearchSection" component={SearchSection} options={{
                    headerShown: false,

                    headerStyle: {
                        backgroundColor: 'pink'
                    }
                }} />
                <Stack.Screen name="bottomnavigation" component={bottomnavigation} options={{
                    headerShown: false,

                    headerStyle: {
                        backgroundColor: 'pink'
                    }
                }} />

                <Stack.Screen name="Categories" component={Categories} options={{
                    title: 'Categories',
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: 'pink'
                    }
                }} />

                <Stack.Screen name="Wishlist" component={Wishlist} options={{
                    headerShown: false,
                    title: 'Wishlist',
                    headerStyle: {
                        backgroundColor: 'pink',



                    }
                }} />

                <Stack.Screen name="Orders" component={Orders} options={{
                    headerTintColor: 'white',
                    title: 'Orders',

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
                    // headerShown: false,
                    title: 'DetailScreen',
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: 'pink',

                    }
                }} />

                <Stack.Screen name="Bannerapi" component={Bannerapi} options={{
                    // headerShown: false,
                    title: 'Bannerapi',
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: 'pink',

                    }
                }} />
                {/* <Stack.Screen name="Signup" component={Signup} options={{
       // headerShown: false,
       title: 'Signup',
       headerTintColor: 'white',
       headerStyle: {
         backgroundColor: 'pink',
         
       }
     }} />

     <Stack.Screen name="Login" component={Login} options={{
       // headerShown: false,
       title: 'Login',
       headerTintColor: 'white',
       headerStyle: {
         backgroundColor: 'pink',
         
       }
     }} /> */}



            </Stack.Navigator>


        </NavigationContainer>


    );
}

const styles = StyleSheet.create({})

export default Stacknavigationfile;
