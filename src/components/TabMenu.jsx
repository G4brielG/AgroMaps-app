import { Home, Map, MiCuenta, Capas } from "../pages/index"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TouchableOpacity, Text, View } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import useSession from "../hooks/useSession"
import { NativeBaseProvider } from "native-base";
import { useState } from "react";
import { Modal } from "./Modal"
import { containerSalir, headerStylee, button2 } from '../styles/styles'
import { Button } from 'react-native-paper';

export default function TabMenu({ navigation }) {
  const [ver, setVer] = useState(false)
  const { usuario, logout } = useSession()
  const Tab = createBottomTabNavigator();

  const cerrarSesion = () => {
    logout()
    setVer(false)
    navigation.navigate("Login")
  }

  const buttonSalir = (
    <TouchableOpacity variant="unstyled" onPress={() => setVer(!ver)}>
      <MaterialCommunityIcons name="login-variant" size={26} color="#890000" />
    </TouchableOpacity>
  )

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
        </Tab.Navigator>
      </NativeBaseProvider>

      {ver && (
        <Modal estilo={containerSalir}>

          <Text style={headerStylee}>¿Está seguro de cerrar la sesión?</Text>
          
          <View style={{ flexDirection: "row" }}>
            <Button style={button2} mode="contained" onPress={() => setVer(!ver)}>Cancelar</Button>
            <Button style={button2} mode="contained" buttonColor="#B5071E" onPress={cerrarSesion}>Cerrar sesion</Button>
          </View>
          
        </Modal>
      )}
    </>
  );
}