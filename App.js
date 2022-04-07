import React, {useEffect} from 'react';
import type {Node} from 'react';
import {
    BackHandler, StatusBar,
    useColorScheme, View,
} from 'react-native';
import Home from './components/Home';
import Profile from './components/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import Colors from './Colors';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AddNew from './components/AddNew';
import Search from './components/Search';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import Login from './components/Login';
import RNBootSplash from "react-native-bootsplash";
import AllNotes from './components/AllNotes';
import AddNewNote from './components/AddNewNote';
import RandomNotes from './components/RandomNotes';
import {SafeAreaView} from 'react-navigation';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App: () => Node = () => {

    useEffect(() => {
        console.disableYellowBox = true;
        BackHandler.addEventListener('hardwareBackPress', ()=>true);
        const init = async () => {
            // …do multiple sync or async tasks
        };

        init().finally(async () => {
            await RNBootSplash.hide({ fade: true });
            console.log("Bootsplash has been hidden successfully");
        });
    }, []);

    function TabNavigation(){
        return(
            <Tab.Navigator
                initialRouteName="Home"
                tabBarOptions={{
                    activeTintColor: Colors.primary,
                    inactiveTintColor:Colors.gray,
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
                        tabBarLabel: 'Szukaj',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="magnify"
                                color={color}
                                size={31}
                            />
                        ),
                    }}  />
                <Tab.Screen
                    name="SettingsStack"
                    component={Profile}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Profil',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="account-outline"
                                color={color}
                                size={30}
                            />
                        ),
                    }} />
            </Tab.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <StatusBar backgroundColor={Colors.light}></StatusBar>
            <Stack.Navigator screenOptions={{ headerShown: false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Main" component={TabNavigation} />
                <Stack.Screen name="AllNotes" component={AllNotes} />
                <Stack.Screen name="RandomNotes" component={RandomNotes} />
                <Stack.Screen name="AddNewNote" component={AddNewNote} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
