import React from "react";
import { Text, View, StyleSheet } from "react-native";

const HeaderPage = ()=> {


    return (
        <View style = {styles.wrapper}>
            <Text style = {styles.text}>
                Header 
            </Text>
        </View>
    )
}

 // Styles for the App 
const styles = StyleSheet.create ({
    wrapper:{
        backgroundColor: "#000000",
        padding:10,

    },
    text:{
        color:"#ffffff",
        textAlign:"center",
    }
})

export default HeaderPage;