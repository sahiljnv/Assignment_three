import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Modal } from 'react-native';
import Arrow from 'react-native-vector-icons/dist/MaterialIcons';
import Apple from 'react-native-vector-icons/dist/AntDesign';
import Google from 'react-native-vector-icons/dist/FontAwesome';
import Close from 'react-native-vector-icons/dist/EvilIcons';

import { condition } from '../../utils/utility';
const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [checkCondition, setCondition] = useState(false);
    useEffect(()=>{
        setCondition( condition(password,email))
    },[password,email])
    return (
        <View style={styles.mainContainer}>
            <View style={styles.upperContainer}>
                <View style={styles.upperContainerMainTextAndLogo}>
                    <View style={styles.upperContainerLogo}>

                        <View style={styles.upperContainerLogoItem1}></View>
                        <View style={styles.upperContainerLogoItem2}></View>
                    </View>
                    <Text style={styles.upperContainerMainText}>Leafboard</Text>

                </View>
                <Text style={styles.upperContainerText}>Working without limits</Text>
            </View>
            <View style={styles.lowerContainer}>
                <Text style={styles.lowerContainerInputLabel}>Your email address</Text>
                <TextInput onChangeText={setEmail} placeholder="example@gmail.com" keyboardType='email-address' placeholderTextColor='#a2aabc' style={styles.lowerContainerInput}></TextInput>
                <Text style={styles.lowerContainerInputLabel}>Choose a passward</Text>
                <TextInput onChangeText={setPassword} placeholder="min. 8 Characters" secureTextEntry={true} placeholderTextColor='#a2aabc' style={styles.lowerContainerInput}></TextInput>


                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>

                    <View style={styles.centeredView}>

                        <View style={styles.modalView}>
                            <Close name="close" size={30} color='black' onPress={() => setModalVisible(false)} style={{ position: 'absolute', top: 10, right: 10, zIndex: 2 }} />
                            <View style={styles.modalViewContent}>
                                <Text style={styles.modalContentName}> Email : {email}</Text>
                                <Text style={styles.moadalTexts}>Password :  {password}</Text>
                            </View>

                        </View>
                    </View>
                </Modal>


                <Pressable onPress={() => {  setModalVisible(condition)} }style={[styles.lowerContainerButton, { backgroundColor:checkCondition ? '#a5fc83' : '#f1f2f6' }]}>

                    <Text style={[{ color:checkCondition ? 'black' : '#9da5b8' }, styles.lowerContainerButtonText]}>Continue</Text>
                    <Arrow name='keyboard-arrow-right' color={checkCondition ? 'black' : '#9da5b8'} size={20} style={styles.lowerContainerButtonIcon}></Arrow>

                </Pressable>
                <View style={styles.lowerContainerHorizontelLine}>
                    <View style={styles.horizontelLine}></View>
                    <Text style={{ color: '#707a91', fontSize: 15 }}>  or  </Text>
                    <View style={styles.horizontelLine}></View>
                </View>
                <Pressable style={styles.signInButton}>
                    <Google name='google' color='black' size={20} style={styles.signInButtonIcon}></Google>
                    <Text style={styles.signInButtonText}>Sign up with Google</Text>

                </Pressable>
                <Pressable style={styles.signInButton}>
                    <Apple name='apple1' color='black' size={20} style={styles.signInButtonIcon}></Apple>
                    <Text style={styles.signInButtonText}>Sign up with Apple</Text>

                </Pressable>

            </View>
        </View>
    )
}




export default LoginScreen;