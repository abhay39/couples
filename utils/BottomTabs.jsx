import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomeScreen';
import Matches from '../pages/Matches';
import Mesages from '../pages/Mesages';
import Profile from '../pages/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { setUserDetails } from '../store/UserDetails';
import { useDispatch, useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

const MyTabs=()=> {
  const dispatch=useDispatch();
  

  const getUserDetails=async(token)=>{
    try{
      const response=await fetch(`${process.env.API_URL}/auth/getUser/${token.token}`)
      const resData=await response.json();
      if(response.status === 200){
        dispatch(setUserDetails(resData));
      }else{
        toast.show(resData.error, {
          type: 'error',
          topOffset: 20,
          bottomOffset: 80,
          duration: 4000,
          placement: 'top',
        });
        navigation.navigate("Sign in")
      }
    }catch(error){
      console.log("Error",error)
    }
  }

  const token=useSelector(item=>item.userDetails);
  useEffect(()=>{
    if(token.token){
      getUserDetails(token)
    }
  },[])
  
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={focused? 'home' : 'home-outline'}
            size={size}
            color={color}
          />
        ),
      }}/>
      <Tab.Screen name="Matches" component={Matches} options={{
        tabBarIcon: ({ focused, color, size }) => (
            <AntDesign
            name={focused? 'heart' : 'hearto'}
            size={size}
            color={color}
          />
        ),
      }}/>
      <Tab.Screen name="Message" component={Mesages} options={{
        tabBarIcon: ({ focused, color, size }) => (
          <MaterialCommunityIcons
            name={focused? 'message-reply' : 'message-outline'}
            size={size}
            color={color}
          />
        ),
      }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ focused, color, size }) => (
          <FontAwesome
            name={focused? 'user-circle' : 'user-circle-o'}
            size={size}
            color={color}
          />
        ),
      }}/>
    </Tab.Navigator>
  );
}

export default MyTabs;