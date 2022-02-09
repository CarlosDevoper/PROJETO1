import React, {useEffect, useState} from 'react';
import { View, Text,TouchableOpacity,Image,BackHandler, Alert  } from 'react-native';
import { styles } from '../../Style';
import { estilo } from './css';
import { Ionicons } from '@expo/vector-icons';
import config from '../../config/config.json';


export default function initial(props) {

  const[usuario, setUsuario] = useState(null);
  async function sendForm()
  {
      let response = await fetch(`${config.urlRoot}users`,{
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
      setUsuario(json);
  }

  useEffect(()=>{
    sendForm();
  },[]);
    
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
        <View style={estilo.body}>
          <Text style={estilo.title}>Alunos Cadastrados na Plataforma</Text>

          <View style={estilo.table}>
            <View style={estilo.col}>
              <Text style={estilo.lineTitle}>Nome:</Text>
              <Text style={estilo.lineTitle}>Telefone:</Text>
            </View>
            <View style={estilo.col}>
              <Text style={estilo.line}>{usuario[0].name}</Text>
              <Text style={estilo.line}>{usuario[0].cell}</Text>
            </View>
            <View style={estilo.col}>
              <Text style={estilo.line}>{usuario[1].name}</Text>
              <Text style={estilo.line}>{usuario[1].cell}</Text>
            </View>
            <View style={estilo.col}>
              <Text style={estilo.line}>{usuario[2].name}</Text>
              <Text style={estilo.line}>{usuario[2].cell}</Text>
            </View>
            <View style={estilo.col}>
              <Text style={estilo.line}>{usuario[3].name}</Text>
              <Text style={estilo.line}>{usuario[3].cell}</Text>
            </View>
          </View>
        </View>
      </View>
    )
}