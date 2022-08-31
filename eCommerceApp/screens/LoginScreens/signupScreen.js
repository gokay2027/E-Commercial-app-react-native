import React, { useState } from 'react';
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
    Alert
} from 'react-native';

import BouncyCheckbox from "react-native-bouncy-checkbox";
import AntIcon from "react-native-vector-icons/AntDesign";
import { SafeAreaView } from 'react-native-safe-area-context';
import { getAuth, createUserWithEmailAndPassword, firebase } from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore"


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



const SignUpScreen = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);
    const [obSecure, setOnSecure] = useState(true);
    const [obSecureAgain, setOnSecureAgain] = useState(true);


    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [user,setUser] = useState(null);
    return (
        <ScrollView>
            <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
                <Text style={styles.titleStyle}>
                    Fashions
                </Text>
                <Text style={{ alignSelf: "center", fontWeight: "bold", color: "black", fontSize: 15 }}>
                    My Life My Style
                </Text>
                <View style={{ paddingTop: 40 }}>
                    <Text style={{ fontWeight: "bold", color: "black", fontSize: 25, paddingBottom: 10 }}>
                        Sign Up
                    </Text>
                    <Text style={{ fontSize: 16, paddingBottom: 20 }}>
                        Create a new account
                    </Text>

                    {/* Name and Email Areas */}

                    <View style={{ paddingBottom: 10 }}>
                        <Text style={{ fontWeight: "bold", color: "black", fontSize: 15, }}>
                            {"Name - Surname"}
                        </Text>
                        <View style={styles.inputStyle}>
                            <TextInput onChangeText={value => setUserName(value)} style={{ flex: 1 }} secureTextEntry={false}></TextInput>
                        </View>
                    </View>

                    <View style={{ paddingBottom: 10 }}>
                        <Text style={{ fontWeight: "bold", color: "black", fontSize: 15, }}>
                            {"Email"}
                        </Text>
                        <View style={styles.inputStyle}>
                            <TextInput onChangeText={value => setEmail(value)} style={{ flex: 1 }} secureTextEntry={false}></TextInput>
                        </View>
                    </View>


                    {/* Password Areas */}

                    <View style={{ paddingBottom: 10 }}>
                        <Text style={{ fontWeight: "bold", color: "black", fontSize: 15, }}>
                            {"Password"}
                        </Text>
                        <View style={styles.inputStyle}>
                            <TextInput
                                onChangeText={value => setPassword(value)}
                                style={{ flex: 1 }} secureTextEntry={obSecure}></TextInput>
                            <TouchableOpacity onPress={() => {
                                setOnSecure(!obSecure)
                            }}>
                                <AntIcon style={{ alignSelf: "center" }} name="eye" color="black" size={20} />
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={{ paddingBottom: 10 }}>
                        <Text style={{ fontWeight: "bold", color: "black", fontSize: 15, }}>
                            {"Confirm Password"}
                        </Text>
                        <View style={styles.inputStyle}>
                            <TextInput
                                onChangeText={value => setPasswordAgain(value)}
                                style={{ flex: 1 }} secureTextEntry={obSecure}></TextInput>
                            <TouchableOpacity onPress={() => {
                                setOnSecureAgain(!obSecureAgain)
                            }}>
                                <AntIcon style={{ alignSelf: "center" }} name="eye" color="black" size={20} />
                            </TouchableOpacity>

                        </View>
                    </View>



                    <View style={{ flexDirection: "row", paddingTop: 10 }}>
                        <BouncyCheckbox fillColor='black' onPress={(isChecked) => {
                            setSelection(isChecked);
                        }} />
                        <Text>By creating an account you have to agree with our conditions and terms </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => {
                    //navigation.navigate("successScreen");
                    console.log(username)
                    console.log(email)
                    console.log(password)
                    console.log(passwordAgain);
                    console.log(isSelected);

                    if((password == passwordAgain) && isSelected && username!="" && email != ""){
                        console.log("Yeni sayfaya gidebilin")
                        
                        firebase.auth().createUserWithEmailAndPassword(email,password).then((userData)=>{
                            setUser(userData.user);
                            console.log(user.uid);

                            firebase.firestore().collection("Users")
                            .doc(user.uid)
                            .set({userId:user.uid,
                                userName:username,
                                userEmail:email,
                                userPassword:password
                                })

                            
                                navigation.navigate("successScreen");
                            
                        }).catch((error)=>{
                            // Alert.alert("Incorrect field entered","You have entered incorrect information or the same email with another account please try again",
                            // [{text:"OK"}])

                            console.log(error.code)
                        })

                        
        
                    }
                    else{
                        console.log("gidemen")
                    }

                }}>
                    <View style={styles.signUpButtonStyle}>
                        <Text style={{ color: "white", alignSelf: "center" }}>Sign Up</Text>
                    </View>
                </TouchableOpacity>

            </SafeAreaView>
        </ScrollView>

    )

}
export default SignUpScreen;



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
    signUpButtonStyle: {
        marginTop: 15,
        height: 50,
        borderRadius: 60,
        backgroundColor: "black",
        justifyContent: "center"
    }


});
