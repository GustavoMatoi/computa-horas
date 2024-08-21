import React from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'

export default props => {

    return (
        <ScrollView style={styles.container}>
            <View style={[{ width: '100%', alignItems: 'center' }]}>
                <Image
                    width={250}
                    height={250}
                    source={{ uri: 'https://i.imgur.com/YCItdrN.png' }}
                />
            </View>
            <Text style={styles.textoP16px}>
                As atividades complementares são práticas acadêmicas, obrigatórias para os alunos do curso de Ciência da Computação do Instituto Federal de Ciência e Tecnologia do Sudeste de Minas – Campus Rio Pomba. Essas atividades são apresentadas sob múltiplos formatos com o objetivo de:
            </Text>
            <Text style={styles.textoP16px}>
                1. Ampliar os horizontes do conhecimento, bem como de fornecer práticas e experiências extra sala de aula.
            </Text>
            <Text style={styles.textoP16px}>
                2. Complementar o currículo do curso.
            </Text>
            <Text style={styles.textoP16px}>
                3. Induzir o estudante a participar de eventos técnicos/científicos que possam contribuir para a sua formação profissional.
            </Text>
            <Text style={styles.textoP16px}>
                O aluno deverá comprovar um mínimo de 240 horas em atividades, devendo cumprir o Estágio e/ou a Produção Intelectual e/ou um mínimo de horas em outras atividades, conforme as informações abaixo. A comprovação das atividades realizadas será feita através de declarações, certificados ou diplomas apresentados pelo aluno.
            </Text>
            <Text style={styles.textoP16px}>
                Fica estabelecida a seguinte distribuição de horas por atividades que devem ser cumpridas para a conclusão do Programa de Estágio e Atividades Complementares:
            </Text>
            <Text style={styles.textoP16px}>
                Estágio
            </Text>
            <Text style={styles.textoP16px}>
                Atividades de estágio relacionadas ao curso podem ser adicionadas até o limite máximo de 240 horas.
            </Text>
            <Text style={styles.textoP16px}>
                Horas Máximas: 240 horas
            </Text>
            <Text style={styles.textoP16px}>
                Horas por Estágio: Contabilização total de 240 horas
            </Text>
            <Text style={styles.textoP16px}>
                Cursos
            </Text>
            <Text style={styles.textoP16px}>
                Cursos complementares ao currículo podem ser adicionados, respeitando o limite de horas permitido por curso.
            </Text>
            <Text style={styles.textoP16px}>
                Horas Máximas: 150 horas
            </Text>
            <Text style={styles.textoP16px}>
                Horas por Curso: Máximo de 10 horas por curso
            </Text>
            <Text style={styles.textoP16px}>
                Publicação de Artigos
            </Text>
            <Text style={styles.textoP16px}>
                Publicações em agentes de comunicação reconhecidos com qualis no mínimo C são contabilizadas. A quantidade máxima de horas é definida pelo número de submissões.
            </Text>
            <Text style={styles.textoP16px}>
                Primeiro Autor:
            </Text>
            <Text style={styles.textoP16px}>
                Horas Máximas: 240 horas
            </Text>
            <Text style={styles.textoP16px}>
                Não Primeiro Autor:
            </Text>
            <Text style={styles.textoP16px}>
                Horas Máximas: 240 horas
            </Text>
            <Text style={styles.textoP16px}>
                Horas por Submissão: 40 horas
            </Text>
            <Text style={styles.textoP16px}>
                Submissão de Artigos
            </Text>
            <Text style={styles.textoP16px}>
                Submissões de artigos em conferências e periódicos reconhecidos. O máximo de horas é limitado pela quantidade de submissões.
            </Text>
            <Text style={styles.textoP16px}>
                Primeiro Autor:
            </Text>
            <Text style={styles.textoP16px}>
                Horas Máximas: 50 horas
            </Text>
            <Text style={styles.textoP16px}>
                Horas por Submissão: 10 horas
            </Text>
            <Text style={styles.textoP16px}>
                Não Primeiro Autor:
            </Text>
            <Text style={styles.textoP16px}>
                Horas Máximas: 50 horas
            </Text>
            <Text style={styles.textoP16px}>
                Horas por Submissão: 5 horas
            </Text>
            <Text style={styles.textoP16px}>
                Palestras, Seminários, Simpósios, Conferências e Congressos
            </Text>
            <Text style={styles.textoP16px}>
                Participações em eventos acadêmicos e científicos são contabilizadas com um limite de horas por evento.
            </Text>
            <Text style={styles.textoP16px}>
                Horas Máximas: 150 horas
            </Text>
            <Text style={styles.textoP16px}>
                Horas por Evento: Máximo de 10 horas por evento
            </Text>
            <Text style={styles.textoP16px}>
                Monitoria
            </Text>
            <Text style={styles.textoP16px}>
                Atividades de monitoria, que incluem auxílio a professores e apoio a outros alunos, são somadas com base no número de monitorias realizadas
            </Text>
            <Text style={styles.textoP16px}>
                Horas Máximas: 100 horas
            </Text>
            <Text style={styles.textoP16px}>
                Horas por Monitoria: 10 horas
            </Text>
            <Text style={styles.textoP16px}>
                Pesquisa e Extensão
            </Text>
            <Text style={styles.textoP16px}>
                Projetos de pesquisa e extensão são contabilizados conforme o certificado fornecido.
            </Text>
            <Text style={styles.textoP16px}>
                Horas Máximas: 100 horas
            </Text>
            <Text style={styles.textoP16px}>
                Horas por Certificado: De acordo com o certificado.
            </Text>
            <Text style={styles.textoP16px}>
                Trabalho Voluntário na Instituição
            </Text>
            <Text style={styles.textoP16px}>
                Trabalhos voluntários realizados na instituição são contabilizados conforme o certificado fornecido.
            </Text>
            <Text style={styles.textoP16px}>
                Horas Máximas: 100 horas
            </Text>
            <Text style={styles.textoP16px}>
                Horas por Certificado: De acordo com o certificado
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    textoP16px: {
        fontSize: 16,
        marginBottom: 8,
    },
});



