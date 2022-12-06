import { StyleSheet, StatusBar } from 'react-native';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import {ScaledSheet} from 'react-native-size-matters';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = ScaledSheet.create({
  //Pantalla inicio
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    top: 100,
    elevation: 8,
    backgroundColor: '#007bff',
    fontWeight: 'bold',
    fontFamily:'sans-serif',
    width: '300@msr'
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    top: 140,
    elevation: 8,
    backgroundColor: '#007bff',
    fontWeight: 'bold',
    fontFamily:'sans-serif',
    width: '300@msr'
  },
  button3: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: '#007bff',
    borderRadius: 15,
    top: 180,
    fontWeight: 'bold',
    fontFamily:'sans-serif',
    width: '300@msr'
  },
  text: {
    fontSize: '15@ms0.5',
    lineHeight: '15@s',
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    fontFamily:'sans-serif'
  },
  textDatosProfesor: {
    textAlign: "justify",
    fontFamily: 'sans-serif',
    fontSize: 17,

    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',

  },tittleDatosProfesor: {
    fontFamily: 'sans-serif',
    fontSize: '16@ms',
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },


  //Vista talleres
  containerVT: {
    flex: 1,
    backgroundColor: '#4054B2',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  item: {
    /*backgroundColor: '#0056b3',*/
    backgroundColor: '#17263f',
    padding: 10,
    borderRadius: 15,
    marginVertical: 8,
    marginHorizontal: 13,
    height: 410,
  },
  itemTittle: {
    backgroundColor: '#00a455',
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 10,
    start: 0,
    marginBottom: 23,
  },
  item2: {
    backgroundColor: '#00a455',
    paddingBottom: 19,
    paddingTop: 19,
    marginHorizontal: 105,
    top: -291,
    start: 105,
  },
  item3: {
    backgroundColor: '#fba81a',
    paddingBottom: 19,
    paddingTop: 19,
    marginHorizontal: 105,
    marginTop: 10,
    top: -290,
    start: 105,
  },
  item4: {
    backgroundColor: '#0f75bc',
    paddingBottom: 4,
    paddingTop: 19,
    borderBottomRightRadius: 15,
    marginHorizontal: 105,
    top: -292,
    start: 105,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    color: 'white',
    fontFamily:'sans-serif'
  },
  errTitle: {
    fontSize: '18@msr',
    fontWeight: "bold",
    textAlign: 'center',
    color: 'white',
    fontFamily:'sans-serif'
  },
  modalidadTalleres: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontFamily:'sans-serif',
    top: -5,
  },
  text2: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    textAlign: 'center',
    fontFamily:'sans-serif'
  },

  text3: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    textAlign: 'center',
    fontFamily:'sans-serif',
    top: -5,
  },
  texto: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'sans-serif',
  },
  texto2: {
    fontSize: 30,
    textAlign: 'justify',
    color: 'black',
    fontFamily: 'sans-serif',
  },

  buttonVT: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#0f75bc',
    marginTop: '3@msr',
    marginBottom: '3@msr',
    height: '40@msr',
  },

  //Vista Detalles taller
  contenedorImagen: {
    alignItems: 'center',
  },
  imagen: {
    alignItems: 'center',
    width: '350@msr',
    height: '210@msr',
    marginBottom: 15,
    borderRadius: 30,
    resizeMode: "contain",
    top: 10,
  },
  textSubsecciones: {
    fontSize: 20,
    lineHeight: 21,
    textAlign: 'justify',
    color: 'white',
    fontWeight: 'bold',
    fontFamily:'sans-serif',
    letterSpacing: 0.25,
  },

  textSubsecciones2: {
    fontSize: 25,
    lineHeight: 25,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontFamily:'sans-serif',
    letterSpacing: 0.25,
  },

  titleFechaTermino: {
    fontSize: 18,
    fontWeight:"bold",
    textAlign: 'center',
    fontFamily:'sans-serif',
    color: 'white',
  },


  itemVDT: {
    backgroundColor: '#0056b3',
    padding: 10,
    borderRadius: 5,
    marginVertical: 8,
    marginHorizontal: 1,
  },

  detalles1: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 15,
    marginVertical: 2,
    marginTop: 10,
    elevation: 8,
    height: '680@msr',

  },
  detalles2: {
    backgroundColor: '#17263f',
    padding: 10,
    borderRadius: 15,
    marginVertical: 2,
    marginTop: 10,
    elevation: 8,
  },
  datosprofesor: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 15,
    marginVertical: 2,
    marginTop: 10,
    elevation: 8,
  
  },
  subseccion: {
    padding: 5,
    borderRadius: 15,
    margin: 2,
  },
  buttonVDT: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 5,
    borderRadius: 15,
    backgroundColor: '#007bff',
  },
  correo: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  //Vista SIn Elementos
  itemVSE: {
    backgroundColor: '#4054B2',
    padding: 10,
    borderRadius: 15,
    marginVertical: 8,
    marginHorizontal: 13,
    height: 500,
  },
  buttonVSE: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 8,
    backgroundColor: '#007bff',
    top: 40,
    start: 35,
    width: 300,
  },

  //VIsta Error
  itemError: {
    top: 10,
    backgroundColor: '#4054B2',
    padding: 10,
    borderRadius: 15,
    marginVertical: 8,
    marginHorizontal: 13,
    height: '500@msr',

  },
  buttonError: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 8,
    backgroundColor: '#007bff',
    top: 50,


  },
  imagenVSE: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: '250@msr',
    height: '200@msr',
    marginBottom: 15,
    borderRadius: 30,
    resizeMode: "contain",
    top: 10,

  },
  hTitulos: {
    backgroundColor: '#3b8afd',
    start: 15,
    alignItems: 'center',
    width: 380,
    height: 55,
    marginBottom: 15,
    borderRadius: 15,
    resizeMode: "contain",
    top: 0,
  },

  hTituloPostulaciones: {
    backgroundColor: '#00a455',
    marginTop: 15,
    alignSelf: 'center',
    width: '370@msr',
    marginBottom: 15,
    borderRadius: 15,
    fontFamily:'sans-serif',
    textAlign: 'center',
  },
  inputCamposRut: {
    paddingLeft:10,
    margin: 12,
    borderWidth: 1,
    padding: 0,
    width:50,
    alignItems: 'center',
    backgroundColor:'white',
    borderColor:'gray',
    borderRadius:10,
    flex:1
  },
  row: {
    flex: 1,
    flexDirection: "row"
  },
  textRut: {
    top:20,
    color: 'white',
    fontFamily:'sans-serif',
  },
  buttonPostular: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 8,
    backgroundColor: '#007bff',
    fontWeight: 'bold',
    width: '300@msr'
  },
  inputNombreCompleto: {
    margin: 12,
    paddingLeft:10,
    borderWidth: 1,
    width:"90%",
    alignItems: 'center',
    backgroundColor:'white',
    borderColor:'gray',
    borderRadius:10,
    flex:1
  },
  inputNumeroContacto: {
    paddingLeft:10,
    margin: 12,
    borderWidth: 1,
    width:50,
    paddingLeft:10,
    alignItems: 'center',
    backgroundColor:'white',
    borderColor:'gray',
    borderRadius:10,
    flex:0.8
  },
  inputCorreo: {
    margin: 12,
    borderWidth: 1,
    height:120,
    padding:10,
    width:"90%",
    alignItems: 'center',
    backgroundColor:'white',
    borderColor:'gray',
    borderRadius:10,
    flex:1
  },
  hSubseccionLocalidad: {
    backgroundColor: '#00a455',
    alignItems: 'center',
    width: "100%",
    marginBottom: 15,
    borderRadius: 15,
    resizeMode: "contain",
  },
  inputPoblacion: {
    margin: 12,
    borderWidth: 1,
    width:"90%",
    paddingLeft:10,
    alignItems: 'center',
    backgroundColor:'white',
    borderColor:'gray',
    borderRadius:10,
    flex:0.8
  },
  inputNumero: {
    margin: 12,
    borderWidth: 1,
    width:120,
    paddingLeft:10,
    alignItems: 'center',
    backgroundColor:'white',
    borderColor:'gray',
    borderRadius:10,
    flex:0.8
  },
  misSolicitudesRut: {
    backgroundColor:'white',
    borderColor: "gray",
    width: "250@s",
    borderWidth: 1,
    padding: 8,
    fontSize: 18,
    marginBottom: 20,
  },
  containerMisSolicitudes: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginVertical: 8,
    marginHorizontal: 13,
    alignItems: 'center',
  },
  fondoMisSolicitudes: {
    flex: 1,
    // backgroundColor: '#4054B2',
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',

  },
  fondoMisSolicitudesItems: {
    flex: 1,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',

  },
  buttonMisSolicitudes: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#007bff',
    width: '140@msr',
  },
  itemMisSolicitudes: {
    /*backgroundColor: '#0056b3',*/
    backgroundColor: 'white',
    marginVertical: 20,
    height: '400@mvs',
  },

  itemInfoMisSolicitudes: {
    start: 5,
    width: '200@s', // = scale(100)
    height: '20@s', // = verticalScale(200)

  },
  itemTitleMisSolicitudes: {
    backgroundColor: '#007bff',
    alignItems: 'center',
    marginBottom: '15@msr',
  },
  infoMisSolicitudes: {
    fontSize: '15@ms',
    color: 'white',
    fontWeight:"bold",
    fontFamily: 'sans-serif',
    alignContent: 'flex-end',
    start: 10,
    
  },
  infoVDT: {
    fontSize: '13@msr',
    color: 'white',
    fontWeight:"bold",
    fontFamily: 'sans-serif',
    alignContent: 'flex-end',
    start: 10,
    
  },
  infoMisSolicitudes2: {
    fontSize: '15@ms',
    color: 'white',
    fontWeight:"bold",
    fontFamily: 'sans-serif',
    alignContent: 'flex-end',
    start: 10,
    
  },
  titleMisSolicitudes: {
    fontSize: '25@msr',
    color: 'white',
    fontWeight:'bold',
    fontFamily: 'sans-serif',
    start: '10@s',
  },
  logoImage: {
    height:'150@s',
    width: '150@s',
    alignSelf: 'center',
    marginTop:'5@s',
  },
  soliImagen: {
    marginTop: '25@msr',
    borderRadius: 30,
    height: '180@msr',
    width: '350@s',
  },
  containerMS: {
    marginTop: '3@msr',
    backgroundColor: 'green',
    borderRadius: 20,
    height: '100@msr',
    flexDirection:'column',
  },
  containerMSPG: {
    marginTop: '3@msr',
    backgroundColor: 'green',
    borderRadius: 20,
    height: '35@msr',
    flexDirection:'column',
  },
  containerMSPA: {
    marginTop: '3@msr',
    backgroundColor: '#a98307',
    borderRadius: 20,
    height: '35@msr',
    flexDirection:'column',
  },
  containerMSPN: {
    marginTop: '3@msr',
    backgroundColor: '#ff8000',
    borderRadius: 20,
    height: '35@msr',
    flexDirection:'column',
  },
  subContainerMS: {  
    margin: '5@msr',
    marginTop: '3@msr',
    height: '25@msr',
    flexDirection:'row'
  },

  subContainerVDT: {  
    margin: '5@msr',
    marginTop: '3@msr',
    height: '55@msr',
    flexDirection:'row'
  },
  subContainerVPS: {  
    margin: '5@msr',
    marginTop: '3@msr',
    height: '90@msr',
    flexDirection:'row'
  },
  subContainerVERR: {  
    margin: '5@msr',
    marginTop: '3@msr',
    height: '200@msr',
    flexDirection:'column'
  },  
  subContainerVDTP: {  
    margin: '5@msr',
    marginTop: '3@msr',
    height: '35@msr',
    flexDirection:'row'
  },
  subContainerVDT2: {  
    margin: '5@msr',
    marginTop: '3@msr',
    height: '55@msr',
    flexDirection:'column'
  },
  subContainerMS2: {
    alignSelf:'center'
  },
  
});

export { styles };