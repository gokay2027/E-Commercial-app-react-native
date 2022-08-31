import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import cartArray from "../dataFiles/cart";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const listData = [1, 2, 3, 4, 5, 6, 7]
let tottalprice = 0;
const CartScreen = ({ navigation }) => {

    const [sumPrice,setSumPrice] = useState(0);
    

    useEffect(()=>{
        setSumPrice(0);
        for (let i = 0; i < cartArray.length; i++) {
            console.log(cartArray[i]["priceProduct"])
            tottalprice = tottalprice + cartArray[i]["priceProduct"];
            
        }
        setSumPrice(tottalprice);
    },[])
    
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "rgb(230, 230, 230)" }}>
            <View>
                <Text style={{ padding: 20, fontWeight: "bold", color: "black", fontSize: 20 }}>Products</Text>

            </View>
            <FlatList data={cartArray}
                renderItem={({ item }) => {
                    return (<TouchableOpacity onPress={() => {
                        //navigation.navigate("productInfoScreen");
                    }}>
                        <View style={{
                            height: 100, marginHorizontal: 20, borderRadius: 10,
                            backgroundColor: "white", alignItems: "center", flexDirection: "row",
                            marginVertical: 10
                        }}>
                            <View style={{ marginLeft: 20, width: 70, height: 70, borderRadius: 10 }}>
                                <Image style={{ width: 70, height: 70, borderRadius: 10 }}
                                    source={require("../assets/images/shoes/shoe2.jpg")}></Image>
                            </View>
                            <View style={{ flex: 1, marginHorizontal: 10 }}>
                                <Text style={{ fontWeight: "bold", color: "black" }}> {item.nameProduct}</Text>
                                <Text>{item.miniDescriptionProduct}</Text>
                                <Text style={{ fontWeight: "bold", color: "black" }}>{item.priceProduct} $</Text>
                                <Text style={{ fontWeight: "bold", color: "black" }}>(M) -{item.amountOfProduct}-</Text>
                            </View>

                            
                        </View>
                    </TouchableOpacity>
                    )                         
                }}>

            </FlatList>


            <View style={{ justifyContent: "space-between", alignItems: "center", height: 60, backgroundColor: "white", flexDirection: "row", paddingHorizontal: 20 }}>
                <Text style={{ fontWeight: "bold", color: "black", fontSize: 20 }}>
                    Total: {sumPrice}$
                </Text>
                <TouchableOpacity onPress={() => {
                    console.log(sumPrice)
                }}>
                    <View style={{ width: 190, height: 40, backgroundColor: "black", borderRadius: 45, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
                            Confirm order
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    );
}

export default CartScreen;


const styles = StyleSheet.create({

})