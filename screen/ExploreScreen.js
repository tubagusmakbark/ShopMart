import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export default function ExploreScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.searchcontainer}>
                <View style={styles.searchicon}>
                    <FontAwesome name="search" size={20} color={'#696969'} />
                </View>
                <View style={styles.inputcontainer}>
                    <TextInput
                        style={styles.searchinput}
                        placeholder='Search..'
                    />
                </View>
            </View>

            <View style={styles.textmenu}>
                <TouchableOpacity style={styles.menu}>
                    <Text style={styles.textmenu}>Bag Types</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu}>
                    <Text style={styles.textmenu}>Bag Product</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.itemcontainer}>

                <View style={styles.popularcontainer}>
                    <TouchableOpacity style={styles.popitemcontainer} onPress={() => navigation.navigate('Material')}>
                        <Image source={require('../assets/Products/Materials/Casual.png')} style={styles.popitem} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.popitemcontainer} onPress={() => navigation.navigate('Material')}>
                        <Image source={require('../assets/Products/Materials/LaptopBag.png')} style={styles.popitem} />
                    </TouchableOpacity>
                </View>

                <View style={styles.popularcontainer}>
                    <TouchableOpacity style={styles.popitemcontainer} onPress={() => navigation.navigate('Material')}>
                        <Image source={require('../assets/Products/Materials/PouchBag.png')} style={styles.popitem} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.popitemcontainer} onPress={() => navigation.navigate('Material')}>
                        <Image source={require('../assets/Products/Materials/SlingBag.png')} style={styles.popitem} />
                    </TouchableOpacity>
                </View>

                <View style={styles.popularcontainer}>
                    <TouchableOpacity style={styles.popitemcontainer} onPress={() => navigation.navigate('Material')}>
                        <Image source={require('../assets/Products/Materials/Sport.png')} style={styles.popitem} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.popitemcontainer} onPress={() => navigation.navigate('Material')}>
                        <Image source={require('../assets/Products/Materials/ToteBag.png')} style={styles.popitem} />
                    </TouchableOpacity>
                </View>

            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    searchcontainer: {
        marginTop: 60,
        flexDirection: "row",
        width: 311,
        height: 40,
        backgroundColor: "#EEEEEE",
        borderRadius: 15,
        alignSelf: "center",
        alignItems: "center",
    },
    searchicon: {
        marginLeft: 10,
    },
    searchinput: {
        marginLeft: 6,
    },
    textmenu: {
        marginTop: 15,
        marginLeft: 2,
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 10,
    },
    popularcontainer: {
        flexDirection: "row",
        marginLeft: 20,
        marginBottom: 22,
    },
    popitemcontainer: {
        marginRight: 5,
    },

});