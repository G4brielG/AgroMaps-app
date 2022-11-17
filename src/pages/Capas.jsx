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
        <Text style={titless}>Agregar Capa</Text>
        <View style={input}>
          <TextInput
            style={regtext}
            name="tituloCapa"
            placeholderTextColor="#a3a3a3"
            placeholder="Titulo"
          />
        </View>
        <View style={input}>
          <TextInput
            style={regtext}
            name="apiCapa"
            placeholderTextColor="#a3a3a3"
            placeholder="Enlace"
          />
        </View>
        <View style={input}>
          <TextInput
            style={regtext}
            name="simbologiaCapa"
            placeholderTextColor="#a3a3a3"
            placeholder="Simbologia"
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