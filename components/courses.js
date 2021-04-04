
import React from 'react';
import { View, Text, Image,StyleSheet,Dimensions } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');
const imageMargin = (width-50) *0.4 ;


export default class Courses extends React.Component {
  
  render(){
  return (
    <ScrollView>
    <View style={styles.container} >

    <Text h1 style={styles.header}>Courses</Text> 

     <Card >
        <Card.Image source={require('../assets/book.png')} style={styles.image}/>
        <Text style={styles.header3}>NEET</Text>
        <Text style={{marginBottom: 10}}>
                 Excepteur sint occaecat cupidatat non proident, 
                 sunt in culpa qui officia deserunt mollit anim id est 
                 laborum rideta zanox satirente madera.
        </Text>
     </Card>
     <Card >
        <Card.Image source={require('../assets/book.png')} style={styles.image}/>
        <Text style={styles.header3}>AIIMS</Text>
        <Text style={{marginBottom: 10}}>
                 Excepteur sint occaecat cupidatat non proident, 
                 sunt in culpa qui officia deserunt mollit anim id est 
                 laborum rideta zanox satirente madera.
        </Text>
     </Card>
     <Card >
        <Card.Image source={require('../assets/book.png')} style={styles.image}/>
        <Text style={styles.header3}>JIPMER</Text>
        <Text style={{marginBottom: 10}}>
                 Excepteur sint occaecat cupidatat non proident, 
                 sunt in culpa qui officia deserunt mollit anim id est 
                 laborum rideta zanox satirente madera.
        </Text>
     </Card>
     <Card >
        <Card.Image source={require('../assets/book.png')} style={styles.image}/>
        <Text style={styles.header3}>INTER</Text>
        <Text style={{marginBottom: 10}}>
                 Excepteur sint occaecat cupidatat non proident, 
                 sunt in culpa qui officia deserunt mollit anim id est 
                 laborum rideta zanox satirente madera.
        </Text>
     </Card>
  </View>
  </ScrollView>
  )
      }
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    justifyContent: 'center'},
  image:{width:50,height:50, marginLeft:imageMargin},
  header:{
      fontSize:32,
      color:"#0c2e8a",
      fontWeight:'bold',
      marginBottom:10,
      textAlign:'center'
  },
  header3:{
    fontSize:24,
    color:"grey",
    fontWeight:'bold',
    marginTop:8,
    marginBottom:8,
    textAlign:'center'
},
  paragraph:{
      fontSize:14

  }
});