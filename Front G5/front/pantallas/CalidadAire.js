import React from "react";
import { Button, StyleSheet, Text, Image, Pressable, FlatList, ScrollView} from "react-native";
import * as WebBrowser from 'expo-web-browser'
import axios from "axios";

const url = 'http://10.100.6.6:4444/api/clima';

const CalidadAire = () =>{

    const goToSource = () => {
        axios.get(url).then(response => {
            console.log(response.data);
            WebBrowser.openBrowserAsync(response.data.url)
            .catch(err => {
                console.log(err);
            });
        }).catch(err =>{
            console.log(err);
        }).then(function () {

        });
    }


    return(
        <ScrollView>

            {/* Vistra de Alerta*/}
            <ScrollView contentContainerStyle  = {styles.container}>
                <Image source={require('./semaforoAlto.png')}
                style = {styles.image}
                />
                <Text style = {styles.description}>  
                    {'\u2B24'} No realizar ejercicio aeróbico {"\n"}(Trote, Bicileta, Natación, etc).{"\n"}{"\n"} 
                    {'\u2B24'} Realizar ejercicio en lugares cerrados con mascarilla.{"\n"}(Pesas, Funcional, Crossfit)
                </Text>
            </ScrollView>
            
            {/* Vistra de Moderado*/}
            <ScrollView contentContainerStyle  = {styles.container}>
                {/* Vistra de Moderado*/}
                <Image source={require('./semaforoMedio.png')}
                    style = {styles.image}
                    />
                <Text style = {styles.description}>
                    {'\u2B24'} Realizar ejercicio aeróbico con máscarilla. {"\n"}(Trote, Bicicleta, Natación, etc).{"\n"}{"\n"} 
                    {'\u2B24'} Realizar ejercicio en lugares cerrados sin mascarilla.{"\n"}(Pesas, Funcional, Crossfit).    
                </Text>
            </ScrollView>


            {/* Vistra de Bueno*/}
            <ScrollView contentContainerStyle  = {styles.container}>
                <Image source={require('./semaforoBajo.png')}
                    style = {styles.image}
                />
                <Text style = {styles.description}>  
                    {'\u2B24'} Realizar ejercicio aeróbico libre {"\n"} (Trote, Bicileta, Natación, etc).{"\n"}{"\n"}
                    {'\u2B24'} Realizar ejercicio en lugares cerrados o al aire libre sin mascarilla.{"\n"}(Pesas, Funcional, Crossfit).
                </Text>
            </ScrollView>

            {/*Boton*/}
            <Button
                onPress={goToSource}
                title="Ir a sitio Seremi"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </ScrollView>
    )
}

export default CalidadAire;

const styles = StyleSheet.create({
    container:{
        width: "95%",
        alignSelf: "center",
        borderRadius: 20,
        shadowColor: "#52006A",
        elevation: 20,
        backgroundColor: "#fff",
        marginTop: 20,
        marginBottom: 20,
        flexDirection:"row",
        resizeMode:"contain",
        alignItems:"center"
    },
    image: {
        height: 200,
        width: 200,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignSelf: "center"
    },
    description:{
        fontSize: 15,
        fontWeight:"400",
        marginTop:12,
        flexShrink: 1
    },
});