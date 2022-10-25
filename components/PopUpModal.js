import React, {useState} from "react";
import {Text, Button, TextInput, View} from "react-native";
import div from "./ComponentCSS";

function PopUpModal(fata){
    const addItemFunc=fata.addItemFunc;

    const [postTitle,setPostTitle] =useState("");
    const [postBody,setPostBody] =useState("");


    return(

        <View style={div.pUModal} >
            <Text style={div.pUTitle}>Add Post</Text>
            <TextInput style={div.pUInput} placeholder="Enter Post Title"  onChangeText={(val)=>{setPostTitle(val)}} multiline />
            <TextInput style={div.pUInput} placeholder="Enter Post Body" onChangeText={(val)=>{setPostBody(val)}} multiline />
            <View style={div.pUButton}><Button title='Post!' color='red' onPress={()=>addItemFunc(obj={title:postTitle,body:postBody,id:Math.random(),userId:Math.random()})} /></View>
        </View>

    );
}

export default PopUpModal;
