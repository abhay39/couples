import { StyleSheet, Text, View, PermissionsAndroid, Platform, TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Geolocation from 'react-native-geolocation-service';

const GOOGLE_MAPS_KEY='AIzaSyB6rkjRYrmo9qwxlWPdYbUyczMjghLx86g';
const TopBarLocation = () => {

  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState('');

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        getAddressFromCoordinates(latitude, longitude);
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const getAddressFromCoordinates = (latitude, longitude) => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          setAddress(data.results[0].formatted_address);
          console.log(address)
        } else {
          setAddress('Address not found');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      ).then((granted) => {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getLocation();
        }
      });
    } else {
      getLocation();
    }
  }, []);

  return (
    <View style={{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
    }}>
        <View style={{display:'flex', flexDirection:'row',alignItems:"center",justifyContent:'center'}}>
          <Text><EvilIcons name="location" size={24} color="#4F8EF7" /></Text>
          <Text style={{fontSize:16,color:'black'}}>{address.slice(0,20)}</Text>
        </View>

        <TouchableOpacity style={{display:'flex', flexDirection:'row',alignItems:"center",justifyContent:'center',position:'relative'}}>
          <Text><Ionicons name="notifications-outline" size={30} color="#4F8EF7" />;</Text>
          <View style={{ width: 24, height: 24, borderRadius: 12, padding: 2, backgroundColor: 'black', position: 'absolute', top: -4, right: -3, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 12, color: 'white' }}>3</Text>
        </View>

        </TouchableOpacity>
    </View>
  )
}

export default TopBarLocation

const styles = StyleSheet.create({})