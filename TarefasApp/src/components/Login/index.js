import React from 'react';
import { Image, StatusBar, StyleSheet, SafeAreaView,View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Container, CaixaDeTexto, Label, Button } from '../../styles';
import icon from '../../assets/icon.png';
import { useNavigation } from '@react-navigation/native';

export default function Login() {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor="transparent" translucent={true} />
            <LinearGradient colors={['#369D3D', '#068985', '#739EEC']} style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Container>
                        <View style={styles.imgArea}>
                            <Image source={icon} style={styles.img} />
                        </View>
                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'} style={styles.formArea}>
                            <Label>Email</Label>
                            <CaixaDeTexto />
                            <Label>Senha</Label>
                            <CaixaDeTexto secureTextEntry={true} />
                        </KeyboardAvoidingView>
                        <View style={styles.btnArea}>
                            <Button
                                onPress={() => {navigation.navigate('Principal')}}>
                                <Text style={styles.btnText}>Entrar</Text>
                            </Button>
                            <TouchableOpacity
                                style={{paddingTop:6}}
                                onPress={() => { navigation.navigate("Cadastro") }}
                            >
                                <Text style={styles.msgCadastro}>Não possui uma conta?</Text>
                            </TouchableOpacity>
                        </View>
                    </Container>
                </TouchableWithoutFeedback>
            </LinearGradient>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    imgArea: {
        paddingTop: 105,
        paddingBottom: 90,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 219.13,
        height: 205.77
    },
    formArea: {
        marginLeft: 48,
        marginRight: 48,
    },
    btnArea: {
        marginLeft: 48,
        marginRight: 48,
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    msgCadastro: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
    }
});