import * as React from 'react';
import MapView, { UrlTile } from 'react-native-maps';
import { Text, View } from 'react-native';
import { container, text, input, button, map, containerMap, contNav } from '../styles/styles'

export function Map() {

  const region = {
    latitude: -26.08093365742047, 
    longitude: -58.27585556621793,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  }

  const watercolor = 'http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'
  const dark = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
  const si = 'http://192.168.216.63:8080/geoserver/servicioMapaArgentina/wms?service=WMS&version=1.1.0&request=GetMap&layers=servicioMapaArgentina%3Aprovincia&bbox=-73.99999999999994%2C-90.00000002899998%2C-24.999999999999943%2C-21.780856762999974&width=551&height=768&srs=EPSG%3A4326&styles=&format=image%2Fsvg%20xml'
  const terrain = 'http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png'
  
  return (
    <View  style={containerMap}>
      <View>
        <MapView style={map} 
        initialRegion={ region }>
          <UrlTile
            style={{opacity:0.7}}
            urlTemplate={terrain}
            maximumZ={19}
            flipY={false}
          />
        </MapView>
      </View>
    </View>
  );
}
