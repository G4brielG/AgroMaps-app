import { NativeBaseProvider } from 'native-base'
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import { image, input, text, button, container2, home, nameProfile } from "../styles/styles";
import ipf from '../imgs/Agromaps-capas.png';
import { useState } from 'react';

const Capas = ({navigation}) => {

  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({});


  
  const validacion = () => {
    if (form.titulo === undefined || "") {
      console.log("Capas, linea 18")
      setErrors({...errors, Error: "Asegurese de no dejar campos vacios"})
      return false
    }else{
      setErrors({...errors, Error: " "})
      return true
    }
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
    alertForm(respuesta)
  };
  return (
    <NativeBaseProvider>
     
      <View style={home}>
      
        <View style={{ width: '65%', height: '30%', alignItems: 'center', marginVertical: 30}}>
          <Image style={image} source={ipf} />
        </View>
        <View style={container2}>
          <Text style={nameProfile}>Agregar nueva capa</Text>
      {"Error" in errors && <Text style={{color:"red", fontFamily: "monospace"}}>{errors.Error}</Text>}
        
        <View style={input}>
          <TextInput
            style={text}
            name="tituloCapa"
            placeholderTextColor="#a3a3a3"
            placeholder="Titulo"
            onChangeText={(value) => setForm({ ...form, titulo: value })}
          />
        </View>


        <View style={input}>
          <TextInput
            style={text}
            name="apiCapa"
            placeholderTextColor="#a3a3a3"
            placeholder="Enlace"
            onChangeText={(value) => setForm({ ...form, api: value })}
          />
        </View>
        <View style={input}>
          <TextInput
            style={text}
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
      </View>
    </NativeBaseProvider>
  )
}

export default Capas