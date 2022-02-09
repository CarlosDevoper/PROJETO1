import React, {useEffect, useState} from 'react';
import { View, Text,TouchableOpacity,Image,BackHandler, Alert  } from 'react-native';
import { styles } from '../../Style';
import { estilo } from './css';
import { Ionicons } from '@expo/vector-icons';
import config from '../../config/config.json';


export default function initial(props) {
    
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
          
        </View>
      </View>
    )
}