import { StatusBar } from "expo-status-bar";
import { container, regtext, input, button, image, alertaF } from "../styles/styles";
import React, { useState } from "react";
import ipf from "../imgs/IPF-logo.png";
import { NativeBaseProvider } from "native-base";
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import SERVER from "../Services"
// import SelectDropdown from 'react-native-select-dropdown'
// import { useForm, Controller } from "react-hook-form";

export function Register({ navigation }) {

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const validarEmail = (mail) => {
    if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(mail)) {
      return true;
    } else {
      return false;
    }
  }

  const validacion = () => {
    if (form.usuario === undefined) {
      setErrors({ ...errors, usuario: "Este campo es obligatorio" })
      return false;
    } else if (form.usuario.length < 6 || form.usuario.length > 12) {
      setErrors({ ...errors, usuario: "El usuario debe contener entre 6 y 12 caracteres" })
      return false;
    } else if (form.contrasena === undefined) {
      setErrors({ ...errors, contrasena: "Este campo es obligatorio" })
      return false;
    } else if (form.contrasena.length < 6 || form.contrasena.length > 20) {
      setErrors({ ...errors, contrasena: "La contraseña debe contener entre 6 y 20 caracteres" })
      return false;
    } else if (form.confContrasena === undefined) {
      setErrors({ ...errors, confContrasena: "Este campo es obligatorio" })
      return false;
    } else if (form.confContrasena != form.contrasena) {
      setErrors({ ...errors, confContrasena: "Las contraseñas no coinciden" })
      return false;
    } else if (form.correo === undefined) {
      setErrors({ ...errors, correo: "Este campo es obligatorio" })
      return false;
    } else if (!validarEmail(form.correo)) {
      setErrors({ ...errors, correo: "La direccion de correo no es una direccion valida" })
      return false;
    } else {
      return true;
    }
  }

  const onSubmit = () => {
    validacion() && handleSubmitForm()
  }
  const handleSubmitForm = async () => {
    const formData = {
      usuario: form.usuario,
      clave: form.contrasena,
      correo: form.correo,
      telefono: form.telefono,
      rol: "comun"
    };
    const url = `${SERVER}/usuarios`;
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
  const alertForm = () => {
    showAlert();
  }
  const showAlert = () => {
    Alert.alert(
      "Registro exitoso",
      "Usuario creado correctamente",
      [
        {
          text: "Confirmar",
          onPress: () => navigation.navigate("Login"),
        },
      ],
    );
  }
  return (

    <NativeBaseProvider>
      <View style={container}>
        <Image style={image} source={ipf} />
        <View>
          {"usuario" in errors && <Text>{errors.usuario}</Text>}
          <View style={input}>
            <TextInput
              style={regtext}
              name="usuario"
              placeholder="Usuario"
              placeholderTextColor="#a3a3a3"
              onChangeText={(value) => setForm({ ...form, usuario: value })}
            />
          </View>
          {"contrasena" in errors && <Text>{errors.contrasena}</Text>}
          <View style={input}>
            <TextInput
              style={regtext}
              name="contrasena"
              placeholderTextColor="#a3a3a3"
              placeholder="Contraseña"
              onChangeText={(value) => setForm({ ...form, contrasena: value })}
            />
          </View>
          {"confContrasena" in errors && <Text>{errors.confContrasena}</Text>}
          <View style={input}>
            <TextInput
              style={regtext}
              name="confContrasena"
              placeholderTextColor="#a3a3a3"
              placeholder="Confirmar Contraseña"
              onChangeText={(value) => setForm({ ...form, confContrasena: value })
              }
            />
          </View>
          {"correo" in errors && <Text>{errors.correo}</Text>}
          <View style={input}>
            <TextInput
              style={regtext}
              name="correo"
              placeholderTextColor="#a3a3a3"
              placeholder="Correo"
              onChangeText={(value) => setForm({ ...form, correo: value })}
            />
          </View>
          {"telefono" in errors && <Text>{errors.telefono}</Text>}
          <View style={input}>
            <TextInput
              keyboardType="numeric"
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
