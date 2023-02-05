import { StatusBar } from "expo-status-bar";
import { input, button, image, alertaF, home, text } from "../styles/styles";
import React, { useState } from "react";
import ipf from "../imgs/Agromaps-blanco.png";
import { NativeBaseProvider } from "native-base";
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import SERVER, { IP } from "../Services"

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
      return false;
    } else if (form.usuario.length < 6 || form.usuario.length > 12) {
      return false;
    } else if (form.contrasena === undefined) {
      return false;
    } else if (form.contrasena.length < 6 || form.contrasena.length > 20) {
      return false;
    } else if (form.confContrasena === undefined) {
      return false;
    } else if (form.confContrasena != form.contrasena) {
      return false;
    } else if (form.correo === undefined) {
      return false;
    } else if (!validarEmail(form.correo)) {
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
      <View style={home}>
        <View style={{ width: '73%', height: '40%', justifyContent: 'center', marginTop: '20%'}}>
          <Image style={image} source={ipf} />
        </View>
        <View>
          {"usuario" in errors && <Text>{errors.usuario}</Text>}
          <View style={input}>
            <TextInput
              style={text}
              name="usuario"
              placeholder="Usuario"
              placeholderTextColor="#a3a3a3"
              onChangeText={(value) => setForm({ ...form, usuario: value })}
            />
          </View>
          {"contrasena" in errors && <Text>{errors.contrasena}</Text>}
          <View style={input}>
            <TextInput
              style={text}
              name="contrasena"
              placeholderTextColor="#a3a3a3"
              placeholder="Contraseña"
              onChangeText={(value) => setForm({ ...form, contrasena: value })}
            />
          </View>
          {"confContrasena" in errors && <Text>{errors.confContrasena}</Text>}
          <View style={input}>
            <TextInput
              style={text}
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
              style={text}
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
              style={text}
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
            <Text style={{color: 'white', alignSelf: 'center'}}>¿Ya tienes una cuenta? Inicia sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </NativeBaseProvider>
  );
}
