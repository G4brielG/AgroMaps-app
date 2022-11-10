import { useState, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

const useSession = () => {
  const [usuario, setUsuario] = useState(null)

  const getItem = async () => {
    setUsuario(await AsyncStorage.getItem('user'))
  }

  const login = async (user) => {
    await AsyncStorage.removeItem('user')
    setUsuario(null)

    if (user !== null) {
      setUsuario(await AsyncStorage.setItem('user', JSON.stringify(user)));
    }
  }

  const logout = async () => {
    await AsyncStorage.removeItem('user')
    setUsuario(null)
    console.log('* c ejecuta el logout O//w//O *')
  }

  useEffect(() => {
    getItem()
  }, [])
  
  return { usuario, login, logout }
}

export default useSession