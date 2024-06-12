import React from "react";
import { Text, View, StyleSheet,Image, Alert } from "react-native";

const BodyPage = ()=> {


    return (
        <View style = {styles.wrapper}>
            <Text style = {styles.text}>
                Welcome Page text here
            </Text>
            <Image style = {styles.imageStyle} source={ require('./../../assets/images/react-logo.png')} ></Image>
            <Text style ={styles.clickMe}
                onPress={()=>{
                    console.log(' button clicked')
                    
                }}
                > Click Me</Text>
        </View>
    )
}

 // Styles for the App 
const styles = StyleSheet.create ({
    wrapper:{
        backgroundColor: "#fff",
        padding:10,

    },
    text:{
        color:"#000",
        textAlign:"center",
        paddingBottom:10,
    },
    clickMe:{
        padding:10,
        paddingTop:10,
        textAlign:"center",
        backgroundColor:"#000",
        color:"#fff",

    },
    imageStyle:{
        alignContent:'center',
        textAlign: 'center',
    }
})

export default BodyPage;