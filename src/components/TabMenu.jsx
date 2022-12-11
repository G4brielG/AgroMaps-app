import { Home, Map, MiCuenta, Capas } from "../pages/index"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TouchableOpacity, View, Text } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import useSession from "../hooks/useSession"
import { NativeBaseProvider } from "native-base";
import { useState } from "react";
import { Modal } from "./Modal"
import { useEffect } from "react"
import { Button } from 'react-native-paper';
import { button3 } from "../styles/styles"

export default function TabMenu({ navigation }) {
  const [ver, setVer] = useState(false)
  const { usuario, logout } = useSession()
  const Tab = createBottomTabNavigator();

  const cerrarSesion = () => {
    logout()
    setVer(false)
    navigation.navigate("Login")
  }

useEffect(() => {

}, [usuario])

  const buttonSalir = (
    <TouchableOpacity variant="unstyled" onPress={() => setVer(!ver)}>
      <MaterialCommunityIcons name="login-variant" size={26} color="#890000" />
    </TouchableOpacity>
  )

  const buttons = [
    <View style={{alignContent:"center"}}>
    <Button key="cancelar" variant="unstyled" mode="contained" style={button3} onPress={() => setVer(!ver)}>
      <Text>Cancelar</Text>
    </Button>
    <Button key="salir" variant="unstyled" mode="contained" style={button3} buttonColor="#B5071E" onPress={cerrarSesion}>
      <Text>Salir</Text>
    </Button>
  </View>
  ]
  return (
    <>
      <NativeBaseProvider >
        <Tab.Navigator screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: "1%",
            left: "2%",
            right: "2%",
            elevation: 3,
            borderRadius: 15,
            height: "5%",
            backgroundColor: "#142c4c",
            // width: "98%"
          },
        }} initialRouteName="Inicio">
          <Tab.Screen
            name="Inicio"
            component={Home}
            options={{
              tabBarLabel: "Inicio",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
              headerRight: () => buttonSalir,
              headerStyle: {
                backgroundColor: '#142c4c',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
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
              headerStyle: {
                backgroundColor: '#142c4c',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />

          <Tab.Screen
            name="Cuenta"
            component={MiCuenta}
            options={{
              tabBarLabel: "Mi cuenta",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={26}
                />
              ),
              headerRight: () => buttonSalir,
              headerStyle: {
                backgroundColor: '#142c4c',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />

          {/* {console.log('desde tab', usuario.rol)} */}

          {
            usuario?.rol === "admin" && (
              <Tab.Screen
                name="Capas"
                component={Capas}
                options={{
                  tabBarLabel: "Capas",
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                      name="layers"
                      color={color}
                      size={26}
                    />
                  ),
                  headerRight: () => buttonSalir,
                  headerStyle: {
                    backgroundColor: '#142c4c',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              />
            )
          }

        </Tab.Navigator>
      </NativeBaseProvider>

      {ver && (
        <Modal header={`¿Está seguro de cerrar la sesión?`} footer={buttons} />
      )}
    </>
  );
}