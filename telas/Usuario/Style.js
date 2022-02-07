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
        height:'70%',
        backgroundColor:'#fff',
    },
    footer:{
        width:'100%',
        height:'15%',
        backgroundColor:'#fff',
        
    },  
    divFooter:{
        flexDirection:'row',
        width:'95%',
        height:'40%',
        alignSelf:'center',
        justifyContent:'center',
        alignContent:'center',
        borderTopColor:'#DDD',
        borderWidth:2,
        borderBottomColor:'#DDD',
        borderLeftColor:'#fff',
        borderRightColor:'#fff',
        marginTop:'4%',
    },
    avanc:{
        alignSelf:'center',
        justifyContent:'center',
        alignContent:'center',
        flexDirection:'row',
        marginRight:'4%',
        marginLeft:'4%',
    },
    imgSet:{
        width:30,
        height:30,
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
    titleAula:{
        width:'90%',
        color:'#000',
        textAlign:'center',
        fontSize:26,
        fontWeight:'600',
        borderTopColor:'#222',
        borderWidth:2,
        borderBottomColor:'#fff',
        borderLeftColor:'#fff',
        borderRightColor:'#fff',
        alignSelf:'center',
        marginTop:'1%',
    },
    pdf:{
        width:'100%',
        height:'100%',
    },
    textFooter:{
        fontWeight:'bold',
        color:'#000',
        fontSize:20,
        paddingLeft:'4%',
    },
    Coment:{
        paddingTop:'2%',
        alignSelf:'center',
        justifyContent:'center',
        alignContent:'center',
    },
});

export {css}