import React, { useEffect, useRef } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView, 
  TouchableOpacity, 
  Dimensions,
  Touchable,
} from 'react-native';


import Dot from '../../componets/Dot'
import SizeButton from '../../componets/SizeButton';
import Button from '../../componets/Button';
import Footer from '../../componets/Footer';

export default function Detail({ route, navigation }) {

  
  
  const { item, filterDesc, shoes } = route.params
  
  navigation.setOptions({
    headerTitle: filterDesc(item.name)
  })

  const scrollRef = useRef(); 
  
  function toTop(){
    scrollRef.current?.scrollTo({
        x: 0,
        animated: true,
    });
  }

  const windowWidth = Dimensions.get('window').width

  return (
      <ScrollView style={styles.container} ref={scrollRef}>
        <Image 
          source={item.photo}
          style={[styles.image, {width: windowWidth, height: windowWidth}]}
        />

        <View style={{marginHorizontal: '1%'}}>

          <Text style={[styles.text, {fontSize: 24}]}>R$ {item.price}</Text>
          <Text style={[styles.text, {fontSize: 30, opacity: 0.4}]}>{item.name}</Text>
          <View style={styles.dotContainer}>
            <Dot color="#000000"/>
            <Dot color="#2379f4"/>
            <Dot color="#FB6E33"/>
            <Dot color="#FFFFFF"/>
          </View>

          <View style={{flexDirection: 'row', width: '100%'}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <SizeButton bgColor="#000000" color="#FFFFFF" text={40}/>
              <SizeButton text={39}/>
              <SizeButton text={37}/>
              <SizeButton text={29}/>
            </ScrollView>
          </View>
        
          <View style={styles.DetailContainer}>
            <Text style={styles.textDetailTitle}>Conheça o {item.name}</Text>
            <Text style={styles.textDetail}>O Nike Cosmic Unity transforma resíduos em frescor, proporcionando o impulso de que você precisa para dar seu nome nos jogos. Criamos uma silhueta elegante e confortável com sustentabilidade em mente. Ele é fabricado com pelo menos 20% de material reciclado e equipado com uma unidade Air Zoom parcialmente reciclada, desenvolvida para promover a eficiência em dribles e defesas. Materiais que iam para o lixo são transformados em uma ferramenta para jogadores de basquete, otimizando seu jogo e a vida do planeta.</Text>
            <Text style={styles.textDetail}>- Categoria: Basquete</Text>
            <Text style={styles.textDetail}>- Material: Mesh</Text>
          </View>
        


       
          <Button/>
        

          <View style={styles.line}/>
          
          <Footer shoes={shoes}/>
          
        </View>
      </ScrollView>
    );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF'
      
    },
    image:{
      resizeMode: 'cover', 
      marginTop: -50
    },
    text:{
      fontFamily: 'Anton_400Regular',
    },
    dotContainer:{
      flexDirection: 'row', 
      marginVertical: '7%'
    },
    DetailContainer:{
      marginVertical: '7%'
    },
    textDetailTitle:{
      fontSize: 22,
      lineHeight: 25,
      fontWeight: 'bold',
      marginBottom: '2%'
      
    },
    textDetail:{
      fontSize: 16,
      lineHeight: 25,
      paddingHorizontal: '3%',
      
    },
    line:{
      
      borderWidth: 0.5,
      borderColor: '#000',
      marginVertical: '7%'
    }
  });
  