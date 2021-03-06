import React, {useEffect, useState} from 'react';
import {AsyncStorage, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../Colors';
import Header from './Header';
import moment from 'moment';
import 'moment/locale/pl';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
moment.locale('pl');

const Home = ({ navigation }) => {

    const [reviewsAmount,setReviewsAmount] = useState(5)
    const [reviewsLeft,setReviewsLeft] = useState(5)

    return (
        <View style={{flex: 1, display: 'flex', alignItems: 'center', backgroundColor: Colors.light}}>
            <Header name="Fragment"></Header>
            <View style={styles.dailyReviewDiv}>
                <View style={{backgroundColor: Colors.primary, flex: 1, margin: 20}}>
                    <View style={{backgroundColor: Colors.primary, flex: 1,display:'flex',justifyContent:'center',borderBottomWidth:3,borderBottomColor:Colors.white}}>
                        <Text style={{
                            textTransform: 'capitalize',
                            color: 'white',
                            fontWeight:"500",
                        }}>{moment().format('MMMM D, YYYY')}</Text>
                    </View>
                    <View style={{backgroundColor: Colors.primary, flex: 3}}>
                        <Text style={{
                            textTransform: 'capitalize',
                            color: 'white',
                            fontWeight:'bold',
                            fontFamily:'serif',
                            fontSize:26,
                            paddingTop:15
                        }}>Codzienna powtórka</Text>
                    </View>
                    <View style={{backgroundColor: Colors.primary, flex: 1,display:'flex',alignItems:"center",flexDirection:"row"}}>
                        <Text style={{
                            textTransform: 'capitalize',
                            color: 'white',
                            fontWeight:"400"
                        }}>{reviewsLeft}/{reviewsAmount} Pozostało </Text><MaterialCommunityIcons name="arrow-right" size={18} color="white" />
                    </View>
                </View>
            </View>
            <TouchableOpacity activeOpacity={.9} style={styles.smallBarDiv} onPress={()=>{navigation.navigate("SearchStack")}}>
                <Text style={{color: Colors.black,
                    fontWeight:'bold',
                    fontFamily:'serif', paddingLeft:20,
                    fontSize:18,flex:2,textAlignVertical:"center",}}>Zapisane Fragmenty</Text>
                <View style={{flex:1,backgroundColor:Colors.light,height:"100%",borderRadius:10}}><Image style={{resizeMode:"cover",opacity:1,width:"100%",height:"100%",borderRadius:10}}source={require('../images/old_man.png')} /></View>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    dailyReviewDiv: {
        backgroundColor: Colors.primary,
        width: '95%',
        marginTop: 20,
        aspectRatio: 1.3,
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    smallBarDiv:{
        backgroundColor: Colors.light,
        width:"95%",
        marginTop: 20,
        borderRadius: 10,
        aspectRatio: 4,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:0,
        flexDirection:"row",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    }
})

export default Home;
