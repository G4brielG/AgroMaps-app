import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { container, text, input, button, image } from '../styles/styles'
import ipf from '../imgs/IPF-logo.png';
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { Pressable, NativeBaseProvider } from "native-base";
 
export function Login({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <NativeBaseProvider>
      <View>
        <StatusBar style="auto" />

        <View style={container}>
          <Image style={image} source={ipf} />
          
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
            <Pressable onPress={() => navigation.navigate("Home")}>
              <Text style={button}>Iniciar sesión</Text>
            </Pressable>
          </TouchableOpacity>
        </View>
      </View>
    </NativeBaseProvider>
  );
}

