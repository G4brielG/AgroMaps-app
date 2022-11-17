import React, { useState, useEffect } from "react"
import MapView, { Marker, Callout } from "react-native-maps"
import {
  map,
  button,
  addButton,
  buttonContainer,
  addButtonText,
  containerBox,
  containerInfoCapa,
} from "../styles/styles"
import { View, TouchableOpacity, Text, Image, TextInput } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { Motion } from "@legendapp/motion"
import { Modal } from "../components/Modal"
import { animate, transition } from "../styles/motion"
const iconMarker = require("../../assets/pin_location_map_marker_placeholder_icon_146263.png")
import SERVER from "../Services"

export function Map() {
  const [capa, setCapa] = useState([])
  const [capaSelec, setCapaSelec] = useState({})
  const [render, setRender] = useState(false)

  const [show, setShow] = useState({
    showCapas: false,
    showInfo: false,
    showUbi: false
  })

  //* ESTADO PARA VALIDAR EL RENDER DE MARCADORES
  const [addMark, setAddMark] = useState(false)
  //* ESTADO EN EL CUAL SE GUARDA EL CONJUNTO DE COORDENADAS
  const [marker, setMarker] = useState([])
  //* VALIDACIÓN PARA INGRESAR NOMBRE DEL MARCADOR A AGREGAR
  const [marcador, setMarcador] = useState(false)

  const [value, setValue] = useState(0)
  const [valueCapa, setValueCapa] = useState(0)
  const [valueUbi, setValueUbi] = useState(0)
  const [valueMarker, setValueMarker] = useState(0)

  //* REGION INICIAL EN EL POLO CIENTÍFICO
  const region = {
    latitude: -26.0822,
    longitude: -58.2784,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

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
    if (render) {
      setRender(false)
    }

    setTimeout(() => {
      setRender(true)
      return capaSelec
    }, 100)
  }, [capaSelec])

  useEffect(() => {
    handleFindLayers()
  }, [])
  return (
    <View>
      <MapView
        style={map}
        initialRegion={region}
        onLongPress={(e) => {
          //* SETEO DE COORDENADAS EN CADA OBJ, PARA REGISTRAR MARCADORES
          setMarker([
            ...marker,
            {
              nombre: "Nuevo marcador",
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            },
          ]);
          //* CAMBIO DE ESTADO PARA INGRESAR NOMBRE DEL MARCADOR
          setMarcador(!marcador);
          if (valueMarker === 0) {
            setTimeout(() => setValueMarker(1), 1);
          } else {
            setValueMarker(0);
          }
        }}
        minZoomLevel={6}
        maxZoomLevel={14}
      >
        {
          //* VALIDACIÓN DE ESTADO PARA RENDERIZAR CAPAS */
        }
        {capaSelec.api !== undefined && render && (
          <MapView.UrlTile
            urlTemplate={capaSelec.api}
            zIndex={-1}
            style={{ opacity: 1 }}
          />
        )}
        <Marker
          icon={iconMarker}
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
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
                icon={iconMarker}
                coordinate={{
                  latitude: marker[0].latitude,
                  longitude: marker[0].longitude,
                }}
              >
                <Callout>
                  <View>
                    <Text>{marker[0].nombre}</Text>
                  </View>
                </Callout>
              </Marker>
            </View>
          )
        }
      </MapView>

      {
        // VALIDACIÓN DE ESTADO PARA INGRESAR NOMBRE DE MARCADOR
      }
      {marcador && (
        <View style={containerInfoCapa}>
          {/* <TextInput 
              onChangeText={(value) => {setMarker(marker[0].nombre: value)}}
              placeholder = 'Nombre del lugar'
              value = 
            /> */}
          <Motion.View
            style={{ marginVertical: 10, flexDirection: "row" }}
            animate={{
              x: valueMarker * 10,
              opacity: valueMarker ? 1 : 0.2,
              scale: valueMarker ? 1 : 0.5,
            }}
            transition={transition}
          >
            <TouchableOpacity style={button}>
              <Text
                onPress={() => {
                  //* SET DE ESTADO PARA OCULTAR FORM
                  setMarcador(!marcador);
                  //* SET DE ESTADO PARA MOSTRAR MARCADORES
                  setAddMark(!addMark);
                }}
              >
                Agregar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={button}>
              <Text onPress={() => setMarcador(!marcador)}>Cancelar</Text>
            </TouchableOpacity>
          </Motion.View>
        </View>
      )}

      {show?.showCapas && (
        <Motion.View
          style={{
            position: "absolute",
            top: "0%",
            alignSelf: "flex-start",
          }}
          animate={{
            x: value * 10,
            opacity: value ? 1 : 0.2,
            scale: value ? 1 : 0.5,
          }}
          transition={transition}
        >
          <TouchableOpacity onPress={() => setCapaSelec({})}>
            <Text style={button}>X</Text>
          </TouchableOpacity>
          {capa.map(({ titulo, api, simbologia }, index) => (
            <TouchableOpacity
              key={"capa-" + index}
              onPress={() => setCapaSelec({ titulo, api, simbologia })}
            >
              <Text style={button}>{titulo}</Text>
            </TouchableOpacity>
          ))}
        </Motion.View>
      )}

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
          <Modal header={`INFORMACIÓN DE LA CAPA SELECCIONADA`} />
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
          <Modal header={`UBICACIONES DEL USUARIO`} />
        </Motion.View>
      )}

      <View style={buttonContainer}>
        <TouchableOpacity
          style={addButton}
          onPress={() => {
            setShow({ ...show, showCapas: !show.showCapas });
            if (value === 0) {
              setTimeout(() => setValue(1), 1);
            } else {
              setValue(0);
            }
          }}
        >
          <MaterialCommunityIcons
            name="layers"
            style={addButtonText}
            size={26}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={addButton}
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
