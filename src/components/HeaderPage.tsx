import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HeaderPage = ()=> {


    return (
        <SafeAreaView style = {styles.wrapper}>
            <Text style = {styles.text}>
                Header 
            </Text>
        </SafeAreaView>
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