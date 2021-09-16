import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading'
import { useFonts, Anton_400Regular} from '@expo-google-fonts/anton'

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {

  let [ fontsLoaded ] = useFonts({
    Anton_400Regular,
  })

  if(!fontsLoaded) {
    return(
      <AppLoading/>
    )
  } 
    
    return (
      <NavigationContainer>
        <StatusBar style="light" backgroundColor="#000" translucent={true} />
        <Routes/>
      </NavigationContainer>
      
    );

  

}

