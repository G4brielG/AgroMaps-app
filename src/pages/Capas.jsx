import { NativeBaseProvider } from 'native-base'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { container, image, input, regtext, titless, button } from "../styles/styles";
import ipf from '../imgs/IPF-logo.png'
import { StatusBar } from "expo-status-bar";

const Capas = () => {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <View style={container}>
        <Image style={image} source={ipf}></Image>
        <Text style={titless}>Agregar Capa</Text>
        <View style={input}>
          <TextInput
            style={regtext}
            name="tituloCapa"
            placeholderTextColor="#a3a3a3"
            placeholder="Titulo de la capa"
          />
        </View>
        <View style={input}>
          <TextInput
            style={regtext}
            name="apiCapa"
            placeholderTextColor="#a3a3a3"
            placeholder="Enlace de la capa"
          />
        </View>
        <View style={input}>
          <TextInput
            style={regtext}
            name="simbologiaCapa"
            placeholderTextColor="#a3a3a3"
            placeholder="Simbologia de la capa"
          />
        </View>
        <TouchableOpacity>
          <Text style={button}>Subir capa</Text>
        </TouchableOpacity>
      </View>
    </NativeBaseProvider>
  )
}

export default Capas