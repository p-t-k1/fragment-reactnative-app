import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Colors from '../Colors';
import Header from './Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = () => {
    return (
        <View style={{flex: 1, display: 'flex', alignItems: 'center', backgroundColor: Colors.light}}>
            <Header name="Dodaj nowy"/>
            <View style={styles.addNewContainer}>
                <View style={{
                    width: '20%',
                    margin: 5,
                    aspectRatio: 1,
                    backgroundColor: Colors.primary,
                    borderRadius: 100,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}><MaterialCommunityIcons
                    name="pencil-plus-outline"
                    color={Colors.white}
                    size={40}
                    style={{marginLeft:5}}
                /></View>
                <Text style={{color: Colors.black}}>Dodaj nowy tekst</Text>
            </View>
            <View style={styles.syncContainer}>
                <Text style={{textTransform:"uppercase",color:Colors.black,marginTop:10,fontSize:16,marginLeft:10,marginBottom:20}}>Połącz się</Text>
                <View style={styles.singleSyncItem}>
                    <View style={{backgroundColor:"red",aspectRatio:1,height:"100%"}}><Image style={{resizeMode:"cover",width:"100%",height:"100%",borderRadius:10}}source={require('../images/library.jpg')} /></View>
                    <View style={{backgroundColor:Colors.test2,flex:2}}><Text style={{marginTop:15, marginLeft:5,color:Colors.black,fontSize:14,fontWeight:"600"}}>Facebook</Text><Text style={{marginLeft:5}}>Połącz się z Facebookiem i zapisuj notatki</Text></View>
                    <View style={{backgroundColor:Colors.test3,flex:1,display:"flex",justifyContent:"center",alignItems:"center"}}><View style={styles.syncButton}><MaterialCommunityIcons
                        name="sync"
                        color={Colors.white}
                        size={20}
                    /></View></View>
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    addNewContainer: {
        backgroundColor: Colors.primary_light,
        width: '100%',
        marginTop: 20,
        aspectRatio: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    syncContainer:{
        backgroundColor: Colors.test1,
        width:"100%",
        marginTop: 20,
    },
    singleSyncItem:{
        backgroundColor: Colors.test2,
        marginLeft:10,
        marginRight:10,
        height:100,
        flexDirection:"row",
        marginBottom:20
    },
    syncButton:{
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        width:"90%",
        padding:2,
        borderRadius:7,
        backgroundColor: Colors.primary
    }
})

export default Profile;
