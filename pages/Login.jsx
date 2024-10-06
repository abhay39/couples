import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions,useColorScheme } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useToast } from 'react-native-toast-notifications';

const Login = () => {
  const [loginData,setLoginData]=useState({
    email: '',
    password: ''
  })

  const color=useColorScheme();
  const navigation=useNavigation()
  const toast=useToast();

  const isDisabled=!loginData.email || !loginData.password;

  const handleLogin=async()=>{
    let res= await fetch(`${process.env.API_URL}/auth/login`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
    const status=res.status;
    res=await res.json();
    if(status===201){
      await AsyncStorage.setItem('token', res.token);
        toast.show(res.message, {
          type: 'success',
          topOffset: 20,
          bottomOffset: 80,
          duration: 4000,
          placement: 'top',
        });
      navigation.navigate('Home');
    }else{
      toast.show(res.error, {
        type: 'error',
        topOffset: 20,
        bottomOffset: 80,
        duration: 4000,
        placement: 'top',
      });
      setLoginData({
        email: '',
        password: '',
      })
    }
  }

  return (
    <View style={[
      { backgroundColor: color === 'dark' ? 'black' : 'white' }, 
      styles.container
    ]}>
      <View style={styles.innerContainer}>
        <Image 
          source={{uri: "https://cdn1.iconfinder.com/data/icons/social-media-circle-6/1024/tinder-circle-512.png"}} 
          style={styles.logo} 
        />
        <Text style={[
          styles.headerText,
          {color:color==='dark'?"white":'blue'}
        ]}>Login</Text>
        <View style={styles.inputContainer}>
            <Text style={[
              styles.label,
              {color:color==='dark'?"white":"black"}
            ]}>Email</Text>
            <TextInput value={loginData.email} onChangeText={(e)=>{
                setLoginData({...loginData, email: e })
            }} style={[
              {borderColor:color==='dark'?"white":"black"},
              {color:color=='dark'?"white":"black"},
              styles.input
            ]} placeholder='Enter your email address' keyboardType='email-address' />
            <Text style={[
              styles.label,
              {color:color==='dark'?"white":"black"}
            ]}>Password</Text>
            <TextInput value={loginData.password} onChangeText={(e)=>{
                setLoginData({...loginData, password: e })
            }} style={[
              {borderColor:color==='dark'?"white":"black"},
              {color:color=='dark'?"white":"black"},
              styles.input
            ]} secureTextEntry={true} placeholder='Enter your password' />

            <TouchableOpacity disabled={isDisabled} onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{
              navigation.navigate("Sign up")
            }}>
                <Text style={styles.dntText}>Don't have an account? Sign up</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#f2f2f2',
  },
  innerContainer: {
    width: '90%', // Make sure this width is relative to the screen size
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 100,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'blue',
    width: '100%',
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: '100%',
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  forgotText:{
    marginTop: 10,
    color: 'blue',
    textDecorationLine: 'underline',
    textAlign:'right'
  },
  dntText:{
    marginTop: 10,
    color: 'red',
    textDecorationLine: 'underline',
    textAlign:'center'
  },
})
