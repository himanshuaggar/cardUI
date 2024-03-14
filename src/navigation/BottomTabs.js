import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Pay from '../screen/Pay';
import Ginie from '../screen/Ginie';
import { NavigationContainer } from '@react-navigation/native';
import { HomeIcon, VideoCameraIcon, BuildingStorefrontIcon, ChatBubbleLeftRightIcon } from 'react-native-heroicons/outline'

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
      <Tab.Navigator initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#d7e3fc',
            height: 60,
            borderTopWidth: 0, 
            elevation: 0, 
            shadowOpacity: 0,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        }} >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return <HomeIcon size={30} strokeWidth={1} color="black" style={{ color: focused ? 'black' : 'gray' }} />;
            }
          }}
        />
        <Tab.Screen
          name="Pay"
          component={Pay}
          options={{
            tabBarIcon: ({ focused }) => {
              return <BuildingStorefrontIcon size={30} strokeWidth={1} color="black" style={{ color: focused ? 'black' : 'gray' }} />;
            }
          }}
        />
        <Tab.Screen
          name="Ginie"
          component={Ginie}
          options={{
            tabBarIcon: ({ focused }) => {
              return <VideoCameraIcon size={30} strokeWidth={1} color="black" style={{ color: focused ? 'black' : 'gray' }} />;
            }
          }}
        />

      </Tab.Navigator>
  )
}

export default BottomTabs