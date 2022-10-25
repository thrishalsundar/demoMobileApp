import React from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import div from './AppCSS';
import Topm from './components/Topm';
import Body from './components/Body';

            //<NavBar />
function App(){
    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={div.app}>
                <Topm />
                <Body />
            </View>
        </TouchableWithoutFeedback>
    );
}

export default App;
