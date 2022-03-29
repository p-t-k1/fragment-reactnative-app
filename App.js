import React, {useEffect} from 'react';
import type {Node} from 'react';
import {
    BackHandler,
    useColorScheme, View,
} from 'react-native';
import Home from './components/Home';
import Profile from './components/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Colors from './Colors';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AddNew from './components/AddNew';
import Search from './components/Search';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import Login from './components/Login';
import RNBootSplash from "react-native-bootsplash";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App: () => Node = () => {

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', ()=>true);
        const init = async () => {
            // …do multiple sync or async tasks
        };

        init().finally(async () => {
            await RNBootSplash.hide({ fade: true });
            console.log("Bootsplash has been hidden successfully");
        });
    }, []);

    /*function HomeStackScreen() {
        return (
            <HomeStack.Navigator>
                <HomeStack.Screen name="Login" component={Login} />
                <HomeStack.Screen name="Home" component={Home} />
            </HomeStack.Navigator>
        );
    }*/

    function TabNavigation(){
        return(
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
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Main" component={TabNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
