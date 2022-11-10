import { StatusBar } from "expo-status-bar";
import { container, regtext, input, button, image } from '../styles/styles'
import React, { useState } from "react";
import ipf from '../imgs/IPF-logo.png';
import { Pressable, Button, NativeBaseProvider } from "native-base"
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
// import SelectDropdown from 'react-native-select-dropdown'
import { useForm, Controller } from 'react-hook-form'

export function Register({ navigation }) {
  // const roles = ["Asesor", "Productor", "Otro"];
  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors, isValid },
  // } = useForm({ mode: "onBlur" });

  const validacion = () => {
    if (form.usuario === undefined) {
      setErrors({ ...errors, usuario: "Campo obligatorio" })
      return false
    } else if (form.password === undefined) {
      setErrors({ ...errors, clave: "Campo obligatorio" });
      return false
    } else if (form.confClave === undefined) {
      setErrors({ ...errors, confClave: "Campo obligatorio" })
      return false
    } else if (form.correo === undefined) {
      setErrors({ ...errors, correo: "Campo obligatorio" })
      return false
    } else if (form.telefono) {
      setErrors({ ...errors, telefono: "Campo obligatorio" })
      return false
    }
    return true
  }

  const onSubmit = (data) => {
    console.log(data);
    validacion() ? handleSubmitForm() : console.log("Fallo al validar");
  }

  const handleSubmitForm = async () => {
    const datos = {
      usuario: form.usuario,
      clave: form.password,
      confClave: form.confClave,
      correo: form.correo,
      telefono: form.telefono
    }
    const url = `http://192.168.216.159:4000`;
    const content = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    }
    const response = await fetch(url, content)
    const json = await response.json()
    setData(json)
  }


  return (
    <NativeBaseProvider>
      <View style={container}>
        <Image style={image} source={ipf} />
        <View>
          <StatusBar style="auto" />
          <View style={input}>
            <Controller
              control={control}
              name="usuario"
              render={({ field: { onChange, onBlur } }) => (
                <TextInput
                  style={regtext}
                  iconName=""
                  iconType="MaterialIcons"
                  placeholder="Usuario"
                  placeholderTextColor="#a3a3a3"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                />
              )}
            />
          </View>
          <View style={input}>
            <Controller
              control={control}
              name="clave"
              render={({ field: { onChange, onBlur } }) => (
                <TextInput
                  style={regtext}
                  iconName=""
                  iconType="MaterialIcons"
                  placeholderTextColor="#a3a3a3"
                  placeholder="Contraseña"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                />
              )}
            />
          </View>
          <View style={input}>
            <Controller
              control={control}
              name="confClave"
              render={({ field: { onChange, onBlur } }) => (
                <TextInput
                  style={regtext}
                  iconName=""
                  iconType="MaterialIcons"
                  placeholderTextColor="#a3a3a3"
                  placeholder="Confirmar Contraseña"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                />
              )}
            />
          </View>
          <View style={input}>
            <Controller
              control={control}
              name="correo"
              render={({ field: { onChange, onBlur } }) => (
                <TextInput
                  style={regtext}
                  iconName=""
                  iconType="MaterialIcons"
                  placeholderTextColor="#a3a3a3"
                  placeholder="Correo"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                />
              )}
            />
          </View>
          <View style={input}>
            <Controller
              control={control}
              name="telefono"
              render={({ field: { onChange, onBlur } }) => (
                <TextInput
                  style={regtext}
                  iconName=""
                  iconType="MaterialIcons"
                  placeholderTextColor="#a3a3a3"
                  placeholder="Telefono"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                />
              )}
            />
          </View>
          <TouchableOpacity onPress={onSubmit}>
            <Text style={button}>Registrar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text>¿Ya tienes una cuenta? Inicia sesión</Text>
            </Pressable>
          </TouchableOpacity>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

