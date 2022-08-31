import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import AntIcon from "react-native-vector-icons/AntDesign";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';



const IntroScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <View>


                <Image style={
                    {
                        width: "100%",
                        height: "100%",

                    }
                } source={require("../assets/images/introScreenImage.jpg")} />
                <View style={{
                    flex: 1,
                    position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
                    width: "100%", height: "100%", backgroundColor: 'rgba(0, 0, 0, 0.4)'
                }}
                >
                    <View style={{ alignSelf: "center", justifyContent: "center", flex: 1, marginTop: 70 }}>
                        <Text style={styles.titleStyle}>
                            Fashions
                        </Text>
                        <Text style={{ color: "white", alignSelf: "center", fontWeight: "bold", fontSize: 15 }}>
                            My Life My style
                        </Text>
                    </View>


                    <View style={styles.bottomCenter}>

                        <TouchableOpacity onPress={() => {
                            console.log("Goes to Sign In page")
                            navigation.navigate("signInScreen")
                            
                        }}>
                            <View style={[styles.buttonStyle, { backgroundColor: "white", marginBottom: 15 }]}>
                                <Text style={[styles.buttonFontStyle, { color: "black" }]}>Sign In</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            console.log("Goes to SignUp page")
                            navigation.navigate("signUpScreen")
                            
                        }}>
                            <View style={[styles.buttonStyle, { borderColor: "white", borderWidth: 2 }]}>
                                <Text style={[styles.buttonFontStyle, { color: "white" }]}>Sign Up</Text>
                            </View>
                        </TouchableOpacity>

                    </View>



                </View>




            </View>
        </SafeAreaView>

    )
}


export default IntroScreen;


const styles = StyleSheet.create({
    buttonStyle: {
        height: 55,
        marginHorizontal: 30,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",

    },
    buttonFontStyle: {
        fontSize: 20,
        fontWeight: "bold",
    },
    bottomCenter: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 30.
    },
    titleStyle: {
        fontFamily: "onboardFont",
        fontSize: 70,
        color: "white"
    }
});