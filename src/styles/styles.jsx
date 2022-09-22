import { Dimensions } from 'react-native';

const container= {
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 1,
  //flex: 1,
  height: '100%',
  backgroundColor: '#75ffaa'
 }
 
const input= {
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  borderRadius: 30,
  width: "70%",
  height: 45,
  marginBottom: 20,
}
 
const text= {
  textAlign: "center",
  height: 50,
  flex: 1,
  padding: 10,
  //marginLeft: 20,
}

const button= {
  textAlign: 'center',
  textSize: '15px',
  margin: 30,
  padding: 10,
  borderRadius: 20,
  alignItems: 'center',
  color: 'white',
  backgroundColor: '#00963a'
}

const containerMap = {
  flex: 2,
  
}

const map= {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
}

const nav = {
  height: 70,
  alignItems: 'flex-end'
  //position: 'absolute'
}

const image = {
  width: 200,
  height: 200
}

const home = {
  flex: 1,
  alignItems: 'center',
}

export {
  container,
  input,
  text,
  button,
  map,
  containerMap,
  image,
  home
}