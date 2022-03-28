import {AsyncStorage, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Colors from '../Colors';

const Login = ({navigation}) =>{

    const readData = async () => {
        try {
            const userNickname = await AsyncStorage.getItem("STORAGE_KEY")

            if (userNickname !== null) {
                console.log("Witaj, " + userNickname)
                navigation.navigate('Main')
            }
            else{
            }
        } catch (e) {
            alert('Failed to fetch the data from storage')
        }
    }

    useEffect(() => {
        readData()
    }, [])

    return(
        <View style={{display:'flex',alignItems:'center',justifyContent:"center",flex:1}}>
            <Text style={{backgroundColor:Colors.primary,padding:20,borderRadius:20}} onPress={()=>{navigation.navigate('Main')}}>Zaloguj się</Text>
        </View>
    )
}

export default Login
