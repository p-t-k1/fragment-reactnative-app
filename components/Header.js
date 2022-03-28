import React, {useState} from 'react';
import { Text, View } from 'react-native';
import Colors from '../Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Home = (props) => {

    const [displayBell,setDisplayBell] = useState(props.name!=="Profil")
    const [displayCog,setDisplayCog] = useState(props.name==="Profil")

    return (
        <View style={{display:'flex', justifyContent:'space-between',alignItems:'center',flexDirection:"row",backgroundColor: Colors.light,height:60, width: "100%"}}>
            {displayBell && <MaterialCommunityIcons name="bell-outline" size={24} color="#445" style={{marginLeft:10}} />}
            {!displayBell && <MaterialCommunityIcons name="bell-outline" size={24} color={Colors.light} style={{marginLeft:10}} />}
            <Text style={{color:Colors.black, fontSize:22,fontFamily:"serif",fontWeight:"bold"}}>{props.name}</Text>
            {displayCog && <MaterialCommunityIcons name="cog" size={24} color="#445" style={{marginRight:10}} />}
            {!displayCog && <MaterialCommunityIcons name="cog" size={24} color={Colors.light} style={{marginRight:10}} />}
        </View>
    )
}
export default Home;
