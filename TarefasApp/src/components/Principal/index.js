import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../Home/index';
import Perfil from '../Perfil/index';
import Calendario from '../Calendario/index';
import CustomDrawer from '../CustomDrawer';

const Drawer = createDrawerNavigator();

export default function Principal() {
    return (
        <Drawer.Navigator
            drawerContent={CustomDrawer}
            screenOptions={{
                headerShown: false,
                drawerStyle:{
                    backgroundColor:'#369D3D'
                },
                drawerActiveTintColor: '#FFFFFF',
                drawerInactiveTintColor: '#FFFFFF',
                drawerInactiveBackgroundColor:'#068985',
                drawerActiveBackgroundColor:'#739EEC',
            }}>
            <Drawer.Screen
                name='Home'
                component={Home}
            />
            <Drawer.Screen
                name='Calendario'
                component={Calendario}
            />
            <Drawer.Screen
                name='Perfil'
                component={Perfil}
            />
        </Drawer.Navigator>
    );
}