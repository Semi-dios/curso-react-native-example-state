import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HomeScreen } from '../Screens/HomeScreen';
import { SettingScreen } from '../Screens/SettingScreen';
import { ContactScreen } from '../Screens/ContactScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export const Index = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'information-circle'
                            : 'information-circle-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'lock-closed' : 'list';
                    }

                    return (
                        <Ionicons
                            name={iconName || 'lock-closed'}
                            size={size}
                            color={color}
                        />
                    );
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Setting" component={SettingScreen} />
            <Tab.Screen name="Contact" component={ContactScreen} />
        </Tab.Navigator>
    );
};
