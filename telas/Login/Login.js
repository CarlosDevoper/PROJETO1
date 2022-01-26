import React, {useState} from 'react';
import { Platform   ,Vibration,Keyboard,Pressable,StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image} from 'react-native';
import css from '../Cadastro/Styles';
import { styles } from '../../Style';
export default function Login (props) {

    const [erroMessage, setErroMessage] = useState(null);
    const [telefone, setTelefone] = useState(null);
    const [senha, setSenha] = useState(null);
    const [validation, setValidation] = useState(null);
    function validationDados(){
        if (telefone == null || senha ==null ) {
            Vibration.vibrate();
            setErroMessage("Campo Obrigatório*")
        }
        else{
            props.navigation.navigate('Usuario')
            setErroMessage(null);
            
        }
    }

    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.container}> 
        <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
        <View style={styles.header}>
            <TouchableOpacity style={css.buttonVoltar}
            onPress={() =>props.navigation.navigate('Home')}
            >
                <Image style={css.img} source={require('../../assets/img/setaVoltar.png')}/>
                <Text style={css.textForm}>Voltar</Text>
            </TouchableOpacity>
        </View>
        <View  style={[styles.body]}>
            <View>
                <Text style={css.title}>ENTRAR</Text>
            </View> 
            
            <View style={css.containerForm}>

                <View style={css.imageName}>
                    <Image style={css.img} source={require('../../assets/img/telefone.png')}/>
                    <Text style={css.textForm}>Telefone:</Text>
                </View>
                <TextInput style={css.input} placeholder='Telefone'
                keyboardType='numeric'
                value={telefone}
                onChangeText={setTelefone}
                />
                <Text style={css.messageErro}>{erroMessage}</Text>
                
                <View style={css.imageName}>
                    <Image style={css.img} source={require('../../assets/img/senha.png')}/>
                    <Text style={css.textForm}>Senha:</Text>
                </View>
                <TextInput style={css.input} placeholder='Senha' secureTextEntry={true}
                value={senha}
                onChangeText={setSenha}
                />
                <Text style={css.messageErro}>{erroMessage}</Text>
                
                
                <TouchableOpacity 
                style={css.button}
                onPress={() => validationDados()}
                >
                    <Text style={css.textButton}>Confirmar</Text>
                </TouchableOpacity>


                
            </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={css.buttonVoltar}
                // onPress={() =>props.navigation.navigate('ADM')}
                >
                
                <Text style={css.textAdm}>Entrar como Administrador</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        </Pressable>
    )
}