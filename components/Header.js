import React from 'react';
import { Text, View } from 'react-native';
import Colors from '../Colors';


const Home = (props) => {
    return (
        <View style={{display:'flex', justifyContent:'center',alignItems:'center',backgroundColor: "red",height:60, width: "100%"}}>
            <Text style={{color:Colors.black, fontSize:22,fontFamily:"serif",fontWeight:"bold"}}>{props.name}</Text>
        </View>
    )
}
export default Home;
