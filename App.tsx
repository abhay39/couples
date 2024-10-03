import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './utils/StackNavigator'
import { StatusBar, useColorScheme } from 'react-native'

const App:React.FC = () => {
  const color=useColorScheme();
  return (
    <NavigationContainer>
      <StatusBar barStyle={color=='light'?'dark-content':'light-content'} backgroundColor={color==='dark'?'black':'white'}/>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App
