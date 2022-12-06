import { useEffect, useState } from "react"
import * as Location from 'expo-location';

const useLocation = () => {
  const [position, setPosition] = useState({
    latitude: -26.0822,
    longitude: -58.2784,
    latitudeDelta: 5, // 0.0722
    longitudeDelta: 3, // 0.0321
  })

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()

      if (status === 'granted') {
        let location = await Location.getCurrentPositionAsync({})
        
        const { coords } = location

        setPosition({...position, latitude: coords.latitude, longitude: coords.longitude})
        console.log(position)
      } else {
        console.log("Acesso denegado")
      }
    })()
  }, [])
  return {
    position
  }
}

export default useLocation