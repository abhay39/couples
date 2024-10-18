import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Searchbar from '../components/Searchbar'
import MessageUserCard from '../components/MessageUserCard'


const dummyUserWithMessage=[
  {
    name:"Duane Padilla",
    message:"Hello",
    timestamp:"2022-01-01 10:00:00",
    imageUrl:"https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400",
    isSeen:false
  },
  {
    name:"Maria Brock",
    message:"Hello",
    timestamp:"2022-01-01 12:33:32",
    imageUrl:"https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400",
    isSeen:true
  },
  {
    name:"Norman Tate",
    message:"Hello",
    timestamp:"2022-01-01 10:00:00",
    imageUrl:"https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400",
    isSeen:false
  },
  {
    name:"Gertrude Wilkins",
    message:"Hello",
    timestamp:"2022-01-01 10:00:00",
    imageUrl:"https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400",
    isSeen:true
  },
  {
    name:"Cynthia Parsons",
    message:"Hello",
    timestamp:"2022-01-01 10:00:00",
    imageUrl:"https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400",
    isSeen:false
  },
  {
    name:"Charlie Fernandez",
    message:"Hello",
    timestamp:"2022-01-01 10:00:00",
    imageUrl:"https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400",
    isSeen:true
  },
  {
    name:"Duane Padilla",
    message:"Hello",
    timestamp:"2022-01-01 10:00:00",
    imageUrl:"https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400",
    isSeen:false
  },
  {
    name:"Maria Brock",
    message:"Hello",
    timestamp:"2022-01-01 12:33:32",
    imageUrl:"https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400",
    isSeen:true
  },
  {
    name:"Norman Tate",
    message:"Hello",
    timestamp:"2022-01-01 10:00:00",
    imageUrl:"https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400",
    isSeen:false
  },
  {
    name:"Gertrude Wilkins",
    message:"Hello",
    timestamp:"2022-01-01 10:00:00",
    imageUrl:"https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400",
    isSeen:true
  },
  {
    name:"Cynthia Parsons",
    message:"Hello",
    timestamp:"2022-01-01 10:00:00",
    imageUrl:"https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400",
    isSeen:false
  },
  {
    name:"Charlie Fernandez",
    message:"Hello",
    timestamp:"2022-01-01 10:00:00",
    imageUrl:"https://static.india.com/wp-content/uploads/2024/02/Akshay-Kumar-2.jpg?impolicy=Medium_Widthonly&w=400",
    isSeen:true
  },
]

const Mesages = () => {
  const [serchText,setSearch]=useState('')
  const [foundResult,setFoundResult]=useState([])
  
  const handleOnchange=(e)=>{
    setSearch(e)
    const filteredUsers = dummyUserWithMessage.filter(user=>
      user.name.toLowerCase().includes(serchText.toLowerCase())
    )
    console.log(filteredUsers)
    setFoundResult(filteredUsers)
  }



  return (
    <View style={{
      flex:1,
      padding:10,

    }}>
      <Text style={{
        fontSize:28,
        fontWeight:'bold',
        color:'#333333'
      }}>Messages</Text>

      <Searchbar handleOnchange={handleOnchange} serchText={serchText} setSearch={setSearch}/>

      {
        serchText.length>3 ? (
          foundResult.length>0? (
            <FlatList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false} 
              data={foundResult}
              renderItem={
                (({item},index)=>{
                  return <MessageUserCard key={index} item={item} />
                })
              }
            />
          )
          :
          (
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', height: '100%', width: '100%', borderRadius: 30 }}>
                    <Image
                        source={{ uri: 'https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Sad-Face-Emoji.png' }}
                        style={{ height: 200, width: 200 }}
                        alt="no profile"
                    />
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 'black'
                    }}>No user found</Text>

                </View>
          )
        )
        :
        (
          <FlatList
            showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}  
            data={dummyUserWithMessage}
            renderItem={
              (({item},index)=>{
                return <MessageUserCard key={index} item={item} />
              })
            }
          />
        )
      }

    </View>
  )
}

export default Mesages

const styles = StyleSheet.create({})