import { Text, View } from "react-native"
import { containerProfile, nameProfile, picProfile, titleProfile, infoProfile, button2, button3 } from "../styles/styles"
// import { LinearGradient } from 'expo-linear-gradient';
import { Avatar, Button, Divider } from 'react-native-paper';
import React, { useState, useEffect } from "react";
import useSession from "../hooks/useSession";
import { Modal } from "../components/Modal"





export function MiCuenta(navigation) {
  const [ver, setVer] = useState(false)
  const { usuario, logout } = useSession()
  // console.log("Usuario", usuario)

  const cerrarSesion = () => {
    logout()
    setVer(false)
    navigation.navigate("Login")
  }

  useEffect(() => {

  }, [usuario])

  const buttons = [
    <View style={{ alignContent: "center" }}>
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
      <View style={containerProfile}>
        <View style={picProfile}>
          <Avatar.Icon size={80} icon="code-braces-box" />
        </View>
        {
          usuario?.usuario && (
            <>
              <Text style={nameProfile}>{usuario.usuario}</Text>
              <Divider />

              <Text style={titleProfile}>Informacion de contacto:</Text>
              <Text style={infoProfile}>Correo: {usuario.correo}</Text>
            </>
          )
        }
        {
          usuario?.telefono === !null && (
            <Text style={infoProfile}>Telefono: {usuario.telefono}</Text>
          )}
      </View>
    </>
  )
}