import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './utils/StackNavigator'
import { StatusBar, useColorScheme } from 'react-native'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  const color=useColorScheme();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle={color=='light'?'dark-content':'light-content'} backgroundColor={color==='dark'?'black':'white'}/>
      <StackNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App
