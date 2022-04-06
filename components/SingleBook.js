import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Colors from '../Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SingleBook = (props) =>{
    const [cover,setCover] = useState(props.data?props.data:'https://cdn.vectorstock.com/i/preview-1x/97/03/earth-globe-isometric-flat-icon-3d-vector-13519703.jpg')

    if(props.addNew){
        return(
            <TouchableOpacity style={styles.singleBook} onPress={props.onPress}>
                <View style={{resizeMode:"cover",width:"95%",height:"95%",backgroundColor:Colors.primary,alignItems:"center",justifyContent:"center"}} >
                    <MaterialCommunityIcons
                        name="plus-circle-outline"
                        color={Colors.light}
                        size={40}
                    />
                    <Text style={{color:Colors.light}}>Dodaj</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return(
        <TouchableOpacity style={styles.singleBook} onPress={props.onPress}>
        <Image style={{resizeMode:"cover",width:"95%",height:"95%"}} source={{uri:cover}}  />
        </TouchableOpacity>
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
