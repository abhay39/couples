import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomeScreen';
import Matches from '../pages/Matches';
import Mesages from '../pages/Mesages';
import Profile from '../pages/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Tab = createBottomTabNavigator();

const MyTabs=()=> {
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