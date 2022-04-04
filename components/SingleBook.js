import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Colors from '../Colors';

const SingleBook = (props) =>{
    const [cover,setCover] = useState(props.data?props.data:'https://cdn.dribbble.com/users/5435112/screenshots/14173779/book-01_4x.jpg')

    return(
        <View style={styles.singleBook}>
        <Image style={{resizeMode:"cover",width:"95%",height:"95%"}} source={{uri:cover}}  />
        </View>
    )
}

const styles = StyleSheet.create({
    singleBook:{
        backgroundColor:Colors.light,
        width:"25%",
        aspectRatio:0.7,
        justifyContent:"center",
        alignItems:"center",
        marginBottom:2,
    }
})

export default SingleBook
