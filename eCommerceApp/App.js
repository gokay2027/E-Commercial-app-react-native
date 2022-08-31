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
import OnboardingScreen from './screens/LoginScreens/onboardingScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import IntroScreen from './screens/LoginScreens/introScreen';
import SignInScreen from './screens/LoginScreens/signinScreen';
import SignUpScreen from './screens/LoginScreens/signupScreen';
import SuccessScreen from './screens/LoginScreens/successfulScreen';
import HomeScreen from './screens/homeScreen';
import CategoriesScreen from './screens/ProductScreens/categoriesListScreen';
import userCartScreen from "./screens/ProductScreens/userCartScreen";


const Stack = createNativeStackNavigator();


export default class App extends React.Component {


  render() {
    return (

      <NavigationContainer  >
        <Stack.Navigator  >
          <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="introScreen" component={IntroScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="signUpScreen" component={SignUpScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="signInScreen" component={SignInScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="successScreen" component={SuccessScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="homeScreen" component={HomeScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Cart" component={userCartScreen} options={{headerShown: false}}/>
          
        </Stack.Navigator>
      </NavigationContainer>

    );
  }
}



