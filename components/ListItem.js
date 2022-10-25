import React from "react";
import {View,Text, TouchableOpacity,Image} from "react-native";
import div from "./ComponentCSS";
import someImg from './images/deleteWhite.png'

function ListItem(fata){

    const data=fata.data
    const removeFunc=fata.removeFunc
    return (
        <View style={div.listItem}>
            <View style={div.lILeft}>
                <Text style={div.lILeftTitle}>{data.title}</Text>
                <Text style={div.lILeftBody}>{data.body}</Text>
            </View>
            <View style={div.lIRight}>
                <TouchableOpacity onPress={()=>removeFunc(data.id)}>
                    <Image style={div.deleteIcon} source={someImg}  />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ListItem;
