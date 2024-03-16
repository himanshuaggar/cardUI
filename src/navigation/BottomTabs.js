import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { QrCodeIcon } from 'react-native-heroicons/outline';
import Home from '../screen/Home.js';
import Ginie from '../screen/Ginie.js';
import Pay from '../screen/Pay.js';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position:'absolute',
          elevation: 0,
          shadowOpacity: 0,
          height:420,
          width:500,
          backgroundColor: 'black',
          borderRadius:300,
          borderColor:'white',
          borderBottomWidth:0,
          borderWidth:1,
          borderStyle: 'solid',
          bottom: -280,
          paddingBottom:0,
          right:0,
          left:-40,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          position:'absolute',
          top:120,
          paddingHorizontal:30,
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
      }} 
      >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ borderColor: '#808080', borderWidth: focused ? 2 : 0.2, borderRadius: 999, padding: 10, borderBottomWidth: 0, position:'absolute', top:70, right:60,}}>
                <Image source={require('../../assets/img/homeicon.png')} />
              </View>
            )
          }
        }}
      />
      <Tab.Screen
        name="Yolo Pay"
        component={Pay}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ borderColor: '#808080', borderWidth: focused ? 2 : 0.2, borderRadius: 999, padding: 10, borderBottomWidth: 0,  position:'absolute', top:20,}}>
                <QrCodeIcon size={70} strokeWidth={1} color="white" style={{ color: focused ? 'white' : 'gray' }} />
              </View>
            )
          }
        }}
      />
      <Tab.Screen
        name="Ginie"
        component={Ginie}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ borderColor: '#808080', borderWidth: focused ? 1 : 0.2, borderRadius: 999, padding: 10, borderBottomWidth: 0, position:'absolute', top:70, }}>
                <Image source={require('../../assets/img/ginie.png')} />
              </View>
            )
          }
        }}
      />

    </Tab.Navigator>
  )
}

export default BottomTabs