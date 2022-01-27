import React, {useState} from 'react';
import { View, Text,TouchableOpacity,Image } from 'react-native';
import { styles } from '../../Style';
import { css } from './Style';
export default function Usuario(props) {

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
          <Text style={css.title}>Aula da semana</Text>
        </View>
      </View>
    )
}