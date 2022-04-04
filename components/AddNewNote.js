import React, {useEffect, useState} from 'react';
import {AsyncStorage, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Colors from '../Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SingleNote from './SingleNote';
import {Screen} from 'react-native-screens';
import axios from 'axios';
import SingleBook from './SingleBook';


const AddNewNote = ({ navigation }) => {

    const [input,setInput] = useState("")
    const [search,setSearch] = useState("")
    const [books,setBooks]= useState()
    const [userId,setUserId] = useState()

    const saveNoteToDatabase = (data) =>{
        console.log("123")
        axios({
            method: 'post',
            url: 'http://10.0.2.2:3001/api/notes/saveNote',
            data: {
                userId: userId,
                content: input,
                bookTitle: data.bookTitle,
                bookAuthor: data.bookAuthor,
                cover: data.cover
            }
        }).then((response) => {
            navigation.navigate("Main")
        }).catch((error) => {
            console.log(error)
            alert('Błąd podczas zapisywania notatki')
        });
    }

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
            setUserId(JSON.parse(userId).userId)
            getBooksFromServer(JSON.parse(userId).userId)
        } catch (e) {
            alert('Failed to fetch the data from storage')
        }
    }

    useEffect(() => {
        loadBooks()
    }, [])

    return (
        <View style={{flex: 1, display: 'flex', alignItems: 'center', backgroundColor: Colors.light}}>
            <View style={styles.header}>
                <MaterialCommunityIcons name="arrow-left" size={21} color="black" onPress={()=>{navigation.goBack()}}/>
                <Text style={{color:Colors.light, fontSize:16,fontWeight:"400"}}>Dalej</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 ,alignItems:"center",}}>
                <View style={styles.inputContainer}>
                    <TextInput onChangeText={setInput} value={input} multiline={true} style={{fontSize:22}} placeholder={"Wpisz lub wklej swój fragment..."}/>
                </View>
                <View style={styles.chooseBookContainer}>
                    <Text style={{textTransform:"uppercase",color:Colors.black,marginTop:20,fontSize:16,marginBottom:5}}>Wybierz książkę</Text>
                    <View style={styles.searchBar}>
                        <MaterialCommunityIcons
                            name="magnify"
                            color={Colors.black}
                            size={27}
                        />
                        <TextInput
                            style={{textTransform:"capitalize",marginLeft:5}}
                            onChangeText={setSearch}
                            value={search}
                            placeholder="Wpisz aby wyszukać"
                        />
                    </View>
                    <View style={styles.recentBooksContainer}>
                        <View style={{flexDirection:"row",flexWrap:"wrap"}}>
                            <TouchableOpacity onPress={()=>saveNoteToDatabase({})}><SingleBook data={""} /></TouchableOpacity>
                            {books && books.map(element=><SingleBook key={element} data={element} onPress={()=>saveNoteToDatabase(element)} />)}
                        </View>
                    </View>
                </View>
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
    },
    inputContainer:{
        backgroundColor: Colors.light,
        width: "95%",
        height: 200,
        marginTop:20
    },
    chooseBookContainer:{
        backgroundColor:Colors.light,
        alignItems: "flex-start",
        width:"95%",
        marginBottom:20
    },
    searchBar: {
        width: "100%",
        height:45,
        borderBottomWidth:3,
        borderColor: Colors.black,
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    recentBooksContainer:{
        backgroundColor: Colors.light,
        width:"100%",
        marginTop:30,

    },
})

export default AddNewNote;
