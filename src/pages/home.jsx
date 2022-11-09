import { Text, View, Image } from 'react-native';
import { image, home } from '../styles/styles'
import ipf from '../imgs/IPF-logo.png'

export const Home = () => {
  return (
    <View style={home}>
      <Image style={image} source={ipf} />
      <Text>Bienvenido a AgroMaps</Text>
      <Text>Aquí podrá consultar información geográfica sobre el suelo.</Text>
    </View>
  );
}