import * as React from 'react';
import { Text, View, Image } from 'react-native';
import ipf from '../imgs/IPF-logo.png'
import {image, home} from '../styles/styles'

export const Home = () => {
  return (
    <View style={home}>
      <Image
        style={image}
        source={ipf}
      />
      <Text>Bienvenido a AgroMaps</Text>
      <Text>Aquí podrá consultar información geográfica sobre el suelo.</Text>
    </View>
  );
}