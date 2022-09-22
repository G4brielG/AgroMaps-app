import * as React from 'react';
import MapView, { UrlTile } from 'react-native-maps';
import { Text, View } from 'react-native';
import { container, text, input, button, map, containerMap, contNav } from '../styles/styles'
import { WebView } from 'react-native-webview';

export function Map() {

  const region = {
    latitude: -26.08093365742047, 
    longitude: -58.27585556621793,
    latitudeDelta: 0.08,
    longitudeDelta: 0.03,
  }

  // const watercolor = 'http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'
  // const dark = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
  // const si = 'http://192.168.216.63:8080/geoserver/servicioMapaArgentina/wms'
  // const terrain = 'http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png'
 
  
  // const customHTML = `
  //   <iframe allowFullScreen style="border: none;" height="500" width="600" src="http://192.168.216.63:8082/mapstore/#/context/Provincias"></iframe>
  // `;
  
  return (
    <View  style={containerMap}>
        {/* <MapView style={map} 
        initialRegion={ region }>
          <UrlTile
            style={{opacity:1}}
            urlTemplate={si}
            maximumZ={19}
            flipY={false}
          />
        </MapView> */}
        <WebView 
        originWhitelist={['*']}
        source={{html: `<iframe allowFullScreen style="border: none;" height="100%" width="100%" src="http://192.168.216.63:8082/mapstore/#/context/Provincias"></iframe>`}} />
    </View>
  );
}
