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
import { View, TouchableOpacity, Text, Image, TextInput,  } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { Motion } from "@legendapp/motion"
import { Modal } from "../components/Modal"
import { transition } from "../styles/motion"
import { SERVER, IP } from "../Services"
import Markers from "../components/Markers";
import useLocation from "../hooks/useLocation";
const iconMarker = require("../imgs/iconblue-location-agromaps.png")

export function Map() {
  const [capa, setCapa] = useState([])
  const [capaSelec, setCapaSelec] = useState({})
  const [render, setRender] = useState(false)

  const [show, setShow] = useState({
    showCapas: false,
    showInfo: false,
    showUbi: false
  })

  const [miliMarker, setMiliMarker] = useState({
    nombre: '',
    latitude: 0,
    longitude: 0
  })

  //* ESTADO EN EL CUAL SE GUARDA EL CONJUNTO DE COORDENADAS
  const [marker, setMarker] = useState([])
  //* VALIDACIÓN PARA INGRESAR NOMBRE DEL MARCADOR A AGREGAR
  const [marcador, setMarcador] = useState(false)

  const [value, setValue] = useState(0)
  const [valueCapa, setValueCapa] = useState(0)
  const [valueUbi, setValueUbi] = useState(0)
  const [valueMarker, setValueMarker] = useState(0)

  const { position } = useLocation()

  const handleFindLayers = async () => {
    const url = `${IP}:4000/layers`
    const content = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
    const response = await fetch(url, content)
    const json = await response.json()
    response.ok && setCapa(json)
  }

  // const handleSubmitMarker = async () => {
  //   const url = `${SERVER}/ubicaciones/${usuario._id}`
  //   const content = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: { ubicacion: miliMarker }
  //   }
  //   const response = await fetch(url, content)
  //   const json = await response.json()
  //   response.ok && setCapa(json)
  // }

  useEffect(() => {
    if (render) {
      setRender(false)
    }
    setTimeout(() => {
      setRender(true)
      console.log(capaSelec.local)
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
        region={
          position
        }
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
          setTimeout(() => setValueMarker(1), 1)
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
        <View style={containerInfoCapa}>
          <TextInput
            onChangeText={(value) =>
              setMiliMarker((prev) => ({ ...prev, nombre: value }))
            }
            placeholder="Nombre del lugar"
          />
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
                  setMarker([...marker, miliMarker]);
                  console.log(miliMarker);
                  // handleSubmitMarker()
                  setMiliMarker({});
                  //* SET DE ESTADO PARA OCULTAR FORM
                  setMarcador(!marcador);
                  setValueMarker(0);
                }}
              >
                Agregar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={button}>
              <Text
                onPress={() => {
                  setMarcador(!marcador);
                  setValueMarker(0);
                }}
              >
                Cancelar
              </Text>
            </TouchableOpacity>
          </Motion.View>
        </View>
      )}

      {show?.showCapas && (
        <Motion.View
          style={containerBox}
          animate={{
            x: value * 10,
            opacity: value ? 1 : 0.2,
            scale: value ? 1 : 0.5,
          }}
          transition={transition}
        >
          <Modal>
            {capa.map(({ titulo, api, simbologia, local }, index) => (
              <TouchableOpacity
                key={"capa-" + index}
                onPress={() => capaSelec?.titulo ? setCapaSelec({}) : setCapaSelec({ titulo, api, simbologia, local })}
              >
                <Text style={button}>{titulo}</Text>
              </TouchableOpacity>
            ))}
          </Modal>
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
          <Modal header={`INFORMACIÓN DE LA CAPA SELECCIONADA`}>
            <Image
              source={{ uri: capaSelec.simbologia }}
              style={{ width: 300, height: 370, resizeMode: 'contain' }}
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
          <Modal header={`UBICACIONES DEL USUARIO`}>
            {
              marker.map((element, index) => (
                <Text key={index}>{element.nombre}</Text>
              ))
            }
          </Modal>
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
