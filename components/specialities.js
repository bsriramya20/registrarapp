
import React from 'react';
import { StyleSheet, Text, View,Image, ScrollView, Dimensions } from 'react-native';
import { Card } from 'react-native-elements'

const { width } = Dimensions.get('window');

const images= [
      'https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg'
    ];

 const specIndex=[1,2,3];   

export default class Specialities extends React.Component {
 



    state = {
        active : 0
      };
    
      change = ({nativeEvent}) =>{
        const slide = Math.ceil(nativeEvent.contentOffset.x /nativeEvent.layoutMeasurement.width);
        if(slide !== this.state.active){
          this.setState({active:slide})
        }
      }

  render(){
  return (
    <View style={styles.container} >
      

        <Text h1 style={styles.header}>Our Specialities</Text> 
       

     <ScrollView 
        
        //pagingEnabled={true}
        onScroll={this.change}
        horizontal= {true}
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToInterval={width - 30}
        snapToAlignment={"center"}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{marginBottom:50}}
        contentInset={{
          top: 0,
          left: 15,
          bottom: 0,
          right: 15,
        }}>
        <View style={styles.view}>
            <Card style={styles.cardStyle}>
                <Text style={styles.cardHeader}>HOW WE ARE DIFFERENT</Text>
                <Text style={styles.cardText}>
                        Class room strenght is 40 only
                </Text>
                <Text style={styles.cardText}>
                only six (including language) most Senior Faculty members of the subject deal with all Classes.
                </Text>
                <Text style={styles.cardText}>
                All exams are completed by Saturday and every Sunday is a holiday.
                </Text>
                <Text style={styles.cardText}>
                Two botanical tours per year for real time experience.
                </Text>
                <Text style={styles.cardText}>
                A/C Class room and also A/C Accommodation in hostels.
                </Text>
                <Text style={styles.cardText}>
                Topic wise Assignments in Botany and Zoology
                </Text>
            </Card>
        </View>    
        <View style={styles.view}>
            <Card style={styles.cardStyle}>
                <Text style={styles.cardHeader}>SALIENT FEATURES</Text>
                <Text style={styles.cardText}>
                Every week one IPE test on Friday
                </Text>
                <Text style={styles.cardText}>
                NEET week end Test on Saturday
                </Text>
                <Text style={styles.cardText}>
                Monthly once Unit Test in both IPE & NEET
                </Text>
                <Text style={styles.cardText}>
                Every third week of the month alternatively AIIMS and JIPMER exams
                </Text>
                <Text style={styles.cardText}>
                IPE MID Term Exams in the last week of August
                </Text>
                <Text style={styles.cardText}>
                Daily work sheets in Physics and Chemistry
                </Text>
                <Text style={styles.cardText}>
                Topic wise Assignments in Botany and Zoology
                </Text>
            </Card>
        </View>  
        <View style={styles.view}>
            <Card style={styles.cardStyle}>
                <Text style={styles.cardHeader}>OUR SPECIALITIES</Text>
                <Text style={styles.cardText}>
                Well Experienced Faculty
                </Text>
                <Text style={styles.cardText}>
                Study Material Will be Provided
                </Text>
                <Text style={styles.cardText}>
                Separate Classes for Boys & Girls
                </Text>
                <Text style={styles.cardText}>
                Utmost Priority for Subject Counselling
                </Text>
                <Text style={styles.cardText}>
                3 Students only in Each Room in Hostel with attached Bathrooms
                </Text>
                <Text style={styles.cardText}>
                Only Two Sections for Boys & Two Sections for Girls
                </Text>
            </Card>
        </View>  
         
     
      </ScrollView>

      <View style={styles.pagination}>
        {
         specIndex.map((i,k)=>(
            <Text key={k} style={k==this.state.active ?styles.pagingActiveText : styles.pagingText}>⬤</Text>
          ))
        }
        
      </View>

      </View>
  )
      }
}

const styles = StyleSheet.create({
  container: {marginTop:50},
  header:{
      fontSize:32,
      color:"#0c2e8a",
      fontWeight:'bold',
      marginTop:5,
      marginBottom:10,
      textAlign:'center'
     
  },
  cardHeader:{
    fontSize:18,
    fontWeight:'bold',
    marginBottom:5,
    textAlign:'center'
  },
  cardText:{
    fontSize:13,
    margin:3,
    borderBottomWidth:1,
    padding:2,
    lineHeight: 20,
    textAlign:'center',
    borderBottomColor: 'red',
    borderWidth: 2,
},
  paragraph:{
      fontSize:14

  },
  cardStyle:{
    width:300
  },
  view: {
    marginTop: 10,
    width: width - 50,
    margin: 10,
    borderRadius: 10,
    //paddingHorizontal : 30
  },
  view2: {
    marginTop: 100,
    backgroundColor: 'red',
    width: width - 80,
    margin: 10,
    height: 200,
    borderRadius: 10,
    //paddingHorizontal : 30
  },
  pagination:{flexDirection:'row',position:"absolute",bottom:0,alignSelf:"center",marginBottom :20},
  pagingText:{ fontSize:( width/30),color:'#888',margin:3},
  pagingActiveText:{color:'#50d8af',margin:3,fontSize:( width/30)}
  
});