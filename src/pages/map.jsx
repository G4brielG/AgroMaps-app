import React, {useState, useEffect} from 'react';
import MapView, { UrlTile, Marker, Callout } from 'react-native-maps';
import { map, button, addButton, buttonContainer, addButtonText } from '../styles/styles';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
    Alcalina: "https://api.maptiler.com/tiles/0b9d763e-90d3-4f17-bfd2-c9c2aa1eec25/{z}/{x}/{y}.png?key=4jGye4d2Qnz1CcCTCwmj",
    Maptiler: "https://api.maptiler.com/tiles/10a72053-a2ce-4ea1-a9aa-e42853c7b427/{z}/{x}/{y}.png?key=ikvXccZmYAyuvY2spJi0",
    Terrain: "http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png",
    Temp_Suelo: "http://maps.openweathermap.org/maps/2.0/weather/TS0/{z}/{x}/{y}?appid=b1b15e88fa797225412429c1c50c122a1",
    Geoserver: `http://192.168.114.200:8080/geoserver/gwc/service/tms/1.0.0/Provincias/{z}/{x}/{-y}.png`,
    Provincia: "http://192.168.216.51/tileserver-php-master/prueba/{z}/{x}/{y}.png",
    Cultivos: "http://192.168.216.51/tileserver-php-master/cultivos2022/cultivos2022/{z}/{x}/{y}.png"
  };

  //* ESTADOS INICIALES DE LA CAPA
  const [capa, setCapa] = useState(capas.Sin);
  const [render, setRender] = useState(false);
  //* ESTADO PARA MOSTRAR LISTA DE CAPAS SELECCIONABLES
  const  [verCapa, setVerCapa]  = useState(false);
  //* ESTADO PARA MOSTRAR LA INFO DE LA CAPA SELECCIONADA
  const  [infoCapa, setInfoCapa]  = useState(false);

  //* ESTADO PARA VALIDAR EL RENDER DE MARCADORES
  const [addMark, setAddMark] = useState(false);
  //* ESTADO EN EL CUAL SE GUARDA EL CONJUNTO DE COORDENADAS
  const [marker, setMarker] = useState([]);
  //* VALIDACIÓN PARA INGRESAR NOMBRE DEL MARCADOR A AGREGAR 
  const [marcador, setMarcador] = useState(false);

  //* CAMBIO DE ESTADO DE SELECCIÓN DE CAPA PARA RENDERIZARLA
  useEffect(()=>{

    if (render) {
      setRender(false);
    }

    setTimeout(() => {
      setRender(true);
      //console.log(capa)
      return capa;
    }, 100);
  },[capa])

  return (
    <View>
      <MapView 
        style={map} 
        initialRegion={region} 
        onLongPress={(e) => {
          //* SETEO DE COORDENADAS EN CADA OBJ, PARA REGISTRAR MARCADORES
          setMarker([...marker, {latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude}])
          //* CAMBIO DE ESTADO PARA INGRESAR NOMBRE DEL MARCADOR
          setMarcador(!marcador)
        }}
        minZoomLevel={7}
        maxZoomLevel={18}
        >
        {//* VALIDACIÓN DE ESTADO PARA RENDERIZAR CAPAS */
        }
        {render && <MapView.UrlTile urlTemplate={capa} zIndex={-1} style={{opacity: 1}}/>}
        <Marker
          coordinate={{ latitude : region.latitude , longitude : region.longitude }}
        >
          <Callout>
            <View>
              <Text>Polo Científico</Text>
            </View>
          </Callout>
        </Marker>
        {
        //* VALIDACIÓN DE ESTADO PARA MOSTRAR MARCADORES
          addMark && (
            <View>
              <Marker
                coordinate={{ latitude : marker[0].latitude, longitude : marker[0].longitude }}
                >
                <Callout>
                  <View>
                    <Text>New</Text>
                  </View>
                </Callout>
              </Marker>
              {/* <Marker
              coordinate={{ latitude : marker[0].latitude, longitude : marker[0].longitude }}/>
              <Marker
              coordinate={{ latitude : marker[1].latitude, longitude : marker[1].longitude }}/>
              <Marker
              coordinate={{ latitude : marker[2].latitude, longitude : marker[2].longitude }}/>*/}
            </View> 
          )
        }
      </MapView>

      {/* VALIDACIÓN DE ESTADO PARA INGRESAR NOMBRE DE MARCADOR */}
      {
        marcador && (
          <View style={{
            position: "absolute",
            alignSelf: "center",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            height: 200,
            width: 300,
            backgroundColor: "white"
          }}>
            {/* <TextInput 
              onChangeText={(value) => ({nombre: value})}
              placeholder = 'Nombre del lugar'
              value = 
            /> */}
            <View style = {{ marginVertical: 10, flexDirection: 'row', }}>
              <TouchableOpacity style = { button }>
                <Text
                  onPress = {()=> {
                    //* SET DE ESTADO PARA OCULTAR FORM
                    setMarcador(!marcador)
                    //* SET DE ESTADO PARA MOSTRAR MARCADORES
                    setAddMark(!addMark)
                  }} 
                >Agregar</Text>
              </TouchableOpacity>

              <TouchableOpacity style = { button }>
                <Text
                  onPress = { () => setMarcador(!marcador) }
                >Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }

      {//* VERIFICACIÓN DE ESTADO PARA VER LISTA DE CAPAS */
      }
      {
        verCapa && (
        <View
        style={{
          position: "absolute",
          top: "0%",
          alignSelf: "flex-start",
        }}
      >
        //* SETEO POR EVENTO PARA RENDERIZAR SEGÚN CAPA SELECCIONADA
        <TouchableOpacity onPress={() => setCapa(capas.Alcalina)}>
          <Text style={button}>Alcalina</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCapa(capas.Maptiler)}>
          <Text style={button}>Maptiler</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCapa(capas.Terrain)}>
          <Text style={button}>Terrain</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCapa(capas.Temp_Suelo)}>
          <Text style={button}>Temp Suelo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCapa(capas.Provincia)}>
          <Text style={button}>Provincias</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCapa(capas.Cultivos)}>
          <Text style={button}>Cultivos</Text>
        </TouchableOpacity>
      </View>
      )}

      {// TODO: VERIFICACIÓN DE ESTADO PARA MOSTRAR INFO, SEGÚN CAPA SELECCIONADA
      }
      {
        infoCapa && (
          <View
            style={{
              position: "absolute",
              top: "30%",
              alignContent: "center",
              width: "100%",
              height: "100%"
            }}
          >
            <View
            style={{
              position: "absolute",
              alignSelf: "center",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
              height: 200,
              width: 300,
              backgroundColor: "white"
            }}
            >
              <Text>Aquí se muestra la información de la capa</Text>
            </View>
          </View>
        )
      }

      <View style = { buttonContainer }>
          <TouchableOpacity 
          style = { addButton }
          onPress = { () => setVerCapa(!verCapa) }>
            <MaterialCommunityIcons name="layers" style = { addButtonText } size={26} />
          </TouchableOpacity>
          <TouchableOpacity 
          style = { addButton }
          onPress = { () => setInfoCapa(!infoCapa) }>
            <MaterialCommunityIcons name="information" style = { addButtonText } size={26} />
          </TouchableOpacity>
          <TouchableOpacity 
          style = { addButton }
          onPress = { () => setInfoCapa(!infoCapa) }>
            <MaterialCommunityIcons name="map-marker-account" style = { addButtonText } size={26} />
          </TouchableOpacity>
      </View>
    </View>
  );
}
