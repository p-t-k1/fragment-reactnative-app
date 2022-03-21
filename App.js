import React from 'react';
import type {Node} from 'react';
import {
  useColorScheme, View,
} from 'react-native';
import Home from './components/Home';
import Profile from './components/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from './Colors';

const Tab = createBottomTabNavigator();


const App: () => Node = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                tabBarOptions={{
                    activeTintColor: Colors.primary,
                    style: {
                        backgroundColor: Colors.light,
                    },
                }}>
                <Tab.Screen
                    name="HomeStack"
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="book-open-blank-variant"
                                color={color}
                                size={size}
                            />
                        ),
                    }}  />
                <Tab.Screen
                    name="SettingsStack"
                    component={Profile}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Settings',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="settings"
                                color={color}
                                size={size}
                            />
                        ),
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
