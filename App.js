import React from 'react';
import {Text, View,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';  
import { styles } from './Style';
import Home from './telas/inicial/home';
import Login from './telas/Login/Login';
import Register from './telas/Cadastro/Register';
import Adm from './telas/Adm/Adm';
import Usuario from './telas/Usuario/usuario';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
            headerShown:false
        }}/>
        <Stack.Screen name="Login" component={Login} options={{
            headerShown:false
        }}/>
        <Stack.Screen name="Register" component={Register} options={{
            headerShown:false
        }}/>
        <Stack.Screen name="ADM" component={Adm} options={{
            headerShown:false
        }}/>
        <Stack.Screen name="Usuario" component={Usuario} options={{
            headerShown:false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}
