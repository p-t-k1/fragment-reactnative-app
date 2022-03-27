import React from 'react';
import type {Node} from 'react';
import {
  useColorScheme, View,
} from 'react-native';
import Home from './components/Home';
import Profile from './components/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Colors from './Colors';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AddNew from './components/AddNew';
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
                                size={30}
                            />
                        ),
                    }}  />
                <Tab.Screen
                    name="AddStack"
                    component={AddNew}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Dodaj',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="plus-circle-outline"
                                color={color}
                                size={30}
                            />
                        ),
                    }}  />
                <Tab.Screen
                    name="SearchStack"
                    component={Search}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Dodaj',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="plus-circle-outline"
                                color={color}
                                size={30}
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
                                name="account-outline"
                                color={color}
                                size={30}
                            />
                        ),
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
