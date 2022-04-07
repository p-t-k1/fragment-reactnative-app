import React, {useEffect, useRef, useState} from 'react';
import {Image, StyleSheet, Text,Animated, View} from 'react-native';
import Colors from '../Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

const SingleNote = (props,{handleDelete}) => {

    const [isDeleted,setIsDeleted] = useState(false)

    const [content,setContent] = useState(props.data.content)
    const [author,setAuthor] = useState(props.data.bookAuthor)
    const [title,setTitle] = useState(props.data.bookTitle)
    const [image,setImage] = useState(props.data.cover?props.data.cover:'https://cdn.vectorstock.com/i/preview-1x/97/03/earth-globe-isometric-flat-icon-3d-vector-13519703.jpg')
    const [noteId,setNoteId] = useState(props.data.id)
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
    let fadeAnimFunction = function(options) {
        return {
            opacity:fadeAnim,
            width:"97%",
            backgroundColor:Colors.light,
            marginTop:20,
            aspectRatio:2.3,
            alignItems:"center",
            borderRadius:5,

            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.66,
            shadowRadius: 3.68,

            elevation: 5,
        }
    }

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 700,
            }
        ).start();
    }, [fadeAnim])


    return (
        <Animated.View style={fadeAnimFunction()} >
            {!isDeleted && <View style={{width:"90%",marginTop:15,height:60,flexDirection:'row'}}>
                <View style={{height:'100%',aspectRatio:0.7}}><Image style={{resizeMode:"cover",opacity:1,height:'100%',width:'100%'}} source={{uri:image}} /></View>
                <View style={{flex:6,margin:5}}>
                    <Text numberOfLines={1} style={{marginLeft:5,color:Colors.black,fontSize:14,fontWeight:"600"}}>{title?title:""}</Text>
                    <Text numberOfLines={1} style={{marginLeft:5,color:Colors.gray,fontSize:14,fontWeight:"400"}}>{author ? author : ""}</Text>
                </View>
                <View style={{flex:1,margin:5,alignItems:"center",justifyContent:"center"}}>
                    <MaterialCommunityIcons onPress={()=>props.handleDelete(noteId)} name="trash-can-outline" size={23} color={Colors.black} style={{opacity:0.9}}/>
                </View>
            </View>}
            <View style={{width:"90%",marginTop:15,height:60,flexDirection:'row'}}><Text numberOfLines={2} style={{color:Colors.black, fontSize:16,fontFamily:"serif",fontWeight:"400"}}>{content?content:""} </Text></View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    singleNote:{
        width:"97%",
        backgroundColor:Colors.light,
        marginTop:20,
        aspectRatio:2.3,
        alignItems:"center",
        borderRadius:5,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.66,
        shadowRadius: 3.68,

        elevation: 5,
    },
})

export default SingleNote;
