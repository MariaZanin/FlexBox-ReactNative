import React from "react";
import {StyleSheet, View } from "react-native";

const QuadradoPequeno = (props) => {
    const {cor} = props;
    
    return(

        <View style={{...styles.pequeno, width: undefined,
            backgroundColor:`${cor}`
            }}>
        </View>
    )
}

const QuadradoMedio = (props) => {
    const {cor} = props;
    
    return(

        <View style={{...styles.pequeno,
            backgroundColor:`${cor}`
            }}>
        </View>
    )
}

const QuadradoGrande = (props) => {
    const {cor} = props;
    
    return(

        <View style={{...styles.pequeno,
            backgroundColor:`${cor}`
            }}>
        </View>
    )
}

const Quadrado = () => {

    return(
        <View style={styles.container}>
            <QuadradoPequeno cor={'blue'}/>
            <QuadradoPequeno cor={'red'} />
            <QuadradoPequeno cor={'pink'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems:'stretch',
    },
    pequeno:{
        width:50,
        height:100,


    }

})



export default Quadrado;


