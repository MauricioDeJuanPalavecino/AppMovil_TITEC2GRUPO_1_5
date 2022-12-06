import React from "react";
import { View, StyleSheet, Text, Image, ScrollView} from "react-native";

const Noticia = (props) =>{
    const uri = props.route.params.imagen;
    console.log(uri);

    if (uri == undefined){
        return(
            <ScrollView style = {styles.container} >
            <Image source={require('./sinFoto.png')}
                style = {styles.image}
            />

            <View style = {{padding: 10}}>

                {/*Titulo*/}
                <Text style =  {styles.title}>
                    {props.route.params.titulo} 
                </Text>

                {/*Descripcion*/}
                <Text style = {styles.description}>
                    {props.route.params.descripcion}
                </Text>

                <View style = {styles.data}>
                    <Text style = {styles.heading}>Autor: <Text style = {styles.author}> {props.route.params.autor}</Text></Text>
                </View>
            </View>

        </ScrollView>
        )
    }
    return(
        <ScrollView style = {styles.container} >
            <Image source={{
                uri: props.route.params.imagen
            }} 
            style = {styles.image}
            />

            <View style = {{padding: 10}}>

                {/*Titulo*/}
                <Text style =  {styles.title}>
                    {props.route.params.titulo} 
                </Text>

                {/*Descripcion*/}
                <Text style = {styles.description}>
                    {props.route.params.descripcion}
                </Text>

                <View style = {styles.data}>
                    <Text style = {styles.heading}>Autor: <Text style = {styles.author}> {props.route.params.autor}</Text></Text>
                </View>
            </View>

        </ScrollView>
    )
}

export default Noticia;

const styles = StyleSheet.create({
    container:{
        width: "90%",
        alignSelf: "center",
        borderRadius: 20,
        shadowColor: "#52006A",
        elevation: 20,
        backgroundColor: "#fff",
        marginTop: 50,
        marginBottom: 50,
        flex: 1,
    },
    image: {
        height: 200,
        width: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    title:{
        fontSize: 18,
        fontWeight: "600",
        marginTop: 10
    },
    description:{
        fontSize: 16,
        fontWeight:"400",
        marginTop:12
    },
    data:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    author:{
        fontWeight:"bold",
        fontSize: 15
    },
    date:{
        fontWeight: "bold",
        color: "#e63946",
        fontSize: 15
    },
    source:{
        color: "#e63946",
        fontWeight: "bold",
        fontSize: 18
    }

});