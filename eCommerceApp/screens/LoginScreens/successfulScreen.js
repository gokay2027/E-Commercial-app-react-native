import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AntIcon from "react-native-vector-icons/AntDesign";
import { colors } from "react-native-elements";


const SuccessScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{ alignSelf: "center", flex: 1,justifyContent:"space-between" }}>
            <View style={{ paddingTop: 100, alignItems: "center", paddingHorizontal: 10 }}>
                <AntIcon name="checkcircleo" size={100} color={"green"}></AntIcon>
                <Text style={{ paddingTop: 40, fontSize: 30, fontWeight: "bold", color: "black" }}>Successfull!</Text>
                <Text style={{ paddingTop: 40, fontSize: 18, textAlign: "center" }}>You have registered in our app successfully! now can start working in. </Text>
            </View>
            <TouchableOpacity onPress={()=>{
                navigation.navigate("signInScreen")
            }}>
                <View style={{height:50,backgroundColor:"black",justifyContent:"center",borderRadius:50,marginBottom:40}}>
                    <Text style={{color:"white",alignSelf:"center",fontWeight:"bold",fontSize:20}}>Start Shopping</Text>
                </View>
            </TouchableOpacity>


        </SafeAreaView>
    );
}

export default SuccessScreen;