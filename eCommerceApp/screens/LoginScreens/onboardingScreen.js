import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import AntIcon from "react-native-vector-icons/AntDesign";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const data = [
    {
        title: 'Take Advantage',
        title2: "Of the Offer Shopping",
        image: require('../assets/images/model1.jpg'),

    },
    {
        title: 'Share Your Style',
        title2: "Be a Part of Fashion!",
        image: require('../assets/images/model2.jpg'),

    },
];


const OnboardingScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor="transparent" />
            <AppIntroSlider


                dotStyle={{ backgroundColor: "grey" }}

                activeDotStyle={{ backgroundColor: "black", width: 20, height: 10 }}
                renderItem={({ item }) => {
                    return (

                        <View style={styles.imageHolder}>
                            <Image style={styles.imageStyle} source={item.image} />
                            <View style={{ paddingTop: 35 }}>
                                <Text style={styles.topicStyle}>{item.title}</Text>
                                <Text style={styles.topicStyle}>{item.title2}</Text>
                            </View>
                            <View>
                                <Text style={
                                    { fontSize: 17, marginTop: 10 }
                                }>
                                    Publish up  your selfies to make yourself more beautiful with this app
                                </Text>
                            </View>
                        </View>



                    )
                }}
                renderNextButton={() => {
                    return (
                        <AntIcon name="rightcircle" color="black" size={40} />
                    )
                }}

                renderDoneButton={
                    () => {
                        return (
                            <TouchableOpacity onPress={() => {
                                console.log("Giriş/Kayıt olma Sayfası");
                                navigation.navigate('introScreen');
                            }}>
                                <AntIcon name="checkcircle" color="black" size={40} />
                            </TouchableOpacity>

                        )
                    }
                }
                data={data}
            />


        </SafeAreaView>
    )


}

export default OnboardingScreen;



const styles = StyleSheet.create({
    imageHolder: {

        height: 410,
        borderRadius: 30,
        marginTop: 20,
        marginHorizontal: 15
    },
    imageStyle: {
        height: "100%"
        , width: "100%",
        borderRadius: 30,
    },
    topicStyle: {
        fontWeight: "bold",
        fontSize: 30,
        color: "black"
    },
    nextButtonStyle: {
        height: 50,
        width: 50,
        backgroundColor: "black",
        borderRadius: 40,
    }

})






