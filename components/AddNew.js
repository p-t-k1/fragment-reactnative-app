import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Colors from '../Colors';
import Header from './Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AddNew = ({navigation}) => {
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
                    onPress={()=>{navigation.navigate("AddNewNote")}}
                    style={{marginLeft:5}}
                /></View>
                <Text style={{color: Colors.black}}>Dodaj nowy tekst</Text>
            </View>
            <View style={styles.syncContainer}>
                <Text style={{textTransform:"uppercase",color:Colors.black,marginTop:10,fontSize:16,marginLeft:10,marginBottom:20}}>Połącz się</Text>
                <View style={styles.singleSyncItem}>
                    <View style={{aspectRatio:1,height:"100%"}}><Image style={{resizeMode:"cover",width:"100%",height:"100%",borderRadius:10}}source={require('../images/facebook.png')} /></View>
                    <View style={{flex:3}}><Text style={{marginTop:10, marginLeft:10,color:Colors.black,fontSize:14,fontWeight:"600"}}>Facebook</Text><Text style={{marginLeft:10, color:Colors.black,fontWeight:"300"}}>Połącz się z Facebookiem i zapisuj notatki</Text></View>
                    <View style={{flex:1,display:"flex",justifyContent:"center",alignItems:"center"}}><View style={styles.syncButton}><MaterialCommunityIcons
                        name="sync"
                        color={Colors.white}
                        size={20}
                    /></View></View>
                </View>
                <View style={styles.singleSyncItem}>
                    <View style={{aspectRatio:1,height:"100%"}}><Image style={{resizeMode:"cover",width:"100%",height:"100%",borderRadius:10}}source={require('../images/twitter.png')} /></View>
                    <View style={{flex:3}}><Text style={{marginTop:10, marginLeft:10,color:Colors.black,fontSize:14,fontWeight:"600"}}>Twitter</Text><Text style={{marginLeft:10, color:Colors.black,fontWeight:"300"}}>Połącz się z Twitterem i zapisuj notatki</Text></View>
                    <View style={{flex:1,display:"flex",justifyContent:"center",alignItems:"center"}}><View style={styles.syncButton}><MaterialCommunityIcons
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
        width:"100%",
        marginTop: 20,
    },
    singleSyncItem:{
        marginLeft:10,
        marginRight:10,
        height:80,
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

export default AddNew;
