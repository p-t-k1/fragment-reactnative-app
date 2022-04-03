import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Colors from '../Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SingleNote = ({ navigation }) => {

    return (
        <View style={styles.singleNote}>
            <View style={{backgroundColor:"blue",width:"90%",marginTop:15,height:60,flexDirection:'row'}}>
{/*              <Image style={{resizeMode:"contain",opacity:1,height:"100%"}}source={require('../images/twitter.png')} />*/}
                <View style={{backgroundColor:"orange",height:'100%',aspectRatio:0.7}}><Text>321</Text></View>
                <View style={{backgroundColor:"yellow",flex:1,margin:5}}>
                    <Text style={{marginLeft:5,color:Colors.black,fontSize:14,fontWeight:"600"}}>Potęga podświadomości</Text>
                    <Text style={{marginLeft:5,color:Colors.gray,fontSize:14,fontWeight:"400"}}>Jose Murphy</Text>
                </View>
            </View>
            <View style={{backgroundColor:"red",width:"90%",marginTop:15,height:40,flexDirection:'row'}}><Text style={{color:Colors.black, fontSize:16,fontFamily:"serif",fontWeight:"400"}}>Przyciągasz co myślisz</Text></View>
        </View>
    );
}

const styles = StyleSheet.create({
    singleNote:{
        width:"95%",
        backgroundColor:"green",
        marginBottom:20,
        aspectRatio:2.3,
        alignItems:"center",
        borderRadius:5,
    },
})

export default SingleNote;
