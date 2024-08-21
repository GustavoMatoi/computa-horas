import React, { useState } from "react";
import { View, StyleSheet, Alert, Text, Dimensions, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native'

import Estilo from "@/assets/style"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
export default props => {
    const [matricula, setMatricula] = useState('');
    const [senha, setSenha] = useState('');
    const router = useRouter()
    const handleLogin = async () =>{
            try {
                const matriculaLocal = await AsyncStorage.getItem('matricula');
                const senhaLocal = await AsyncStorage.getItem('senha');
                if (matriculaLocal && senhaLocal) {

                    if (matricula === matriculaLocal && senha === senhaLocal) {
                        Alert.alert('Sucesso', 'Login realizado com sucesso!');
                        router.push('/(tabs)')
                    } else {
                        Alert.alert('Erro', 'Matrícula ou senha incorretos.');
                    }
                } else {
                    Alert.alert('Erro', 'Nenhum usuário encontrado. Por favor, cadastre-se.');
                }
            } catch (error) {
                Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login.');
            }
        
    }

    return (
        <View style={[Estilo.corLight]}>
            <View style={[{ width: '100%', height: Dimensions.get('screen').height }]}>
                <View style={[{ width: '100%', alignItems: 'center' }]}>
                    <Image
                        width={250}
                        height={250}
                        source={{ uri: 'https://i.imgur.com/YCItdrN.png' }}
                    />
                </View>

                <Text style={[Estilo.textoP16px, Estilo.textoCorSecundaria, style.titulos, Estilo.tituloH523px]}>Login</Text>

                <View style={[style.inputArea]}>
                    <Text style={[Estilo.textoCorLight, Estilo.textoP16px, Estilo.textoCorSecundaria]}>Matrícula:</Text>
                    <TextInput
                        onChangeText={(text) => setMatricula(text)}
                        style={[style.inputText, Estilo.corLight, Estilo.sombra]}
                        placeholder="Informe sua matrícula" />
                </View>
                <View style={[style.inputArea]}>
                    <Text style={[Estilo.textoCorLight, Estilo.textoP16px, Estilo.textoCorSecundaria]}>Senha:</Text>
                    <TextInput
                        onChangeText={(text) => setSenha(text)}
                        secureTextEntry={true}
                        style={[style.inputText, Estilo.corLight, Estilo.sombra]}
                        placeholder="Informe sua senha" />
                </View>


                <View style={[style.inputArea]}>
                    <TouchableOpacity style={[Estilo.corPrimaria, Estilo.sombra, Estilo.botao]} onPress={() => handleLogin()}>
                        <Text style={[Estilo.tituloH619px, Estilo.textoCorLight]}>Entrar</Text>
                    </TouchableOpacity>

                    <Text style={[Estilo.textoP16px, Estilo.textoCorPrimaria, style.titulos, Estilo.textoP16px]} onPress={() => router.push('/Cadastro')}>Não possui conta? Cadastre-se agora!</Text>

                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginVertical: '2%',
    },
    Montserrat: {
        fontFamily: 'Montserrat'
    },
    inputArea: {
        marginLeft: '10%',
        marginVertical: 5
    },
    titulos: {
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 5,
    },
    inputText: {
        width: '90%',
        height: 50,
        marginTop: 10,
        marginBottom: 30,
        borderRadius: 10,
        elevation: 10,
        paddingHorizontal: 20,
    },

})