import { WebView } from 'react-native-webview'

export function Map() {
  // const watercolor = 'http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'
  // const terrain = 'http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png'

  const myip = "192.168.163.200"

  const customHTML = `
    <iframe allowFullScreen style="border: none; margin-top: 20px;" height="100%" width="100%" src="http://${myip}:8082/mapstore/#/context/maps_prueba"></iframe>
  `
  return (
      <WebView
        originWhitelist={["*"]}
        source={{
          html: customHTML,
        }}
        scalesPageToFit={false}
      />
  );
}
