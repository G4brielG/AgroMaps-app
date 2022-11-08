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
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log(data);
  }

  const handleSubmitForm = async () => {
    const url = `${Server}/login`;
    const content = {
      method: "POST",
      body: JSON.stringify(data),
    };
    await fetchCallBack(url, content)
  };


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
          <TouchableOpacity>
            <Pressable onPress={() => handleSubmitForm}></Pressable>
            <Button
              style={button}
              title="Submit"
              onPress={handleSubmit(onSubmit)}
            >
              Registrarme
            </Button>
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

