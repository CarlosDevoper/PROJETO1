import React, {useEffect, useState} from 'react';
import { View,Vibration, Text,TouchableOpacity,Image,BackHandler, Alert, Pressable, Keyboard, KeyboardAvoidingView, TextInput  } from 'react-native';
import { styles } from '../../Style';
import { estilo } from './css';
import css from '../Cadastro/Styles';
import { Ionicons } from '@expo/vector-icons';
import config from '../../config/config.json';
import { useFonts, Roboto_500Medium} from '@expo-google-fonts/roboto';


export default function initial(props) {
    let [fontsLoaded] = useFonts({
        Roboto_500Medium,
      });
    const [erroMessage, setErroMessage] = useState(null);
    const [user, setUser] = useState(null);
    const [telefone, setTelefone] = useState(null);
    const [senha, setSenha] = useState(null);
    const [login, setLogin] = useState(null);
    
        //Envio dos dados do formulário para o back-end
        async function sendForm()
        {
        Alert.alert("Parabéns", "Adiministrador Cadastrado com Sucesso!", [
            {
              text: "OK",
              onPress: () => null,
              style: "cancel" 
            },
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
                admin: 1,
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
      <View style={styles.container}>
        <View style={estilo.header}>
          <View style={estilo.buttonPerfil}>
            <TouchableOpacity>
                <Image style={estilo.img} source={require('../../assets/img/Perfil.png')}/>
                <Text style={estilo.textButton}>Perfil</Text>
            </TouchableOpacity>
          </View>

          <View style={estilo.buttonConversas}>
            <TouchableOpacity>
                <Image style={estilo.img} source={require('../../assets/img/conversar.png')}/>
                <Text style={estilo.textButton}>Mensagens</Text>
            </TouchableOpacity>
          </View>
          <View style={estilo.buttonAjuda}>
            <TouchableOpacity>
                <Image style={estilo.img} source={require('../../assets/img/interrogação.png')}/>
                <Text style={estilo.textButton}>Ajuda</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <Pressable onPress={Keyboard.dismiss} style={estilo.body}>
        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <Text style={[{fontFamily:'Roboto_500Medium'},estilo.title]}>Novo Adiministrador</Text>
            <View style={estilo.form}>
                <Text style={[{fontFamily:'Roboto_500Medium'},estilo.titleForm]}>CADASTRAR</Text>
                
                <View style={estilo.imput}>
                    <View style={css.imageName}>
                        <Image style={css.img} source={require('../../assets/img/perfilCadastro.png')}/>
                        <Text style={[{fontFamily:'Raleway_700Bold'},css.textForm]}>Nome:</Text>
                    </View>
                    <TextInput style={css.input} placeholder='Usuário'
                    value={user}
                    onChangeText={setUser}
                    />
                    <Text style={css.messageErro}>{erroMessage}</Text>
                </View>
                <View style={estilo.imput}>
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
                </View>

                <View style={estilo.imput}>
                    <View style={css.imageName}>
                        <Image style={css.img} source={require('../../assets/img/senha.png')}/>
                        <Text style={[{fontFamily:'Raleway_700Bold'},css.textForm]}>Senha:</Text>
                    </View>
                    <TextInput style={css.input} placeholder='Senha' secureTextEntry={true}
                    value={senha}
                    onChangeText={setSenha}
                    />
                    <Text style={css.messageErro}>{erroMessage}</Text>
                </View>

                <TouchableOpacity 
                style={estilo.button}
                onPress={() => [verificationDados()]}
                >
                    <Text style={[{fontFamily:'Raleway_700Bold'},css.textButton]}>Confirmar</Text>
                </TouchableOpacity>
                
            </View>
        </KeyboardAvoidingView>
        </Pressable>
      </View>
    )
}