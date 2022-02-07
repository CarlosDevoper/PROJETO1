import { flushSync } from "react-dom";
import { StyleSheet } from "react-native"

const css = StyleSheet.create({
    header:{
        width:'100%',
        height:'15%',
        justifyContent: 'center',
        alignContent:'center',
        backgroundColor:'#6869AD',
        flexDirection:'row',

    },
    body:{
        width:'100%',
        height:'85%',
        backgroundColor:'#fff',
    },
    buttonPerfil:{
        justifyContent: 'center',
        height:'100%',
        width:'22%',
        alignItems:'center',
    },
    buttonConversas:{
        justifyContent: 'center',
        height:'100%',
        width:'24%',
        alignItems:'center',
        marginLeft:'30%',
    },
    buttonAjuda:{
        justifyContent: 'center',
        height:'100%',
        width:'24%',
        alignItems:'center',
    },
    img:{
        alignSelf:'center',
        width:50,
        height:50,
    },
    textButton:{
        color:'#fff',
        textAlign:'center',
        fontSize:18,
    },
    title:{
        color:'#6869AD',
        textAlign:'center',
        fontSize:28,
        fontWeight:'600',
        marginTop:'1%',
    },
});

export {css}