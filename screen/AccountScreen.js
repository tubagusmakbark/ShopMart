import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function AccountScreen() {
    const [userName, setUserName] = useState("");
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                setUserName(user.email)
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.logoaccount}>
                <Ionicons name="person-circle" size={105} color={'#00C1D4'} />
            </TouchableOpacity>

            <View style={styles.formcontainer}>

                <View style={styles.form}>
                    <Text style={styles.title}>Name</Text>
                    <View style={styles.inputform}>
                        <View style={styles.inputcontainer}>
                            <TextInput
                                style={styles.input}
                            />
                        </View>
                        <TouchableOpacity style={styles.iconpencil}>
                            <AntDesign name="edit" size={19} color={'#00C1D4'} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.form}>
                    <Text style={styles.title}>Email</Text>
                    <View style={styles.inputform}>
                        <View style={styles.inputcontainer}>
                            <TextInput
                                style={styles.input}
                                value={userName}
                            />
                        </View>
                        <TouchableOpacity style={styles.iconpencil}>
                            <AntDesign name="edit" size={19} color={'#00C1D4'} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.form}>
                    <Text style={styles.title}>Gender</Text>
                    <View style={styles.inputform}>
                        <View style={styles.inputcontainer}>
                            <TextInput
                                style={styles.input}
                            />
                        </View>
                        <TouchableOpacity style={styles.iconpencil}>
                            <AntDesign name="edit" size={19} color={'#00C1D4'} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.form}>
                    <Text style={styles.title}>Phone</Text>
                    <View style={styles.inputform}>
                        <View style={styles.inputcontainer}>
                            <TextInput
                                style={styles.input}
                            />
                        </View>
                        <TouchableOpacity style={styles.iconpencil}>
                            <AntDesign name="edit" size={19} color={'#00C1D4'} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    logoaccount: {
        width: 101,
        height: 100,
        marginTop: 48,
        alignSelf: "center",
    },
    formcontainer: {
        marginTop: 30,
        backgroundColor: "white",
        height: 318,
        width: 284,
        borderRadius: 10,
        alignSelf: "center",
        paddingHorizontal: 19,
        paddingVertical: 11,
    },
    form: {
        marginBottom: 7,
    },
    title: {
        color: "#512D6D",
        fontSize: 18,
        fontWeight: "400",
    },
    inputform: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#00C1D4",
        alignItems: "center",
    },
    inputcontainer: {
        flex: 1,
    },
    input: {
        fontSize: 16,
        fontWeight: "600",
    },

});