import react, { useState } from "react";
import { View,Text, StyleSheet, FlatList } from "react-native";
import SearchBar from "../componentes/SearchBar";
import axios from "axios";
import MiniaturaNoticia from "../componentes/MiniaturaNoticia";

const SearchScreen = () => {
    const [searchText, setSearchText] = useState("");
    const [articles,setArticles] = useState([])

    const searchNews = () =>{
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=ddf4933b833b401a896be7698102a35b',{
            params:{
                category: "technology",
                q: searchText
            }
        })
          .then( (response) => {
            // handle success
            console.log(response.data.articles);
            setArticles(response.data.articles);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
    }

    return(
        <View style = {styles.container}>
            <SearchBar searchText= {searchText} setSearchText={setSearchText} onSubmit = {searchNews}/> 
            <FlatList
                data = {articles}
                renderItem = {({item})=>
                    <MiniaturaNoticia
                        urlToImage = {item.urlToImage}
                        title = {item.title}
                        description = {item.description}
                        author = {item.author}
                        publishedAt = {item.publishedAt}
                        sourceName = {item.source.name}
                    />}
                keyExtractor = {(item) => item.title}
            />
        </View>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backGroundColor: "#fff"
    }
})