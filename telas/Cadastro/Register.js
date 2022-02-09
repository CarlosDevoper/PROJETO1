import React, {useState,useEffect} from 'react';
import {Alert,Platform,Vibration,Keyboard,StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Pressable} from 'react-native';
import css from './Styles';
import { styles } from '../../Style';
import config from '../../config/config.json';
import { useFonts, Raleway_700Bold} from '@expo-google-fonts/raleway';
import { Roboto_100Thin} from '@expo-google-fonts/roboto';
export default function Register(props) {

    let [fontsLoaded] = useFonts({
        Raleway_700Bold,
        Roboto_100Thin,
      });
    const [erroMessage, setErroMessage] = useState(null);
    const [user, setUser] = useState(null);
    const [telefone, setTelefone] = useState(null);
    const [senha, setSenha] = useState(null);
    const [login, setLogin] = useState(null);


    //Envio dos dados do formulário para o back-end
    async function sendForm()
        {
        Alert.alert("Parabéns", "Usuário cadastrado com sucesso!deseja fazer o login no aplicativo?", [
            {
              text: "Não",
              onPress: () => null,
              style: "cancel" 
            },
            { text: "Sim", onPress: () => 
              {
                props.navigation.navigate('Login');
              }
            }
          ]);
        console.log('cadastrado');
        let response = await fetch(`${config.urlRoot}cadastro`,{
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: user,
                cell: telefone,
                password: senha,
                admin: 0,
            })
        })
    }

    //Verificar a presença de dados
    function verificationDados(){
        if (user == null || telefone == null || senha ==null || user == '' || telefone == '' || senha == '') {
            Vibration.vibrate();
            setErroMessage("Campo Obrigatório*")
            setTimeout(()=>{
                setErroMessage(null);
            },3500);
        }
        else{
            setErroMessage(null);
            sendForm();
            setUser(null);
            setTelefone(null);
            setSenha(null);
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
                <Text style={[{fontFamily:'Raleway_700Bold'},css.textForm]}>Voltar</Text>
            </TouchableOpacity>
            </View>

            <View  style={styles.body}> 
            <View>
                <Text style={[{fontFamily:'Raleway_700Bold'},css.title]}>CADASTRO</Text>
            </View> 
            
            <View style={css.containerForm}>
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
                    <Image style={css.img} source={require('../../assets/img/telefone.png')}/>
                    <Text style={[{fontFamily:'Raleway_700Bold'},css.textForm]}>Telefone:</Text>
                </View>
                <TextInput style={css.input} placeholder='Telefone'
                keyboardType='numeric'
                value={telefone}
                onChangeText={setTelefone}
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
                onPress={() => [verificationDados()]}
                >
                    <Text style={[{fontFamily:'Raleway_700Bold'},css.textButton]}>Confirmar</Text>
                </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
        <View style={styles.footer}>
                <TouchableOpacity style={css.buttonVoltar}
                onPress={() =>props.navigation.navigate('ADM')}
                >
                
                <Text style={[{fontFamily:'Roboto_100Thin'},css.textAdm]}>Entrar como Administrador</Text>
                </TouchableOpacity>
        </View>
        </Pressable>
        
    )
}