import {ActivityIndicator, AsyncStorage, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '../Colors';
import axios from "axios";

const Login = ({navigation}) =>{

    const [login,setLogin] = useState("")
    const [password,setPassword] = useState("")
    const [isLoading,setIsLoading] = useState(true)

    const readData = async () => {
        try {
            const userId = await AsyncStorage.getItem("STORAGE_USERID")
            console.log("Witaj, " + userId)
            if (JSON.parse(userId) !== null) {
                console.log("Witaj, " + userId)
                navigation.navigate('Main')
                setIsLoading(false)
            }
            else{
                setIsLoading(false)
            }
        } catch (e) {
            alert('Failed to fetch the data from storage')
        }
    }

    const saveData = async (data) => {
        try {
            await AsyncStorage.setItem('STORAGE_USERID', JSON.stringify(data))
            setLogin("")
            setPassword("")
            navigation.navigate('Main')
        } catch (e) {
            alert('Failed to save the data to the storage')
        }
    }

    const sendDataToLogin = () =>{
        //console.log(login + password)
        axios({
            method: 'post',
            url: 'http://10.0.2.2:3001/api/user/auth',
            data: {
                login: login,
                password: password
            }
        }).then((response) => {

            saveData(response.data)

        }).catch((error) => {
            console.log(error)
            alert('Błąd podczas logowania')
        });
    }

    const loadingScreen = () =>{
        return(
            <View style={{backgroundColor:Colors.light,opacity:1,elevation:10,width:"100%",height:"100%",margin:0,top:0,alignItems:"center",justifyContent:"center"}}>
                <ActivityIndicator color={Colors.primary} size={"large"}/>
                <Text style={{marginTop:10}}>Ładowanie</Text>
            </View>
        )
    }

    useEffect(() => {
        readData()
        console.log("elo")
    }, [navigation])



    return(
        <View style={{display:'flex',alignItems:'center',justifyContent:'center',backgroundColor: Colors.light,flex:1}}>
            <Text style={{color:Colors.black,marginTop:-50,fontSize:32,fontFamily:"serif",fontWeight:"bold"}}>Fragment</Text>
            <Text style={{marginTop:20,color:Colors.black,fontSize:16,fontWeight:"600",textAlign:"center",width:"80%"}}>Zapisuj i utrwalaj swoje najważniejsze notatki z książek</Text>
            <TextInput spellCheck={false} autoCapitalize={'none'} autoCorrect={false} keyboardType="visible-password" value={login} onChangeText={text => setLogin(text)}  placeholder={"Nick"} style={styles.input}/>
            <TextInput value={password} autoCapitalize={'none'} onChangeText={text => setPassword(text)} secureTextEntry={true} placeholder={"Hasło"} style={styles.input}/>
            {isLoading &&  <ActivityIndicator style={{marginTop:20}} color={Colors.primary} size={"large"}/> }
            {!isLoading && <TouchableOpacity style={{backgroundColor:Colors.primary,padding:15,borderRadius:10,marginTop:20,width:"90%",textAlign:"center",color:Colors.white,fontWeight:"600",fontSize:16}} onPress={()=>sendDataToLogin()}><Text style={{fontSize:16,color:Colors.white,fontWeight:"600",textAlign:"center"}}>Zaloguj się</Text></TouchableOpacity>}
            <Text style={{marginTop:15,color:Colors.black,fontSize:16,fontWeight:"300",textAlign:"center",width:"80%"}}>Zarejestruj się ￫</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth:1.5,
        borderColor:Colors.gray,
        borderRadius:5,
        width:"90%",
        height:40,
        marginTop:20
    }}
)

export default Login
