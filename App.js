import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, ScrollView, Dimensions,Button } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';

import Banners from './components/banners';
import About from './components/about';
import Main from './components/main';
import Courses from './components/courses';
import ImageGallery from './components/gallery';
import Specialities from './components/specialities';
import Directors from './components/directors';
import Contact from './components/contact';
import Screens from './components/screens';
import Header from './components/header';
import Qualification from './components/qualification';



const images= [
  require('./assets/intro-1.jpg'),
  require('./assets/intro-2.jpg'),
  require('./assets/intro-3.jpg'),
  require('./assets/7.jpg')
    ];
 const   scrollToB = () => {
      scrollYPos = 2000;
      // this.scroller.scrollTo({x: 0, y: scrollYPos});
        scrollTo({x: 0, y: scrollYPos});
        console.log('clicked');
    }
    const Stack = createStackNavigator();

    const Drawer = createDrawerNavigator();

 
  

    const DrawNav = () =>{
      return(
       
      
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Screens}   />
          <Drawer.Screen name="About" component={About}  /> 
          <Drawer.Screen name="Quaifications" component={Qualification} />
          <Drawer.Screen name="Experience" component={ImageGallery}  />
          <Drawer.Screen name="Research Scholars" component={ImageGallery}  />
          <Drawer.Screen name="Awards & Honors" component={ImageGallery}  />
          <Drawer.Screen name="Publications" component={ImageGallery} />
  
        </Drawer.Navigator>
      )
    }


export default class App extends React.Component {
  
  render(){
    
  return (

    <NavigationContainer>
      <Stack.Navigator  >
          <Stack.Screen name="Home" component={DrawNav} options={({navigation})=> ({
          header: ()=> <Header navigation={navigation} title='' />
        })}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
      }
}

const styles = StyleSheet.create({
  container: {marginTop:50}
  
});
