import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function DesignScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/images/Headerdesign.png')} style={styles.logoheader} />
            </View>
            <View style={styles.title}>
                <Text style={styles.titletext1}>Exsport x Phantasien</Text>
                <Text style={styles.titletext2}>Sports Bag</Text>
            </View>
            <Text style={styles.subhead}>Produk Andalan</Text>
            <View style={styles.materiallist}>
                <TouchableOpacity style={styles.materialcontainer} onPress={() => navigation.navigate('Material')}>
                    <Image source={require('../assets/Products/Materials/Sport.png')} style={styles.material} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.materialcontainer} onPress={() => navigation.navigate('Material')}>
                    <Image source={require('../assets/Products/Materials/Casual.png')} style={styles.material} />
                </TouchableOpacity>
            </View>
            <Text style={styles.detailtitle}>Detail</Text>
            <View style={styles.detailcontainer}>
                <Text style={styles.detail}>Exsport x Phantasien Tote Bag, tas tote bag yang berfungsi sebagai tas tambahan dengan kompartemen yang luas, dibuat dari bahan Poly Taffeta dengan kelebihan anti air, lightweight, UV resistance, serta dilengkapi dengan saku samping untuk menyimpan botol minum dengan ukuran besar, hadir untuk mensupport kamu saat mengeksplor alam.</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        marginTop: 40
    },
    title: {
        marginLeft: 22,
        marginTop: 10,
    },
    titletext1: {
        fontSize: 25,
        fontWeight: "bold",
    },
    subhead: {
        marginTop: 10,
        marginLeft: 22,
        fontSize: 18,
        color: "#6495ED",
    },
    materiallist: {
        flexDirection: "row",
        marginTop: 6,
        marginLeft: 20,
    },
    detailtitle: {
        marginTop: 10,
        marginLeft: 22,
        fontSize: 18,
        color: "#6495ED",
    },
    detailcontainer: {
        padding: 22,
    },
    detail: {
        fontSize: 16,
        fontWeight: "400",
    }




});