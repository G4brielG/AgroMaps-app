import { StatusBar } from "expo-status-bar"
import { container, text, input, button, image } from '../styles/styles'
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native"
import { Pressable, Button, NativeBaseProvider } from "native-base"
import { useFetchCallBack } from "../hooks/fetch";
import { useSetForm } from "../hooks"
import ipf from '../imgs/IPF-logo.png'
import { useForm, Controller } from 'react-hook-form'
import { useState } from "react";


export function Login({ navigation }) {

  const onSubmit = (data) => console.log(data);


  const { control, handleSubmit, formState: { errors, isValid } } = useForm({ mode: "onBlur" });
  const [form, setForm] = useSetForm({});
  const fetchCallBack = useFetchCallBack()


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