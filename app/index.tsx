
import BodyPage from "@/src/components/BodyPage";
import HeaderPage from "@/src/components/HeaderPage";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    <View style = {styles.container}>
      <HeaderPage></HeaderPage>
      <BodyPage></BodyPage>
      
    </View>
  );
} 

const styles = StyleSheet.create ({
  container:{
      flex:1,
      backgroundColor: "#fafafa",
      padding:10,

  },
  text:{
      color:"#",
      textAlign:"center",
  }
})


