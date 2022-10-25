import React,{useState,useEffect}  from "react";
import { View, FlatList, Text, Pressable, Alert, Modal } from "react-native";
import div from "./ComponentCSS";
import axios from 'axios'
import ListItem from "./ListItem";
import PopUpModal from "./PopUpModal";

function Body(){
    
    const [items,setItems]=useState([]);
    const [isModelOpen,setModelOpen]=useState(false);

    useEffect(function(){ 
        async function fetchPost(){
            const posts=await axios.get('https://jsonplaceholder.typicode.com/posts');
            const postAtt=await posts.data.slice(0,5);
            //console.log(postAtt)
            setItems(postAtt);
        }
      fetchPost();
    },[]);



    function removeFunc(id){
        Alert.alert('Delete Item?','Bet you wanna delete that embarassment',[
            {
                text:"Nah, I'm good",
                onPress:()=>{ return; }
            },{
                text:'Yeah?',
                onPress:()=>{
                    setItems(items.filter(item=>item.id!=id));
                    return;
                }
            },
        ])
    }

    function openModel(){
        setModelOpen(true);
    }

    function addItemFunc(obj){
        if(obj.body==""){
            Alert.alert('BRUH','Why so vague bruh?',[{text:'Well..',onPress:()=>{return}}])
            return;
        }
        console.log(obj);
        setItems(prevIts=> {console.log(obj);return [obj,...prevIts]});
        setModelOpen(false);
        console.log(items);
        return;
    }

    return(
        <View style={div.body}>
            <Modal visible={isModelOpen} animationType='fade'>
                <PopUpModal addItemFunc={addItemFunc}  />
            </Modal>
            <FlatList data={items} renderItem={({item})=> <ListItem data={item} removeFunc={removeFunc} /> } />
            <Pressable style={div.addBtn} onPress={openModel}>
                <Text style={{color:'black'}}>Add Post</Text>
            </Pressable>
        </View>
    );
}
//<Text>Some whole lotta content here.</Text>

export default Body;
