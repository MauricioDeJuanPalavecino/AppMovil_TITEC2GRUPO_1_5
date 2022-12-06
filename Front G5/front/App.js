import { StyleSheet} from 'react-native';
import axios from "axios";
import React, {useState, useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Entypo, FontAwesomeIcon,MaterialCommunityIcons} from '@expo/vector-icons';

import Inicio from './pantallas/Inicio';
import CalidadAire from './pantallas/CalidadAire';
import PantallaInicio from './componentes/PantallaInicio';
import Noticia from './componentes/Noticia';
import {VistaTalleres} from './componentes/VistaTalleres'
import { VistaDetallesTaller } from './componentes/VistaDetallesTaller';
import { VistaSinElementos } from './componentes/VistaSinElementos';
import { VistaError } from './componentes/VistaError';
import { VistaPDF } from './componentes/VistaPDF';
import { VistaPostulacion } from './componentes/VistaPostulacion';
import { VistaPostulacionConcretada } from './componentes/VistaPostulacionConcretada';
import {VistaSolicitudes} from './componentes/VistaSolicitudes'
import {VistaMisSolicitudes} from './componentes/VistaMisSolicitudes';

const StackTalleres = createNativeStackNavigator();
const StackNoticia = createNativeStackNavigator();
const StackCalidad = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function MenuTalleres() {
  return (
    <NavigationContainer independent="true">
      <StackTalleres.Navigator initialRouteName="Menú Talleres">
        <StackTalleres.Screen name="Menú Talleres" component={PantallaInicio} />
        <StackTalleres.Screen name="Talleres de la corporación" component={VistaTalleres} />
        <StackTalleres.Screen name="Detalles" component={VistaDetallesTaller} />
        <StackTalleres.Screen name="VistaError" component={VistaError} />
        <StackTalleres.Screen name="VistaSinElementos" component={VistaSinElementos} />
        <StackTalleres.Screen name="Preguntas frecuentes" component={VistaPDF} />
        <StackTalleres.Screen name="Postulaciones" component={VistaPostulacion} />
        <StackTalleres.Screen name="Postulación concretada" component={VistaPostulacionConcretada} />
        <StackTalleres.Screen name="Ver mis solicitudes" component={VistaSolicitudes} />
        <StackTalleres.Screen name="Mis solicitudes" component={VistaMisSolicitudes} />
      </StackTalleres.Navigator>
    </NavigationContainer>
  );
}



function MenuNoticia() {
  return (
    <NavigationContainer independent="true">
      <StackNoticia.Navigator initialRouteName="Portal Noticias">
      <StackTalleres.Screen name="Portal Noticias" component={Inicio} />
      <StackTalleres.Screen name="Noticia" component={Noticia} />
      </StackNoticia.Navigator>
    </NavigationContainer>
  );
}
function MenuCalidad() {
  return (
    <NavigationContainer independent="true">
      <StackCalidad.Navigator initialRouteName="Calidad del Aire">
        <StackCalidad.Screen name="Calidad de Aire" component={CalidadAire} />
      </StackCalidad.Navigator>
    </NavigationContainer>
  );
}


const url= 'http://192.168.101.5:4444/api/noticias';

export default function App() {

  const [setArticles] = useState([]);
    const getNews = () => {
        // Request a la API
        axios.get(url,{responseType:'json'}).then(response => {
            // handle success
            setArticles(response.data);
        }).catch(error => {
            // handle error
            console.log(error);
        }).then(function () {
            // always executed
        });
        

    }

    useEffect(() => {
        getNews();
    }, []);

  return (
      <NavigationContainer styles = {styles.container}>
          <Tab.Navigator initialRouteName = "Inicio" screenOptions = {{
            tabBarActiveTintColor: "red",
            headerShown: false
            }}>
            <Tab.Screen name = "Noticias" component={MenuNoticia} options={{
              tabBarIcon: () => <MaterialCommunityIcons name = "newspaper-variant-multiple-outline" size = {24} color = "black"/>  
            }}/>
            <Tab.Screen name = "Inicio" component={MenuTalleres} options ={{
              tabBarIcon: () => <Entypo name = "home" size = {24} color = "black"/>
            }}/>
            <Tab.Screen name = "Calidad de Aire" component={MenuCalidad} options={{
              tabBarIcon: () => <MaterialCommunityIcons name = "weather-cloudy-alert" size = {24} color = "black"/>  
            }}/>
          </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
