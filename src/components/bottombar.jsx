import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Home } from '../pages/Home'
import { Map } from "../pages/Map.jsx";

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
        <Tab.Screen name="Cuenta" component={Map} options={{
        tabBarLabel: 'Mi cuenta',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="map" color={color} size={26} />),
        }}/>
    </Tab.Navigator>
  </NavigationContainer>
  )
}