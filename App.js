// import { BotBar } from "./src/components/bottombar.jsx";
// import { StatusBar } from 'expo-status-bar'
import { Login } from "./src/pages/Login";
import { Home } from './src/pages/Home'
import { Map } from './src/pages/Map'
import { Register } from './src/pages/Register'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App({ logueado }) {
  return (
    <>
      <NavigationContainer>
        {
          logueado
          ?
            <Tab.Navigator
              initialRouteName="Login"
            >
              <Tab.Screen name="Inicio" component={Home} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />),
              }} />
              <Tab.Screen name="Mapa" component={Map} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="map" color={color} size={26} />),
              }} />
              <Tab.Screen name="Cuenta" component={Map} options={{
                tabBarLabel: 'Mi cuenta',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="map" color={color} size={26} />),
              }} />
            </Tab.Navigator>
            : <Tab.Navigator
              initialRouteName="Login"
              >
                <Tab.Screen name="Login" component={Login} options={{ headerShown: false, tabBarStyle: { display: 'none' } }} />
                <Tab.Screen name="Register" component={Register} />
              </Tab.Navigator>
        }
        
      </NavigationContainer>
    </>
  )
}