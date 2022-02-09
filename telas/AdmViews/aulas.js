import React, {useEffect, useState} from 'react';
import {View,Vibration, Text,TouchableOpacity,Image,BackHandler, Alert, Pressable, Keyboard, KeyboardAvoidingView, TextInput  } from 'react-native';
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
    const [tema, setTema] = useState(null);
    const [title, setTitle] = useState(null);
    const [link, setLink] = useState(null);
    const [login, setLogin] = useState(null);
    
        //Envio dos dados do formulário para o back-end
        async function sendForm()
        {
        Alert.alert("Parabéns", "Aula Cadastrada com Sucesso!", [
            {
              text: "OK",
              onPress: () => null,
              style: "cancel" 
            },
          ]);
        console.log('cadastrado');
        let response = await fetch(`${config.urlRoot}aulas`,{
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                tema: tema,
                link: link,
            })
        })
    }

    //Verificar a presença de dados
    function verificationDados(){
        if (tema == null || title == null || link ==null || tema == '' || title == '' || link == '') {
            Vibration.vibrate();
            setErroMessage("Campo Obrigatório*")
            setTimeout(()=>{
                setErroMessage(null);
            },3500);
        }
        else{
            setErroMessage(null);
            sendForm();
            setTema(null);
            setTitle(null);
            setLink(null);
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
            <Text style={[{fontFamily:'Roboto_500Medium'},estilo.title]}>Novas Aulas</Text>
            <View style={estilo.form}>
                <Text style={[{fontFamily:'Roboto_500Medium'},estilo.titleForm]}>CADASTRAR</Text>
                
                <View style={estilo.imput}>
                    <View style={css.imageName}>
                        <Text style={[{fontFamily:'Raleway_700Bold'},css.textForm]}>Tema:</Text>
                    </View>
                    <TextInput style={css.input} placeholder='Tema da Aula'
                    value={title}
                    onChangeText={setTitle}
                    />
                    <Text style={css.messageErro}>{erroMessage}</Text>
                </View>
                <View style={estilo.imput}>
                <View style={css.imageName}>
                    <Text style={[{fontFamily:'Raleway_700Bold'},css.textForm]}>Título:</Text>
                    </View>
                    <TextInput style={css.input} placeholder='Título da Aula'
                    value={tema}
                    onChangeText={setTema}
                    />
                    <Text style={css.messageErro}>{erroMessage}</Text>
                </View>

                <View style={estilo.imput}>
                    <View style={css.imageName}>
                        <Text style={[{fontFamily:'Raleway_700Bold'},css.textForm]}>Link:</Text>
                    </View>
                    <TextInput style={css.input} placeholder='Link para a aula'
                    value={link}
                    onChangeText={setLink}
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