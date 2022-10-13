import { StatusBar } from "expo-status-bar"
import { container, text, input, button, image } from '../styles/styles'
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native"
import { Pressable, NativeBaseProvider } from "native-base"
import { useFetchCallBack } from "../hooks/fetch";
import { useSetForm } from "../hooks"
import Server from "../services/server"
import ipf from '../imgs/IPF-logo.png'
// import { SessionContext } from "../contexts/SessionProvider"

export function Login({navigation}) {
  const [form, setForm] = useSetForm({});
  // const login = useContext(SessionContext)[1]
  const fetchCallBack = useFetchCallBack()

  const handleSubmitForm = async () => {
    const url = `${Server}/login`
    const content = {
      method: "POST",
      body: JSON.stringify(form),
    }

    await fetchCallBack(url, content)
  }

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
              value={form.usuario || ""}
              onChangeText={setForm}
            />
          </View>

          <View style={input}>
            <TextInput
              style={text}
              placeholder="Contraseña"
              placeholderTextColor="#a3a3a3"
              secureTextEntry={ver}
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

