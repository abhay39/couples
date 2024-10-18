import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Searchbar = ({serchText,setSearch,handleOnchange}) => {
  return (
    <View style={{
        padding:10,
        backgroundColor:'#fcfafa',
        borderRadius:10,
        marginBottom:10,
        marginTop:10,
        paddingHorizontal:15,
        elevation: 2,
        shadowColor: '#000',
    }}>
      <TextInput 
        placeholder='Enter name to search...'
        style={{
            fontSize:16
        }}
        onChangeText={(e)=>{
          handleOnchange(e)
        }}
      />
    </View>
  )
}

export default Searchbar

const styles = StyleSheet.create({})