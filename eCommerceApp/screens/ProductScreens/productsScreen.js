import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import firestore from "@react-native-firebase/firestore"
import storage from '@react-native-firebase/storage';

const dataTopDresses = [1, 2, 3, 4, 5, 6];


function Products({ navigation, categoryName }) {
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [productsData, setProductsData] = useState([]); // Initial empty array of users
    const [imageUrl, setImageUrl] = useState(undefined);


    useEffect(() => {
        const subscriber = firestore()
            .collection('Products').where("productCategory", "==", categoryName)
            .onSnapshot(querySnapshot => {
                // see next step
                const Products = [];

                querySnapshot.forEach(documentSnapshot => {

                    Products.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });
                setProductsData(Products);
                setLoading(false);
            });

    // Unsubscribe from events when no longer in use
});


if (loading) {
    return <ActivityIndicator />;
}
return (
    <FlatList data={productsData}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => {
            return (

                <View style={styles.basicShowViewStyle}>
                    <View style={{ width: 150, height: 170, borderRadius: 10, marginBottom: 5 }}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("productInfoScreen", {
                                productName: item["productName"],
                                productDescription: item["productDescription"],
                                productMiniDescription: item["productMiniDescription"],
                                productRating: item["productRating"],
                                productSizes: item["productSizes"],
                                productCost: item["productCost"],
                                productCategory: item["productCategory"]

                            });
                        }}>
                            <Image style={{ width: 150, height: 170, borderRadius: 10, marginBottom: 5 }}
                                source={ {uri:item["productLocation"]}}
                                
                                   ></Image>

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





const ProductsScreen = ({ navigation, route }) => {



    const { categoryName } = route.params;

    return (
        <SafeAreaView style={{ paddingHorizontal: 10 }}>
            <Text style={styles.topicTextStyle}>
                {categoryName}
            </Text>


            <View style={{ alignItems: "center", paddingBottom: 120 }}>
                <Products categoryName={categoryName} navigation={navigation}></Products>
            </View>


        </SafeAreaView>
    )
}
export default ProductsScreen;


const styles = StyleSheet.create({
    topicTextStyle: {
        fontWeight: "bold",
        fontSize: 20,
        color: "black",
        paddingTop: 20

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

});
