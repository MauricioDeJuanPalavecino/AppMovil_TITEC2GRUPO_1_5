import moment from "moment/moment";
import { View, StyleSheet, Text, Image, Pressable} from "react-native";
import { useNavigation} from "@react-navigation/native";


const MiniaturaNoticia = (props) =>{

    const navigation = useNavigation();
    const imagen = props.urlToImage;
    
    if (imagen == undefined){
        return(
            <Pressable style = {styles.container} onPress = {() => {navigation.navigate("Noticia",{autor: props.author, titulo: props.title, descripcion: props.description, imagen:props.urlToImage})}}>
                
                <Image source={require('./sinFoto.png')}
                style = {styles.image}
                />
    
                <View style = {{padding: 10}}>
    
                    {/*Titulo*/}
                    <Text style =  {styles.title}>
                        {props.title} 
                    </Text>
    
                    {/*Descripcion*/}
                    <Text style = {styles.description} numberOfLines={3}>
                        {props.description}
                    </Text>
    
                    <View style = {styles.data}>
                        <Text style = {styles.heading}>por: <Text style = {styles.author}> {props.author}</Text></Text>
                        <Text style = {styles.date}> {moment(props.publishedAt).format("MMM Do YYYY ")}</Text>
                    </View>
                </View>
            </Pressable>
        )
    }
    return(
        <Pressable style = {styles.container} onPress = {() => {navigation.navigate("Noticia",{autor: props.author, titulo: props.title, descripcion: props.description, imagen:props.urlToImage})}}> 
            <Image source={
                {uri:props.urlToImage}
            }
            style = {styles.image}
            />
    
            <View style = {{padding: 10}}>
             {/*Titulo*/}
                <Text style =  {styles.title}>
                    {props.title} 
                </Text>
    
                {/*Descripcion*/}
                <Text style = {styles.description} numberOfLines={3}>
                    {props.description}
                </Text>
    
                    <View style = {styles.data}>
                        <Text style = {styles.heading}>por: <Text style = {styles.author}> {props.author}</Text></Text>
                        <Text style = {styles.date}> {moment(props.publishedAt).format("MMM Do YYYY ")}</Text>
                    </View>
                </View>
            </Pressable>
    )

}

export default MiniaturaNoticia;

const styles = StyleSheet.create({
    container:{
        width: "90%",
        alignSelf: "center",
        borderRadius: 20,
        shadowColor: "#52006A",
        elevation: 20,
        backgroundColor: "#fff",
        marginTop: 50
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
    heading:{

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