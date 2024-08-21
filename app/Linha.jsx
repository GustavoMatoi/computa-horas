import React from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Estilo from '@/assets/style'
import AntDesign from '@expo/vector-icons/AntDesign';

export default ({ nome, tipo, horasTotais, horasComputados, link }) => {

    return (
        <View  style={[{ marginTop: 5, flexDirection: 'row', height: 50 }]}>
            <View style={[{ justifyContent: 'center', width: '30%' }, Estilo.corPrimaria]}>
                <Text style={[Estilo.textoCorLight]}>
                    {nome || ''}
                </Text>
            </View>

            <View style={[{ justifyContent: 'center', width: '20%' }, Estilo.corPrimaria]}>
                <Text style={[Estilo.textoCorLight]}>
                    | {tipo || ''}

                </Text>
            </View>

            <View style={[{ justifyContent: 'center', width: '10%' }, Estilo.corPrimaria]}>
                <Text style={[Estilo.textoCorLight]}>
                    | {horasTotais || ''}

                </Text>
            </View>

            <View style={[{ justifyContent: 'center', width: '10%' }, Estilo.corPrimaria]}>
                <Text style={[Estilo.textoCorLight]}>
                    | {horasComputados || ''}

                </Text>
            </View>

            <View style={[{ justifyContent: 'center', width: '30%' }, Estilo.corPrimaria]}>
                <Text style={[Estilo.textoCorLight]}>
                    | {link || ''}
                </Text>
            </View>

        </View>
    )
}