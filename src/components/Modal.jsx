import { containerBox, containerInfoCapa } from "../styles/styles"
import { View, Text } from "react-native"

export const Modal = ({ header, body, footer }) => {
  return (
    <View style={containerInfoCapa}>
      <Text>{header}</Text>
      <View>{body}</View>
      <View>{footer}</View>
    </View>
  )
}
