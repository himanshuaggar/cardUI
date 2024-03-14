import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';
import Pay from '../screen/Pay';
import Ginie from '../screen/Ginie';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="Tabs" component={BottomTabs} />
            <Stack.Screen
            name="Home"
            component={Home}
            options={{
                headerShown: false
            }} 
             />
             <Stack.Screen
            name="Pay"
            component={Pay}
            options={{
                headerShown: false
            }} 
             />
             <Stack.Screen
            name="Ginie"
            component={Ginie}
            options={{
                headerShown: false
            }} 
             />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation