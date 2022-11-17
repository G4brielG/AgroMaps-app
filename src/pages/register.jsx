import { StatusBar } from "expo-status-bar";
import { container, regtext, input, button, image } from "../styles/styles";
import React, { useState } from "react";
import ipf from "../imgs/IPF-logo.png";
import { Button, NativeBaseProvider } from "native-base";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
// import SelectDropdown from 'react-native-select-dropdown'
// import { useForm, Controller } from "react-hook-form";

export function Register({ navigation }) {

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const validacion = () => {
    if (form.usuario === undefined) {
      setErrors({ ...errors, usuario: "Campo obligatorio" })
      return false;
    } else if (form.contrasena === undefined) {
      setErrors({ ...errors, contrasena: "Campo obligatorio" })
      return false;
    } else if (form.confContrasena === undefined) {
      setErrors({ ...errors, confContrasena: "Campo obligatorio" })
      return false;
    } else if (form.correo === undefined) {
      setErrors({ ...errors, correo: "Campo obligatorio" })
      return false;
    } else if (form.telefono === undefined) {
      setErrors({ ...errors, telefono: "Campo obligatorio" })
      return false;
    }
    return true;
  }

  const onSubmit = () => {
    
    if (!validacion()){
      console.log("Fallo al validar")
    }else{
      console.log("Pasa")
      handleSubmitForm()
    };
  }

  const handleSubmitForm = async () => {
    const formData = {
      usuario: form.usuario,
      clave: form.contrasena,
      correo: form.correo,
      telefono: form.telefono,
      rol: "comun"
    };
    const url = `https://agromaps.herokuapp.com/usuarios`;
    const content = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    };
    const response = await fetch(url, content);
    const json = await response.json();
    console.log(json.message)
  };

  return (
    <NativeBaseProvider>
      <View style={container}>
        <Image style={image} source={ipf} />
        <View>
          <StatusBar style="auto" />
          <View style={input}>
            <TextInput
              style={regtext}
              name="usuario"
              placeholder="Usuario"
              placeholderTextColor="#a3a3a3"
              onChangeText={(value) => setForm({ ...form, usuario: value })}
            />
          </View>
          <View style={input}>
            <TextInput
              style={regtext}
              name="contrasena"
              placeholderTextColor="#a3a3a3"
              placeholder="Contraseña"
              onChangeText={(value) => setForm({ ...form, contrasena: value })}
            />
          </View>
          <View style={input}>
            <TextInput
              style={regtext}
              name="confContrasena"
              placeholderTextColor="#a3a3a3"
              placeholder="Confirmar Contraseña"
              onChangeText={(value) =>
                setForm({ ...form, confContrasena: value })
              }
            />
          </View>
          <View style={input}>
            <TextInput
              style={regtext}
              name="correo"
              placeholderTextColor="#a3a3a3"
              placeholder="Correo"
              onChangeText={(value) => setForm({ ...form, correo: value })}
            />
          </View>
          <View style={input}>
            <TextInput
              style={regtext}
              name="telefono"
              placeholderTextColor="#a3a3a3"
              placeholder="Telefono"
              onChangeText={(value) => setForm({ ...form, telefono: value })}
            />
          </View>

          <TouchableOpacity onPress={onSubmit}>
            <Text style={button}>Registrar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text>¿Ya tienes una cuenta? Inicia sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </NativeBaseProvider>
  );
}
