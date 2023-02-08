import React from 'react';
import Login from '../components/Login';
import Cadastro from '../components/Cadastro';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Principal from '../components/Principal'

export default function Routes() {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                }}

            />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{
                    title: '',
                    headerShown: true,
                    headerTransparent: true,
                }}
            />
            <Stack.Screen
                name="Principal"
                component={Principal}
                options={{
                    title: '',
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}