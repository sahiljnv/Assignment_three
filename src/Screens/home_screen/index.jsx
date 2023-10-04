import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Arrow from 'react-native-vector-icons/dist/MaterialIcons';

const HomeScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.upperContainer}>
                <View style={styles.upperContainerBackground}></View>
                <View style={styles.upperContainerLogo}>

                    <View style={styles.upperContainerLogoItem1}></View>
                    <View style={styles.upperContainerLogoItem2}></View>
                </View>
            </View>
            <View style={styles.lowerContainer}>
                <Text style={styles.lowerContainerMainText}>Leafboard</Text>
                <Text style={styles.lowerCOntainerText}>A platform build for a new way of walking</Text>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Get started for free </Text>
                    <Arrow name='keyboard-arrow-right' color='black' size={20}></Arrow>
                </Pressable>
            </View>

        </View>
    )
}


export default HomeScreen;