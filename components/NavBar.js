import React from "react";
import { View ,Image} from "react-native";
import div from "./ComponentCSS";
import homeImg from './images/home_FILL0_wght400_GRAD0_opsz48.png';
import cookingImg from './images/cooking_FILL0_wght400_GRAD0_opsz48.png';
import restaurImg from './images/table_restaurant_FILL0_wght400_GRAD0_opsz48.png';
import profImg from './images/person_2_FILL0_wght400_GRAD0_opsz48.png'

function NavBar(){
    return(
        <View style={div.navbar}>
            <Image style={div.img} source={homeImg} />
            <Image style={div.img} source={cookingImg} />
            <Image style={div.img} source={restaurImg} />
            <Image style={div.img} source={profImg} />
        </View>
    );
}



export default NavBar;
