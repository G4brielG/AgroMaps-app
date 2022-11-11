import { Login, Register } from "./src/pages/index"
import TabMenu from './src/components/TabMenu'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from "native-base"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useEffect, useState } from "react"
import useSession from "./src/hooks/useSession"
import { LogBox } from "react-native"

const Stack = createNativeStackNavigator()
LogBox.ignoreLogs(["EventEmitter.removeListener"])
export default function App() {
  const [initial, setInitial] = useState('')
  const { usuario } = useSession()

  useEffect(() => {
    if(usuario === null) {
      setInitial('Login')
    } else {
      setInitial('Home')
    }
  })
  return (
    <>
      <NativeBaseProvider>
        <NavigationContainer>
<<<<<<< HEAD
          {
            logueado === false
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
=======

          <Stack.Navigator initialRouteName={initial}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
                tabBarStyle: { display: 'none' }
              }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{
                headerShown: false,
                tabBarStyle: { display: 'none' }
              }}
            />
            <Stack.Screen
              name="Home"
              component={TabMenu}
              options={{
                headerShown: false,
                tabBarStyle: { display: 'none' }
              }}
            />
          </Stack.Navigator>

>>>>>>> 4c5769ee8dbf1b7f64caa1732c01ecf76c6310a9
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  )
}