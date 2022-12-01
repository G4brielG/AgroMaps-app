import { Text, View } from "react-native"
import {useState, useEffect} from 'react'
import useSession from "../hooks/useSession"

export function MiCuenta () {
  const [ user, setUser ] = useState({})
  const { usuario } = useSession()

  const handleFindUser = async () => {
    const url = `${SERVER}/usuarios/${usuario._id}`
    const content = {
      method: "GET",
      headers: { "Content-Type": "application/json", "auth-token": `${usuario.token}` },
    }
    const response = await fetch(url, content)
    const json = await response.json()
    response.ok && setUser(json)
  }
  useEffect(() => {
    usuario !== null &&
    handleFindUser()
  }, [])
  useEffect(() => {
    console.log(user)
  }, [user])
  return (
    <View>
      <View>
        <Text>Mi cuenta</Text>
      </View>
      <View>
        <Text>a</Text>
      </View>
    </View>
  )
}