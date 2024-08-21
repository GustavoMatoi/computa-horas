import React, { useState } from "react";
import { View, StyleSheet, Alert, Text, Dimensions, TouchableOpacity, ScrollView, Image, TextInput, Touchable } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import Estilo from "@/assets/style"
import AsyncStorage from "@react-native-async-storage/async-storage";
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter } from "expo-router";
export default props => {
    const [matricula, setMatricula] = useState('');
    const [senha, setSenha] = useState('');
    const router = useRouter()


    return (
        <View style={[Estilo.corLight]}>
            <View style={[{ width: '100%', height: Dimensions.get('screen').height }]}>
                <View style={[{ width: '100%', alignItems: 'center' }]}>
                    <Image
                        width={200}
                        height={200}
                        source={{ uri: 'https://i.imgur.com/YCItdrN.png' }}
                    />
                </View>

                <TouchableOpacity style={[Estilo.botao, Estilo.corPrimaria, {width: '95%', marginTop: '5%', justifyContent: 'space-around', flexDirection: 'row'}]} onPress={(() => router.push('/CadastroDeCertificado'))}>
                    <AntDesign name="addfile" size={24} color="white" />
                    <Text style={[Estilo.tituloH523px, Estilo.textoCorLight]}>ADICIONAR CERTIFICADO</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[Estilo.botao, Estilo.corPrimaria, {width: '95%', marginTop: '5%',justifyContent: 'space-around', flexDirection: 'row'}]} onPress={(() => router.push('/Informacoes'))}>
                    <AntDesign name="info" size={24} color="white" />
                    <Text style={[Estilo.tituloH523px, Estilo.textoCorLight]}>INFORMAÇÕES</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
