import React from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import div from './AppCSS';
import Topm from './components/Topm';
import Body from './components/Body';
import store from './app/store';
import { Provider } from 'react-redux';

            //<NavBar />
function App(){
    return (
        <Provider store={store}>
            <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
                    <View style={div.app}>
                        <Topm />
                        <Body />
                    </View>
            </TouchableWithoutFeedback>
        </Provider>
    );
}

export default App;
