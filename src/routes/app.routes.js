import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'


import Home from '../pages/Home'
import Detail from '../pages/Detail'

function AppRoutes() {

  const AppSlack = createStackNavigator()

 return (

   <AppSlack.Navigator>
     <AppSlack.Screen 
      name="Home" 
      component={Home}
      options={{ headerShown: false }}
    />

     <AppSlack.Screen 
      name="Detalhes" 
      component={Detail}
      
    />

   </AppSlack.Navigator>

  );
}

export default AppRoutes