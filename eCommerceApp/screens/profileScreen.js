import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "../node_modules/react-native-vector-icons/dist/Ionicons"
import FontAwesome from "../node_modules/react-native-vector-icons/dist/FontAwesome"


const ProfileScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "rgb(230, 230, 230)" }}>
            <View style={{
                height: 100, backgroundColor: "white",
                marginHorizontal: 20,
                marginVertical: 20,
                borderRadius: 20,
                flexDirection: "row", alignItems: "center",
                elevation: 1
            }}>

                <View style={{ width: 70, height: 70, borderRadius: 10, backgroundColor: "red", marginLeft: 20 }}>
                    <Image source={require("./assets/images/model1.jpg")} style={{ height: 70, width: 70, borderRadius: 10 }}></Image>
                </View>
                <View style={{ height: 60, flex: 1, marginHorizontal: 10, justifyContent: "center" }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
                        Natalia Evelyn
                    </Text>
                    <Text>
                        natalia.evelyn@gmail.com
                    </Text>
                </View>

            </View>

            <View style={{ marginLeft: 20 }}>
                <Text style={{ fontWeight: "bold", color: "black", fontSize: 25 }}>
                    Details
                </Text>
            </View>

            <View style={{
                backgroundColor: "white", marginHorizontal: 20,
                borderWidth: 1, borderRadius: 20, borderColor: "grey", marginTop: 10, paddingTop: 10, paddingHorizontal: 10

            }}>
                <TouchableOpacity onPress={() => {
                    console.log("Personal Details");
                }}>
                    <View style={{ height: 60, marginBottom: 10, alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View style={{
                                width: 50, height: 50, backgroundColor: "rgb(220, 220, 220)"
                                , justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 10
                            }}>
                                <Ionicons name="md-person-circle" color={"black"} size={30}></Ionicons>

                            </View>
                            <Text style={{ fontWeight: "bold", fontSize: 20, color: "black",marginLeft:10 }}>Personal Details</Text>
                        </View>

                        <Ionicons name="md-arrow-forward-circle" size={30} color={"black"}></Ionicons>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    console.log("Card Details");
                }}>
                    <View style={{ height: 60, marginBottom: 10, alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View style={{
                                width: 50, height: 50, backgroundColor: "rgb(220, 220, 220)"
                                , justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 10
                            }}>
                                <Ionicons name="card" color={"black"} size={30}></Ionicons>

                            </View>
                            <Text style={{ fontWeight: "bold", fontSize: 20, color: "black",marginLeft:10 }}>Card Details</Text>
                        </View>

                        <Ionicons name="md-arrow-forward-circle" size={30} color={"black"}></Ionicons>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    console.log("Cargo Details");
                }}>
                    <View style={{ height: 60, marginBottom: 10, alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View style={{
                                width: 50, height: 50, backgroundColor: "rgb(220, 220, 220)"
                                , justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 10
                            }}>
                                <FontAwesome name="truck" color={"black"} size={30}></FontAwesome>

                            </View>
                            <Text style={{ fontWeight: "bold", fontSize: 20, color: "black",marginLeft:10 }}>Cargo Details</Text>
                        </View>

                        <Ionicons name="md-arrow-forward-circle" size={30} color={"black"}></Ionicons>
                    </View>
                </TouchableOpacity>



            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen;