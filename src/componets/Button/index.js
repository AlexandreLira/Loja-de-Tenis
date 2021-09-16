import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Button() {
 return (
     <View style={styles.container}>
        <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.text}>COMPRAR</Text>
        </TouchableOpacity>
     </View>
  );
}

const styles = StyleSheet.create({

    container:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnContainer:{
        width: '97%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    text:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 17
    }
})
