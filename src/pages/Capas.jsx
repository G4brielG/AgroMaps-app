import { View, Text } from 'react-native'

const Capas = () => {
  return (
    <NativeBaseProvider>
      <View style={container}>
        <Image style={image} source={ipf} />
        <View>
          <StatusBar style="auto" />
          <View style={input}></View>
        </View>
      </View>
    </NativeBaseProvider>
  )
}

export default Capas