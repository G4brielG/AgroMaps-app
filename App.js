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

        </NavigationContainer>
      </NativeBaseProvider>
    </>
  )
}