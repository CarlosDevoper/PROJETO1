import React, {useState} from 'react';
import { Platform   ,Vibration,Keyboard,Pressable,StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from '../Cadastro/Styles';
import css from './CSS'
export default function Adm(props) {

    const [erroMessage, setErroMessage] = useState(null);
    const [telefone, setTelefone] = useState(null);
    const [senha, setSenha] = useState(null);

    function validationImc(){
        if (telefone == null || senha ==null ) {
            Vibration.vibrate();
            setErroMessage("Campo Obrigatório*")
        }
        else{
            setErroMessage(null)
        }
    }

    return(
        <Pressable onPress={Keyboard.dismiss}> 
        <View style={styles.voltar}>
            <TouchableOpacity style={styles.buttonVoltar}
            onPress={() =>props.navigation.navigate('Home')}
            >
                <Image style={styles.img} source={require('../../assets/img/setaVoltar.png')}/>
                <Text style={styles.textForm}>Voltar</Text>
            </TouchableOpacity>
        </View>
        <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={css.container}>
            <View>
                <Text style={css.titleAdm}>ENTRAR COMO ADMINISTRADOR</Text>
            </View> 
            
            <View style={styles.containerForm}>

                <View style={styles.imageName}>
                    <Image style={styles.img} source={require('../../assets/img/telefone.png')}/>
                    <Text style={styles.textForm}>Telefone:</Text>
                </View>
                <TextInput style={styles.input} placeholder='Telefone'
                keyboardType='numeric'
                value={telefone}
                onChangeText={setTelefone}
                />
                <Text style={styles.messageErro}>{erroMessage}</Text>
                
                <View style={styles.imageName}>
                    <Image style={styles.img} source={require('../../assets/img/senha.png')}/>
                    <Text style={styles.textForm}>Senha:</Text>
                </View>
                <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true}
                value={senha}
                onChangeText={setSenha}
                />
                <Text style={styles.messageErro}>{erroMessage}</Text>
                
                
                <TouchableOpacity 
                style={styles.button}
                onPress={() => validationImc()}
                >
                    <Text style={styles.textButton}>Confirmar</Text>
                </TouchableOpacity>
                
            </View>
        </KeyboardAvoidingView>
        </Pressable>
    )
}