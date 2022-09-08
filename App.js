import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Map } from './src/pages/map'
import { Nav } from './src/components/bottombar.jsx'

export default function App() {
  return (
    <View>
      <Map></Map>
    </View>
  );
};
