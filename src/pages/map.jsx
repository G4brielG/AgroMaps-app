import * as React from 'react';
import MapView, { UrlTile } from 'react-native-maps';
import { map } from '../styles/styles';

export function Map() {
  // const watercolor = 'http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'
  // const terrain = 'http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png'

  // const myip = "192.168.216.230"

  // const customHTML = `
  //   <iframe allowFullScreen style="border: none; margin-top: 20px;" height="100%" width="100%" src="http://${myip}:8082/mapstore/#/context/Provincias"></iframe>
  // `
  // return (
  //     <WebView
  //       originWhitelist={["*"]}
  //       source={{
  //         html: customHTML,
  //       }}
  //       scalesPageToFit={false}
  //     />
  // );

  const ign = 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png'

  const region = {
    latitude: -26.0816268,
    longitude: -58.2758522,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  
  return (
    // <MapView
    //   initialRegion={region}
    //   style={map}>
    //     <UrlTile
    //     urlTemplate={ign}
    //     maximumZ={19}
    //     flipY={false}/>
    // </Mapview>

  <MapView
  initialRegion={region}
  style={map}
  >
    <UrlTile
      urlTemplate={ign}
    />
  </MapView>
  );
}
