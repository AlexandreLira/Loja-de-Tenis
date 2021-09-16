import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

export default function Dot({color}) {

 return (
    <TouchableOpacity style={[styles.container,{backgroundColor: color}]}>
        
    </TouchableOpacity>
   
  );
}

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width * 0.08,
        height: Dimensions.get('window').width * 0.08,
        borderRadius: Dimensions.get('window').width * 0.10 / 2,
        marginRight: '5%',
        elevation: 3
    },  
})