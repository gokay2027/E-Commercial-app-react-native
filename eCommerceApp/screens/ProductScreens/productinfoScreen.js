import React, { useState } from "react";
import {
    View, Text, StyleSheet, Image, Dimensions, FlatList,
    TouchableHighlight, TouchableOpacity, ScrollView
} from "react-native";
import { Slider } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import AntIcon from "react-native-vector-icons/AntDesign";
import storage from '@react-native-firebase/storage';
import cartArray from "../dataFiles/cart";
import addCart from "../dataFiles/cart";



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const ProductInfoScreen = ({ route }) => {

    const [stateSize, setStateSize] = useState(sizes);

    const [click, setClick] = useState(null);
    const [textClick, setTextClick] = useState(null);
    const [numberProduct, setNumberProduct] = useState(1);
    const [price, setprice] = useState(0);
    const [selectedSize, setSelectedSize] = useState(null)


    const { productName, productDescription,
         productMiniDescription, productRating, 
         productSizes, productCost, 
         productCategory,productImageLinks } = route.params;
         
    const cost = productCost;


    const sizes = [
        
    ];

    for(let i=0;i<productSizes.length;i++){
        sizes.push({size:productSizes[i],selected:false})
    }

    const dataImages = [
        require("../assets/images/shoes/shoe1.jpg"),
        require("../assets/images/clothes/clothe2.jpg"),
        require("../assets/images/clothes/clothe3.jpg")
    ];


    // const reference =storage().ref("bags/");

    // const url = reference.list().then((element)=>{
        
    //     element.items.forEach((item)=>{
        
    //         console.log(item.fullPath);

    //     })
    // })
    

    return (
        <View>
            <ScrollView>
                <SafeAreaView style={{ height: windowHeight, backgroundColor: "rgb(230, 230, 230)" }}>
                    <FlatList pagingEnabled={true}
                        style={{ flex: 1 }}
                        horizontal={true}
                        data={dataImages}
                        renderItem={({ item }) => {
                            
                            return (
                                <View style={{ width: windowWidth, backgroundColor: "rgb(230, 230, 230)", alignItems: "center", justifyContent: "center" }}>
                                    <Image style={{ resizeMode: "contain", width:windowWidth, height: 300 }} source={item}></Image>
                                </View>
                            )

                        }}>

                    </FlatList>


                    <View style={{
                        width: windowWidth,
                        backgroundColor: "white",
                        flex: 2,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        elevation: 3,
                        marginTop: 10,
                        marginBottom: 20
                    }}>

                        <View style={{ width: windowWidth, height: 100, paddingHorizontal: 20 }}>
                            <Text style={{ paddingTop: 20, fontSize: 20, fontWeight: "bold", color: "black" }}>
                                {productName}
                            </Text>
                            <Text style={{ paddingTop: 5 }}>
                                {productMiniDescription}
                            </Text>
                            <View style={{ paddingTop: 15, flexDirection: "row", justifyContent: "space-between" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <AntIcon name="star" size={18} color={"orange"} style={{ paddingRight: 5 }} ></AntIcon>
                                    <Text >
                                        {productRating}
                                    </Text>
                                </View>
                                <View>
                                    <Text>
                                        Avaliable In Stock
                                    </Text>
                                </View>
                            </View>

                            <View style={{ paddingTop: 20, alignSelf: "center" }}>
                                <FlatList
                                    data={productSizes}
                                    horizontal={true}
                                    renderItem={({ item, index }) => {

                                        let bgColor = index === click ? "black" : "white"
                                        let textColor = index === textClick ? "white" : "black"

                                        return (

                                            <TouchableOpacity onPress={
                                                () => {

                                                    for (let i = 0; i < sizes.length; i++) {
                                                        if (i == index) {
                                                            setStateSize(sizes[index].selected = !sizes[index].selected);
                                                        }
                                                        else {
                                                            setStateSize(sizes[index].selected = false);
                                                        }

                                                        console.log(sizes[i].selected);
                                                        if (sizes[i].selected == true) {
                                                            setSelectedSize(sizes[i].size);
                                                        }
                                                        setClick(index);
                                                        setTextClick(index);

                                                    }

                                                }}>
                                                <View style={[styles.sizeButton, { backgroundColor: bgColor }]}>
                                                    <Text style={{ fontWeight: "bold", color: textColor }}>
                                                        {item}
                                                    </Text>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }}>

                                </FlatList>
                            </View>

                            <View style={{ width: 120, height: 50, flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignSelf: "center" }}>
                                <TouchableOpacity onPress={() => {
                                    if (numberProduct - 1 > 0) {


                                        setNumberProduct(numberProduct - 1);
                                        setprice(numberProduct * cost)
                                    }

                                }}>
                                    <View style={{ height: 40, width: 40, alignItems: "center", justifyContent: "center", borderRadius: 30, borderWidth: 1 }}>
                                        <Text style={{ fontWeight: "bold", fontSize: 20, color: "black" }}>
                                            -
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                                <Text style={{ fontWeight: "bold", fontSize: 25, color: "black" }}>
                                    {numberProduct}
                                </Text>
                                <TouchableOpacity onPress={() => {


                                    setNumberProduct(numberProduct + 1);
                                    setprice(numberProduct * cost)



                                }}>
                                    <View style={{ height: 40, width: 40, alignItems: "center", justifyContent: "center", borderRadius: 30, borderWidth: 1 }}>
                                        <Text style={{ fontWeight: "bold", fontSize: 20, color: "black" }}>
                                            +
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                            <View >
                                <Text style={{ color: "black", fontWeight: "bold", fontSize: 15 }}>Description</Text>
                                <Text>
                                   {productDescription}
                                </Text>
                            </View>




                        </View>

                    </View>


                </SafeAreaView>
            </ScrollView>
            <View style={{
                bottom: 0, position: "absolute",
                height: 60, width: windowWidth,
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 25,
                alignItems: "center",
                backgroundColor: "white"
            }}>
                <View>
                    <Text>
                        Total Price:
                    </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 20, color: "black" }}>
                        {cost * numberProduct} $
                    </Text>
                </View>
                <TouchableOpacity onPress={() => {

                    //Buradaki log yapılan veriler cart sayfasında flatlistte 
                    //gösterilecek yani diğer sayfaya aktarılacak
                    console.log(numberProduct + " Adet");

                    console.log(cost * numberProduct + " Dollar");

                    console.log(selectedSize)
                    
                    
                    
                    //Array içine productin datalarını obje olarak gönder sonra gönderdiğin objeyi
                    //yeni sayfada data olarak alır orada flatlist ile bastırırsın!!!!!!!
                    //sonra total price hesaplatır sonrasında database siparişi gönderirsin
                    //Böylece proje biter Mutlu son :)))))


                    const orderData={
                        nameProduct:productName,
                        miniDescriptionProduct:productMiniDescription,
                        priceProduct:cost*numberProduct,
                        amountOfProduct:numberProduct
                    }


                    console.log(productName);
                    console.log(productMiniDescription)
                    
                    cartArray.push(orderData);
                    

                    // for(let i=0;i<cartArray.length;i++){
                    //     console.log(cartArray[i]);
                    // }


                }}>

                    <View style={{ height: 50, width: 200, backgroundColor: "black", borderRadius: 45, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Add to chart</Text>
                        <Ionicons name="cart-outline" color={"white"} size={25}>
                        </Ionicons>
                    </View>

                </TouchableOpacity>

            </View>
        </View>





    )
}
export default ProductInfoScreen;

const styles = StyleSheet.create({

    sliderImageStyle: {
        width: "100%",
        height: "30%",
        backgroundColor: "red",
        justifyContent: "center"

    },
    sizeButton: {
        width: 40,
        height: 40,
        borderRadius: 45,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 15
    }


});