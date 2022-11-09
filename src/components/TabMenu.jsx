import { Home, Map, MiCuenta } from "../pages/index"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TouchableOpacity } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import useSession from "../hooks/useSession"
import { NativeBaseProvider } from "native-base";

const Tab = createBottomTabNavigator()

export default function TabMenu({ navigation }) {

  const { logout } = useSession()

  const saquenmeDeAqui = () => {
    logout()
    navigation.navigate('Login')
  }

  const buttonSalir = <TouchableOpacity variant="unstyled" onPress={saquenmeDeAqui}>
    <MaterialCommunityIcons
      name="login-variant"
      size={26}
      color="#890000"
    />
  </TouchableOpacity>

return (
  <NativeBaseProvider>
    <Tab.Navigator initialRouteName="Inicio">
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          headerRight: () => buttonSalir,
        }}
      />

      <Tab.Screen
        name="Mapa"
        component={Map}
        options={{
          tabBarLabel: "Mapa",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map" color={color} size={26} />
          ),
          headerRight: () => buttonSalir,
        }}
      />

      <Tab.Screen
        name="Cuenta"
        component={MiCuenta}
        options={{
          tabBarLabel: "Mi cuenta",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
          headerRight: () => buttonSalir,
        }}
      />
    </Tab.Navigator>
  </NativeBaseProvider>
);
}