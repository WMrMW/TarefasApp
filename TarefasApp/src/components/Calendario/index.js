import React from 'react';
import { Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Container } from '../../styles';

export default function Calendario() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <LinearGradient colors={['#369D3D', '#068985', '#739EEC']} style={{ flex: 1 }}>
        <Container>
        </Container>
      </LinearGradient>
    </SafeAreaView>
  );
}