import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    TextInput,
    CheckBox,
    ScrollView,
    Alert,
    BackHandler,

} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AntIcon from "react-native-vector-icons/AntDesign";
import Divider from 'react-native-divider';
import firestore from '@react-native-firebase/firestore';
import { firebase } from "@react-native-firebase/auth";

//CART SCREEN ICIN CART YENI BİR CART.JS FILE AÇIP CART ARRAYI EXPORT ET GLOBAL DEĞİŞKEN OLSUN
//SONRA BUNU SAYFALAR ARASINDA KULLANABİLİRSİN :)))) HADİ YİNE İYİSİN KRALL GÖKAYYYYY BABAAAĞĞĞ <3 <3 <3 <3 <3

const dataArray = [];



const InputArea = ({ fieldName }) => {
    return (
        <View style={{ paddingBottom: 10 }}>
            <Text style={{ fontWeight: "bold", color: "black", fontSize: 15, }}>
                {fieldName}
            </Text>
            <View style={styles.inputStyle}>
                <TextInput style={{ flex: 1 }} secureTextEntry={false}></TextInput>
            </View>
        </View>
    )
}


const PasswordInputArea = ({ fieldName, obsecure, onPressFunc }) => {
    return (
        <View style={{ paddingBottom: 10 }}>
            <Text style={{ fontWeight: "bold", color: "black", fontSize: 15, }}>
                {fieldName}
            </Text>
            <View style={styles.inputStyle}>
                <TextInput style={{ flex: 1 }} secureTextEntry={obsecure}></TextInput>
                <TouchableOpacity onPress={() => {
                    onPressFunc();
                }}>
                    <AntIcon style={{ alignSelf: "center" }} name="eye" color="black" size={20} />
                </TouchableOpacity>

            </View>
        </View>
    )
}




const SignInScreen = ({ navigation }) => {

    const [obSecure, setOnSecure] = useState(true);


    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");


    
    
    return (
        <ScrollView>
            <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
                <View>
                    <Text style={styles.titleStyle}>Fashions</Text>
                    <Text style={{ alignSelf: "center", fontWeight: "bold", color: "black", fontSize: 15 }}>
                        My Life My Style
                    </Text>
                    <Text style={{ paddingTop: 30, fontSize: 19, fontWeight: "bold", color: "black" }}>
                        Welcome!
                    </Text>
                    <Text style={{ fontSize: 16 }}>
                        Please login or sign up to countinue our app.
                    </Text>
                </View>



                {/* Email field */}

                <View style={{ paddingTop: 40 }}>
                    <View style={{ paddingBottom: 10 }}>
                        <Text style={{ fontWeight: "bold", color: "black", fontSize: 15, }}>
                            {"Email"}
                        </Text>
                        <View style={styles.inputStyle}>
                            <TextInput onChangeText={(value)=>{
                                setEmail(value);
                            }} 
                            style={{ flex: 1 }} secureTextEntry={false}></TextInput>
                        </View>
                    </View>


                {/* Password Field */}

                    <View style={{ paddingBottom: 10 }}>
                        <Text style={{ fontWeight: "bold", color: "black", fontSize: 15, }}>
                            {"Password"}
                        </Text>
                        <View style={styles.inputStyle}>
                            <TextInput onChangeText={(value)=>{
                                
                                setPassword(value);

                            }} style={{ flex: 1 }} secureTextEntry={obSecure}></TextInput>
                            <TouchableOpacity onPress={() => {
                                setOnSecure(!obSecure);
                            }}>
                                <AntIcon style={{ alignSelf: "center" }} name="eye" color="black" size={20} />
                            </TouchableOpacity>

                        </View>
                    </View>


                </View>

                <TouchableOpacity onPress={() => {

                    //Then ve catch kullanarak gerekli exceptionları kontrol et
                    //navigate edilen sayfaya user verisini gönder
                    
                    firebase.auth().signInWithEmailAndPassword(email,password)
                    .then((userCredental) => {

                        const user = userCredental.user;
                        
                        navigation.navigate("homeScreen");
                    }).catch((error)=>{
                        if(error.code=="auth/invalid-email" || error.code=="auth/wrong-password"){
                            Alert.alert(
                                "Invalid Email or Password",
                                "Email or password is invalid please try again",
                                [
                                    {
                                        text:"Ok"
                                    }
                                ]
                            )
                            
                        }
                        else{
                             
                        }
                    }

                    );

                    
                    console.log("giris")
                    console.log(email);
                    console.log(password);


                }}>
                    <View style={[styles.buttonCustomStyle, { backgroundColor: "black", marginTop: 20, marginBottom: 10 }]}>
                        <Text style={{ alignSelf: "center", color: "white", fontWeight: "bold", fontSize: 20 }}>Login</Text>
                    </View>
                </TouchableOpacity>

                <Divider borderColor="grey" color="black" orientation="center">
                    <Text>Or</Text>
                </Divider>

                <TouchableOpacity>
                    <View style={[styles.buttonCustomStyle, { flexDirection: "row", backgroundColor: "blue", marginTop: 10, marginBottom: 10 }]}>
                        <AntIcon style={{ alignSelf: "center" }} name="facebook-square" color={"white"} size={20}></AntIcon>
                        <Text style={{ alignSelf: "center", color: "white", fontSize: 18 }}> Continue with</Text>
                        <Text style={{ alignSelf: "center", color: "white", fontSize: 18, fontWeight: "bold" }}> Facebook</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {

                }}>
                    <View style={[styles.buttonCustomStyle, { flexDirection: "row", backgroundColor: "white", marginTop: 10, marginBottom: 10 }]}>
                        <AntIcon style={{ alignSelf: "center" }} name="google" color={"orange"} size={20}></AntIcon>
                        <Text style={{ alignSelf: "center", color: "black", fontSize: 18 }}> Continue with</Text>
                        <Text style={{ alignSelf: "center", color: "black", fontSize: 18, fontWeight: "bold" }}> Google</Text>
                    </View>
                </TouchableOpacity>

            </SafeAreaView>
        </ScrollView>

        

    )
}

export default SignInScreen;


const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 35,
        fontFamily: "onboardFont",
        color: "black",
        alignSelf: "center",
        paddingTop: 30,
    },
    inputStyle: {
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        height: 40,
        flexDirection: "row",
        justifyContent: "space-between"

    },
    buttonCustomStyle: {
        height: 55,
        borderRadius: 50,
        justifyContent: "center"

    }
});