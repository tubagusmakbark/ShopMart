import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Splash from './screen/SplashScreen';
import Welcome from './screen/WelcomeScreen';
import Login from './screen/LoginScreen';
import Register from './screen/RegisterScreen';
import Home from './screen/HomeScreen';
import Explore from './screen/ExploreScreen';
import Setting from './screen/SettingScreen';
import Account from './screen/AccountScreen';
import About from './screen/AboutScreen';
import Material from './screen/MaterialScreen';
import Design from './screen/DesignScreen';

// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHqMm_sfxa-MzyWcr6PM-n7wPehnju8uw",
  authDomain: "shopmart-d274a.firebaseapp.com",
  databaseURL: "https://shopmart-d274a-default-rtdb.firebaseio.com/",
  projectId: "shopmart-d274a",
  storageBucket: "shopmart-d274a.appspot.com",
  messagingSenderId: "938429364783",
  appId: "1:938429364783:android:dbe6d81513455bc8b4a4da"
};

// Initialize Firebase
if (!getApps().lenght) {
  initializeApp(firebaseConfig);
}
console.log(getApps())

const TabsStack = createBottomTabNavigator();
const DrawerStack = createDrawerNavigator();
const RootStack = createStackNavigator();



const iconTab = ({ route }) => {
  return ({
    tabBarIcon: ({ focused, size }) => {
      if (route.name == 'Home') {
        return <SimpleLineIcons name="home" size={30} color={'#323232'} />
      } else if (route.name == 'Explore') {
        return <FontAwesome name="search" size={30} color={'#323232'} />
      } else if (route.name == 'Setting') {
        return <Ionicons name="settings-outline" size={30} color={'#323232'} />
      }
    },
  });
}



const TabsStackScreen = () => (
  <TabsStack.Navigator screenOptions={iconTab}>

    <TabsStack.Screen name='Home' component={Home}
      options={{
        title: 'Home',
        headerShown: false,
      }} />

    <TabsStack.Screen name='Explore' component={Explore}
      options={{
        title: 'Explore',
        headerShown: false,
      }} />

    <TabsStack.Screen name='Setting' component={Setting}
      options={{
        title: 'Setting',
        headerShown: false,
      }} />

  </TabsStack.Navigator>
);



const DrawerStackScreen = () => (
  <DrawerStack.Navigator >

    <DrawerStack.Screen name='TabsStackScreen' component={TabsStackScreen} options={{ headerShown: false }} />

  </DrawerStack.Navigator>
);




const RootStackScreen = () => (
  <RootStack.Navigator>

    <RootStack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
    <RootStack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
    <RootStack.Screen name='Login' component={Login} options={{ headerShown: false }} />
    <RootStack.Screen name='Register' component={Register} options={{ headerShown: false }} />
    <RootStack.Screen name='DrawerStackScreen' component={DrawerStackScreen} options={{ headerShown: false }} />
    <RootStack.Screen name='Account' component={Account} />
    <RootStack.Screen name='About' component={About} options={{ headerShown: false }} />
    <RootStack.Screen name='Design' component={Design} options={{ headerShown: false }} />
    <RootStack.Screen name='Material' component={Material} options={{ headerShown: false }} />

  </RootStack.Navigator>
);


export default () => (
  <NavigationContainer>
    <RootStackScreen />
  </NavigationContainer>
);


const styles = StyleSheet.create({
  iconbawah: {
    color: '#139038'
  },
})

