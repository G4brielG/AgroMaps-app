import { Marker, Callout } from 'react-native-maps'
import { View, Text } from 'react-native'
import iconMarker from "../../assets/pin_location_map_marker_placeholder_icon_146263.png"

const Markers = ({ data }) => {
  const { latitude, longitude, nombre } = data
  return (
    <View>
      <Marker
        icon={iconMarker}
        coordinate={{
          latitude,
          longitude
        }}
      >
        <Callout>
          <View>
            <Text>{nombre}</Text>
          </View>
        </Callout>
      </Marker>
    </View>
  );
}

export default Markers