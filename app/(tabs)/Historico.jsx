import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Linha from "../Linha";
import Estilo from "@/assets/style"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
export default props => {
    const router = useRouter();
    const [monitorias, setMonitorias] = useState([]);
    const [publicacaoPrimeiroAutor, setPublicacaoPrimeiroAutor] = useState([]);
    const [publicacaoNaoPrimeiroAutor, setPublicacaoNaoPrimeiroAutor] = useState([]);
    const [estagio, setEstagio] = useState([]);
    const [extensao, setExtensao] = useState([]);
    const [palestra, setPalestra] = useState([]);
    const [simposio, setSimposio] = useState([]);
    const [conferencia, setConferencia] = useState([]);
    const [congresso, setCongresso] = useState([]);
    const [seminario, setSeminario] = useState([]);
    const [certificados, setCertificados] = useState([]);

    useEffect(() => {
        const recuperarCertificados = async () => {
            const chaves = await AsyncStorage.getAllKeys();
            for (let chave of chaves) {
                const valor = await AsyncStorage.getItem(chave);
                if (valor) {
                    try {
                        const certificado = JSON.parse(valor);
                        switch (certificado.tipo) {
                            case 'Monitoria':
                                setMonitorias(prev => [...prev, certificado]);
                                break;
                            case 'Publicação Primeiro Autor':
                                setPublicacaoPrimeiroAutor(prev => [...prev, certificado]);
                                break;
                            case 'Publicação Não Primeiro Autor':
                                setPublicacaoNaoPrimeiroAutor(prev => [...prev, certificado]);
                                break;
                            case 'Estágio':
                                setEstagio(prev => [...prev, certificado]);
                                break;
                            case 'Projetos de Extensão':
                                setExtensao(prev => [...prev, certificado]);
                                break;
                            case 'Palestra':
                                setPalestra(prev => [...prev, certificado]);
                                break;
                            case 'Simpósio':
                                setSimposio(prev => [...prev, certificado]);
                                break;
                            case 'Conferência':
                                setConferencia(prev => [...prev, certificado]);
                                break;
                            case 'Congresso':
                                setCongresso(prev => [...prev, certificado]);
                                break;
                            case 'Seminário':
                                setSeminario(prev => [...prev, certificado]);
                                break;
                            case 'Curso':
                                setCertificados(prev => [...prev, certificado]);
                                break;
                            default:
                                console.warn(`Categoria desconhecida: ${certificado.tipo}`);
                                break;
                        }
                    } catch (error) {
                        console.error('Erro ao analisar JSON:', error);
                    }
                }
            }
        };
        recuperarCertificados();
    }, []);

    const calcularHorasCompt = (array, limiteMax) => {
        const totalHoras = array.reduce((acc, item) => acc + item.horasCompt, 0);
        return Math.min(totalHoras, limiteMax);
    };

    const totalMonitorias = calcularHorasCompt(monitorias, 100);



    const totalHorasComputadas = (
        calcularHorasCompt(monitorias, 100) +
        calcularHorasCompt(publicacaoPrimeiroAutor, 240) +
        calcularHorasCompt(publicacaoNaoPrimeiroAutor, 50) +
        calcularHorasCompt(extensao, 150) +
        calcularHorasCompt(palestra, 150) +
        calcularHorasCompt(simposio, 150) +
        calcularHorasCompt(conferencia, 150) +
        calcularHorasCompt(congresso, 150) +
        calcularHorasCompt(seminario, 150) +
        calcularHorasCompt(certificados, 150) +
        calcularHorasCompt(estagio, 240)
    );
    return (
        <View>
            <View style={[{ width: '100%', alignItems: 'center' }]}>
                <Image
                    width={150}
                    height={150}
                    source={{ uri: 'https://i.imgur.com/YCItdrN.png' }}
                />
            </View>

            <View style={{ width: '100%', flexDirection: 'row' }}>
                <Text style={[{ width: '30%' }, Estilo.textoSmall12px, Estilo.textoCorSecundaria]}>Nome</Text>
                <Text style={[{ width: '20%' }, Estilo.textoSmall12px, Estilo.textoCorSecundaria]}>Tipo</Text>
                <Text style={[{ width: '10%' }, Estilo.textoSmall12px, Estilo.textoCorSecundaria]}>Horas</Text>
                <Text style={[{ width: '10%' }, Estilo.textoSmall12px, Estilo.textoCorSecundaria]}>Horas Comp.</Text>
                <Text style={[{ width: '30%' }, Estilo.textoSmall12px, Estilo.textoCorSecundaria]}>Link</Text>
            </View>

            <ScrollView>
                {monitorias.length > 0 && (
                    <>
                        <Text>Monitorias:</Text>
                        {monitorias.map((item, index) => (
                            <Linha
                                key={index}
                                nome={item.nome}
                                tipo={item.tipo}
                                horasComputados={item.horasCompt}
                                horasTotais={item.horas}
                                link={item.link}
                            />
                        ))}
                        <Text>Total de Horas Computadas: {totalMonitorias} / 100</Text>
                    </>
                )}

{publicacaoPrimeiroAutor.length > 0 && (
            <>
                <Text>Publicação Primeiro Autor:</Text>
                {publicacaoPrimeiroAutor.map((item, index) => (
                    <Linha
                        key={index}
                        nome={item.nome}
                        tipo={item.tipo}
                        horasComputados={item.horasCompt}
                        horasTotais={item.horas}
                        link={item.link}
                    />
                ))}
                <Text>Total de Horas Computadas: {calcularHorasCompt(publicacaoPrimeiroAutor, 240)} / 240</Text>
            </>
        )}

        {publicacaoNaoPrimeiroAutor.length > 0 && (
            <>
                <Text>Publicação Não Primeiro Autor:</Text>
                {publicacaoNaoPrimeiroAutor.map((item, index) => (
                    <Linha
                        key={index}
                        nome={item.nome}
                        tipo={item.tipo}
                        horasComputados={item.horasCompt}
                        horasTotais={item.horas}
                        link={item.link}
                    />
                ))}
                <Text>Total de Horas Computadas: {calcularHorasCompt(publicacaoNaoPrimeiroAutor, 50)} / 50</Text>
            </>
        )}

        {extensao.length > 0 && (
            <>
                <Text>Extensão:</Text>
                {extensao.map((item, index) => (
                    <Linha
                        key={index}
                        nome={item.nome}
                        tipo={item.tipo}
                        horasComputados={item.horasCompt}
                        horasTotais={item.horas}
                        link={item.link}
                    />
                ))}
                <Text>Total de Horas Computadas: {calcularHorasCompt(extensao, 150)} / 150</Text>
            </>
        )}

        {palestra.length > 0 && (
            <>
                <Text>Palestra:</Text>
                {palestra.map((item, index) => (
                    <Linha
                        key={index}
                        nome={item.nome}
                        tipo={item.tipo}
                        horasComputados={item.horasCompt}
                        horasTotais={item.horas}
                        link={item.link}
                    />
                ))}
                <Text>Total de Horas Computadas: {calcularHorasCompt(palestra, 150)} / 150</Text>
            </>
        )}

        {simposio.length > 0 && (
            <>
                <Text>Simpósio:</Text>
                {simposio.map((item, index) => (
                    <Linha
                        key={index}
                        nome={item.nome}
                        tipo={item.tipo}
                        horasComputados={item.horasCompt}
                        horasTotais={item.horas}
                        link={item.link}
                    />
                ))}
                <Text>Total de Horas Computadas: {calcularHorasCompt(simposio, 150)} / 150</Text>
            </>
        )}

        {conferencia.length > 0 && (
            <>
                <Text>Conferência:</Text>
                {conferencia.map((item, index) => (
                    <Linha
                        key={index}
                        nome={item.nome}
                        tipo={item.tipo}
                        horasComputados={item.horasCompt}
                        horasTotais={item.horas}
                        link={item.link}
                    />
                ))}
                <Text>Total de Horas Computadas: {calcularHorasCompt(conferencia, 150)} / 150</Text>
            </>
        )}

        {congresso.length > 0 && (
            <>
                <Text>Congresso:</Text>
                {congresso.map((item, index) => (
                    <Linha
                        key={index}
                        nome={item.nome}
                        tipo={item.tipo}
                        horasComputados={item.horasCompt}
                        horasTotais={item.horas}
                        link={item.link}
                    />
                ))}
                <Text>Total de Horas Computadas: {calcularHorasCompt(congresso, 150)} / 150</Text>
            </>
        )}

        {seminario.length > 0 && (
            <>
                <Text>Seminário:</Text>
                {seminario.map((item, index) => (
                    <Linha
                        key={index}
                        nome={item.nome}
                        tipo={item.tipo}
                        horasComputados={item.horasCompt}
                        horasTotais={item.horas}
                        link={item.link}
                    />
                ))}
                <Text>Total de Horas Computadas: {calcularHorasCompt(seminario, 150)} / 150</Text>
            </>
        )}
        {estagio.length > 0 && (
            <>
                <Text>Estágio:</Text>
                {estagio.map((item, index) => (
                    <Linha
                        key={index}
                        nome={item.nome}
                        tipo={item.tipo}
                        horasComputados={item.horasCompt}
                        horasTotais={item.horas}
                        link={item.link}
                    />
                ))}
                <Text>Total de Horas Computadas: {calcularHorasCompt(estagio, 240)} / 240</Text>
            </>
        )}

        {certificados.length > 0 && (
            <>
                <Text>Curso:</Text>
                {certificados.map((item, index) => (
                    <Linha
                        key={index}
                        nome={item.nome}
                        tipo={item.tipo}
                        horasComputados={item.horasCompt}
                        horasTotais={item.horas}
                        link={item.link}
                    />
                ))}
                <Text>Total de Horas Computadas: {calcularHorasCompt(certificados, 150)} / 150</Text>
            </>
        )}
                <View style={{ paddingVertical: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                Total Geral de Horas Computadas: {totalHorasComputadas}
            </Text>
        </View>
            </ScrollView>
        </View>
    )
}