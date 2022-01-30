import React, {useEffect, useState} from 'react';
import { View, Text,TouchableOpacity,Image,BackHandler, Alert  } from 'react-native';
import { styles } from '../../Style';
import { css } from '../Usuario/Style';

export default function Administrator(props) {
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
          <Text style={css.title}>Bem VIndo Administrador</Text>
        </View>
      </View>
    )
}