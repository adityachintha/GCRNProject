
import BodyPage from "@/src/components/BodyPage";
import HeaderPage from "@/src/components/HeaderPage";
import { Text, View, StyleSheet, StatusBar } from "react-native";

export default function Index() {
  return (
    
    <View style = {styles.container}>
      <StatusBar hidden={true}/>
      <HeaderPage></HeaderPage>
      <BodyPage></BodyPage>
      
    </View>
  );
} 

const styles = StyleSheet.create ({
  container:{
      flex:1,
      backgroundColor: "#46288b",
      padding:10,

  },
  text:{
      color:"#000",
      textAlign:"center",
  }
})


