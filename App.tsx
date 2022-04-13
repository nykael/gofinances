import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import { AuthProvider, useAuth } from './src/hooks/auth';


import{
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme'

import { Routes} from './src/routes/index'

import { AppRoutes } from './src/routes/app.routes';

import {SingIn} from './src/screens/SingIn'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  const { userStoragedLoading } = useAuth()

  if(!fontsLoaded || userStoragedLoading) {
    return <AppLoading/>
  }
  return (
  <ThemeProvider theme={theme}>
      <StatusBar barStyle={'light-content'}
      backgroundColor='transparent'
      translucent/>
      <AuthProvider>
       <Routes/>
      </AuthProvider>
  </ThemeProvider>
    
  )
}

