import React from "react";

import { StyleSheet,Text, View, Image} from "react-native";

export default function Sobre(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                    Sobre o App
            </Text>
            <View style={styles.card}>
                <Text style={styles.content}>
                    O app AlugueP2 foi construído com o objetivo de facilitar a vida de quem procura alugar um imóvel.
                    Aqui oferecemos uma variadade de lugares incriveis, como casas, apartamentos, hotéis e muito mais.
                    A burocracia aqui é zero.
                </Text>
            </View>
            <Image style={{width: 370, height:300, borderRadius:10}} source={require('../../assets/sobre.jpg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFF',
        alignItems:'center',
    },
    card:{
        backgroundColor:'#e8e8e6',
        padding:10,
        borderRadius: 10,
        margin:15
    },
    title:{
        fontFamily:'Montserrat_700Bold',
        fontSize:18,
        color:'#4f4a4a'
    },
    content:{
        padding:1,
        fontFamily: 'Montserrat_400Regular',
        textAlign:'center',
        fontSize:15
    }
});