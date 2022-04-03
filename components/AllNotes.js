import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Colors from '../Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SingleNote from './SingleNote';
import {Screen} from 'react-native-screens';


const Home = ({ navigation }) => {

    return (
        <View style={{flex: 1, display: 'flex', alignItems: 'center', backgroundColor: Colors.light}}>
            <View style={styles.header}>
                <MaterialCommunityIcons name="exit-to-app" size={21} color="black" onPress={()=>{navigation.goBack()}}/>
                <Text style={{color:Colors.black, fontSize:20,fontFamily:"serif",fontWeight:"bold"}}>Wszystkie notatki</Text>
                <MaterialCommunityIcons name="exit-to-app" size={21} color="red" />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 ,alignItems:"center",}}>
            <SingleNote/>
                <SingleNote/>
                <SingleNote/>
                <SingleNote/>
                <SingleNote/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:"red",
        width:'100%',
        height:50,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingLeft:10,
        paddingRight:10,
        borderBottomWidth:1,
        marginBottom:50,
    },
})

export default Home;
