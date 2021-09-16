import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import Shoes from '../Shoes';

export default function Footer({shoes}) {
 return (
     <View style={styles.container}>
        <Text style={styles.title}>VOCÊ TAMBEM PODE GOSTAR</Text>
        <FlatList
            horizontal
            data={shoes}
            keyExtractor={item => item.key}
            renderItem={({item}) => <Shoes item={item} shoes={shoes}/>}
            

          />
     </View>
  );
}

const styles = StyleSheet.create({
    title:{
        marginBottom: '-5%',
        marginLeft: '2%',
        fontSize: 24,
        fontFamily: 'Anton_400Regular'
    }

})
