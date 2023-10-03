import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Data } from '../Data/DATA';
import CardButton from './CardButton';
const List_Card = ({ navigation }) => {

    return (
        <View style={{ backgroundColor: 'black', height: '100%', width: '100', paddingTop: 40, paddingHorizontal: 40 }}>
            <FlatList
                data={Data}
                renderItem={({ item }) => <CardButton name={item.Name} contact={item.Contact} email={item.Email} imgSrc={item.Img} navigation={navigation} profilId={item.id}></CardButton>}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({

});



export default List_Card;

