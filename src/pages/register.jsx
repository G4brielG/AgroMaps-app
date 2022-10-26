import { StatusBar } from "expo-status-bar";
import { container, text, input, button, image } from '../styles/styles'
import React, { useState } from "react";
import ipf from '../imgs/IPF-logo.png';
import { Pressable, Button, NativeBaseProvider } from "native-base"
import { useForm, Controller } from 'react-hook-form'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

export function Register() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const { control, handleSubmit, formState: { errors, isValid } } = useForm({ mode: "onBlur" });
  const [form, setForm] = useSetForm({});
  const fetchCallBack = useFetchCallBack()
  const onSubmit = (data) => console.log(data);

  const handleSubmitForm = async () => {
    const url = `${Server}/login`
    const content = {
      method: "POST",
      body: JSON.stringify(data),
    }
  }

  return (
    <NativeBaseProvider>
      <View style={container}>
        <Image style={image} source={ipf} />
        <View>
          <StatusBar style="auto" />
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value, onBlur } }) => (
              <TextInput
                iconName="person"
                iconType="MaterialIcons"
                placeholder="Enter your name here"
                value={value}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
              />
            )}
          />
          <Controller
            control={control}
            name="sexo"
            render={({ field: { onChange, value, onBlur } }) => (
              <TextInput
                iconName="sexo"
                iconType="MaterialIcons"
                placeholder="queri sexo"
                value={value}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
              />
            )}
          />
          <Button title="Submit" onPress={handleSubmit(onSubmit)} />

          <View style={input}>
            <TextInput
              style={text}
              placeholder="Usuario"
              placeholderTextColor="#a3a3a3"
              value={form.usuario || ""}
              onChangeText={setForm}
            />
          </View>

          <View style={input}>
            <TextInput
              style={text}
              placeholder="Contraseña"
              placeholderTextColor="#a3a3a3"
              secureTextEntry={false}
              value={form.password || ""}
              onChangeText={setForm}
            />
          </View>

          <TouchableOpacity>
            <Pressable onPress={() => navigation.navigate("Home")}>
              <Text>¿Olvidaste tu contraseña?</Text>
            </Pressable>
          </TouchableOpacity>

          <TouchableOpacity>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text>¿Ya tienes una cuenta? Inicia sesión</Text>
            </Pressable>
          </TouchableOpacity>

          <TouchableOpacity >
            <Pressable onPress={() => handleSubmitForm}></Pressable>
            <Text style={button}>Regístrame</Text>
          </TouchableOpacity>
        </View>
      </View>
    </NativeBaseProvider>
  )
};






