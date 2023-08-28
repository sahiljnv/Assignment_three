import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Modal } from 'react-native';
import Arrow from 'react-native-vector-icons/dist/MaterialIcons';
import Apple from 'react-native-vector-icons/dist/AntDesign';
import Google from 'react-native-vector-icons/dist/FontAwesome';
import Close from 'react-native-vector-icons/dist/EvilIcons';


const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const condition = ()=>{
        
        if (!password.length > 0) {
            return false;
        }
        if(!email.length > 0){
            return false;
        }

        if ((password.length >= 8 && email.length >= 11)){
            return true;
        }
        
        return false;


    }

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


                <Pressable onPress={() => {  setModalVisible(condition)} }style={[styles.lowerContainerButton, { backgroundColor: condition() ? '#a5fc83' : '#f1f2f6' }]}>

                    <Text style={[{ color:condition() ? 'black' : '#9da5b8' }, styles.lowerContainerButtonText]}>Continue</Text>
                    <Arrow name='keyboard-arrow-right' color={condition() ? 'black' : '#9da5b8'} size={20} style={styles.lowerContainerButtonIcon}></Arrow>

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

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%'
    },
    upperContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 2
    },
    upperContainerMainTextAndLogo: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    upperContainerLogo: {
        backgroundColor: '#f6f7f9',
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    upperContainerLogoItem1: {
        backgroundColor: '#9ff47f',
        height: 25,
        width: 25,
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
        position: 'absolute',
        right: 20,
        bottom: 20
    },
    upperContainerLogoItem2: {
        backgroundColor: '#141e34',
        height: 25,
        width: 25,
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
        position: 'absolute',
        left: 20,
        top: 20
    },
    upperContainerMainText: {
        color: '#111b31',
        fontSize: 30,
        paddingLeft: 10
    },
    upperContainerText: {
        color: '#111b31',
        fontSize: 20,
        paddingTop: '5%'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    modalView: {
        backgroundColor: 'white',
        height: "50%", width: "80%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    modalImg: {
        height: 200,
        width: 200
    },
    modalViewContent: {
        alignItems: 'center',
        paddingTop: 20
    },
    modalContentName: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold'
    },
    moadalTexts: {
        color: 'red',
        fontSize: 20
    },
    lowerContainer: {
        flex: 6,
        padding: '5%'
    },
    lowerContainerInputLabel: {
        color: '#111b31',
        fontSize: 15,
        paddingTop: 30
    },
    lowerContainerInput: {
        borderColor: '#eeeff3',
        borderWidth: 2,
        color: '#111b31',
        borderRadius: 50,
        marginTop: 10, 
        paddingLeft:5
    },
    lowerContainerButton: {
        height: 50,
        borderRadius: 50,
        marginTop: 30,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    lowerContainerButtonText: {
        fontSize: 15
    },
    lowerContainerButtonIcon: {
        position: 'absolute',
        right: 10
    },
    lowerContainerHorizontelLine: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    horizontelLine: {
        height: 2,
        width: '45%',
        backgroundColor: '#eeeff3'
    },
    signInButton: {
        borderColor: '#eeeff3',
        borderWidth: 2,
        height: 50,
        borderRadius: 50,
        marginTop: 10,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    signInButtonText: {
        color: 'black',
        fontSize: 15
    }, signInButtonIcon: {
        position: 'absolute',
        left: "20%"
    }
});


export default LoginScreen;