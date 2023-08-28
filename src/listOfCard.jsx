import React, { useState } from 'react';
import { View, Text, Image, FlatList, Button, Modal, StyleSheet, Alert } from 'react-native';
import Close from 'react-native-vector-icons/dist/EvilIcons';


const Data = [
    {
        id: 1,
        Name: "Sahil 1",
        Contact: "32323434",
        Email: "d;ls;@gmail.com",
        Img: require("../Image/passportPhoto1.jpg")
    },
    {
        id: 2,
        Name: "Sonali 2",
        Contact: "32323434",
        Email: "d;ls;@gmail.com",
        Img: require("../Image/passportPhoto2.jpg")
    },
    {
        id: 3,
        Name: "Sahil 3",
        Contact: "32323434",
        Email: "d;ls;@gmail.com",
        Img: require("../Image/passportPhoto1.jpg")
    },
    {
        id: 4,
        Name: "Sahil 4",
        Contact: "32323434",
        Email: "d;ls;@gmail.com",
        Img: require("../Image/passportPhoto1.jpg")
    },
    {
        id: 5,
        Name: "Sonali 5",
        Contact: "32323434",
        Email: "d;ls;@gmail.com",
        Img: require("../Image/passportPhoto2.jpg")
    },
    {
        id: 6,
        Name: "Sahil 6",
        Contact: "32323434",
        Email: "d;ls;@gmail.com",
        Img: require("../Image/passportPhoto1.jpg")
    },
    {
        id: 7,
        Name: "Sahil 7",
        Contact: "32323434",
        Email: "d;ls;@gmail.com",
        Img: require("../Image/passportPhoto1.jpg")
    },
    {
        id: 8,
        Name: "Sonali 8",
        Contact: "32323434",
        Email: "d;ls;@gmail.com",
        Img: require("../Image/passportPhoto2.jpg")
    },
    {
        id: 9,
        Name: "Sahil 9",
        Contact: "32323434",
        Email: "d;ls;@gmail.com",
        Img: require("../Image/passportPhoto1.jpg")
    },

]



const List_Card = () => {
    return (
        <View style={{ backgroundColor: 'black', height: '100%', width: '100', padding: 40 }}>
            <FlatList
                data={Data}
                renderItem={({ item }) => <Card name={item.Name} contact={item.Contact} email={item.Email} imgSrc={item.Img}></Card>}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const Card = (props) => {
    let imgSorce = props.imgSrc;
    const [modalVisible, setModalVisible] = useState(false);
    return (

        <View>
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
                       
                            <Close name="close" size={30} color='black' onPress={() => setModalVisible(false)} style={{ position: 'absolute', top: 10, right: 10,zIndex:2 }} />

                        <Image source={imgSorce} style={styles.modalImg}></Image>
                        <View style={styles.modalViewContent}>
                            <Text style={styles.modalContentName}>{props.name}</Text>
                            <Text style={styles.moadalTexts}>{props.contact}</Text>
                            <Text style={styles.moadalTexts}>{props.email}</Text>
                        </View>

                    </View>
                </View>
            </Modal>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20, paddingBottom: 20 }}>
                <Image source={imgSorce} style={{ height: 100, width: 100 }}></Image>
                <View >
                    <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>{props.name}</Text>
                    <Text style={{ color: 'white', fontSize: 20 }}>{props.contact}</Text>
                    <Text style={{ color: 'white', fontSize: 20 }}>{props.email}</Text>
                </View>
            </View>
            <Button title="On Click" onPress={() => { setModalVisible(true) }}></Button>
        </View>
    )
}


const styles = StyleSheet.create({
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
    }


});



export default List_Card;

