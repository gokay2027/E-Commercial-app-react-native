import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, Text, StyleSheet, TextInput, Image, TouchableOpacity, FlatList, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from "./categoriesListScreen";
import firestore from '@react-native-firebase/firestore';


const Stack = createNativeStackNavigator();

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function OnSaleProducts({ navigation }) {
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [onSaleProducts, setOnSaleProduct] = useState([]); // Initial empty array of users

    useEffect(() => {
        const subscriber = firestore()
            .collection('OnSaleProducts')
            .onSnapshot(querySnapshot => {
                // see next step
                const onSaleProducts = [];
                querySnapshot.forEach(documentSnapshot => {
                    console.log(documentSnapshot.data())
                    onSaleProducts.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });
                setOnSaleProduct(onSaleProducts);
                setLoading(false);
            });
        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);
    if (loading) {
        return <ActivityIndicator />;
    }
    return (
        <FlatList data={onSaleProducts}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => {
                        //console.log(item["productName"]);

                        navigation.navigate("productInfoScreen", {
                            productName: item["productName"],
                            productDescription: item["productDescription"],
                            productMiniDescription: item["productMiniDescription"],
                            productRating: item["productRating"],
                            productSizes: item["productSizes"],
                            productCost: item["productCost"],
                            productCategory: item["productCategory"],
                            productImageLinks: item["imageLinks"]

                        });
                    }}>
                        <View style={{ height: 120, justifyContent: "center", paddingLeft: 3, paddingRight: 10 }}>
                            <View style={styles.onSalesStyle}>
                                <View style={{ height: 85, width: 90, borderRadius: 20, marginLeft: 5, flexDirection: "row" }}>
                                    <Image style={styles.onSaleImageStyle} source={{ uri: item["productLocation"] }} ></Image>
                                    <View style={{ height: 85, width: 185, justifyContent: "center" }}>
                                        <Text style={{ paddingLeft: 10, fontSize: 15, fontWeight: "bold", color: "black" }}>{item["productName"]}</Text>
                                        <Text style={{ paddingLeft: 10, fontSize: 13 }}>{item["productMiniDescription"]}</Text>
                                        <Text style={{ paddingLeft: 10, fontSize: 15, fontWeight: "bold", color: "black" }}>${item["productCost"]}</Text>
                                    </View>
                                    <View style={{ width: 40, height: 40, backgroundColor: "black", alignSelf: "center", borderRadius: 10, alignItems: "center", justifyContent: "center" }}>
                                        <Ionicons color={"white"} size={25} name="md-arrow-forward"></Ionicons>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            }}>
        </FlatList>
    )
}


function Products({ navigation }) {
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [onSaleProducts, setOnSaleProduct] = useState([]); // Initial empty array of users

    useEffect(() => {

        const subscriber = firestore()
            .collection('Products')
            .onSnapshot(querySnapshot => {
                // see next step
                const onSaleProducts = [];

                querySnapshot.forEach(documentSnapshot => {

                    onSaleProducts.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });
                setOnSaleProduct(onSaleProducts);
                setLoading(false);
            });
        // Unsubscribe from events when no longer in use

    });


    if (loading) {
        return <ActivityIndicator />;
    }
    return (
        <FlatList data={onSaleProducts}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            renderItem={({ item }) => {
                return (

                    <View style={styles.basicShowViewStyle}>
                        <View style={{ width: 150, height: 170, borderRadius: 10, marginBottom: 5 }}>
                            <TouchableOpacity onPress={() => {
                                //console.log(item["imageLinks"]);
                                
                                navigation.navigate("productInfoScreen", {
                                    productName: item["productName"],
                                    productDescription: item["productDescription"],
                                    productMiniDescription: item["productMiniDescription"],
                                    productRating: item["productRating"],
                                    productSizes: item["productSizes"],
                                    productCost: item["productCost"],
                                    productCategory: item["productCategory"],
                                    productImageLinks:item["imageLinks"]

                                });
                            }}>
                                <Image style={{ width: 150, height: 170, borderRadius: 10, marginBottom: 5 }} source={{uri:item["productLocation"]}}></Image>

                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>{item["productName"]}</Text>
                        <Text style={{ textAlign: "center" }}>{item["productMiniDescription"]}</Text>
                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 13 }}>${item["productCost"]}</Text>
                    </View>
                )
            }}
        >
        </FlatList>
    )
}




function PopularProducts({ navigation }) {
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [popularProducts, setPopularProduct] = useState([]); // Initial empty array of products

    useEffect(() => {
        const subscriber = firestore()
            .collection('PopularProducts')
            .onSnapshot(querySnapshot => {
                // see next step
                const popularProducts = [];
                querySnapshot.forEach(documentSnapshot => {
                    popularProducts.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });
                setPopularProduct(popularProducts);
                setLoading(false);
            });
        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);
    if (loading) {
        return <ActivityIndicator />;
    }
    return (
        <FlatList data={popularProducts}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => {
                        //console.log(item["productName"]);

                        navigation.navigate("productInfoScreen", {
                            productName: item["productName"],
                            productDescription: item["productDescription"],
                            productMiniDescription: item["productMiniDescription"],
                            productRating: item["productRating"],
                            productSizes: item["productSizes"],
                            productCost: item["productCost"],
                            productCategory: item["productCategory"],
                            productImageLinks: item["imageLinks"]

                        });
                    }}>
                        <View style={{
                            height: 100,
                            width: windowWidth / 1.11,
                            backgroundColor: "white",
                            marginVertical: 10,
                            borderRadius: 20,
                            alignItems: "center",
                            flexDirection: "row"
                        }}>
                            <View style={{ height: 80, width: 80, marginLeft: 15, borderRadius: 15 }}>
                                <Image source={{ uri: item["productLocation"] }} style={{ height: 80, width: 80, borderRadius: 15 }}>

                                </Image>
                            </View>
                            <View style={{ height: "95%", borderRadius: 20, marginLeft: 10 }}>
                                <View style={{ justifyContent: "space-between", height: "95%", paddingVertical: 8 }}>
                                    <Text style={{ fontWeight: "bold", color: "black" }}>
                                        {item["productName"]}
                                    </Text>
                                    <Text style={{}}>
                                        {item["productMiniDescription"]}
                                    </Text>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <Ionicons name={"star"} size={15} color={"orange"}></Ionicons>
                                        <Text style={{ paddingLeft: 5, fontWeight: "bold", color: "black" }}>{item["productRating"]}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                );
            }}>

        </FlatList>

    )
}


const MainScreen = ({ navigation }) => {


    return (

        <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: "rgb(230, 230, 230)" }}>
            <View style={styles.topBar}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("categoriesScreen")
                }}>
                    <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "black", width: 110, borderRadius: 10 }}>
                        <Ionicons color={"white"} size={30} name="menu"></Ionicons>
                        <Text style={{ color: "white" }}> Categories</Text>
                    </View>
                </TouchableOpacity>
                <View style={{flexDirection:"row"}}>

                <TouchableOpacity style={{paddingRight:15}} onPress={() => {
                    navigation.navigate("Cart");
                }}>
                    <Ionicons color={"black"} size={30} name="cart">
                    </Ionicons>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    navigation.navigate("Profile");
                }}>
                    <Ionicons color={"black"} size={30} name="person-circle">
                    </Ionicons>
                </TouchableOpacity>
                </View>
                

            </View>

            <View showsVerticalScrollIndicator={false} style={{ flex: 1, width: windowWidth, paddingHorizontal: 20 }}>


                {/* SearchBar */}
                <ScrollView>

                    <Text style={{ paddingTop: 20, color: "black", fontWeight: "bold", fontSize: 25 }}>
                        Welcome,
                    </Text>
                    <Text style={{ paddingTop: 4, fontWeight: "bold", fontSize: 20 }}>
                        Our Fashions App
                    </Text>

                    <View style={styles.searchBarStyle}>
                        <Ionicons style={{ marginLeft: 10, marginRight: 10 }} color={"black"} size={25} name="search"></Ionicons>
                        <TextInput style={{ width: "80%" }} > </TextInput>
                    </View>

                    <Text style={{ paddingTop: 13, fontSize: 22, fontWeight: "bold", color: "black" }}>
                        On sales!
                    </Text>
                    <View>
                        <OnSaleProducts navigation={navigation}></OnSaleProducts>
                    </View>


                    <Text style={{ paddingTop: 10, paddingBottom: 10, fontSize: 20, fontWeight: "bold", color: "black" }}>
                        Top Dresses
                    </Text>
                    <View style={{ alignItems: "center"}}>
                        <Products navigation={navigation}></Products>
                    </View>

                    <Text style={{ paddingTop: 10, paddingBottom: 10, fontSize: 20, fontWeight: "bold", color: "black" }}>
                        Popular
                    </Text>


                    <PopularProducts navigation={navigation}></PopularProducts>

                    {/* Buraya for salesleri flatlist olarak verilebilir */}
                </ScrollView>



            </View>
        </SafeAreaView>
    );
}
export default MainScreen;


const styles = StyleSheet.create({

    topBar: {

        flexDirection: "row",
        justifyContent: "space-between",
        height: 50,
        width: windowWidth,
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 5

    },
    searchBarStyle: {
        height: 50,
        backgroundColor: 'rgb(219, 217, 211)',
        borderRadius: 30,
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    onSalesStyle: {
        height: 100,
        width: 330,
        backgroundColor: "white",
        borderRadius: 20,
        elevation: 1,
        justifyContent: "center",
    },
    onSaleImageStyle: {
        height: 85,
        width: 90,
        borderRadius: 20
    },
    basicShowViewStyle: {
        width: "45%",
        height: 260,
        borderRadius: 20,
        alignItems: "center",
        paddingTop: 10,
        justifyContent: "space-between",
        paddingBottom: 10,
        marginBottom: 10,
        marginHorizontal: 5

    },
    popularCardStyle: {
        height: 90,
        backgroundColor: "white",
        borderRadius: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10


    }
});

