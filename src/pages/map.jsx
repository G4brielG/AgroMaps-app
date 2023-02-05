import React, { useState, useEffect } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import {
  map,
  button,
  buttonCapaSelect,
  addButton,
  addButtonDisabled,
  buttonContainer,
  addButtonText,
  containerBox,
  containerInfoCapa,
  containerFormUbi,
  containerUbi,
  button3,
  input,
  button2,
} from "../styles/styles";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Motion } from "@legendapp/motion";
import { Modal } from "../components/Modal";
import { transition } from "../styles/motion";
import { SERVER, IP } from "../Services";
import Markers from "../components/Markers";
import useLocation from "../hooks/useLocation";
const iconMarker = require("../imgs/iconblue-location-agromaps.png");

export function Map() {
  const [capa, setCapa] = useState([]);
  const [capaSelec, setCapaSelec] = useState({});
  const [render, setRender] = useState(false);

  const [show, setShow] = useState({
    showInfo: false,
    showUbi: false,
  });

  const [miliMarker, setMiliMarker] = useState({
    nombre: "",
    latitude: 0,
    longitude: 0,
  });

  //* ESTADO EN EL CUAL SE GUARDA EL CONJUNTO DE COORDENADAS
  const [marker, setMarker] = useState([]);
  //* VALIDACIÓN PARA INGRESAR NOMBRE DEL MARCADOR A AGREGAR
  const [marcador, setMarcador] = useState(false);

  const [valueCapa, setValueCapa] = useState(0);
  const [valueUbi, setValueUbi] = useState(0);
  const [valueMarker, setValueMarker] = useState(0);
  const [zoomRegion, setZoomRegion] = useState(null)

  const { position } = useLocation();

  const handleFindLayers = async () => {
    const url = `${IP}:4000/layers`;
    const content = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(url, content);
    const json = await response.json();
    response.ok && setCapa(json);
  };

  useEffect(() => {
    if (render) {
      setRender(false);
    }
    setTimeout(() => {
      setRender(true);
      return capaSelec;
    }, 100);
  }, [capaSelec]);

  useEffect(() => {
    handleFindLayers();
  }, []);
  return (
    <View>
      <MapView
        zoomEnabled={true}
        zoomControlEnabled={true}
        style={map}
        initialRegion={position}
        region={zoomRegion}
        // onRegionChangeComplete={(value) => setZoomRegion(value)}
        onLongPress={(e) => {
          const { latitude, longitude } = e.nativeEvent.coordinate;
          //* SETEO DE COORDENADAS EN CADA OBJ, PARA REGISTRAR MARCADORES
          setMiliMarker((prev) => ({
            ...prev,
            latitude,
            longitude,
          }));

          //* CAMBIO DE ESTADO PARA INGRESAR NOMBRE DEL MARCADOR
          setMarcador(!marcador);
          setTimeout(() => setValueMarker(1), 1);
        }}
        minZoomLevel={6}
        maxZoomLevel={16}
      >
        {
          //* VALIDACIÓN DE ESTADO PARA RENDERIZAR CAPAS */
        }
        {capaSelec.local !== undefined && render && (
          <MapView.UrlTile
            urlTemplate={`${IP}/${capaSelec.local}`}
            zIndex={-1}
            style={{ opacity: 1 }}
          />
        )}

        <Marker
          icon={iconMarker}
          coordinate={{
            latitude: position.latitude,
            longitude: position.longitude,
          }}
        >
          <Callout>
            <View>
              <Text>Ubicación actual</Text>
            </View>
          </Callout>
        </Marker>
        {
          //* VALIDACIÓN DE ESTADO PARA MOSTRAR MARCADORES
          marker.length > 0 &&
            marker.map((element, index) => (
              <Markers key={"marker-" + index} data={element} />
            ))
        }
      </MapView>

      {
        // VALIDACIÓN DE ESTADO PARA INGRESAR NOMBRE DE MARCADOR
      }
      {marcador && (
        <Motion.View
        style={containerBox}
        animate={{
          x: valueMarker * 10,
          opacity: valueMarker ? 1 : 0.2,
          scale: valueMarker ? 1 : 0.5,
        }}
        transition={transition}>
        <View style={containerFormUbi}>
          <Text style={{ marginVertical: 20, fontSize: 16 }}>
            Nuevo marcador
          </Text>
          <TextInput
            style={input}
            onChangeText={(value) =>
              setMiliMarker((prev) => ({ ...prev, nombre: value }))
            }
            placeholder="Nombre"
          />
          <View
            style={{ margin: 10, flexDirection: "row", alignSelf: 'center' }}
          >
            <TouchableOpacity
              style={buttonCapaSelect}
            >
              <Text
                style={{color: 'white'}}
                onPress={() => {
                  setMarcador(!marcador);
                  setValueMarker(0);
                }}
              >
                Cancelar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={button}
            >
              <Text
                onPress={() => {
                  setMarker([...marker, miliMarker]);
                  setMiliMarker({});
                  setMarcador(!marcador);
                  setValueMarker(0);
                }}
              >
                Agregar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        </Motion.View>
      )}

      <View
        style={{ width: '100%', height: '6%', position: 'absolute' }}
      >
        <ScrollView
        horizontal={true}
        >
          {capa.map((element, index) => (
            <TouchableOpacity
              key={"capa-" + index}
              onPress={() =>
                capaSelec?.titulo ? setCapaSelec({}) : setCapaSelec(element)
              }
            >
              <Text
                style={
                  element.titulo === capaSelec.titulo
                  ? buttonCapaSelect
                  : button
                }
                >
                {element.titulo}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {show?.showInfo && (
        <Motion.View
          style={containerBox}
          animate={{
            x: valueCapa * 10,
            opacity: valueCapa ? 1 : 0.2,
            scale: valueCapa ? 1 : 0.5,
          }}
          transition={transition}
        >
          <Modal estilo={containerInfoCapa}>
            <Text>INFORMACIÓN DE LA CAPA SELECCIONADA</Text>
            <Image
              source={{ uri: capaSelec.simbologia }}
              style={{ width: 300, height: 370, resizeMode: "contain" }}
            />
          </Modal>
        </Motion.View>
      )}

      {show?.showUbi && (
        <Motion.View
          style={containerBox}
          animate={{
            x: valueUbi * 10,
            opacity: valueUbi ? 1 : 0.2,
            scale: valueUbi ? 1 : 0.5,
          }}
          transition={transition}
        >
          <Modal estilo={containerUbi}>
            <Text
              style={{
                marginBottom: 10,
                fontSize: 24,
                alignSelf: "center"
              }}
            >
              Mis ubicaciones
            </Text>
            <View style={{marginVertical: 10, flexDirection: "row"}}>
              <Text style={{ fontSize: 24, width: 200 }}>Ubicación actual</Text>
              <View>
                <TouchableOpacity
                  style={button2}
                  onPress={() => setZoomRegion({...position })}
                >
                  <MaterialCommunityIcons
                    name="map-marker-radius"
                    style={{color: 'white'}}
                    size={30}
                  />
                </TouchableOpacity>
              </View>
              </View>
            {marker.map((element, index) => (
              <View key={index} style={{marginVertical: 10, flexDirection: "row"}}>
                <Text style={{ fontSize: 24, width: 200 }}>{element.nombre}</Text>
                <View>
                  <TouchableOpacity 
                  style={button2}
                  onPress={() => (
                    setTimeout(() => {
                      setZoomRegion({ latitude: element.latitude, longitude: element.longitude, latitudeDelta: 5, longitudeDelta: 3})
                    }, 100)
                  )}>
                    <MaterialCommunityIcons
                      name="map-marker-account"
                      style={{color: 'white'}}
                      size={30}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </Modal>
        </Motion.View>
      )}

      <View style={buttonContainer}>
        <TouchableOpacity
          style={capaSelec.titulo === undefined ? addButtonDisabled : addButton}
          disabled={capaSelec.titulo === undefined ? true : false}
          onPress={() => { 
            setShow({ ...show, showInfo: !show.showInfo });
            if (valueCapa === 0) {
              setTimeout(() => setValueCapa(1), 1);
            } else {
              setValueCapa(0);
            }
          }}
        >
          <MaterialCommunityIcons
            name="information"
            style={addButtonText}
            size={26}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={addButton}
          onPress={() => {
            setShow({ ...show, showUbi: !show.showUbi });
            if (valueUbi === 0) {
              setTimeout(() => setValueUbi(1), 1);
            } else {
              setValueUbi(0);
            }
          }}
        >
          <MaterialCommunityIcons
            name="map-marker-account"
            style={addButtonText}
            size={26}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
