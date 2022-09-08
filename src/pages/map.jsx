import * as React from 'react';
import MapView from 'react-native-maps';
import { Text, View } from 'react-native';
import { container, text, input, button, map, containerMap, contNav } from '../styles/styles'
import { BotBar } from '../components/bottombar'

export function Map() {

  const region = {
    latitude: -26.08093365742047, 
    longitude: -58.27585556621793,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  return (
    <View  style={containerMap}>
      <View>
        <MapView style={map} 
        initialRegion={ region }
        />
      </View>
      <View>
        <BotBar></BotBar>
      </View>
    </View>
  );
}
