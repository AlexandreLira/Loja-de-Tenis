import React from 'react';
import { 
    Text, 
    View,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';

import { useNavigation } from '@react-navigation/native'


export default function Shoes({item, shoes}) {
    
    function filterDesc(desc){
        if (desc.length < 20) {
            return desc
        }
        return `${desc.substring(0 , 21) }...`
    }

    const navigation = useNavigation()

 return (
    <TouchableOpacity 
        style={styles.container} 
        onPress={() => navigation.navigate('Detalhes', {item: item, filterDesc, shoes: shoes})}
    >
       <Image 
            style={styles.shoesImage}
            source={item.photo}
       />
       <Text>{filterDesc(item.name)}</Text>
       <Text 
            style={{opacity: 0.4}}
        >
           R${item.price.toFixed(2)}
        </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    
    },
    shoesImage:{
        width: 175,
        height: 175,
        marginHorizontal: 10,
        marginBottom: 5
    }
})