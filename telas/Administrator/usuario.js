import React, {useEffect, useState} from 'react';
import { View, Text,TouchableOpacity,Image,BackHandler, Alert} from 'react-native';
import { styles } from '../../Style';
import { css } from './css';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import initial from '../AdmViews/inicial';
import cadastr from '../AdmViews/cadastro';
import aula from '../AdmViews/aulas';
import { Ionicons } from '@expo/vector-icons';
export default function Administrator(props) {

  const Tab = createMaterialBottomTabNavigator();
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
     <Tab.Navigator activeColor='#fff'inactiveColor='#000' barStyle={css.tabBar}>
        <Tab.Screen name="Home" component={initial} 
        options={{
          tabBarIcon:()=>{
            <Ionicons name="home" size={10} color='#fff'/>
          } 
        }}
        />
        <Tab.Screen name="Cadastrar" component={cadastr} />
        <Tab.Screen name="Aula" component={aula} />
      </Tab.Navigator>
    )
}