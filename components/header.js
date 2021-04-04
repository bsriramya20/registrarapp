import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { NavigationContainer, DrawerActions } from '@react-navigation/native';




export default function Header({navigation,title}) { 
     openDrawer = ()=>{
        // console.log(navigation)
            navigation.dispatch(DrawerActions.openDrawer())
    };
    return (
        <View style={styles.header}>
          
        
       
        
        <View style={styles.item1}>
        <SimpleLineIcons name="menu" size={32} color="black" onPress={openDrawer} />
          </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    image:{width:50,height:50,resizeMode:'cover'},
    header: {
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff'
        
    },
    title: {
        color:  '#50d8af',
        fontSize: 25,
        fontWeight: 'bold',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    item: {
        justifyContent: 'flex-end',
        padding:20,
   },
   item1: {
       padding:20,
       justifyContent: 'flex-start',
  }
});

