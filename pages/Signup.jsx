import { Image, StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View,  } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { useNavigation } from '@react-navigation/native'
import { API_URL } from '@env';
import { useToast } from 'react-native-toast-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'

const Signup = () => {
  const color=useColorScheme();
  const navigation=useNavigation()
  const [loginData,setLoginData]=useState({
      email: '',
      password: '',
      fullName:"",
      age: 0,
      gender: ""
  })

  const isDisabled=!loginData.email || !loginData.password || !loginData.fullName || !loginData.gender || !loginData.age
  const toast=useToast();

  const handleLogin = async () => {
    try {
      // Check age constraint
      if (loginData.age < 18) {
        return toast.show('Your age must be 18 or above to create an account', {
          type: 'warning',
          topOffset: 20,
          bottomOffset: 80,
          duration: 4000,
          placement: 'top',
        });
      }
    
      // Make the API request
      const response = await fetch(`${API_URL}/auth/register-account`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
  

      const resData = await response.json();

      console.log("Reeded", resData)
  
      if (response.status === 201) {
        // Store token and navigate on success
        await AsyncStorage.setItem('token', resData.token);
        toast.show(resData.message, {
          type: 'success',
          topOffset: 20,
          bottomOffset: 80,
          duration: 4000,
          placement: 'top',
        });
        navigation.navigate('MyTabs');
      } else {
        // Display error toast if status isn't 201
        toast.show(resData.error, {
          type: 'error',
          topOffset: 20,
          bottomOffset: 80,
          duration: 4000,
          placement: 'top',
        });
      }
    } catch (error) {
      // Handle network or unexpected errors
      toast.show('Something went wrong. Please try again later.', {
        type: 'error',
        topOffset: 20,
        bottomOffset: 80,
        duration: 4000,
        placement: 'top',
      });
      console.error('Login Error:', error);
    }
  };

  
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
        ]}>Sign up</Text>
        <View style={styles.inputContainer}>
            <Text style={[
              styles.label,
              {color:color==='dark'?"white":"black"}
            ]}>Full name</Text>
            <TextInput onChangeText={(e)=>{
                setLoginData({...loginData, fullName: e })
            }} style={[
              {borderColor:color==='dark'?"white":"black"},
              {color:color=='dark'?"white":"black"},
              styles.input
            ]} placeholder='Enter your full name' keyboardType="name-phone-pad" />

            <Text style={[
              styles.label,
              {color:color==='dark'?"white":"black"}
            ]}>Email</Text>
            <TextInput onChangeText={(e)=>{
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
            <TextInput onChangeText={(e)=>{
                setLoginData({...loginData, password: e })
            }} style={[
              {borderColor:color==='dark'?"white":"black"},
              {color:color=='dark'?"white":"black"},
              styles.input
            ]} secureTextEntry={true} placeholder='Enter your password' />

            <Text style={[
              styles.label,
              {color:color==='dark'?"white":"black"}
            ]}>Age</Text>
            <TextInput onChangeText={(e)=>{
                setLoginData({...loginData, age: e })
            }} style={[
              {borderColor:color==='dark'?"white":"black"},
              {color:color=='dark'?"white":"black"},
              styles.input
            ]} keyboardType="number-pad" placeholder='Enter your age' />
            
            <Text style={[
              styles.label,
              {color:color==='dark'?"white":"black"}
            ]}>Gender</Text>
            <Picker selectedValue={loginData.gender} onValueChange={(e)=>{
                setLoginData({...loginData, gender: e })
            }} style={{ height: 50,borderWidth:1,borderColor:'black', marginBottom:10,color:color=='dark'?'white':'black' }}>
                <Picker.Item label="Select Gender" value="" />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Other" value="other" />
            </Picker>
            
            <TouchableOpacity disabled={isDisabled} onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
              navigation.navigate("Sign in")
            }}>
                <Text style={[
          styles.forgotText,
          {color:color==='dark'?"white":'blue'}
        ]}>Already have an account? Sign in</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Signup

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
  }
})
