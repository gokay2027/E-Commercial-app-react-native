import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import firestore from "@react-native-firebase/firestore"


function CategoriesList({ navigation }) {
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [categories, setCategories] = useState([]); // Initial empty array of users

    useEffect(() => {
        const subscriber = firestore()
            .collection('Categories')
            .onSnapshot(querySnapshot => {
                // see next step
                const categoriesData = [];
                querySnapshot.forEach(documentSnapshot => {
                    console.log(documentSnapshot.data())
                    categoriesData.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });
                setCategories(categoriesData);
                setLoading(false);
            });
        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);
    if (loading) {
        return <ActivityIndicator />;
    }
    return (
        <FlatList data={categories}
            style={{}}
            renderItem={({ item }) => {

                return (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("productsScreen",{categoryName:item["categoryName"]})
                    }}>
                        <View style={styles.categoryViewStyle}>
                            <Image style={styles.imageStyle} source={require("../assets/images/cagetoryImages/categoryBag.jpg")} >
                            </Image>
                            <View style={{ position: "absolute", top: 10, left: 10, alignSelf: "flex-start", }}>
                                <Text style={{ fontWeight: "bold", fontSize: 22, color: "black" }}>{item["categoryName"]}</Text>
                                <Text style={{ fontWeight: "bold", fontSize: 15, color: "black" }}>318 products</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            }}>
        </FlatList>
    )
}





const CategoriesScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, width: "100%", marginTop: 20, }}>
            <View style={{ width: "100%" }}>

                <CategoriesList navigation={navigation}></CategoriesList>
            </View>
        </SafeAreaView>
    )
}

export default CategoriesScreen;


const styles = StyleSheet.create({


    categoryViewStyle: {

        height: 100,
        width: "90%",

        borderRadius: 20,
        alignItems: "center",
        alignSelf: "center",
        marginBottom: 10

    },

    imageStyle: {

        height: 100,
        width: "100%",

        borderRadius: 20

    }

});