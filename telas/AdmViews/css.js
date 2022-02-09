import { flushSync } from "react-dom";
import { StyleSheet } from "react-native"

const estilo = StyleSheet.create({
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
        paddingBottom:'4%',
        textAlign:'center',
        fontSize:32,
        fontWeight:'600',
        marginTop:'4%',
    },
    form:{
        width:'90%',
        height:'auto',
        backgroundColor:'#6869AD',
        alignContent:'center',
        alignSelf:'center',
        borderRadius:20,
    },  
    titleForm:{
        color:'#fff',
        paddingTop:'10%',
        paddingBottom:'2%',
        textAlign:'center',
        fontSize:30,
        fontWeight:'600',
    },
    imageName:{
        flexDirection:'row',
        marginBottom:5,
        marginTop:5,
        alignContent:'center',
        marginBottom:'2%',
      },
      img:{
        marginTop:2.5,
        width:35,
        height:35,
        marginRight:6,
        alignSelf:'center',
        justifyContent:'center',
        alignContent:'center',
      },
      imput:{
        width:'90%',
        alignSelf:'center'
      },
      button:{
        borderRadius:30,
        width:'45%',
        borderColor:'#00ff00',
        borderWidth:2,
        alignSelf:'center',
        backgroundColor:'#fff',
        marginBottom:'6%',
        marginTop:'4%',
      },
    
});

export {estilo}