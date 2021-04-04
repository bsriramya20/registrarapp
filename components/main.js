
import { Button } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet, Text, View,Image, ScrollView, Dimensions } from 'react-native';
import { Header } from './header';

const {width} = Dimensions.get('window');
const height = width * 1.0; 



export default function Main  () {
     
   
  return (
    <View>
      
    <ScrollView>
     
    <View style={styles.container} >
     
    <Text h1 style={styles.header}> Dr. Ch. Satyanarayana</Text>
      

        <Text h1 style={styles.header1}>Professor of Computer Science and Engineering,
        </Text> 
        <Text h1 style={styles.header1}>
        Jawaharlal Nehru Technological University Kakinada.</Text> 
       <Text p style={styles.paragraph}> Dr. Ch. Satyanarayana is currently working as Professor in the Department of Computer Science and Engineering and Registrar, Jawaharlal Nehru Technological University Kakinada, AP, INDIA. He received his PhD in 2007 from JNTU. He has 20+ years of Teaching, Research experience and 10 years of Administrative Experience in various capacities like Director Academic and Planning, Controller of Examinations and Head of the Department. He is member of various administrative committees governed by AICTE, UGC etc., He has supervised 25 PhD students and 200+ Master’s Students. He has published 125+ research papers in international journals and international conference proceedings. He is a Senior Member of IEEE. His research interests include Image Processing, Speech Recognition, Pattern Recognition, Network Security and Big data analytics and Computational Intelligence.</Text> 
        
      </View>
      </ScrollView>
      </View>
  )
      
}

const styles = StyleSheet.create({
  container: {marginTop:10},
  image:{width,height,resizeMode:'cover'},
  header:{
      fontSize:32,
      color:"#28a745",
      fontWeight:'bold',
      marginTop:50,
      marginBottom:30,
      marginLeft:10
  },
  header1:{
    fontSize:16,
    color:"#666",
    marginTop:0,
    marginBottom:0,
    marginLeft:17,
},
  paragraph:{
      fontSize:16,
      lineHeight:25,
      padding:20
      

  }
  
});