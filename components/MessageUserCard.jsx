import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const MessageUserCard = ({ item }) => {

  const timestamp = new Date(item.timestamp);
  const hours = timestamp.getHours().toString().padStart(2, '0');
  const minutes = timestamp.getMinutes().toString().padStart(2, '0');
  const time = `${hours}:${minutes}`;

  const navigate=useNavigation();

  return (
    <TouchableOpacity onPress={()=>{
      navigate.navigate('MessageScreen',{
        item:item
      })
    }} style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#eee',
      marginBottom: 10,
      marginTop: 10,
      backgroundColor:'#fcfafa'
    }}>
      <View style={{
        display: 'flex',
        flexDirection:"row",
        alignItems:'center'
      }}>
        <Image
          source={{ uri: item?.imageUrl }}
          alt="image"
          style={{
            height: 60,
            width: 60,
            borderRadius:50,
            objectFit: 'center',
          }}
        />
        <View style={{marginLeft:10}}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5,color:'black' }}>{item.name}</Text>
          {
            item.isSeen ? 
            (<View style={{
              display:'flex',
              flexDirection:'row',
              alignItems:'center'
            }}>
              <Ionicons name='checkmark-done-sharp' size={16} color={'blue'} style={{
                marginRight:5
              }} />
              <Text>{item.message}</Text>
            </View>)
            : 
            (<View style={{
              display:'flex',
              flexDirection:'row',
              alignItems:'center'
            }}>
              <Ionicons name='checkmark-done-outline' size={16} color={'gray'} style={{
                marginRight:5
              }} />
              <Text>{item.message}</Text>
            </View>)
          }
        </View>
      </View>
      <View>
        <Text>{time}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default MessageUserCard

const styles = StyleSheet.create({})