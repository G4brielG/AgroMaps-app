import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { nav } from '../styles/styles'
import { Home } from '../pages/home'
import { Map } from "../pages/map";

const Tab = createBottomTabNavigator();

export function BotBar() {
  return (
    <View style={nav}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Inicio" component={Home} />
          <Tab.Screen name="Mapa" component={Map} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}