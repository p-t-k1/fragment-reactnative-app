import React, {useEffect, useState} from 'react';
import {AsyncStorage, ScrollView, StyleSheet, Text, View} from 'react-native';
import Colors from '../Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SingleNote from './SingleNote';
import {Screen} from 'react-native-screens';
import axios from 'axios';


const SearchNotesBy = ({ navigation,route}) => {

    const [notes,setNotes] = useState();
    const getNotesFromServer = (userId) =>{
        axios({
            method: 'post',
            url: 'http://10.0.2.2:3001/api/notes/findAll',
            data: {
                userId: userId
            }
        }).then((response) => {
            setNotes(response.data.filter(element=>element.content.toLowerCase().includes(route.params.content.toLowerCase())))
            //console.log(response.data)
        }).catch((error) => {
            console.log(error)
            alert('Błąd podczas ładowania zapisanych notatek')
        });
    }

    const loadNotes = async () => {
        try {
            const userId = await AsyncStorage.getItem('STORAGE_USERID')
            getNotesFromServer(JSON.parse(userId).userId)
        } catch (e) {
            alert('Failed to fetch the data from storage')
        }
    }

    useEffect(() => {
        loadNotes()
    }, [navigation])


    return (
        <View style={{flex: 1, display: 'flex', alignItems: 'center', backgroundColor: Colors.light}}>
            <View style={styles.header}>
                <MaterialCommunityIcons name="arrow-left" size={21} color="black" onPress={()=>{navigation.goBack()}}/>
                <Text style={{color:Colors.black, fontSize:20,fontFamily:"serif",fontWeight:"bold"}}>Znalezione</Text>
                <MaterialCommunityIcons name="exit-to-app" size={21} color={Colors.light} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 ,alignItems:"center",}}>
                {notes && notes.map(element=><SingleNote data={element}/>)}
            </ScrollView>
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
        borderBottomWidth:1,
    },
})

export default SearchNotesBy;
