import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { nav } from '../styles/styles'
import {Home} from '../pages/Home'
import { Map } from "../pages/map.jsx";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

const Tab = createBottomTabNavigator();

export const BotBar = () => {
  return (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={Home} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />),
        }}/>
      <Tab.Screen name="Mapa" component={Map} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="map" color={color} size={26} />),
        }}/>
      <Tab.Screen name="Login" component={Login} options={{
        tabBarLabel: 'Sesion',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="login" color={color} size={26} />),
        }}/>
      <Tab.Screen name="Registro" component={Register} options={{
        tabBarLabel: 'Registro',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="registered-trademark" color={color} size={26} />),
        }}/>
    </Tab.Navigator>
  </NavigationContainer>
  )
}