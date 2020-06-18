import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons, FontAwesome } from '@expo/vector-icons'; 

const Wrapper = styled.SafeAreaView`
`

const Header = styled.SafeAreaView`
background-color: #56599D;
width: 100%;
height: 250px;
border-bottom-left-radius: 80px;
border-bottom-right-radius: 80px;
`

const Menu = styled.View`
  justify-content: space-between;
  flex-direction: row;
  flex: 1;
  padding: 25px;
  margin-top: 10px;
`

const IconBtn = styled.TouchableOpacity``

const LogoImg = styled.Image`
  width: 64px;
  height: 64px;
  align-self: center;
`

const Logo = styled.View``

const LogoTxt = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: #E84857;
`

const Branco = styled.Text`
color:white;
`

const SubTitle = styled.Text`
  font-weight: 100;
  font-size: 14px;
  color: #fff;
  align-self: center;
`

const BtnLocal = styled.View`
  width: 75%;
  height: 40px;
  background-color: rgba(255,255,255, 0.5);
  border-radius: 30px;
  align-self: center;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const Local = styled.TouchableOpacity`
  background: #fff;
  border-radius: 30px;
  width: 45%;
  align-items: center;
  justify-content: center;
  margin-right: 5%;
  height: 75%;
`

const Global = styled.TouchableOpacity`
  border-radius: 30px;
  width: 45%;
  align-items: center;
  height: 75%;
  justify-content: center;

`

const LocalTxt = styled.Text`
  color: #56599D;
  font-size: 16px;
`

const GlobalTxt = styled.Text`
  color: #56599D;
  font-size: 16px;
`

const Localizacao = styled.Text`
  text-transform: uppercase;
  align-self: center;
  font-size: 30px;
  margin-top: 10px;
`

const ScrollCards = styled.ScrollView`

`
const Cards = styled.TouchableOpacity`
  width: 80%;
  height: 220px;
  background-color: #fff;
  align-self: center;
  border-radius: 20px;
  margin-top: 15px;
`
const CardCurva = styled.TouchableOpacity`
  width: 80%;
  height: 220px;
  background-color: #56599D;
  align-self: center;
  border-radius: 20px;
  margin-top: 15px;
  justify-content: center;
`

const CardContaminado = styled.TouchableOpacity`
  width: 80%;
  height: 220px;
  background-color: #9059FF;
  align-self: center;
  border-radius: 20px;
  margin-top: 15px;
  justify-content: center;
`

const CardRecuperado = styled.TouchableOpacity`
  width: 80%;
  height: 220px;
  background-color: #4CD97B;
  align-self: center;
  border-radius: 20px;
  margin-top: 15px;
  justify-content: center;
`

const CardObito = styled.TouchableOpacity`
  width: 80%;
  height: 220px;
  background-color: #FF4C58;
  align-self: center;
  border-radius: 20px;
  margin-top: 15px;
  justify-content: center;
`

const CardTitle = styled.View`
  flex-direction: row;
  align-self: center;
`

const LabelCard = styled.Text`
justify-content: space-between;
color: white;
font-size: 20px;
`
const LabelNum = styled.Text`
align-self: center;
color: white;
font-size: 80px;
`

export default function App() {
  return (
    <Wrapper>
        <Header>
          <Menu>     
          <IconBtn><Ionicons name="ios-menu" size={30} color="white" /></IconBtn>
          <Logo>
            <LogoImg source={require('./res/imgs/logo.png')} />
            <LogoTxt>CORO<Branco>NOX</Branco></LogoTxt><SubTitle>statistics</SubTitle>
          </Logo>
          <IconBtn><FontAwesome name="bell-o" size={24} color="white" /></IconBtn>
          </Menu>
          <BtnLocal>
            <Local><LocalTxt>Local</LocalTxt></Local>
            <Global><GlobalTxt>Global</GlobalTxt></Global>
          </BtnLocal>
        </Header>

        <Localizacao>Teresópolis</Localizacao>
        <ScrollCards>

        <CardCurva>
        <CardTitle>
            <LabelCard>CURVA DO COVID 19</LabelCard>
            </CardTitle>
          <LabelNum>grafico</LabelNum>
        </CardCurva>

        <CardContaminado>
          <CardTitle>
            <LabelCard>CONTAMINADOS</LabelCard>
            </CardTitle>
          <LabelNum>`$(curados)`</LabelNum>
        </CardContaminado>

        <CardRecuperado>
        <CardTitle>
            <LabelCard>RECUPERADOS</LabelCard>
            </CardTitle>
          <LabelNum>110</LabelNum>
        </CardRecuperado>

        <CardObito>
        <CardTitle>
            <LabelCard>ÓBITOS</LabelCard>
            </CardTitle>
          <LabelNum>24</LabelNum>
        </CardObito>

        <Cards></Cards>
        <Cards></Cards>
        </ScrollCards>
    </Wrapper>
  );
}
