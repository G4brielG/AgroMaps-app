import { containerBox, containerInfoCapa } from '../styles/styles';
import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { Motion } from "@legendapp/motion"

export const ContainerInfo = () => {
    return (
        
        <View
        style={containerInfoCapa}
        >
            <Text>Aquí se muestra la información de la capa</Text>
        </View>
    )
}