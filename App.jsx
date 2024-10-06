import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './utils/StackNavigator'
import { StatusBar, useColorScheme } from 'react-native'
import { Provider } from 'react-redux'
import store from './store'
import { ToastProvider } from 'react-native-toast-notifications'

const App = () => {
  const color=useColorScheme();
  return (
    <ToastProvider>
      <Provider store={store}>
          <StatusBar barStyle={color=='light'?'dark-content':'light-content'} backgroundColor={color==='dark'?'black':'white'}/>
        <NavigationContainer>
        <StackNavigator />
        </NavigationContainer>
      </Provider>
    </ToastProvider>
  )
}

export default App
