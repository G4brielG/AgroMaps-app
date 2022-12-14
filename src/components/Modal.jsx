import { containerBox } from "../styles/styles"
import { View } from "react-native"

export const Modal = ({ children, estilo  }) => {
  return (
    <View style={containerBox}>
      <View style={estilo}>
        <View>{children}</View>
      </View>
    </View>
  )
}
