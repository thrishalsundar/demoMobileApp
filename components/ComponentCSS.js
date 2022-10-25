import { StyleSheet} from 'react-native';

const div=StyleSheet.create({
    //Topm
    topm:{
        //backgroundColor:'yellow',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height:75,
        paddingLeft:20,
        paddingRight:20,
        borderBottomColor:'red',
        borderBottomWidth:5
    },
    logo:{
        fontSize:22,
        color:'red'
    },
    optsImg:{
        height:30,
        width:30
    },
    


    //Body
    body:{
        //backgroundColor:'yellow',
        display:'flex',
        flex:1,
        color:'white',
        paddingVertical:20,
        paddingHorizontal:15
    },
    listItem:{
        //backgroundColor:'grey',
        borderWidth:1,
        borderColor:'red',
        paddingVertical:10,
        paddingHorizontal:20,
        marginBottom:10,
        borderRadius:100/4,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

    lILeft:{
        width:100/0.4,
        padding:10
    },

    lILeftTitle:{
        color:'white',
        fontSize:15,
    },
    lILeftBody:{
    },

    lIRight:{
    },

    deleteIcon:{
        height:30,width:30,
    },

    addBtn:{
        height:50,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:100/10,
    },






    //pUModal
    pUModal:{
        backgroundColor:'black',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },

    pUTitle:{
        fontWeight:'bold',
        fontSize:25,
        paddingBottom:30,
    },

    pUInput:{
        borderWidth:1,
        borderColor:'red',
        borderRadius:100/4,
        padding:15,
        margin:8,
        alignItems:'center',
        width:100/.4,
    },

    pUButton:{
        marginTop:20,
    },

    



    //NavBar
    navbar:{
        backgroundColor:'red',
        paddingHorizontal:30,
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:60,
        borderTopWidth:3,
        borderTopColor:'black',
    },
    img:{
        height:40,width:40
    }
})


export default div;
