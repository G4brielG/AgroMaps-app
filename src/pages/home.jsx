import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
// import Carousel from 'react-native-reanimated-carousel';
import ipf from '../imgs/Agromap.png';
import { image, home, containerBox, containerInfoCapa, button3, nameProfile } from '../styles/styles';
import { SERVER, IP } from "../Services";
import { Modal } from '../components/Modal'

export const Home = () => {
  const [capa, setCapa] = useState([])
  const [capaSelec, setCapaSelec] = useState({})
  const [visible, setVisible] = useState(false);

  const handleFindLayers = async () => {
    const url = `${SERVER}/layers`
    const content = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
    const response = await fetch(url, content)
    const json = await response.json()
    response.ok && setCapa(json)
  }

  useEffect(() => {
    handleFindLayers()
  }, [])

  const verConcepto = ({titulo, simbologia}) => {
    // console.log(simbologia)
    return (
      <View style={containerBox}>
        <Modal header={`INFORMACIÓN DE ${titulo}`}>
          <Image
            source={{ uri: simbologia }}
            style={{ width: 300, height: 370, resizeMode: 'contain' }}
          />
        </Modal>
      </View>
    )
  }

  return (
    <View
      style={home} 
    >
      <View style={{ width: '40%', height: '20%', alignItems: 'center'}}>
        <Image style={image} source={ipf} />
      </View>

        <Text style={nameProfile}>Bienvenido a AgroMaps</Text>
        <Text style={button3}>Aquí podrá consultar información geográfica sobre el suelo y algunas clasificaciones.</Text>

      <View>
        {capa.map(({ titulo, simbologia }, index) => (
          <View 
          key={index}
          style={containerInfoCapa}>
            <Text>{titulo}</Text>
            <Image
              source={{ uri: simbologia }}
              style={{ width: 250, height: 320, resizeMode: 'contain', }}
            />
          </View>
        ))}
      </View>

      {/* <View style={{ flex: 1 }}>
        <Carousel
          loop
          width={100}
          height={100}
          autoPlay={true}
          data={[...new Array(6).keys()]}
          scrollAnimationDuration={1000}
          onSnapToItem={({titulo, simbologia}, index) => console.log('current index:', index)}
          renderItem={({ index }) => (
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                justifyContent: 'center',
              }}
          >
              <Text style={{ textAlign: 'center', fontSize: 30 }}>
                {titulo}
              </Text>
            </View>
          )}
        />
        </View> */}


    </View>
  );
}