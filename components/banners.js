import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, ScrollView, Dimensions } from 'react-native';

const {width} = Dimensions.get('window');

const images= [
  require('../assets/intro-1.jpg'),
  require('../assets/intro-2.jpg'),
  require('../assets/intro-3.jpg'),
  require('../assets/7.jpg')
    ];

const height = width * 0.6; 
export default class Banners extends React.Component {
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
    <ScrollView 
       pagingEnabled
       onScroll={this.change}
       scrollEventThrottle={16}
       horizontal 
       showsHorizontalScrollIndicator={false}
       style={styles.container}>
        {
        images.map((item,index)=>(
          
          <Image key={index}
          source={item}
          style={styles.image}
          
        />
      
        ))}
      </ScrollView >
        <View style={styles.pagination}>
          {
          images.map((i,k)=>(
              <Text key={k} style={k==this.state.active ?styles.pagingActiveText : styles.pagingText}>⬤</Text>
            ))
          }
          
        </View>
      </View>
     
  )
      }
}

const styles = StyleSheet.create({
  container: {width,marginBottom:70},
  image:{width,height,resizeMode:'cover'},
  pagination:{flexDirection:'row',position:"absolute",bottom:0,alignSelf:"center",},
  pagingText:{ fontSize:( width/30),color:'#888',margin:3},
  pagingActiveText:{color:'#50d8af',margin:3,fontSize:( width/30)}
});
