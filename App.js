import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, ScrollView, Dimensions,Button } from 'react-native';

import { FontAwesome } from '@expo/vector-icons'; 

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
import Experience from './components/experience';
import Research from './components/research';





    const Stack = createStackNavigator();

    const Drawer = createDrawerNavigator();

    const HomeNav = ()=>{
      return(
        <Stack.Navigator  screenOptions={{
        }} >
        
        <Stack.Screen name="HOME" component={Main} options={({navigation})=> ({
          header: ()=> <Header navigation={navigation} title='' />
        })}/>
       </Stack.Navigator>
      )
    }

    const AboutNav = ()=>{
      
      return(
        <Stack.Navigator  screenOptions={{
        }} >
        
        <Stack.Screen name="ABOUT ME" component={About} options={({navigation})=> ({
          header: ()=> <Header navigation={navigation} title='ABOUT ME' />
        })}/>
       </Stack.Navigator>
      )
    }

    const QualificationNav = ()=>{
      return(
        <Stack.Navigator  screenOptions={{
        }} >
        
        <Stack.Screen name="QUALIFICATIONS" component={Qualification} options={({navigation})=> ({
          header: ()=> <Header navigation={navigation} title='QUALIFICATIONS' />
        })}/>
       </Stack.Navigator>
      )
    }
    const ExperienceNav = ()=>{
      return(
        <Stack.Navigator  screenOptions={{
        }} >
        
        <Stack.Screen name="EXPERIENCE" component={Experience} options={({navigation})=> ({
          header: ()=> <Header navigation={navigation} title='EXPERIENCE' />
        })}/>
       </Stack.Navigator>
      )
    }

    const ResearchNav = ()=>{
      return(
        <Stack.Navigator  screenOptions={{
        }} >
        
        <Stack.Screen name="RESEARCH SCHOLARS" component={Research} options={({navigation})=> ({
          header: ()=> <Header navigation={navigation} title='RESEARCH' />
        })}/>
       </Stack.Navigator>
      )
    }

    const PublicationNav = ()=>{
      return(
        <Stack.Navigator  screenOptions={{
        }} >
        
        <Stack.Screen name="PUBLICTION " component={Banners} options={({navigation})=> ({
          header: ()=> <Header navigation={navigation} title='PUBLICTION' />
        })}/>
       </Stack.Navigator>
      )
    }

    const testRoute = () =>{
      return(<Stack.Navigator  screenOptions={{
      }} >
      
      {/* <Stack.Screen name="PUBLICTION " component={Banners} options={({navigation})=> ({
        header: ()=> <Header navigation={navigation} title='PUBLICTION' />
      })}/> */}
     </Stack.Navigator>)
    }
  



export default class App extends React.Component {
  
  render(){
    
  return (

    <NavigationContainer>
    <Drawer.Navigator initialRouteName="HOME">
          <Drawer.Screen name="HOME" component={HomeNav} 
          options={{ drawerIcon: config=><FontAwesome name="home" size={24} color="#666" /> }}  />
          <Drawer.Screen name="ABOUT" component={AboutNav} 
          options={{ drawerIcon: config=><FontAwesome name="user" size={24} color="#666"  /> }}  />
          <Drawer.Screen name="QUAIFICATION" component={QualificationNav}
            options={{ drawerIcon: config=><FontAwesome name="graduation-cap" size={22} color="#666" /> }}  />
          <Drawer.Screen name="EXPERIENCE" component={ExperienceNav}
           options={{ drawerIcon: config=><FontAwesome name="briefcase" size={24} color="#666"  /> }}  />
          <Drawer.Screen name="RESEARCH SCHOLARS" component={ResearchNav} 
           options={{ drawerIcon: config=><FontAwesome name="graduation-cap" size={24} color="#666"  /> }}  />
          <Drawer.Screen name="AWARDS & HONORS" component={testRoute}
          options={{ drawerIcon: config=><FontAwesome name="trophy" size={24} color="#666"  /> }} />
          <Drawer.Screen name="PUBLICATIONS" component={PublicationNav}
          options={{ drawerIcon: config=><FontAwesome name="book" size={24} color="#666"  /> }} />
       </Drawer.Navigator>
   </NavigationContainer>
  )
      }
}

const styles = StyleSheet.create({
  container: {marginTop:50}
  
});
