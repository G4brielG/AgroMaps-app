import { StatusBar } from "expo-status-bar"
import { container, text, input, button, image, Label } from "../styles/styles"
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native"
import { Pressable, NativeBaseProvider } from "native-base"
import { useState, useEffect } from "react";
import ipf from '../imgs/IPF-logo.png'

export function Login({navigation}) {
  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})

  const validate = () => {
    if (form.usuario === undefined) {
      setErrors({ ...errors, usuario: "*Campo obligatorio" })
      return false
    } else if (form.usuario.length < 3) {
      setErrors({ ...errors, usuario: "short dick men" })
      return false
    }
    return true
  }

  const onSubmit = () => {
    validate() ? console.log("Submitted") : console.log("Validation Failed")
  }

  // const handleSubmitForm = async () => {
  //   const url = `${Server}/login`
  //   const content = {
  //     method: "POST",
  //     body: JSON.stringify(form),
  //   }
  //   await fetch(url, content)
  // }

  useEffect(() =>{
    console.log(form)
  }, [form])
  return (
    <NativeBaseProvider>
      <View style={container}>
        <Image style={image} source={ipf} />
        <View>
          <StatusBar style="auto" />
          <View style={input}>
            <TextInput
              name="usuario"
              style={text}
              placeholder="Usuario"
              placeholderTextColor="#a3a3a3"
              onChangeText={(value) => setForm({ ...form, usuario: value })}
            />
          </View>
          {
            'usuario' in errors && <Text>{errors.usuario}</Text>
          }

          <View style={input}>
            <TextInput
              name="password"
              style={text}
              placeholder="Contraseña"
              placeholderTextColor="#a3a3a3"
              secureTextEntry={false}
              onChangeText={(value) => setForm({ ...form, password: value })}
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
            <Pressable onPress={onSubmit}>
              <Text style={button}>Iniciar sesión</Text>
            </Pressable>
          </TouchableOpacity>
        </View>
      </View>
    </NativeBaseProvider>
  )
}