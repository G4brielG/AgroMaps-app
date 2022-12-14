import { View, StyleSheet, Text } from "react-native"

export const Symbology = ({color, categoria}) => {
  return (
    <View>
      <View style={styles.square} />
      <Text>{categoria}</Text>
    </View>
    );
  };
  
  const styles = StyleSheet.create({
    square: {
      width: 25,
      height: 25,
      backgroundColor: 'red',
    },
  });