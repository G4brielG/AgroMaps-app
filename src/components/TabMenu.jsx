import { Home, Map, MiCuenta } from "../pages/index"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TouchableOpacity, View, Text } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import useSession from "../hooks/useSession"
import { NativeBaseProvider } from "native-base";
import { useState } from "react";

export default function TabMenu({ navigation }) {
  const [ver, setVer] = useState(false)
  const { logout } = useSession()

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
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={26}
                />
              ),
              headerRight: () => buttonSalir,
            }}
          />
        </Tab.Navigator>
      </NativeBaseProvider>

      {ver && (
        <View
          style={{
            position: "absolute",
            top: "30%",
            alignContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <View
            style={{
              position: "absolute",
              alignSelf: "center",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
              height: 200,
              width: 300,
              backgroundColor: "white",
            }}
          >
            <Text>¿Está seguro de cerrar la sesión?</Text>
            
            <TouchableOpacity variant="unstyled" onPress={() => setVer(!ver)}>
              <Text>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity variant="unstyled" onPress={cerrarSesion}>
              <Text>Salir</Text>
            </TouchableOpacity>

          </View>
        </View>
      )}
    </>
  );
}