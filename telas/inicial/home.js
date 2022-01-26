import React from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import css from './Style'
import { styles } from '../../Style';


export default function Home(props) {

    return(
        <View style={[styles.container]}>
            <View style={css.white}>
            <Text style={css.title}>Olá, é sua primera vez aqui?</Text>
            <View style={css.buttons}>
            <TouchableOpacity
                style={css.buttonRegister}
                onPress={() =>props.navigation.navigate('Register')}
                >
                <Text style={css.textButton}>SIM</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={css.buttonLogin}
                onPress={() =>props.navigation.navigate('Login')}
                >
                <Text style={css.textButton}>NÃO</Text>
            </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}