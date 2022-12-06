import { Text, View } from "react-native"
import { perfil, containerBox, container, container2, containerProfile, button, nameProfile, linearGradient, picProfile, text, titless, titleProfile, infoProfile } from "../styles/styles"
//import { LinearGradient } from 'react-native-linear-gradient';
import { Avatar, Button, Divider, List } from 'react-native-paper';
import React, { useState } from "react";
import useSession from "../hooks/useSession";
import { useEffect } from "react";
import { SERVER } from "../Services";



export function MiCuenta() {

  const { usuario } = useSession()
  console.log("Usuario", usuario)
  return (
    <>
      {/* <LinearGradient
        style={linearGradient}
        colors={['#81A5FC', '#E4EBFB']}>
      </LinearGradient> */}
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
              <Text style={infoProfile}>Correo: prueba@gmail.com</Text>
              <Text style={infoProfile}>Telefono: 3704090814</Text>
            </>
          )
        }
        {
          usuario?.telefono === !null && (
            <Text style={infoProfile}>Telefono: {usuario.telefono}</Text>
          )}
        <Divider />
        <Text style={titleProfile}>Gestion de usuario:</Text>
        <Button style={button}>Cerrar sesion</Button>
      </View>
    </>
  )
}