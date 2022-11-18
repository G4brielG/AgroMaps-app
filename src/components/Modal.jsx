import { containerBox, containerInfoCapa } from "../styles/styles"
import { View, Text } from "react-native"

export const Modal = ({ header, body, footer,children }) => {
  return (
    <View style={containerBox}>
      <View style={containerInfoCapa}>
        <Text>{header}</Text>
        <View>{children}</View>
        <View>{footer}</View>
      </View>
    </View>
  )
}
