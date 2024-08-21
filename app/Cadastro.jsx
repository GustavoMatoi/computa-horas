import React, { useState } from "react";
import { ScrollView, View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import Estilo from "@/assets/style"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default props => {
    const [matricula, setMatricula] = useState('');
    const [nome, setNome] = useState('');
    const [cpf, setCPF] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const router = useRouter()

    function validarDados() {
        if (!matricula || !nome || !cpf || !email || !senha) {
            Alert.alert('Erro', 'Todos os campos são obrigatórios!');
            return false;
        }
        if (cpf.length !== 11 || !/^\d+$/.test(cpf)) {
            Alert.alert('Erro', 'CPF inválido! Deve conter 11 dígitos numéricos.');
            return false;
        }
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            Alert.alert('Erro', 'Email inválido!');
            return false;
        }

        if (senha.length < 6) {
            Alert.alert('Erro', 'A senha deve ter no mínimo 6 caracteres.');
            return false;
        }
        return true;
    }
    function save() {
        if (validarDados()) {
            try {
                AsyncStorage.setItem('matricula', matricula);
                AsyncStorage.setItem('nome', nome);
                AsyncStorage.setItem('cpf', cpf);
                AsyncStorage.setItem('email', email);
                AsyncStorage.setItem('senha', senha)
                Alert.alert('Sucesso', 'Dados salvos com sucesso!');
                router.push('/Login')
            } catch (error) {
                Alert.alert('Erro', 'Falha ao salvar os dados.');
            }
        }
    }

    return (
        <ScrollView style={[Estilo.corLight]}>
            <View style={[{ width: '100%', alignItems: 'center' }]}>
                <Image
                    width={150}
                    height={150}
                    source={{ uri: 'https://i.imgur.com/YCItdrN.png' }}
                />
            </View>

            <Text style={[Estilo.textoP16px, Estilo.textoCorSecundaria, style.titulos, Estilo.tituloH523px]}>Preencha os campos abaixo:</Text>

            <View style={[style.inputArea]}>
                <Text style={[Estilo.textoCorLight, Estilo.textoP16px, Estilo.textoCorSecundaria]}>Matrícula:</Text>
                <TextInput
                    onChangeText={(text) => setMatricula(text)}
                    style={[style.inputText, Estilo.corLight, Estilo.sombra]}
                    placeholder="2020001212" />
            </View>
            <View style={[style.inputArea]}>
                <Text style={[Estilo.textoCorLight, Estilo.textoP16px, Estilo.textoCorSecundaria]}>Nome completo:</Text>
                <TextInput 
                                    onChangeText={(text) => setNome(text)}

                style={[style.inputText, Estilo.corLight, Estilo.sombra]} 
                placeholder="Jane Doe" />
            </View>
            <View style={[style.inputArea]}>
                <Text style={[Estilo.textoCorLight, Estilo.textoP16px, Estilo.textoCorSecundaria]}>CPF:</Text>
                <TextInput 
                                                    onChangeText={(text) => setCPF(text)}

                style={[style.inputText, Estilo.corLight, Estilo.sombra]}
                 placeholder="000.000.000-00" />
            </View>
            <View style={[style.inputArea]}>
                <Text style={[Estilo.textoCorLight, Estilo.textoP16px, Estilo.textoCorSecundaria]}>Email:</Text>
                <TextInput 
                                                                    onChangeText={(text) => setEmail(text)}

                style={[style.inputText, Estilo.corLight, Estilo.sombra]}
                 placeholder="email@exemplo.com" />
            </View>
            <View style={[style.inputArea]}>
                <Text style={[Estilo.textoCorLight, Estilo.textoP16px, Estilo.textoCorSecundaria]}>Senha:</Text>
                <TextInput style={[style.inputText, Estilo.corLight, Estilo.sombra]}
                    secureTextEntry={true}
                    onChangeText={(text) => setSenha(text)}

                    placeholder="Informe sua senha" />
            </View>

            <View style={[style.inputArea]}>
                <TouchableOpacity style={[Estilo.corPrimaria, style.botao, Estilo.sombra, Estilo.botao]} onPress={() => save()}>
                    <Text style={[Estilo.tituloH619px, Estilo.textoCorLight]}>Finalizar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
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