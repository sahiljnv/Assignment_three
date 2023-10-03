import { StyleSheet, Text, View,Pressable,Image } from 'react-native'
import React, {useEffect} from 'react'

export default function CardButton({name,contact,email,navigation,imgSrc,profilId}) {
const buttonPressHandler = ()=>{
  navigation.navigate('Detail',{profilId:profilId})
}
  return (
    <Pressable style={({pressed})=>pressed? styles.button:null} onPress={buttonPressHandler}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20, paddingBottom: 20 }}>
        <Image source={imgSrc} style={{ height: 100, width: 100 }}></Image>
        <View >
            <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>{name}</Text>
            <Text style={{ color: 'white', fontSize: 20 }}>{contact}</Text>
            <Text style={{ color: 'white', fontSize: 20 }}>{email}</Text>
        </View>
    </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button:{
    opacity:0.5
 }
})