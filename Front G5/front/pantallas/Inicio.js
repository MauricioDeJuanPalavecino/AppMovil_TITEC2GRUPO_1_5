import axios from "axios";
import React, {useState, useEffect} from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import MiniaturaNoticia from "../componentes/MiniaturaNoticia";

const url= 'http://10.100.6.6:4444/api/noticias';


const Inicio = () =>{
    const [articulos,setArticles] = useState([]);
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



    return(
        <SafeAreaView style = {styles.container}>
            <FlatList
                data = {articulos}
                renderItem = {({item}) => 
                    <MiniaturaNoticia
                        urlToImage = {item.imagen}
                        title = {item.post_title}
                        description = {item.post_content}
                        author = {item.display_name}
                        publishedAt = {item.post_date}
                        url = {item.url}
                    />}
                keyExtractor = {(item) => item.post_title}
            />
        </SafeAreaView>
    )
}

export default Inicio;

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});
