import React, {useState} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import Colors from '../Colors';
import Header from './Header';
import {Slider} from '@miblanchard/react-native-slider';
import ToggleSwitch from 'toggle-switch-react-native'

const Profile = ({navigation}) => {

    const [reviewsAmount,setReviewsAmount] = useState(5)
    const [randomNotesAmount,setRandomNotesAmount] = useState(4)
    const [randomizeReviews,setRandomizeReviews] = useState(false)

    return (
        <View style={{flex: 1, display: 'flex', alignItems: 'center', backgroundColor: Colors.light}}>
            <Header name="Profil" navigation={navigation}/>
            <View style={styles.settingsBar}><View style={styles.settingsTab}><Text style={{color:Colors.black,fontSize:16,fontWeight:"600",marginBottom:3}}>Ustawienia ogólne</Text></View></View>
            <View style={styles.settingsContainer}>
                <Text style={{fontSize:18,margin:15,width:"100%"}}>Dostosuj ustawienia aplikacji według własnych potrzeb</Text>
                <Text style={{marginLeft:15,marginTop:25,fontSize:16,color:Colors.black,fontWeight:"600"}}>Ilość codziennych powtórek: {reviewsAmount}</Text>
                <View style={{width:"90%",display:'flex',marginLeft:15,marginBottom:20}}><Slider
                    minimumValue={1}
                    maximumValue={15}
                    step={1}
                    minimumTrackTintColor={Colors.primary}
                    maximumTrackTintColor={Colors.primary_light}
                    thumbTintColor={Colors.primary}
                    value={reviewsAmount}
                    onValueChange={value => setReviewsAmount(value)}
                /></View>
                <Text style={{marginLeft:15,fontSize:16,color:Colors.black,fontWeight:"600"}}>Ilość losowych fragmentów: {randomNotesAmount}</Text>
                <View style={{width:"90%",display:'flex',marginLeft:15,marginBottom:20}}><Slider
                    minimumValue={1}
                    maximumValue={15}
                    step={1}
                    minimumTrackTintColor={Colors.primary}
                    maximumTrackTintColor={Colors.primary_light}
                    thumbTintColor={Colors.primary}
                    value={randomNotesAmount}
                    onValueChange={value => setRandomNotesAmount(value)}
                /></View>
                <ToggleSwitch
                    isOn={randomizeReviews}
                    onColor={Colors.primary}
                    offColor={Colors.gray}
                    animationSpeed="150"
                    size="medium"
                    label="Losowa kolejność powtórek                   "
                    labelStyle={{marginLeft:15,fontSize:16,color:Colors.black,fontWeight:"600"}}
                    onToggle={isOn => setRandomizeReviews(!randomizeReviews)}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    settingsContainer:{
        backgroundColor:Colors.light,
        width:"95%",
        marginTop:30,
        aspectRatio:1,
        borderWidth:0.5,
        borderColor: Colors.gray

    },
    settingsBar: {
        width: '95%',
        marginTop: 20,
        height:40,
        borderBottomWidth:2,
        display: 'flex',
        justifyContent:'flex-end',
    },
    settingsTab:{
        width: 150,
        display:"flex",
        alignItems:"center",
        borderBottomWidth: 8,
        borderColor: Colors.primary
    }
})
export default Profile;
