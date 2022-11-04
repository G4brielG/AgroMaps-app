import React, {useState, useEffect} from 'react';
import MapView, { UrlTile, Marker, Callout } from 'react-native-maps';
import { map, button } from '../styles/styles';
import { View, TouchableOpacity, Text } from 'react-native';

export function Map() {
  
  // REGION INICIAL EN EL POLO CIENTÍFICO
  const region = {
    latitude: -26.0822,
    longitude: -58.2784,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  
  const capas = {
    Sin: "",
    Acuarela: "http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg",
    Toner: "https://api.maptiler.com/tiles/10a72053-a2ce-4ea1-a9aa-e42853c7b427/{z}/{x}/{y}.png?key=ikvXccZmYAyuvY2spJi0",
    Terrain: "http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png",
    Temp_Suelo: "http://maps.openweathermap.org/maps/2.0/weather/TS0/{z}/{x}/{y}?appid=b1b15e88fa797225412429c1c50c122a1",
    geoserver: `http://192.168.114.200:8080/geoserver/gwc/service/tms/1.0.0/Provincias/{z}/{x}/{-y}.png`,
    provincia: "http://192.168.216.51/tileserver-php-master/prueba/{z}/{x}/{y}.png",
    cultivos: "http://192.168.216.51/tileserver-php-master/cultivos2022/cultivos2022/{z}/{x}/{y}.png"
  };

  // ESTADOS INICIALES DE LA CAPA
  const [capa, setCapa] = useState(capas.Sin);
  const [render, setRender] = useState(false);


  // CAMBIO DE ESTADO DE SELECCIÓN DE CAPA PARA RENDERIZARLA
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
      <MapView style={map} initialRegion={region} onLongPress={e => console.log(e.nativeEvent.coordinate)}>
        {render && <MapView.UrlTile urlTemplate={capa} zIndex={-1} />}
        <Marker
          coordinate={{ latitude : region.latitude , longitude : region.longitude }}
        >
          <Callout>
            <View>
              <Text>Polo Científico</Text>
            </View>
          </Callout>
        </Marker>
       
      </MapView>

      <View
        style={{
          position: "absolute",
          top: "0%",
          alignSelf: "flex-start",
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
        <TouchableOpacity onPress={() => setCapa(capas.Temp_Suelo)}>
          <Text style={button}>Temp Suelo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCapa(capas.provincia)}>
          <Text style={button}>Provincias</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCapa(capas.cultivos)}>
          <Text style={button}>Cultivos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
