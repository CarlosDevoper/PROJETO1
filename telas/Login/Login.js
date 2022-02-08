import React, {useState, useEffect} from 'react';
import { Platform   ,Vibration,Keyboard,Pressable,StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image,} from 'react-native';
import css from '../Cadastro/Styles';
import { styles } from '../../Style';
import config from '../../config/config.json';
import { useFonts, Raleway_700Bold} from '@expo-google-fonts/raleway';
import { Roboto_100Thin} from '@expo-google-fonts/roboto';
export default function Login (props) {

    let [fontsLoaded] = useFonts({
        Raleway_700Bold,
        Roboto_100Thin,
      });
    
    const [erroMessage, setErroMessage] = useState(null);
    const [erroLogin, setErroLogin] = useState(null);
    const [user, setUser] = useState(null);
    const [senha, setSenha] = useState(null);
    const [validation, setValidation] = useState(null);

    //Envio dos dados do formulário para o back-end
    async function sendForm()
    {
        let response = await fetch(`${config.urlRoot}login`,{
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: user,
                password: senha,
                admin: 0,
            })
        });
        let json= await response.json();
        if(json ==='error'){
            console.log('error');
            setErroLogin('Usuário ou senha inválidos');
            Vibration.vibrate();
            setTimeout(()=>{
                setErroLogin(null);
            },3500);
        }else{
            console.log('Okay');
            props.navigation.navigate('Usuario');
        }
    }

    //Verificação se há dados nos inputs
    function validationDados(){
        if (user == null || senha ==null || user=='' || senha=='' ) {
            Vibration.vibrate();
            setErroMessage("Campo Obrigatório*")
            setTimeout(()=>{
                setErroMessage(null);
            },3500);
        }
        else{
            setErroMessage(null);
            sendForm();
            
        }
    }

    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.container}> 
        <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
        <View style={styles.header}>
            <TouchableOpacity style={css.buttonVoltar}
            onPress={() =>props.navigation.navigate('Home')}
            >
                <Image style={css.img} source={require('../../assets/img/setaVoltar.png')}/>
                <Text style={[{fontFamily:'Raleway_700Bold'},,css.textForm]}>Voltar</Text>
            </TouchableOpacity>
        </View>
        <View  style={[styles.body]}>
            <View>
                <Text style={[{fontFamily:'Raleway_700Bold'},css.title]}>ENTRAR</Text>
            </View>
            
            
            <View style={css.containerForm}>
            <View style={css.erroDiv}>
            <Text style={css.erroLogin}>{erroLogin}</Text>
            </View>
                <View style={css.imageName}>
                    <Image style={css.img} source={require('../../assets/img/perfilCadastro.png')}/>
                    <Text style={[{fontFamily:'Raleway_700Bold'},css.textForm]}>Nome:</Text>
                </View>
                <TextInput style={css.input} placeholder='Usuário'
                value={user}
                onChangeText={setUser}
                />
                <Text style={css.messageErro}>{erroMessage}</Text>
                
                <View style={css.imageName}>
                    <Image style={css.img} source={require('../../assets/img/senha.png')}/>
                    <Text style={[{fontFamily:'Raleway_700Bold'},css.textForm]}>Senha:</Text>
                </View>
                <TextInput style={css.input} placeholder='Senha' secureTextEntry={true}
                value={senha}
                onChangeText={setSenha}
                />
                <Text style={css.messageErro}>{erroMessage}</Text>
                
                
                <TouchableOpacity 
                style={css.button}
                onPress={() => [validationDados()]}
                >
                    <Text style={[{fontFamily:'Raleway_700Bold'},css.textButton]}>Confirmar</Text>
                </TouchableOpacity>


                
            </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={css.buttonVoltar}
                onPress={() =>props.navigation.navigate('ADM')}
                >
                
                <Text style={[{fontFamily:'Roboto_100Thin'},css.textAdm]}>Entrar como Administrador</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        </Pressable>
    )
}