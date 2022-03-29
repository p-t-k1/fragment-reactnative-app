import {AsyncStorage, StyleSheet, Text, TextInput, View} from 'react-native';
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
        <View style={{display:'flex',alignItems:'center',backgroundColor: Colors.light,flex:1}}>
            <Text style={{color:Colors.black,marginTop:100,fontSize:32,fontFamily:"serif",fontWeight:"bold"}}>Fragment</Text>
            <Text style={{marginTop:20,color:Colors.black,fontSize:16,fontWeight:"600",textAlign:"center",width:"80%"}}>Zapisuj i utrwalaj swoje najważniejsze notatki z książek</Text>
            <TextInput placeholder={"Nick"} style={styles.input}/>
            <TextInput secureTextEntry={true} placeholder={"Hasło"} type style={styles.input}/>
            <Text style={{backgroundColor:Colors.primary,padding:15,borderRadius:10,marginTop:20,width:"90%",textAlign:"center",color:Colors.white,fontWeight:"600",fontSize:16}} onPress={()=>{navigation.navigate('Main')}}>Zaloguj się</Text>
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
