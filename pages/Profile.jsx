import {Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useSelector } from 'react-redux';


const dummy=[
  {
    id: 1,
    url: "https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400",
    description: "A passionate and outgoing individual who loves to travel and explore new places."
},
{
    id: 2,
    url: "https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400",
    description: "A passionate and outgoing individual who loves to travel and explore new places."
},
{
    id: 3,
    url: "https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400",
    description: "A passionate and outgoing individual who loves to travel and explore new places."
},
{
    id: 4,
    url: "https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400",
    description: "A passionate and outgoing individual who loves to travel and explore new places."
},
{
    id: 5,
    url: "https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400",
    description: "A passionate and outgoing individual who loves to travel and explore new places."
},
]

const Profile = ({navigation}) => {
  const userDetails = useSelector(state => state.userDetails);
  
  const [userInfo,setUserInfo]=useState(userDetails.userInfo)

  return (
    <ScrollView style={{
      flex: 1,
      padding: 10,
    }}>
      
      <View style={{
        marginTop:10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft:20,
        paddingRight:20
      }}>
        <Text style={{
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom:10
      }}>Profile</Text>
        <Image
          source={{ uri: userInfo.profileImage || 'https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400' }}
          style={{ height: 150, width: 150, borderRadius:200,objectFit:'cover' }}
          alt="no profile"
        />
        <View style={{
          width: '100%',
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
          <Text style={{
            fontSize:16,
            fontWeight:'300',
            color:'black',
            marginTop:5,
            textAlign:'left'
          }}>Full Name</Text>
          <TextInput 
          readOnly
            value={userInfo?.fullName}
            style={{
              height: 50,
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 10,
              marginBottom: 10,
              paddingLeft: 10,
              fontSize: 18,
              width:'100%'
            }}
          />
        </View>

        <View style={{
          width: '100%',
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
          <Text style={{
            fontSize:16,
            fontWeight:'300',
            color:'black',
            marginTop:5,
            textAlign:'left'
          }}>Job</Text>
          <TextInput 
          readOnly
            value={userInfo?.job || "Software Engineer"}
            style={{
              height: 50,
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 10,
              marginBottom: 10,
              paddingLeft: 10,
              fontSize: 18,
              width:'100%'
            }}
          />
        </View>

        <View style={{
          width: '100%',
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
          <Text style={{
            fontSize:16,
            fontWeight:'300',
            color:'black',
            marginTop:5,
            textAlign:'left'
          }}>Bio</Text>
          <TextInput
            multiline={true}
            readOnly
            value={userInfo.bio || "A passionate and outgoing individual who loves to travel and explore new places."}
            style={{
              // height: 50,
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 10,
              marginBottom: 10,
              paddingLeft: 10,
              fontSize: 18,
              width:'100%'
            }}
          />
        </View>

        <Text style={{
          fontSize:16,
          fontWeight:'400',
          color:'black',
          textAlign:'center',
        }}></Text>

        <TouchableOpacity style={{
          backgroundColor:'#4F8EF7',
          padding:10,
          borderRadius:5,
          marginTop:10,
          width:'50%'
        }}>
          <Text style={{
            fontSize:18,
            fontWeight:'bold',
            color:'#fff',
            textAlign:'center'
          }}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      
      <View style={{
        backgroundColor:'white',
        padding:10,
        borderRadius:10,
        marginTop:20
      }}>
        <Text style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: '#333333'
        }}>Your Pictures</Text>
      <View style={{
        flex: 1,
        padding: 10,
        backgroundColor: '#F9F9F9',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10
      }}>
        
        {
          dummy.map((item,index)=>{
            return(
              <View key={index} style={{
                marginBottom: 20,
                backgroundColor: 'white',
                padding: 10,
                borderRadius: 15,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                width:'100%',
                
              }}>
                <Image 
                  source={{ uri: item.url }}
                  style={{ height: 300, width: '100%', borderRadius:20,objectFit:'cover', }}
                  alt="no profile"
                />
                <Text style={{
                  fontSize:16,
                  fontWeight:'400',
                  color:'black',
                  marginTop:5,
                  marginLeft:10,
                  marginBottom:10,
                  width:'100%',
                  textAlign:'center'
                }}>{item.description}</Text>
              </View>
            )
          })
        }
      </View>
      <TouchableOpacity onPress={()=>{
        AsyncStorage.clear()
        navigation.navigate('Sign in')
      }} style={{
          backgroundColor:'red',
          padding:10,
          borderRadius:5,
          marginTop:10,
          marginBottom:10,
          width:'100%'
        }}>
          <Text style={{
            fontSize:18,
            fontWeight:'bold',
            color:'#fff',
            textAlign:'center'
          }}>Logout</Text>
        </TouchableOpacity>
      <TouchableOpacity style={{
          backgroundColor:'red',
          padding:10,
          borderRadius:5,
          marginTop:10,
          marginBottom:10,
          width:'100%'
        }}>
          <Text style={{
            fontSize:18,
            fontWeight:'bold',
            color:'#fff',
            textAlign:'center'
          }}>Delete Account</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({})