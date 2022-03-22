import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../Colors';
import Header from './Header';
import moment from 'moment';
import 'moment/locale/pl';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
moment.locale('pl');

const Home = () => {
    return (
        <View style={{flex: 1, display: 'flex', alignItems: 'center', backgroundColor: 'green'}}>
            <Header name="Fragment"></Header>
            <View style={styles.dailyReviewDiv}>
                <View style={{backgroundColor: '#4576ff', flex: 1, margin: 20}}>
                    <View style={{backgroundColor: '#0c4cf6', flex: 1,display:'flex',justifyContent:'center',borderBottomWidth:3,borderBottomColor:Colors.white}}>
                        <Text style={{
                            textTransform: 'capitalize',
                            color: 'white',
                            fontWeight:"500",
                        }}>{moment().format('MMMM D, YYYY')}</Text>
                    </View>
                    <View style={{backgroundColor: '#194cd4', flex: 3}}>
                        <Text style={{
                            textTransform: 'capitalize',
                            color: 'white',
                            fontWeight:'bold',
                            fontFamily:'serif',
                            fontSize:26,
                            paddingTop:15
                        }}>Codzienna powtórka</Text>
                    </View>
                    <View style={{backgroundColor: '#0344f1', flex: 1,display:'flex',alignItems:"center",flexDirection:"row"}}>
                        <Text style={{
                            textTransform: 'capitalize',
                            color: 'white',
                            fontWeight:"400"
                        }}>5/5 Pozostało </Text><MaterialCommunityIcons name="arrow-right" size={18} color="white" />
                    </View>
                </View>
            </View>
            <View style={styles.smallBarDiv}>
                <Text style={{color: Colors.black,
                    fontWeight:'bold',
                    fontFamily:'serif',
                    fontSize:18,flex:2,backgroundColor:"#3344aa",textAlignVertical:"center",}}>Zapisane Fragmenty</Text>
                <View style={{flex:1,backgroundColor:"#33446a",height:"100%"}}><Text>123</Text></View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    dailyReviewDiv: {
        backgroundColor: 'cyan',
        width: '95%',
        marginTop: 20,
        aspectRatio: 1.3,
        borderRadius: 10,
    },
    smallBarDiv:{
        backgroundColor: '#61cbad',
        width:"95%",
        marginTop: 20,
        borderRadius: 10,
        aspectRatio: 4,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:0,
        flexDirection:"row"
    }
});

export default Home;
