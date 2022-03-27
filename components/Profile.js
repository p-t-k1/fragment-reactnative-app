import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../Colors';
import Header from './Header';

const Profile = () => {
    return (
        <View style={{flex: 1, display: 'flex', alignItems: 'center', backgroundColor: Colors.light}}>
            <Header name="Profil"/>
            <View style={styles.settingsBar}><View style={styles.settingsTab}><Text style={{color:Colors.black,fontSize:16,fontWeight:"600",marginBottom:3}}>Ustawienia ogólne</Text></View></View>
            <View style={styles.settingsContainer}><Text style={{fontSize:18,margin:15,width:"100%"}}>Dostosuj ustawienia aplikacji według własnych potrzeb</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    settingsContainer:{
        backgroundColor:Colors.light,
        width:"95%",
        marginTop:30,
        aspectRatio:1,
        borderWidth:0.5,
        borderColor: Colors.gray

    },
    settingsBar: {
        width: '95%',
        marginTop: 20,
        height:40,
        borderBottomWidth:2,
        display: 'flex',
        justifyContent:'flex-end',
    },
    settingsTab:{
        width: 150,
        display:"flex",
        alignItems:"center",
        borderBottomWidth: 8,
        borderColor: Colors.primary
    }
})
export default Profile;
