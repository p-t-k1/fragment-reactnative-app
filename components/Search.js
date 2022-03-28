import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import Colors from '../Colors';
import Header from './Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SingleBook from './SingleBook';




const Profile = () => {

    const [search,setSearch] = useState()

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
                    value={search}
                    placeholder="Wpisz aby wyszukać"
                />
            </View>
            <View style={styles.browseYourContentContainer}>
                <Text style={{textTransform:"uppercase",color:Colors.black,marginTop:10,fontSize:16,marginBottom:10}}>Przeglądaj zapisane</Text>
                <View style={{display:'flex',alignItems:"center"}}>
                    <View style={styles.singleItem}><Text style={{color:Colors.black,marginLeft:10,textAlignVertical:"center", fontSize:18,fontFamily:"serif",fontWeight:"bold",flex:2}}>Wszystkie</Text><Image style={{resizeMode:"cover",opacity:1,width:"100%",height:"100%",flex:1,borderRadius:15}}source={require('../images/library.jpg')} /></View>
                    <View style={styles.singleItem}><Text style={{color:Colors.black,marginLeft:10,textAlignVertical:"center", fontSize:18,fontFamily:"serif",fontWeight:"bold",flex:2}}>Po tagach</Text><Image style={{resizeMode:"cover",opacity:1,width:"100%",height:"100%",flex:1,borderRadius:15}}source={require('../images/library.jpg')} /></View>
                </View>
            </View>
            <View style={styles.recentBooksContainer}>
                <Text style={{textTransform:"uppercase",color:Colors.black,marginTop:10,fontSize:16,marginBottom:10}}>Książki</Text>
                <View style={{flexDirection:"row",flexWrap:"wrap"}}>
                    <SingleBook/>
                    <SingleBook/>
                    <SingleBook/>
                    <SingleBook/>
                    <SingleBook/>
                    <SingleBook/>
                    <SingleBook/>
                    <SingleBook/>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    singleItem:{
       backgroundColor:Colors.test1,
        width:"95%",
        height: 70,
        borderRadius:15,
        marginBottom:10,
        justifyContent:"center",
        flexDirection: "row"
    },
    recentBooksContainer:{
        backgroundColor: Colors.test3,
        width:"95%",
        marginTop:30,
        marginBottom: 50
    },
    browseYourContentContainer:{
        backgroundColor: Colors.test3,
        width:"95%",
        marginTop:30,
    },
    searchBar: {
        backgroundColor: Colors.test3,
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
export default Profile;
