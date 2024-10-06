import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopBarLocation from '../components/TopBarLocation'
import Swippers from '../components/Swippers'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TopBarLocation />
      <Swippers />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ced4da',
    paddingTop:30,
    paddingBottom:10,
    paddingHorizontal:20,
  }
})