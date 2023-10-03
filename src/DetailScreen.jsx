import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { Data } from '../Data/DATA'
export default function DetailScreen({ route, navigation }) {
    const profilId = route.params.profilId;
    const detailOfPerson = Data.find((detail) => detail.id === profilId);
    return (
        <View style={styles.mainContainer}>
        <View style={styles.imgContainer}>
        <Image source={detailOfPerson.Img} style={styles.img} />

        </View>
            <View style={styles.detail}>
                <Text style={styles.detailItem}>Name : {detailOfPerson.Name}</Text>
                <Text style={styles.detailItem}>Age : {detailOfPerson.Age}</Text>
                <Text style={styles.detailItem}>Email : {detailOfPerson.Email}</Text>
                <Text style={styles.detailItem}>Contact : {detailOfPerson.Contact}</Text>
                <Text style={styles.detailItem}>Skill : </Text>
                {
                    detailOfPerson.Skill.map((skill) => <Text key={skill} style={styles.detailItem}>{skill} </Text>)
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 5
    },
    imgContainer:{
        paddingBottom:40,
        borderColor:"black",
        borderBottomWidth:2
    },
    img: {
        width: '100%',
        height: 250
    },
    detail: {
        alignItems: 'center'
    },
    detailItem: {
        fontSize: 30,
        color: 'black'
    }
})