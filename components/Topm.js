import React from "react";
import { View,Text } from "react-native";
import div from "./ComponentCSS";

function Topm(){
    return(
       <View style={div.topm} >
            <Text style={div.logo} >Demo App</Text>
       </View>
    );
            //<Image style={div.optsImg} source={optionImg} />
}

export default Topm;
