import { Text, View } from "react-native"
import { perfil, containerBox, containerProfile, button, nameProfile, linearGradient, picProfile, text, titless, titleProfile, infoProfile } from "../styles/styles"
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar, Button, Divider, List } from 'react-native-paper';
import React from "react";
import useSession from "../hooks/useSession";



export function MiCuenta() {

  const { usuario } = useSession()
  console.log(usuario)

  return (
    <>
      <LinearGradient
        style={linearGradient}
        colors={['#81A5FC', '#E4EBFB']}>
      </LinearGradient>
      <View style={containerProfile}>
        <View style={picProfile}>
          <Avatar.Icon size={80} icon="code-braces-box" />
        </View>

        <Text style={nameProfile}>{usuario.usuario}</Text>
        <Text style={infoProfile}>{usuario.rol}</Text>
        <Divider />

        <Text style={titleProfile}>Informacion de contacto:</Text>
        <Text style={infoProfile}>Correo:</Text>
        <Text style={infoProfile}>Telefono:</Text>
      </View>
    </>
  )
}