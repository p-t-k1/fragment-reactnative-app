import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../Colors';

const SingleBook = (props) =>{
    return(
        <View style={styles.singleBook}>
        <Image style={{resizeMode:"cover",width:"90%",height:"90%"}} source={require('../images/library.jpg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    singleBook:{
        backgroundColor:Colors.test2,
        width:"25%",
        aspectRatio:0.7,
        justifyContent:"center",
        alignItems:"center",
        marginBottom:3
    }
})

export default SingleBook
