import {Text, View, Image } from 'react-native'
import React from 'react'
import { Data } from '../../Data/DATA'
import { styles } from './style';
export default function DetailScreen({ route }) {
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

