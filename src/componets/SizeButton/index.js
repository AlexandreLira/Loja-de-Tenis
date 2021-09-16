import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function SizeButton({text, bgColor, color}) {
 return (
   <TouchableOpacity style={[styles.container, {backgroundColor: bgColor || '#FFFFFF'}]}>
       <Text style={{fontSize: 17,color: color || '#000'}}>{text}</Text>
   </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
    container:{
        width: 150,
        height: 50,
        borderWidth: 1,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10

    }
})