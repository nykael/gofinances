import React from "react";
import { Alert } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import AppeSvg from '../../assets/apple.svg'
import GoogleSvg from '../../assets/google.svg'
import LogoSvg from '../../assets/logo.svg'

import { useAuth} from '../../hooks/auth'

import {SingInSocialButton} from '../../components/SingInSocialButton'


import { 
  Container,
  Header,
  TitleWrapper,
  Title,
  SingInTitle,
  Footer,
  FooterWrapper


} from "./style";

export function SingIn () {
  const {signInWithGoogle, signInWithApple} = useAuth()

  async function handleSignInWithGoogle(){
    try {
      await signInWithGoogle()
      
    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possível conectar a conta Google')
    }
  }

  async function handleSignInWithApple(){
    try {
      await signInWithApple()
      
    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possível conectar a conta Apple')
    }
  }


  return(
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg 
           width={RFValue(120)}
           height={RFValue(68)}
          />

          <Title>
            Controle suas {'\n'}
             finanças de forma {'\n'}
             muito simples {'\n'}
          </Title>
        </TitleWrapper>

        <SingInTitle>
          Faça seu lofin com  {'\n'}
          uma das contas abaixo
        </SingInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SingInSocialButton 
          title="Entrar com Google"
          svg={GoogleSvg}
          onPress={handleSignInWithGoogle}
          />
        

          <SingInSocialButton 
          title="Entrar com Apple"
          svg={AppeSvg}
          onPress={signInWithApple}
          />
        </FooterWrapper>
      </Footer>
    </Container>
  )
}