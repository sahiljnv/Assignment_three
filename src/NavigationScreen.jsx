import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import List_Card from './listOfCard';
import DetailScreen from './DetailScreen';

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

