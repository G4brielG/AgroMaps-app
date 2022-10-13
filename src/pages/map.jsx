import React, {useState, useEffect} from 'react';
import MapView, { UrlTile, Overlay, Callout } from 'react-native-maps';
import WebView from 'react-native-webview';
import { map, button } from '../styles/styles';
import { View, TouchableOpacity, Text } from 'react-native';

export function Map() {
  // const watercolor = 'http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'
  // const terrain = 'http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png'

  // const myip = "192.168.216.230"

  // const customHTML = `
  // <iframe width='100%' height='100%' src="https://api.mapbox.com/styles/v1/sirlam/cl8udimeq002m14n0iuszi1kb.html?title=false&access_token=pk.eyJ1Ijoic2lybGFtIiwiYSI6ImNsOHQ1emN1ZTA0YWUzb3Buem1xZjdwZHYifQ.J6TKjjJr8rNaq1zQ0lko0A&zoomwheel=false#3/-21.45/-57.05" title="Blank" style="border:none;"></iframe>
  // `
  // return (
  //   <WebView
  //     originWhitelist={["*"]}
  //     source={{
  //       html: customHTML,
  //     }}
  //     scalesPageToFit={false}
  //   />
  // );
  
  const region = {
    latitude: -26.0822,
    longitude: -58.2784,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  
  const capas = {
    Sin: '',
    Acuarela: 'http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg',
    Toner: 'http://c.tile.stamen.com/toner/{z}/{x}/{y}.jpg',
    Terrain: 'http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png'
  }
  const [capa, setCapa] = useState(capas.Sin);
  const [render, setRender] = useState(false);

  useEffect(()=>{

    if (render) {
      setRender(false);
    }

    setTimeout(() => {
      setRender(true);
      console.log(capa)
      return capa;
    }, 100);
  },[capa])

  return (
    <View>
      <MapView
      style={map}
      initialRegion={region}
      >
        {
          render && <MapView.UrlTile
          urlTemplate={capa}
          zIndex={-1}
        />
        }
      </MapView>

      <View
        style={{
          position: 'absolute',
          top: '0%',
          alignSelf: 'flex-start',
        }}
      >
        <TouchableOpacity onPress={() => setCapa(capas.Acuarela)}>
          <Text style={button}>Acuarela</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCapa(capas.Toner)}>
          <Text style={button}>Toner</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCapa(capas.Terrain)}>
          <Text style={button}>Terrain</Text>
        </TouchableOpacity>
      </View>
   </View>

    //   <MapView
    //   initialRegion={region}
    //   style={map}
    //   >
    //     <Overlay 
    //   image="https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg"
    //   bounds={[
    //     [40.712216, -74.22655], 
    //     [40.773941, -74.12544]
    //   ]}
    // />
    //   </MapView>
 );
}
