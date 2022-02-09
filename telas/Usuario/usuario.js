import React, {useEffect, useState} from 'react';
import { View, Text,TouchableOpacity,Image,BackHandler, Alert } from 'react-native';
import { styles } from '../../Style';
import { css } from './Style';
import WebView from 'react-native-webview';
import { useFonts, Raleway_700Bold} from '@expo-google-fonts/raleway';
import {Roboto_500Medium, Roboto_100Thin} from '@expo-google-fonts/roboto';
import config from '../../config/config.json';
  
export default function Usuario(props) {


  useEffect(()=>{
    sendForm();
  },[]);
  async function sendForm()
  {
      let response = await fetch(`${config.urlRoot}exib`,{
          method: 'POST',
          headers:{
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
          })
      });
      let json= await response.json();
      console.log(json);
      setAulas(json);
      //console.log(aulas[0].link);
      //console.log(aulas.length);
  }
  const[aulas, setAulas] = useState(null);
  const [num, setNum] = useState(0);


  let [fontsLoaded] = useFonts({
    Raleway_700Bold,
    Roboto_500Medium,
    Roboto_100Thin,
  });

  const [aula, setAula] = useState(1);
  const [titulo, setTitulo] = useState('Aula da Semana');
  const [tituloAula, setTituloAula] = useState(null);
  const [link, setLink] = useState(null);
  
  
  // useEffect(()=>{
  //   if(num>3){
  //     setNum(0);
  //   }
  // },[]);
  function somaNum(){
    let size = aulas.length;
    size = size-1
    console.log(size);
    if(num<size){
      setNum(num+1);
    }else{
      setNum(0)
    }
    console.log(num);
  }
  function subNum(){
    let size = aulas.length;
    size = size-1
    console.log(size);
    if(num==0){
      setNum(size)
    }else{
      setNum(num-1)
    }
    console.log(num)
  }

    useEffect(()=>{
      backAction = () => {
        Alert.alert("Atenção", "Você quer mesmo sair do aplicativo?", [
          {
            text: "Não",
            onPress: () => null,
            style: "cancel" 
          },
          { text: "Sim", onPress: () => 
            {
              props.navigation.navigate('Home');
              BackHandler.exitApp()
            }
          }
        ]);
        return true;
      };

        const backHandler= BackHandler.addEventListener("hardwareBackPress", backAction);
        return ()=> backHandler.remove();
    },[]);



    return(
      <View style={styles.container}>
        <View style={css.header}>
          <View style={css.buttonPerfil}>
            <TouchableOpacity>
                <Image style={css.img} source={require('../../assets/img/Perfil.png')}/>
                <Text style={[{fontFamily:'Roboto_500Medium'},css.textButton]}>Perfil</Text>
            </TouchableOpacity>
          </View>

          <View style={css.buttonConversas}>
            <TouchableOpacity>
                <Image style={css.img} source={require('../../assets/img/conversar.png')}/>
                <Text style={[{fontFamily:'Roboto_500Medium'},css.textButton]}>Mensagens</Text>
            </TouchableOpacity>
          </View>
          <View style={css.buttonAjuda}>
            <TouchableOpacity>
                <Image style={css.img} source={require('../../assets/img/interrogação.png')}/>
                
                <Text style={[{fontFamily:'Roboto_500Medium'},css.textButton]}>Ajuda</Text>
            </TouchableOpacity>
          </View>
        </View>

        {aulas &&(
          <View style={css.body}>
            <Text style={[{fontFamily:'Raleway_700Bold'},css.title]}>{aulas[num].title}</Text>
            <Text style={[{fontFamily:'Roboto_500Medium'},css.titleAula]}>{aulas[num].tema}</Text>
            <WebView 
              style={css.pdf}
              source={{ uri:aulas[num].link}}/>
          </View>
        )
        }
        
        <View style={css.footer}>
          <View style={css.divFooter}>  
            <TouchableOpacity
            onPress={()=>subNum()}
            style={css.avanc}
            >
                <Image style={css.imgSet} source={require('../../assets/img/setLeft.png')}/>
                <Text style={[{fontFamily:'Roboto_500Medium'},css.textFooter]}>Aula Anterior</Text>

            </TouchableOpacity>
  
            <TouchableOpacity 
              onPress={()=> somaNum()}
              style={css.avanc}
            >
                <Text style={[{fontFamily:'Roboto_500Medium'},css.textFooter]}>Próxima Aula</Text>
                <Image style={css.imgSet} source={require('../../assets/img/setRight.png')}/>
            </TouchableOpacity>
          </View>
          <View style={css.Coment}>
          <TouchableOpacity>
                <Text style={[{fontFamily:'Roboto_500Medium'},css.textFooter]}>Comentar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
}