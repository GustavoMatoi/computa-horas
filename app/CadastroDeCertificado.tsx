import React, { useEffect, useState } from "react";
import { ScrollView, View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Dimensions } from "react-native";
import Estilo from "@/assets/style"
import AsyncStorage from "@react-native-async-storage/async-storage";
import BotaoSelect from '@/components/BotaoSelect'
import { useRouter } from "expo-router";
export default props => {
    const [tipo, setTipo] = useState('');
    const [nome, setNome] = useState('');
    const [horas, setHoras] = useState(0);
    const [horasCompt, setHorasCompt] = useState(0);
    const [link, setLink] = useState('');


    
    useEffect(() => {
        const calculaHorasCompt = (tipoCertificado: string) => {
            console.log(tipoCertificado);
            
            if (tipoCertificado === "Curso") {
                setHorasCompt(horas > 10 ? 10 : horas);
            }
            
            if (tipoCertificado === "Publicação Não Primeiro Autor") {
                setHorasCompt(horas > 40 ? 40 : horas);
            }
            if (tipoCertificado === "Publicação Primeiro Autor" || tipoCertificado === "Estágio") {
                setHorasCompt(240);
            }
            
            if (tipoCertificado === "Submissão Primeiro Autor") {
                setHorasCompt(horas > 10 ? 10 : horas);
            }
            
            if (tipoCertificado === "Submissão Não Primeiro Autor") {
                setHorasCompt(horas > 5 ? 5 : horas);
            }
            
            if (tipoCertificado === "Projetos de Extensão") {
                setHorasCompt(horas > 100 ? 100 : horas);
            }
            
            if (["Palestra", "Seminário", "Simpósio", "Conferência", "Congresso"].includes(tipoCertificado)) {
                setHorasCompt(horas > 10 ? 10 : horas);
            }
            
            if (tipoCertificado === "Monitoria") {
                setHorasCompt(horas > 10 ? 10 : horas);
            }
        }
    
        calculaHorasCompt(tipo);
    }, [horas, tipo]);
    const router = useRouter()    
    function validarDados() {
        if (!tipo || !nome || !horas || !link) {
            Alert.alert('Erro', 'Todos os campos são obrigatórios!');
            return false;
        }
        return true;
    }
    async function save() {
        if (validarDados()) {
            const certificadoObj = {
                tipo: tipo,
                nome: nome,
                horas: horas,
                horasCompt: horasCompt,
                link: link
            }
            try {
                await AsyncStorage.setItem(`${tipo} ${nome}`, JSON.stringify(certificadoObj))
                Alert.alert('Sucesso', 'Certificado salvo com sucesso!');
                router.push('(tabs)')
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
                <Text style={[Estilo.textoCorLight, Estilo.textoP16px, Estilo.textoCorSecundaria]}>Tipo de certificado:</Text>
                <BotaoSelect max={1} selecionado={true} titulo={"Selecione a modalidade"} onChange={(item: string) => setTipo(item)} options={['Curso', 'Publicação Não Primeiro Autor', 'Estágio', 'Publicação Primeiro Autor', 'Palestra', 'Submissão Primeiro Autor', 'Seminário', 'Simpósio', 'Conferência', 'Congressos', 'Monitoria', 'Projetos de Extensão']}></BotaoSelect>
            </View>
            <View style={[style.inputArea]}>
                <Text style={[Estilo.textoCorLight, Estilo.textoP16px, Estilo.textoCorSecundaria]}>Nome do certificado:</Text>
                <TextInput
                    onChangeText={(text) => setNome(text)}

                    style={[style.inputText, Estilo.corLight, Estilo.sombra]}
                    placeholder="Ex: curso BD udemy" />
            </View>

            <View style={[style.inputArea]}>
                <Text style={[Estilo.textoCorLight, Estilo.textoP16px, Estilo.textoCorSecundaria]}>Horas do certificado:</Text>
                <TextInput
                    onChangeText={(text) => {setHoras(Number(text));}}
                    keyboardType="numeric"
                    style={[style.inputText, Estilo.corLight, Estilo.sombra]}
                    placeholder="Horas do certificado" />
            </View>
            <View style={[style.inputArea]}>
                <Text style={[Estilo.textoCorLight, Estilo.textoP16px, Estilo.textoCorSecundaria]}>Horas computabilizadas:</Text>
                <Text style={[Estilo.textoCorLight, Estilo.textoP16px, Estilo.textoCorSecundaria]}>{horasCompt}</Text>

            </View>
            <View style={[style.inputArea]}>
                <Text style={[Estilo.textoCorLight, Estilo.textoP16px, Estilo.textoCorSecundaria]}>Link do certificado:</Text>
                <TextInput
                    onChangeText={(text) => setLink(text)}

                    style={[style.inputText, Estilo.corLight, Estilo.sombra]}
                    placeholder="Link do Drive" />
            </View>



            <View style={[style.inputArea]}>
                <TouchableOpacity style={[Estilo.corPrimaria, Estilo.sombra, Estilo.botao, { marginBottom: '10%' }]} onPress={() => save()}>
                    <Text style={[Estilo.tituloH619px, Estilo.textoCorLight]}>Cadastrar</Text>
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