import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { nav } from '../styles/styles'
import {Home} from '../pages/Home'
import { Map } from "../pages/map.jsx";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

const Tab = createBottomTabNavigator();

// export function BotBar() {
//   return (
//     <NavigationContainer style={nav}>
//       <Tab.Navigator>
//         <Tab.Screen name="Inicio" component={Home} />
//         <Tab.Screen name="Mapa" component={Map} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   )
// }

export const BotBar = () => {
  return (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={Home} />
      <Tab.Screen name="Mapa" component={Map} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Registro" component={Register} />
    </Tab.Navigator>
  </NavigationContainer>
  )
}