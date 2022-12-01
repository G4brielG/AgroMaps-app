import * as React from 'react';
import { Text, View, Image } from 'react-native';
import ipf from '../imgs/Agromap.png';
import { image, home } from '../styles/styles';
import { Motion } from "@legendapp/motion";

export const Home = () => {
  return (
    <Motion.View
      style={home} 
    >
      <Image style={image} source={ipf} />
      <Text>Bienvenido a AgroMaps</Text>
      <Text>Aquí podrá consultar información geográfica sobre el suelo.</Text>
    </Motion.View>
  );
}