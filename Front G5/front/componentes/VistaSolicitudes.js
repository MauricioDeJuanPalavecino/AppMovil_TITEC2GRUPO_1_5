import * as React from 'react';
import { useState, useEffect } from "react";
import { FlatList, Alert, Text, SafeAreaView, ScrollView, Pressable, View, Image, TextInput, ImageBackground } from 'react-native';
import { VistaSinElementos } from '../componentes/VistaSinElementos';
import { VistaError } from '../componentes/VistaError';
import { Suspense } from "react";
import { FlatlistHeader } from "react-native-flatlist-header";
import { getTalleres } from '../services/APIRequester';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { styles } from '../css/styles';
import { ErrorBoundary } from './ErrorBoundaries';



function VistaSolicitudes({ navigation }) {

  const [rut, setRut] = useState('');

  function rutFormat(rut){
    rut = rut.split('-').join('');
    rut = rut.split('.').join('');

    if(rut.length < 7 && rut.match(/[^\dkK]+/g)){
      Alert.alert("Ingrese un RUT válido", "Su RUT debe contener solo números y K");
      return
    }

    // GUION
    if(rut.length > 1){
      let format_rut = rut.split('');
      format_rut.splice(format_rut.length-1, 0, '-');
      rut = format_rut.join('');
    }

    // DOTS 20477174k
    if(rut.length > 5){
      let format_rut = rut.split('');
      format_rut.splice(format_rut.length-5, 0, '.');
      rut = format_rut.join('');
    }
    if(rut.length > 9){
      let format_rut = rut.split('');
      format_rut.splice(format_rut.length-9, 0, '.');
      rut = format_rut.join('');
    }
    setRut(rut);
  }
  function rutCheck(rut){
    if (rut == ''){
      Alert.alert("Ingrese un RUT válido", "Su RUT debe seguir el siguiente formato: 11.111.111-1");
      return
    }
    if (rut.length > 12){
      Alert.alert("Ingrese un RUT válido", "Su RUT debe seguir el siguiente formato: 11.111.111-1");
      return
    }
    navigation.navigate('Mis solicitudes', { itemId: rut })
  }

  return (
    <SafeAreaView style={styles.fondoMisSolicitudes}>
      <ScrollView>
      <View style={styles.containerMisSolicitudes}>
          <Image
            style ={styles.logoImage} 
            source={require('../images/logo_corporacion.png')}
          />
          <Text style={{fontSize: Math.round(moderateScale(15))}}> {"\n"}Ingrese su RUT con puntos y guión ej: xx.xxx.xxx-x</Text>
          <Text></Text>
          <TextInput
            style={styles.misSolicitudesRut}
            placeholder={"RUT"}
            value={rut}
            onChangeText={rut => setRut(rut)}
            maxLength={12}
            />
          <Pressable style={styles.buttonMisSolicitudes} onPress={() => rutCheck(rut)}>
                        <Text style={styles.text}>Ver Mis Solicitudes</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}



export { VistaSolicitudes };