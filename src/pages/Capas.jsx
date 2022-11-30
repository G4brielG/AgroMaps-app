import { NativeBaseProvider } from 'native-base'
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import { container, image, input, capaText, titless, button } from "../styles/styles";
// import ipf from '../imgs/IPF-logo.png'
import { StatusBar } from "expo-status-bar";
import { useState } from 'react';

const Capas = ({navigation}) => {

  const [form, setForm] = useState({})

  const validacion = () => {
    if (form.api === undefined) {
      console.log("Api vacia")
      return false
    }
    if (form.simbologia === undefined) {
      console.log("Simbologia vacia")
      return false
    }
    if (form.titulo === undefined) {
      console.log("Titulo vacio")
      return false
    }
    return true
  }

  const onSubmit = () => {
    validacion() && handleSubmitForm()
  }
  const alertForm = () => {
    showAlert();
  }
  const showAlert = () => {
    Alert.alert(
      "Subida exitosa",
      "Capa subida exitosamente",
      [
        {
          text: "Confirmar",
          onPress: () => navigation.navigate("Mapa"),
        },
      ],
    );
  }
  const handleSubmitForm = async () => {
    const formData = {
      titulo: form.titulo,
      api: form.api,
      simbologia: form.simbologia,

    };
    const url = `${SERVER}/layers`;
    const content = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    };
    const response = await fetch(url, content);
    const json = await response.json();
    const respuesta = await json.message;
    console.log(respuesta)
    alertForm(respuesta)
  };
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <View style={container}>
        <Text style={titless}>Agregar Capa</Text>
        <View style={input}>
          <TextInput
            style={capaText}
            name="tituloCapa"
            placeholderTextColor="#a3a3a3"
            placeholder="Titulo"
            onChangeText={(value) => setForm({ ...form, titulo: value })}
          />
        </View>
        <View style={input}>
          <TextInput
            style={capaText}
            name="apiCapa"
            placeholderTextColor="#a3a3a3"
            placeholder="Enlace"
            onChangeText={(value) => setForm({ ...form, api: value })}
          />
        </View>
        <View style={input}>
          <TextInput
            style={capaText}
            name="simbologiaCapa"
            placeholderTextColor="#a3a3a3"
            placeholder="Simbologia"
            onChangeText={(value) => setForm({ ...form, simbologia: value })}
          />
        </View>
        <TouchableOpacity onPress={onSubmit}>
          <Text style={button}>Subir capa</Text>
        </TouchableOpacity>
      </View>
    </NativeBaseProvider>
  )
}

export default Capas