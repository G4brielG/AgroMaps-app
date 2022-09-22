import React from "react";
import ReactNative, { View, Text } from "react-native";
import {Home} from "./src/pages/Home.jsx";
import { BotBar } from "./src/components/bottombar.jsx";
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <>
      <StatusBar />
      <BotBar></BotBar>
    </>
  )
}