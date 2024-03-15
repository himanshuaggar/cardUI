import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {QrCodeIcon } from 'react-native-heroicons/outline';
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
          borderTopWidth: 0, 
          elevation: 0, 
          shadowOpacity: 0,
          height:100,
          backgroundColor:'black',
          borderTopLeftRadius:999,
          borderTopRightRadius:999,
          borderTopStartRadius:999,
          borderTopEndRadius:999,
          borderTopColor:'white',
          borderWidth:10,
          borderStyle:'solid'
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
      }} >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return <Image source={require('../../assets/img/homeicon.png')} />;
            }
          }}
        />
        <Tab.Screen
          name="Pay"
          component={Pay}
          options={{
            tabBarIcon: ({ focused }) => {
              return <QrCodeIcon size={50} strokeWidth={1} color="white" style={{ color: focused ? 'white' : 'gray' }}  />
            }
          }}
        />
        <Tab.Screen
          name="Ginie"
          component={Ginie}
          options={{
            tabBarIcon: ({ focused }) => {
              return <Image source={require('../../assets/img/Frame 142.png')} />
            }
          }}
        />

      </Tab.Navigator>
  )
}

export default BottomTabs