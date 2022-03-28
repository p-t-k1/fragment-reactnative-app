import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../Colors';

const SingleBook = (props) =>{
    return(
        <View style={styles.singleBook}>
        <Image style={{resizeMode:"contain",width:"100%",height:"100%"}} source={require('../images/sampleBookCover.jpg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    singleBook:{
        width:"25%",
        aspectRatio:0.7,
        justifyContent:"center",
        alignItems:"center",
        marginBottom:10
    }
})

export default SingleBook
