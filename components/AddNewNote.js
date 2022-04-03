import React, {useEffect, useState} from 'react';
import {AsyncStorage, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import Colors from '../Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SingleNote from './SingleNote';
import {Screen} from 'react-native-screens';
import axios from 'axios';


const AddNewNote = ({ navigation }) => {

    const [input,setInput] = useState("");

    return (
        <View style={{flex: 1, display: 'flex', alignItems: 'center', backgroundColor: Colors.light}}>
            <View style={styles.header}>
                <MaterialCommunityIcons name="arrow-left" size={21} color="black" onPress={()=>{navigation.goBack()}}/>
                <Text style={{color:Colors.black, fontSize:16,fontWeight:"400"}}>Dalej</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput onChangeText={setInput} value={input} multiline={true} style={{fontSize:22}} placeholder={"Wpisz lub wklej swój fragment..."}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:Colors.light,
        width:'100%',
        height:60,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingLeft:10,
        paddingRight:10,
    },
    inputContainer:{
        backgroundColor: Colors.light,
        width: "95%",
        height: "100%",
        marginTop:20
    }
})

export default AddNewNote;
