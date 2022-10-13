import { useEffect, useState } from "react"
import { StatusBar } from "expo-status-bar"
import { container, text, input, button, image } from '../styles/styles'
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native"
import { Pressable, Button, NativeBaseProvider } from "native-base"
import ipf from '../imgs/IPF-logo.png'

export function Login({navigation}) {
  const [form, setForm] = useState({})

  // {
  //   usuario: "pruebbaa",       //gabrielg
  //   clave: "laweafomeql",
  // }

  const handleSubmitForm = async () => {
    try {
      const url = "http://192.168.216.110:4000/login"
      const settings = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
      const response = await fetch(url, settings);
      const json = await response.json()
      console.log(json)
      return json
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    console.log(form)
  }, [form])
  return (
    <NativeBaseProvider>
      <View>
        <StatusBar style="auto" />

        <View style={container}>
          <Image style={image} source={ipf} />

          <View style={input}>
            <TextInput
              style={text}
              placeholder="Usuario"
              placeholderTextColor="#a3a3a3"
              onChangeText={(value) =>
                setForm({
                  ...form,
                  usuario: value,
                })
              }
            />
          </View>

          <View style={input}>
            <TextInput
              style={text}
              placeholder="Contraseña"
              placeholderTextColor="#a3a3a3"
              secureTextEntry={false}
              onChangeText={(value) =>
                setForm({
                  ...form,
                  clave: value,
                })
              }
            />
          </View>

          <TouchableOpacity>
            <Pressable onPress={handleSubmitForm}>
              <Text style={button}>Iniciar sesión</Text>
            </Pressable>
          </TouchableOpacity>

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

        </View>
      </View>
    </NativeBaseProvider>
  )
}

