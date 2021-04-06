
import React, { Component } from 'react';
import { StyleSheet, Text, View,Image, ScrollView, Dimensions,TouchableHighlight,Button } from 'react-native';

const {width} = Dimensions.get('window');
const height = width * 0.6; 
const itemId = 1;



    export default function About  () {
      // const { itemId } = route.params;
      
      // if(status == null){
      //   status =true;
      //   console.log(status);
      // }
  
      // console.log(status)
   
  return (
    <View>
    <ScrollView>
     
    <View style={styles.container} >
      <Text style={styles.textHead}>PERSONAL INFOS</Text>
      <View style={{justifyContent: 'center',alignItems: 'center',marginBottom:20}}>
        <Image style={styles.profileImgContainer}
            source={require('../assets/reg.png')}
          />
      </View>

      <View style={styles.container1 }>
      <Text style={styles.left}>Name:</Text>
      <Text style={styles.right}>Dr. Ch. Satyanarayana</Text>
    </View>
    <View style={styles.container1 }>
      <Text style={styles.left}>Parents:</Text>
      <Text style={styles.right}>Sri Ch. Nagaiah and Smt. Ch. Muthamma</Text>
    </View>
    <View style={styles.container1 }>
      <Text style={styles.left}>Paresent Position:</Text>
      <Text style={styles.right}>Professor   
                              Department of Computer Science and Engineering,
 Jawaharlal Nehru Technological University Kakinada.

                                    </Text>
    </View>
    <View style={styles.container1 }>
      <Text style={styles.left}>Date & Place of Birth
                                    </Text>
      <Text style={styles.right}>10-05-1973, {"\n"}
                      Kambhampadu, A. Kondur (Mandal),  {"\n"}
                      Krishna District, AP, INDIA.

                                    </Text>
    </View>
    <View style={styles.container1 }>
      <Text style={styles.left}>Nationality:</Text>
      <Text style={styles.right}>Indian</Text>
    </View>
    <View style={styles.container1 }>
      <Text style={styles.left}>Religion:</Text>
      <Text style={styles.right}>Hindu</Text>
    </View>
    <View style={styles.container1 }>
      <Text style={styles.left}>Email:</Text>
      <Text style={styles.right}>chsatyanarayana@yahoo.com</Text>
    </View>

      <TouchableHighlight 
           style ={styles.buttonStyle}>
            <Button title="DOWNLAOD CV"
            color="white"
            accessibilityLabel="Learn more about this button"
          /> 
      </TouchableHighlight> 
      <View style={styles.container1 }>
        <View style={styles.boxLeft}>
          <View style={styles.boxStyle}>
            <Text style={styles.boxHead}>20+</Text>
            <Text style={styles.boxParagraph}>YEARS OF{"\n"}TEACHING{"\n"}EXPERIENCE</Text>
          </View>
        </View>
        <View style={styles.boxLeft}>
          <View style={styles.boxStyle}>
            <Text style={styles.boxHead}>10+</Text>
            <Text style={styles.boxParagraph}>YEARS OF{"\n"}ADMINISTRATIVE{"\n"}EXPERIENCE</Text>
          </View>
        </View>
      
    </View>
    <View style={styles.container1 }>
        <View style={styles.boxLeft}>
          <View style={styles.boxStyle}>
            <Text style={styles.boxHead}>25+</Text>
            <Text style={styles.boxParagraph}>SUPERVISED{"\n"}PHD{"\n"}STUDENTS</Text>
          </View>
        </View>
        <View style={styles.boxLeft}>
          <View style={styles.boxStyle}>
            <Text style={styles.boxHead}>125+</Text>
            <Text style={styles.boxParagraph}>RESEARCH{"\n"}PAPERS{"\n"} </Text>
          </View>
        </View>
      
    </View>
        
      </View>
      </ScrollView>
      </View>
  )
      
}

const styles = StyleSheet.create({
  container: {marginTop:20},
  container1: {
    flex: 1,
    padding: 5,
    flexDirection: "row"
  },
  textHead:{fontWeight:'bold',fontSize:20,color:'#666',paddingLeft:20,marginBottom:30},
  image:{width,height,resizeMode:'cover'},
  header:{
      fontSize:32,
      color:"#0c2e8a",
      fontWeight:'bold',
      marginTop:50,
      marginBottom:10,
      textAlign:'center'
  },
  paragraph:{
      fontSize:16,
      lineHeight:25,
      padding:20
      

  },
  profileImgContainer: {
    marginLeft: 8,
    height: 180,
    width: 180,
    borderRadius: 120
  },
  profileImg: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  left:{
    flex:1,
    paddingLeft:10,
    fontWeight:'bold'
  },
  right:{
    flex:1,
  },
  buttonStyle:{padding:10,borderRadius:30,backgroundColor : "#72b626",marginLeft :50,
    marginRight:50,marginTop :50,marginBottom:50},

    boxLeft:{flex:1,padding:15},
    boxStyle:{borderColor:'#666',borderWidth:1,padding:5,justifyContent: 'center',alignItems: 'center'},
    boxHead:{color:'#72b626',fontSize:30,fontWeight:'bold'},
    boxParagraph:{fontSize:16, color:'#666',marginLeft:10,lineHeight:28 }
  
  
});