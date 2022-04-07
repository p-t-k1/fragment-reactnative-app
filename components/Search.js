import React, {useEffect, useState} from 'react';
import {AsyncStorage, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Colors from '../Colors';
import Header from './Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SingleBook from './SingleBook';
import axios from 'axios';




const Search = ({navigation}) => {

    const [search,setSearch] = useState()
    const [books,setBooks]= useState()
    const getBooksFromServer = (userId) =>{
        axios({
            method: 'post',
            url: 'http://10.0.2.2:3001/api/notes/findUserBooks',
            data: {
                userId: userId
            }
        }).then((response) => {
            setBooks(response.data)
        }).catch((error) => {
            console.log(error)
            alert('Błąd podczas ładowania zapisanych ksiązek')
        });
    }

    const loadBooks = async () => {
        try {
            const userId = await AsyncStorage.getItem('STORAGE_USERID')
            getBooksFromServer(JSON.parse(userId).userId)
        } catch (e) {
            alert('Failed to fetch the data from storage')
        }
    }

    useEffect(() => {
        loadBooks()
    }, [])

    return (
        <View style={{flex: 1,backgroundColor: Colors.light}}>
            <Header name="Szukaj"/>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 ,alignItems:"center",}}>
            <View style={styles.searchBar}>
                <MaterialCommunityIcons
                    name="magnify"
                    color={Colors.black}
                    size={27}
                />
                <TextInput
                    style={{textTransform:"capitalize",marginLeft:5}}
                    onChangeText={setSearch}
                    onEndEditing={()=>{navigation.navigate("SearchNotesBy",{content:search}) ;setSearch("")}}
                    value={search}
                    placeholder="Wpisz aby wyszukać"
                />
            </View>
            <View style={styles.browseYourContentContainer}>
                <Text style={{textTransform:"uppercase",color:Colors.black,marginTop:10,fontSize:16,marginBottom:10}}>Przeglądaj zapisane</Text>
                <View style={{display:'flex',alignItems:"center"}}>
                    <TouchableOpacity onPress={()=>{navigation.navigate("AllNotes")}} style={styles.singleItem}><Text style={{color:Colors.black,marginLeft:15,textAlignVertical:"center", fontSize:18,fontFamily:"serif",fontWeight:"bold",flex:2}}>Wszystkie</Text><Image style={{resizeMode:"cover",opacity:1,width:"100%",height:"100%",flex:1,borderRadius:15}}source={require('../images/openbook.png')} /></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate("RandomNotes")}} style={styles.singleItem}><Text style={{color:Colors.black,marginLeft:15,textAlignVertical:"center", fontSize:18,fontFamily:"serif",fontWeight:"bold",flex:2}}>Losowe</Text><Image style={{resizeMode:"cover",opacity:1,width:"100%",height:"100%",flex:1,borderRadius:15}}source={require('../images/reader1.png')} /></TouchableOpacity>
                </View>
            </View>
            <View style={styles.recentBooksContainer}>
                <Text style={{textTransform:"uppercase",color:Colors.black,marginTop:10,fontSize:16,marginBottom:10}}>Książki</Text>
                <View style={{flexDirection:"row",flexWrap:"wrap"}}>
                    {books && books.map(element=><SingleBook data={element} />)}
                </View>
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    singleItem:{
       backgroundColor:Colors.light,
        width:"95%",
        height: 60,
        borderRadius:15,
        marginBottom:10,
        justifyContent:"center",
        flexDirection: "row",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.66,
        shadowRadius: 3.68,

        elevation: 5,
    },
    recentBooksContainer:{
        backgroundColor: Colors.light,
        width:"95%",
        marginTop:10,
        marginBottom: 50
    },
    browseYourContentContainer:{
        width:"95%",
        marginTop:30,
    },
    searchBar: {
        width: "95%",
        height:45,
        marginTop: 30,
        borderBottomWidth:3,
        borderColor: Colors.black,
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    }
})
export default Search;
