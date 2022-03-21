import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../Colors';
import Header from './Header';
import moment from 'moment';
import 'moment/locale/pl';  // without this line it didn't work
moment.locale('pl');
import Icon from 'react-native-vector-icons/FontAwesome';

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
                    <View style={{backgroundColor: '#0344f1', flex: 1,display:'flex',justifyContent:"center"}}>
                        <Text style={{
                            textTransform: 'capitalize',
                            color: 'white',
                            fontWeight:"400"
                        }}>5/5 Pozostało</Text><Icon name="rocket" size={30} color="#900" />
                    </View>
                </View>
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
});

export default Home;
