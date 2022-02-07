import React, {useEffect, useState} from 'react';
import { View, Text,TouchableOpacity,Image,BackHandler, Alert } from 'react-native';
import { styles } from '../../Style';
import { css } from './Style';
import WebView from 'react-native-webview';
// import App from '../PDF/PDF';

  
export default function Usuario(props) {

  const [aula, setAula] = useState(1);
  const [titulo, setTitulo] = useState('Aula da Semana');
  const [tituloAula, setTituloAula] = useState(null);
  const [link, setLink] = useState(null);
  const [num, setNum] = useState(1);
  
  function somaNum(){
    setAula(aula+1);
    if(aula>=4){
      setAula(1);
    }
    if(aula==1){
      setLink('https://docs.google.com/presentation/d/1rcZgmIu35IObo8t3sN9nMxNOWrBohoUn/edit?usp=sharing&ouid=108937410371571291706&rtpof=true&sd=true')
      setTituloAula('Tira Dúvidas e Funções do Whatsapp')
      setTitulo('Aula da Semana')
    }
    if(aula==2){
      setLink('https://docs.google.com/presentation/d/1ceBnx95N3KeMDFpPSihM8o9HgzFUCRNT/edit?usp=sharing&ouid=108937410371571291706&rtpof=true&sd=true')
      setTituloAula('Fotografia de Produtos pelo Celular')
      setTitulo('Fotografia pelo Celular')
    }
    if(aula==3){
      setLink('https://docs.google.com/presentation/d/1hqjBRKNd5bRxWPhrrrzUsP_vcBqXHlRR/edit?usp=sharing&ouid=108937410371571291706&rtpof=true&sd=true')
      setTituloAula('Como usar um celular/smartphone')
      setTitulo('Uso do Celular')
    }
    if(aula==4){
      setLink('https://docs.google.com/presentation/d/1fhdMutHQRiDAFsCRBn2aBr-jymGxVvRW/edit#slide=id.p1')
      setTituloAula('Como utilizar a Memória do celular')
      setTitulo('Uso da memória do celular')
    }

    console.log(aula);
  }
  function subNum(){
    setAula(aula-1);
    console.log(aula);

    if(aula==1){
      setLink('https://docs.google.com/presentation/d/1rcZgmIu35IObo8t3sN9nMxNOWrBohoUn/edit?usp=sharing&ouid=108937410371571291706&rtpof=true&sd=true')
      setTituloAula('Tira Dúvidas e Funções do Whatsapp')
      setTitulo('Aula da Semana')
    }
    if(aula==2){
      setLink('https://docs.google.com/presentation/d/1ceBnx95N3KeMDFpPSihM8o9HgzFUCRNT/edit?usp=sharing&ouid=108937410371571291706&rtpof=true&sd=true')
      setTituloAula('Fotografia de Produtos pelo Celular')
      setTitulo('Fotografia pelo Celular')
    }
    if(aula==3){
      setLink('https://docs.google.com/presentation/d/1hqjBRKNd5bRxWPhrrrzUsP_vcBqXHlRR/edit?usp=sharing&ouid=108937410371571291706&rtpof=true&sd=true')
      setTituloAula('Como usar um celular/smartphone')
      setTitulo('Uso do Celular')
    }
    if(aula==4){
      setLink('https://docs.google.com/presentation/d/1fhdMutHQRiDAFsCRBn2aBr-jymGxVvRW/edit#slide=id.p1')
      setTituloAula('Como utilizar a Memória do celular')
      setTitulo('Uso da memória do celular')
    }
      
    if(aula<=1){
      setAula(4);
    }

  }
  useEffect(()=>{
    if(aula===1){
      setLink('https://docs.google.com/presentation/d/1rcZgmIu35IObo8t3sN9nMxNOWrBohoUn/edit?usp=sharing&ouid=108937410371571291706&rtpof=true&sd=true')
      setTituloAula('Tira Dúvidas e Funções do Whatsapp')
    }
  },[]);


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
                <Text style={css.textButton}>Perfil</Text>
            </TouchableOpacity>
          </View>

          <View style={css.buttonConversas}>
            <TouchableOpacity>
                <Image style={css.img} source={require('../../assets/img/conversar.png')}/>
                <Text style={css.textButton}>Mensagens</Text>
            </TouchableOpacity>
          </View>
          <View style={css.buttonAjuda}>
            <TouchableOpacity>
                <Image style={css.img} source={require('../../assets/img/interrogação.png')}/>
                
                <Text style={css.textButton}>Ajuda</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={css.body}>
          <Text style={css.title}>{titulo}</Text>
          <Text style={css.titleAula}>{tituloAula}</Text>
          <WebView 
            style={css.pdf}
            source={{ uri:link}}/>
        </View>
        <View style={css.footer}>
          <View style={css.divFooter}>  
            <TouchableOpacity
            onPress={()=>subNum()}
            style={css.avanc}
            >
                <Image style={css.imgSet} source={require('../../assets/img/setLeft.png')}/>
                <Text style={css.textFooter}>Aula Anterior</Text>

            </TouchableOpacity>
  
            <TouchableOpacity 
              onPress={()=> somaNum()}
              style={css.avanc}
            >
                <Text style={css.textFooter}>Próxima Aula</Text>
                <Image style={css.imgSet} source={require('../../assets/img/setRight.png')}/>
            </TouchableOpacity>
          </View>
          <View style={css.Coment}>
          <TouchableOpacity>
                <Text style={css.textFooter}>Comentar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
}