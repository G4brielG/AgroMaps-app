import * as React from 'react';
import MapView, { UrlTile } from 'react-native-maps';
import { Text, View } from 'react-native';
import { container, text, input, button, map, containerMap, contNav } from '../styles/styles'

export function Map() {

  const region = {
    latitude: -26.08093365742047, 
    longitude: -58.27585556621793,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  const watercolor = 'http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'
  const dark = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'

  return (
    <View  style={containerMap}>
      <View>
        <MapView style={map} 
        initialRegion={ region }>
          <UrlTile
            style={{opacity:0.5}}
            urlTemplate={'http://127.0.0.1:8080/geoserver/servicioMapaArgentina/wms?'}
            maximumZ={19}
            flipY={false}
          />
        </MapView>
      </View>
    </View>
  );
}
