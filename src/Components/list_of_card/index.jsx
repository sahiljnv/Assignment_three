import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Data } from '../../Data/DATA';
import CardButton from '../card_button';
import { styles } from './style';
const List_Card = ({ navigation }) => {

    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={Data}
                renderItem={({ item }) => <CardButton name={item.Name} contact={item.Contact} email={item.Email} imgSrc={item.Img} navigation={navigation} profilId={item.id}></CardButton>}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}



export default List_Card;

