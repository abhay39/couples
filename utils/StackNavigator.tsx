
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import HomeScreen from '../pages/HomeScreen';
import Splash from '../pages/Splash';
import { StatusBar, useColorScheme } from 'react-native';

const Stack=createNativeStackNavigator();
const StackNavigator = () => {

  
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false,
    }}>
      
        <Stack.Group>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Sign in" component={Login} />
            <Stack.Screen name="Sign up" component={Signup} />
        </Stack.Group>
        <Stack.Group>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Group>
    </Stack.Navigator>
  )
}

export default StackNavigator
