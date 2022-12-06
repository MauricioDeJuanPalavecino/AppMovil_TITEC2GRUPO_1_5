import { View, TextInput, Text, StyleSheet } from "react-native";
import react from "react";

const SearchBar = (props) => {
    return(
        <View>
            <TextInput
                placeholder="Buscar"
                style={styles.input}
                value={props.searchText  }
                onChangeText={(text) => props.setSearchText(text)}
                onSubmitEditing={props.onSubmit}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container:{
        margin: 10
    },
    input:{
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        color: "#000",
        borderWidth: 1
    }
})