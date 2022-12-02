import { Text, View } from "react-native"
import { useState } from "react"
import useSession from "../hooks/useSession"
import { perfil, containerBox, containerProfile, container, container2 } from "../styles/styles"

export function MiCuenta() {
  // const [ usuario, setUsuario ] = useState({})
  const { usuario, logout } = useSession()
  console.log(usuario)

  return (
    <>
    {
      usuario?.usuario && (
      <View style={container}>
        <View style={container2}> 
          <Text>Usuario: {usuario.usuario}</Text>
          <Text>Correo: {usuario.email}</Text>
          <Text>Teléfono: {usuario.telefono}</Text>
        </View>
      </View>)
    }
    </>
  )
}