import { Login, Home, Map, Register, MiCuenta } from "./src/pages/index"
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { NativeBaseProvider } from "native-base";
import useSession from "./src/hooks/useSession";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native"

const Tab = createBottomTabNavigator();

export default function App() {
  const [ logueado, setLogueado ] = useState(false)
  const { usuario, logout } = useSession()
  
  useEffect(() => {
    if (usuario === null) {
      setLogueado(false)
    } else {
      setLogueado(true)
    }
    console.log('usuario: ', usuario)
  }, [usuario])
  return (
    <>
      <NativeBaseProvider>
        <NavigationContainer>
          {
            logueado === true
              ?
              <Tab.Navigator initialRouteName="Home">
                <Tab.Group screenOptions={() => ({
                  presentation: 'modal',
                  headerRight: () => (
                    <TouchableOpacity variant="unstyled" onPress={logout}>
                      <MaterialCommunityIcons name="login-variant" size={26} color="#890000" />
                    </TouchableOpacity>
                  )
                })}>
                  <Tab.Screen name="Inicio" component={Home}
                    options={{
                      tabBarLabel: 'Home',
                      tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                      ),
                    }}
                  />
                  <Tab.Screen name="Mapa" component={Map}
                    options={{
                      tabBarLabel: 'Mapa',
                      tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="map" color={color} size={26} />
                      ),
                    }}
                  />
                  <Tab.Screen name="Cuenta" component={MiCuenta}
                    options={{
                      tabBarLabel: 'Mi cuenta',
                      tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                      ),
                    }}
                  />
                </Tab.Group>
              </Tab.Navigator>
              :
              <Tab.Navigator initialRouteName="Login">
                <Tab.Group>
                  <Tab.Screen name="Login" component={Login}
                    options={{
                      headerShown: false,
                      tabBarStyle: { display: 'none' }
                    }}
                  />
                  <Tab.Screen name="Register" component={Register}
                    options={{
                      headerShown: false,
                      tabBarStyle: { display: 'none' }
                    }}
                  />
                  <Tab.Screen name="Home" component={Home} />
                </Tab.Group>
              </Tab.Navigator>
          }
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  )
}