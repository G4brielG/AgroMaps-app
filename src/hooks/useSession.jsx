import { useState, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

const useSession = () => {
  const [usuario, setUsuario] = useState(null)

  const getItem = async () => {
    const user = await JSON.parse(await AsyncStorage.getItem("user"));
    setUsuario(user);
  }

  const login = async (user) => {
    await AsyncStorage.removeItem('user')
    setUsuario(null)

    if (user !== null) {
      await AsyncStorage.setItem("user", JSON.stringify(user));
      setUsuario(user);
      console.log(user)
    }
  }

  const logout = async () => {
    await AsyncStorage.removeItem('user')
    setUsuario(null)
  }

  useEffect(() => {
    getItem()
  }, [])

  // useEffect(() => {
  //   console.log(usuario);
  // }, [usuario])
  
  return { usuario, login, logout }
}

export default useSession