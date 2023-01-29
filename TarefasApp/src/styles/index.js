import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
padding-top: 28px;
`; 

export const CaixaDeTexto = styled.TextInput`
width: 100%;
height: 40px;
background-color: #939393;
padding-bottom: 10px;
padding-top: 10px;
border-radius: 5px;
color: #ffffff;
`;

export const Label = styled.Text`
font-size: 24px;
font-weight: bold;
padding-top: 10px;
padding-bottom: 10px;
color: #FFFFFF;
`;

export const Button = styled.TouchableOpacity`
align-items: center;
justify-content: center;
padding: 5px;
width: 100px;
height: 45px;
background-color: #068985;
border-radius: 6px;
`;
