import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntIcon from "react-native-vector-icons/AntDesign";
import { color } from 'react-native-elements/dist/helpers';
import ProfileScreen from './profileScreen';
import IonIcons from "react-native-vector-icons/dist/Ionicons"
import MainScreen from './ProductScreens/mainScreen';
import CartScreen from './ProductScreens/userCartScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './ProductScreens/categoriesListScreen';
import ProductsScreen from './ProductScreens/productsScreen';
import ProductInfoScreen from './ProductScreens/productinfoScreen';


const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
const HomeScreen = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: { backgroundColor: "white", borderTopRightRadius: 20, borderTopLeftRadius: 20, elevation:50 },
        }}>

            <Tab.Screen name="Home" component={MainScreen} options={{
                headerShown: false,
                tabBarIcon: () => { return (<IonIcons size={20} color={"black"} name='md-home-sharp'></IonIcons>) },
            }} />

            {/* <Tab.Screen name="Cart" component={CartScreen} options={{
                headerShown: false,
                tabBarIcon: () => { return (<IonIcons size={20} color={"black"} name='cart'></IonIcons>) }
            }} /> */}

            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                headerShown: false,
                tabBarIcon: () => { return (<IonIcons size={20} color={"black"} name='person'></IonIcons>) },
            }} />


            <Tab.Screen name="categoriesScreen" component={CategoriesScreen} options={{
                headerShown: false,
                tabBarButton: () => (
                    null
                ),
            }} />

            <Tab.Screen name="productsScreen" component={ProductsScreen} options={{
                headerShown: false,
                tabBarButton: () => (
                    null
                ),
            }} />

            <Tab.Screen name="productInfoScreen" component={ProductInfoScreen} options={{
                headerShown: false,
                tabBarButton: () => (
                    null
                ),
            }} />


        </Tab.Navigator>
    );
};

export default HomeScreen;