import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function CustomDrawer(props) {
    const navigation = useNavigation();
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.btnArea}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => { navigation.navigate('Login') }}
                >
                    <Text style={styles.textbtn}>Sair</Text>
                </TouchableOpacity>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    btnArea: {
        width: '100%',
        height: 50,
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 10
    },
    btn: {
        width: 70,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#068985',
        borderRadius: 8
    },
    textbtn: {
        fontSize: 20,
        color: '#FFFFFF'
    }
});