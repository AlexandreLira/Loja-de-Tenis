import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons'

import Shoes from '../../componets/Shoes'

export default function Home() {

    const navigation = useNavigation()

    const shoes = [
      {
        key: '0',
        name: 'Jordan Jumpman 2021',
        photo: {uri: 'https://images.lojanike.com.br/500x500/produto/tenis-jordan-jumpman-2021-masculino-CQ4021-102-1.jpg'},
        price: 649.99
      },
      {
        key: '1',
        name: 'Nike Kyrie 6',
        photo: {uri: 'https://images.lojanike.com.br/500x500/produto/219443_2241817_20200624160854.jpg'},
        price: 449.99
      },
      {
        key: '2',
        name: 'Nike SB Nyjah Free 2',
        photo: {uri: 'https://images.lojanike.com.br/500x500/produto/289568_2676895_20201119155647.jpg'},
        price: 549.99
      },
      {
        key: '3',
        name: 'Nike SB Chron Solarsoft Premium',
        photo: {uri: 'https://images.lojanike.com.br/500x500/produto/249814_2256341_20200702155910.jpg'},
        price: 379.99
      },
      {
        key: '4' ,
        name: 'Nike PG 5',
        photo: {uri: 'https://images.lojanike.com.br/500x500/produto/tenis-nike-pg-5-unissex-CW3143-100-1.jpg'},
        price: 649.99
      },
      {
        key: '5',
        name: 'Jordan "Why Not?" Zer0.4',
        photo: {uri: 'https://images.lojanike.com.br/500x500/produto/tenis-jordan-why-not-zer04-masculino-DD4887-007-1.jpg'},
        price: 749.99
      },
      {
        key: '6',
        name: 'Nike Shox R4',
        photo: {uri: 'https://images.lojanike.com.br/1024x1024/produto/258801_2229363_20200616135645.jpg'},
        price: 729.99
      },
      {
        key: '7',
        name: 'Air Jordan 4 Retro',
        photo: {uri: 'https://images.lojanike.com.br/1024x1024/produto/218237_2080952_20200423150425.jpg'},
        price: 449.99
      },
      
    ]

    const numColumns = 2

    function _renderItem({item, index}){
      return (
        <View style={{backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center', height: 100, flex: 1}}>
          <Text>{item.key}</Text>
        </View>
      )
    }

    return (
        <View style={styles.container}>

          <View style={styles.header}>
            <Image 
              style={styles.HeaderImage}
              source={require('../../assets/banner.png')}
            />

            <View style={styles.HeaderTextContainer}>

              <Text style={styles.HeaderText}>TÊNIS</Text>
              <Text style={[styles.HeaderText, {color: '#cecece'}]}>•</Text>
              <Text style={[styles.HeaderText, {color: '#cecece'}]}>MASCULINO</Text>
              <TouchableOpacity style={styles.HeaderFilterBottom}>
                <MaterialIcons name='filter-list' size={24}/>
              </TouchableOpacity>

            </View>
          </View>

          <ScrollView >
            <Text style={[styles.HeaderText, {marginHorizontal: '3%'}]}>LANÇAMENTOS</Text>
            <FlatList
            
              data={shoes}
              keyExtractor={item => item.key}
              renderItem={({item}) => <Shoes item={item} shoes={shoes}/>}
              numColumns={numColumns}

            />
          </ScrollView>

        </View>
      );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#fff',
      
    },
    header:{
      
      borderBottomColor: '#cecece',
      borderBottomWidth: 1 
    },
    HeaderImage:{
      width: '100%'
    },
    HeaderTextContainer:{
      flexDirection: 'row',
      marginVertical: '5%',
      marginHorizontal: '2%'
    },
    HeaderText:{
      fontFamily: 'Anton_400Regular',
      fontSize: 26,
      marginHorizontal: '1%',
      color: '#000'
    },
    HeaderFilterBottom:{
      position: 'absolute',
      right: 0,
      alignSelf: 'center'
    }
  });
  