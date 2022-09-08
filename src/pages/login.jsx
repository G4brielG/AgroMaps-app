//import { Text } from '@ui-kitten/components';
import { StatusBar } from "expo-status-bar";
import { container, text, input, button } from '../styles/styles'
import React, { useState } from "react";
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
 
export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View>
      <StatusBar style="auto" />

      <View style={container}>
        <View style={input}>
          <TextInput
            style={text}
            placeholder="Usuario"
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
  
        <TouchableOpacity>
          <Text>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>¿Aún no tienes cuenta? Regístrate</Text>
        </TouchableOpacity>
  
        <TouchableOpacity >
          <Text style={button}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

