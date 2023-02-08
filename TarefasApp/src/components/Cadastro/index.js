import React, { useEffect, useState } from 'react';
import { StatusBar, View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Container, CaixaDeTexto, Label, Button } from '../../styles';;

export default function Cadastro() {

    const [msg, setMsg] = useState('');

    useEffect(() => {
        function iniciaMsg() {
            setMsg('');
        }
        iniciaMsg()

    }, []);

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor="transparent" translucent={true} />
            <LinearGradient colors={['#369D3D', '#068985', '#739EEC']} style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Container>
                        <View style={styles.msgArea}>
                            <Label>{msg}</Label>
                        </View>
                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'} style={styles.formArea}>
                            <Label>Nome</Label>
                            <CaixaDeTexto />
                            <Label>Email</Label>
                            <CaixaDeTexto />
                            <Label>Senha</Label>
                            <CaixaDeTexto secureTextEntry={true} />
                        </KeyboardAvoidingView>
                        <View style={styles.btnArea}>
                            <Button
                                onPress={() => { setMsg('Cadastro feito com sucesso!') }}
                            >
                                <Text style={styles.btnText}>Cadastrar</Text>
                            </Button>
                        </View>
                    </Container>
                </TouchableWithoutFeedback>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
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
    msgArea: {
        paddingTop: 180,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 50,
        justifyContent: 'center'
    },

});