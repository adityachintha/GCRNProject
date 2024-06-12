import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BodyPage = ()=> {


    return (
        <View style = {styles.wrapper}>
            <Text style = {styles.text}>
                Welcome Page text here
            </Text>
        </View>
    )
}

 // Styles for the App 
const styles = StyleSheet.create ({
    wrapper:{
        backgroundColor: "#fafafa",
        padding:10,

    },
    text:{
        color:"#",
        textAlign:"center",
    }
})

export default BodyPage;