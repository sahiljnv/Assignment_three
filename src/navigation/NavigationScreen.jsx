import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import List_Card from '../Components/list_of_card';
import DetailScreen from '../Screens/detail_screen';

const Stack = createNativeStackNavigator();

export default function NavigationScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Profils" component={List_Card}/>
                <Stack.Screen name="Detail" component={DetailScreen}/>


            </Stack.Navigator>
        </NavigationContainer>


    )
}

