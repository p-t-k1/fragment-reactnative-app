import React, {useState} from 'react';
import {AsyncStorage, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

const Header = (props) => {

    const [displayBell,setDisplayBell] = useState(props.name!=="Profil")
    const [displayCog,setDisplayCog] = useState(props.name==="Profil")
    const [showSettingsPopup, setShowSettingsPopup] = useState(false)

    const readUserId = async () => {
        try {
            const userId = await AsyncStorage.getItem('STORAGE_USERID')
            logoutById(JSON.parse(userId).userId)
        } catch (e) {
            alert('Failed to fetch the data from storage')
        }
    }

    const saveEmptyUserId = async () => {
        try {
            await AsyncStorage.setItem('STORAGE_USERID', JSON.stringify(null))
            props.navigation.navigate('Login')
        } catch (e) {
            alert('Failed to save the data to the storage')
        }
    }

    const logoutById = (userId) =>{
        axios({
            method: 'delete',
            url: 'http://10.0.2.2:3001/api/user/logout/:userId',
            data: {
                userId:userId
            }
        }).then((response) => {

            saveEmptyUserId()

        }).catch((error) => {
            console.log(error)
            alert('Błąd podczas wylogowywania')
        });
    }

    const logoutUser = () =>{
        readUserId()
    }

    return (
        <View style={{display:'flex', justifyContent:'space-between',alignItems:'center',flexDirection:"row",backgroundColor: Colors.light,height:60, width: "100%"}}>
            {displayBell && <MaterialCommunityIcons name="bell-outline" size={24} color="#445" style={{marginLeft:10}} />}
            {!displayBell && <MaterialCommunityIcons name="bell-outline" size={24} color={Colors.light} style={{marginLeft:10}} />}
            <Text style={{color:Colors.black, fontSize:22,fontFamily:"serif",fontWeight:"bold"}}>{props.name}</Text>
            {displayCog && <MaterialCommunityIcons name="cog" size={24} color="#445" style={{marginRight:10}} onPress={()=>setShowSettingsPopup(!showSettingsPopup)} />}
            {!displayCog && <MaterialCommunityIcons name="cog" size={24} color={Colors.light} style={{marginRight:10}} />}
            {showSettingsPopup && <View style={{backgroundColor:Colors.light,elevation:2,right:5,borderRadius:8,borderWidth:1,top:50,position:"absolute",width:150,padding:10}}><TouchableOpacity onPress={()=>logoutUser()} style={{flexWrap:"nowrap",alignItems:"center",flexDirection:"row"}}><MaterialCommunityIcons name="exit-to-app" size={21} color="black" /><Text style={{color:Colors.black,fontSize:18,marginLeft:5}}>Wyloguj</Text></TouchableOpacity></View>}
        </View>
    )
}
export default Header;
