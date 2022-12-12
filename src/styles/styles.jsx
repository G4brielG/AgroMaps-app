// import { usePropsWithComponentTheme } from 'native-base';
// import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const body = {

}

const container = {
  justifyContent: 'center',
  alignItems: 'center',
  // borderWidth: 1,
  flex: 1,
  height: '100%',
  backgroundColor: '#142c4c'
}

const input = {
  backgroundColor: 'white',
  borderRadius: 10,
  width: 300,
  height: 45,
  margin: 5,
}
const alertaF = {
  width: 200,
  backgroundColor: "#28b296",
  padding: 10,
  color: "rgba(203, 0, 0, 1)",
}
const text = {
  height: 50,
  padding: 10,
  // flex: 1
};

const capaText = {
  textAlign: "center",
  height: 50,
  padding: 10,
}
const titless = {
  textAlign: "center",
  height: 60,
  padding: 10,
  fontSize: 35,
  color: "#ffffff",
}

const regtext = {
  textAlign: "center",
  height: 50,
  padding: 10,
}

const button = {
  textAlign: 'center',
  textSize: '26px',
  margin: 10,
  padding: 10,
  borderRadius: 10,
  alignItems: 'center',
  color: 'white',
  backgroundColor: '#28b296',
}

const buttonModal = {
  marginBottom: 10,
  textSize: '26px',
  padding: 10,
  borderRadius: 10,
  alignItems: 'center',
  backgroundColor: '#B5071E',
}

const buttonSecondary = {
  marginBottom: 10,
  textSize: '26px',
  padding: 10,
  borderRadius: 10,
  alignItems: 'center',
  backgroundColor: '#60687E',
}

const buttonCapaSelect = {
  textAlign: 'center',
  textSize: '26px',
  margin: 10,
  padding: 10,
  borderRadius: 10,
  alignItems: 'center',
  color: 'white',
  backgroundColor: "#142c4c",
}

const containerProfile = {
  padding: "4%",
  elevation: 0,
  borderRadius: 0,
  height: "100%",
  backgroundColor: "#142c4c",
  bottom: "0%",
  width: "100%",
  // left: "0.1%"
}
const button2 = {
  margin:"1%",
  width:"30%",
  borderRadius:10,
}

const button3 = {
  margin:"1%",
  width:"auto",
  borderRadius:10,
}

const containerMap = {
  flex: 2,
}

const map = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
}

const nav = {
  height: 70,
  alignItems: 'flex-end'
  //position: 'absolute'
}

const image = {
  width: '50%',
  height: '40%',
  resizeMode: 'contain',
}

const home = {
  //flex: 1,
  
  alignItems: 'center',
  width: '100%',
}

const addButton = {
  alignItems: 'center',
  backgroundColor: '#1CC48D',
  justifyContent: 'center',
  width: 50,
  height: 50,
  borderRadius: 25,
  margin: 3
}

const addButtonDisabled = {
  alignItems: 'center',
  backgroundColor: '#666666',
  justifyContent: 'center',
  width: 50,
  height: 50,
  borderRadius: 25,
  margin: 3
}

const addButtonText = {
  color: 'white',
  fontSize: 30,
}

const buttonContainer = {
  top: 30,
  right: 20,
  position: 'absolute'
}

const containerBox = {
  position: "absolute",
  top: "15%",
  alignContent: "center",
  width: "100%",
  height: "100%"
}

const containerInfoCapa = {
  position: "absolute",
  alignSelf: "center",
  alignItems: "center",
  alignContent: "center",
  justifyContent: "center",
  height: "auto",
  width: "auto",
  backgroundColor: "white",
  borderRadius: 15,
  margin: "5%"
}

const containerUbi = {
  position: "absolute",
  alignSelf: "center",
  padding: 30,
  alignContent: "center",
  height: 300,
  width: 300,
  backgroundColor: "white",
  borderRadius: 15,
  margin: 20
}

const containerFormUbi = {
  position: "absolute",
  alignSelf: "center",
  alignItems: "center",
  alignContent: "center",
  height: 200,
  width: 350,
  backgroundColor: "white",
  borderRadius: 15,
  margin: 20
}

const containerSalir = {
  position: "absolute",
  alignSelf: "center",
  alignItems: "center",
  alignContent: "center",
  justifyContent: "center",
  height: 200,
  width: 350,
  backgroundColor: "white",
  borderRadius: 15
}

const headerStylee = {
  marginBottom: 20,
  fontSize: 17
}

const containerMarkers = {
  position: "absolute",
  alignSelf: "center",
  alignItems: "center",
  alignContent: "center",
  justifyContent: "center",
  height: 400,
  width: 350,
  backgroundColor: "white",
  borderRadius: 15
}

const fontF = {
  fontFamily: ""
}

const container2 = {
  // justifyContent: 'center',
  // alignItems: 'center',
  // // borderWidth: 10,
  // height: '60%',
  // width: "80%",
  // backgroundColor: 'white',
  // borderRadius: 5,
}
const perfil = {
  justifyContent: 'center',
  height: '100%',
  backgroundColor: '#aaaaaa',
  width: "100%",

}

const linearGradient = {
  justifyContent: 'center',
  alignItems: 'center',
  // borderWidth: 1,
  //flex: 1,
  height: '15%',
  // backgroundColor: '#142c4c'
}

const titleProfile = {
  // textAlign: "center",
  height: 60,
  paddingTop: 20,
  fontSize: 20,
  color: "#ffffff",
}

const nameProfile = {
  textAlign: "center",
  height: 60,
  padding: 0,
  fontSize: 35,
  color: "#ffffff",
}

const infoProfile = {
  // textAlign: "center",
  // height: 25,
  padding: 5,
  fontSize: 15,
  color: "#ffffff",
}

const picProfile = {
  justifyContent: 'center',
  alignItems: 'center',
  // borderWidth: 1,
  //flex: 1,
  height: '15%',
}

export {
  container,
  input,
  text,
  button,
  buttonModal,
  buttonSecondary,
  buttonCapaSelect,
  map,
  containerMap,
  image,
  home,
  regtext,
  addButton,
  addButtonDisabled,
  addButtonText,
  buttonContainer,
  containerBox,
  containerInfoCapa,
  containerFormUbi,
  containerUbi,
  containerMarkers,
  containerSalir,
  headerStylee,
  alertaF,
  titless,
  capaText,
  fontF,
  container2,
  containerProfile,
  perfil,
  linearGradient,
  infoProfile,
  titleProfile,
  picProfile,
  nameProfile,
  button2,
  button3,
}