import { StatusBar } from "expo-status-bar";
import { container, text, input, button, image } from '../styles/styles'
import React, { useState } from "react";
import ipf from '../imgs/IPF-logo.png';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
 
export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View>
      <StatusBar style="auto" />

      <View style={container}>

        <Image
          style={image}
          source={ipf}
        />

        <View style={input}>
          <TextInput
            style={text}
            placeholder="Correo electrónico"
            placeholderTextColor="#a3a3a3"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
  
        <View style={input}>
          <TextInput
            style={text}
            placeholder="Contraseña"
            placeholderTextColor="#a3a3a3"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <View style={input}>
          <TextInput
            style={text}
            placeholder="Repite contraseña"
            placeholderTextColor="#a3a3a3"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
  
        <TouchableOpacity>
          <Text>¿Ya tienes una cuenta? Inicia sesión</Text>
        </TouchableOpacity>
  
        <TouchableOpacity >
          <Text style={button}>Regístrame</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

