import { Image, StyleSheet, Text, View,StatusBar,useColorScheme } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const navigation=useNavigation();
  const color=useColorScheme();

  const isToken= AsyncStorage.getItem('token');
  console.log("Token",isToken)
  if(isToken){
    setTimeout(async()=>{
      navigation.navigate('MyTabs')
    },3000)
  }else{
    setTimeout(async()=>{
      navigation.navigate('Sign in')
    },3000)
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'white'} backgroundColor={'#fb6f92'}/>
      {/* <ImageBackground source={{uri:"https://www.logo-designer.co/storage/2021/02/2021-collins-new-logo-design-dating-site-match.png"}} style={styles.background}>
      </ImageBackground> */}
      {/* <Image source={require("../images/logo.jpg")} alt='logo' height={150} width={150}/> */}
      <Image 
          source={{uri: "https://cdn1.iconfinder.com/data/icons/social-media-circle-6/1024/tinder-circle-512.png"}} 
          style={styles.logo} 
        />
        <Text style={{
            fontSize:80,
            fontWeight:'bold',
            color:'white'
        }}>match❤</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fb6f92'
    },
    background:{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    logo: {
      height: 100,
      width: 100,
      marginBottom: 20,
    },
})