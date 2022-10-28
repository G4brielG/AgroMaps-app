import { StatusBar } from "expo-status-bar"
import { container, text, input, button, image } from '../styles/styles'
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native"
import { Pressable, NativeBaseProvider } from "native-base"
import { useState } from "react";
import ipf from '../imgs/IPF-logo.png'

export function Login({navigation}) {
  const [form, setForm] = useState({})

  const handleSubmitForm = async () => {
    const url = `${Server}/login`
    const content = {
      method: "POST",
      body: JSON.stringify(data),
    }
    await fetchCallBack(url, content)
  }
  return (
    <NativeBaseProvider>
      <View style={container}>
        <Image style={image} source={ipf} />
        <View>
          <StatusBar style="auto" />
          <View style={input}>
            <TextInput
              style={text}
              placeholder="Usuario"
              placeholderTextColor="#a3a3a3"
              value={form.usuario}
              onChangeText={setForm}
            />
          </View>

          <View style={input}>
            <TextInput
              style={text}
              placeholder="Contraseña"
              placeholderTextColor="#a3a3a3"
              secureTextEntry={false}
              value={form.password}
              onChangeText={setForm}
            />
          </View>

          <TouchableOpacity>
            <Pressable onPress={() => navigation.navigate("Home")}>
              <Text>¿Olvidaste tu contraseña?</Text>
            </Pressable>
          </TouchableOpacity>

          <TouchableOpacity>
            <Pressable onPress={() => navigation.navigate("Register")}>
              <Text>¿Aún no tienes cuenta? Regístrate</Text>
            </Pressable>
          </TouchableOpacity>

          <TouchableOpacity>
            <Pressable onPress={() => handleSubmitForm}>
              <Text style={button}>Iniciar sesión</Text>
            </Pressable>
          </TouchableOpacity>
        </View>
      </View>
    </NativeBaseProvider>
  );
}