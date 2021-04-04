
import React from 'react';
import { View, Text, Image,StyleSheet,Dimensions } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');
const imageMargin = (width-350) *0.4 ;


const images= [
      'https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg'
    ];

export default class Directors extends React.Component {
  
  render(){
  return (
    <ScrollView>
    <View style={styles.container} >

<Text h1 style={styles.header}>Directors</Text> 

     <Card >
        <Card.Image source={require('../assets/team-2.jpg')} style={styles.image}/>
        <View style={styles.cardView}>
        <Text style={styles.header3}>Mr. Ramireddy</Text>
        <Text style={styles.header3}>physics</Text>
        <Text style={styles.header3}>25 Years Exp</Text>
        </View>
        
     </Card>
     <Card >
        <Card.Image source={require('../assets/team-4.jpg')} style={styles.image}/>
        <View style={styles.cardView}>
        <Text style={styles.header3}>Mr. Thammayya Naidu</Text>
        <Text style={styles.header3}>Chemistry</Text>
        <Text style={styles.header3}>25 Years Exp</Text>
        </View>
        
     </Card>
     <Card >
        <Card.Image source={require('../assets/team-3.jpg')} style={styles.image}/>
        <View style={styles.cardView}>
        <Text style={styles.header3}>Mr. Razak</Text>
        <Text style={styles.header3}>Botany</Text>
        <Text style={styles.header3}>29 Years Exp</Text>
        </View>
        
     </Card>
     <Card >
        <Card.Image source={require('../assets/team-1.jpg')} style={styles.image}/>
        <View style={styles.cardView}>
        <Text style={styles.header3}>Mr. Raju</Text>
        <Text style={styles.header3}>Zoology</Text>
        <Text style={styles.header3}>28 Years Exp</Text>
        </View>
        
     </Card>
    
  </View>
  </ScrollView>
  )
      }
}

const styles = StyleSheet.create({
  container: {marginTop:50,
    
    justifyContent: 'center'},
  image:{width:300,height:300,marginLeft:imageMargin},
  header:{
      fontSize:32,
      color:"#0c2e8a",
      fontWeight:'bold',
      marginBottom:10,
      textAlign:'center'
  },
  header3:{
    fontSize:20,
    color:"white",
    fontWeight:'bold',
    marginTop:8,
    textAlign:'center'
},
  paragraph:{
      fontSize:14

  },
  cardView:{
      textAlign:'center',
      backgroundColor:'#50d8af',
      padding:10
  }
  
});