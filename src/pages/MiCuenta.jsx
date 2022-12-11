import { Text, View } from "react-native"
import { containerProfile, nameProfile, picProfile, titleProfile, infoProfile } from "../styles/styles"
// import { LinearGradient } from 'expo-linear-gradient';
import { Avatar, Divider } from 'react-native-paper';
import React, { useEffect } from "react";
import useSession from "../hooks/useSession";





export function MiCuenta() {
  const { usuario } = useSession()

  useEffect(() => {

  }, [usuario])

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