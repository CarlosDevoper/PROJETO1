import { StyleSheet } from "react-native"

const css = StyleSheet.create({
    title:{
        alignSelf:'center',
        marginTop:"70%",
        fontSize:24,
        fontWeight:'bold',
    },
    buttons:{
        width:'30%',
        alignSelf:'center',
        alignItems:'center',
        marginTop:30,
    },
    buttonLogin:{
        backgroundColor:'#00ff00',
        width:'100%',
        padding:'12%',
        borderRadius:10,
    },
    buttonRegister:{
        backgroundColor:'#ff0000',
        width:'100%',
        padding:'12%',
        borderRadius:10,
        marginBottom:'20%',
    },
    textButton:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
    },
    white:{
        backgroundColor:'#fff',
        width:'100%',
        height:'100%',
    }
});

export default css