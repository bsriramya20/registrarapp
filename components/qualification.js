import React, { Component } from 'react';
import { StyleSheet, Text, View,Image, ScrollView, Dimensions,TouchableHighlight,Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 



export default class Qualification extends React.Component {

    
  
    render(){
    return (
        <ScrollView>
            <Text style={styles.headText}>EDUCATIONAL QUALIFICATIONS</Text>
            <View style={styles.cardStyle}>
                <View style={styles.left}>
                    <View style={styles.iconView}>
                        <FontAwesome name="graduation-cap" size={24} color="white"  />
                    </View>
                    <View style={styles.borderStyle}></View>
                </View>
                <View style={styles.right}>
                    <View style={styles.cardBodyHeadBackground}>
                    <Text style={styles.cardBodyHead}>2007</Text>
                    </View>
                    
                    <Text style={styles.cardBodyP1}>Ph.D. -Jawaharlal Nehru Technological University</Text>
                    <Text style={styles.cardBodyP2}>Computer Science</Text>
                </View>
                
            </View>
            <View style={styles.cardStyle}>
                <View style={styles.left}>
                    <View style={styles.iconView}>
                        <FontAwesome name="graduation-cap" size={24} color="white"  />
                    </View>
                    <View style={styles.borderStyle}></View>
                </View>
                <View style={styles.right}>
                    <View style={styles.cardBodyHeadBackground}>
                    <Text style={styles.cardBodyHead}>1998</Text>
                    </View>
                    
                    <Text style={styles.cardBodyP1}>MASTER DEGEREE( M. TECH){"\n"}- ANDHRA UNIVERSITY</Text>
                    <Text style={styles.cardBodyP2}>Computer Science and Technology</Text>
                </View>
                
            </View>
            <View style={styles.cardStyle}>
                <View style={styles.left}>
                    <View style={styles.iconView}>
                        <FontAwesome name="graduation-cap" size={24} color="white"  />
                    </View>
                    <View style={styles.borderStyle}></View>
                </View>
                <View style={styles.right}>
                    <View style={styles.cardBodyHeadBackground}>
                    <Text style={styles.cardBodyHead}>1996</Text>
                    </View>
                    
                    <Text style={styles.cardBodyP1}>BACHELOR DEGREE(B. TECH){"\n"}- ANDHRA UNIVERSITY</Text>
                    <Text style={styles.cardBodyP2}>Computer Science and Technology</Text>
                </View>
                
            </View>
            <View style={styles.cardStyle}>
                <View style={styles.left}>
                    <View style={styles.iconView}>
                        <FontAwesome name="graduation-cap" size={24} color="white"  />
                    </View>
                    <View style={[styles.borderStyle,{height:120}]}></View>
                </View>
                <View style={styles.right}>
                    <View style={styles.cardBodyHeadBackground}>
                    <Text style={styles.cardBodyHead}>1990</Text>
                    </View>
                    
                    <Text style={styles.cardBodyP1}>INTERMEDIATE - APR JUNIOR{"\n"}COLLEGE, NAGARJUNA SAGAR,{"\n"}GUNTUR DIST</Text>
                    <Text style={styles.cardBodyP2}>MPC</Text>
                </View>
                
            </View>
            <View style={[styles.cardStyle,{marginTop:20}]}>
                <View style={styles.left}>
                    <View style={styles.iconView}>
                        <FontAwesome name="graduation-cap" size={24} color="white"  />
                    </View>
                    <View style={[styles.borderStyle,{height:80}]}></View>
                </View>
                <View style={styles.right}>
                    <View style={styles.cardBodyHeadBackground}>
                    <Text style={styles.cardBodyHead}>1988</Text>
                    </View>
                    
                    <Text style={styles.cardBodyP1}>SSC - AP RESIDENTIAL HIGH{"\n"}SCHOOL, PULIGADDA,{"\n"}KRISHNA DIST</Text>
                </View>
                
            </View>


            <Text style={styles.headText}>DETAILS OF DOCTORIAL THESIS</Text>

            <View style={styles.cardStyle}>
                <View style={styles.left}>
                    <View style={styles.iconView}>
                        <FontAwesome name="graduation-cap" size={24} color="white"  />
                    </View>
                    <View style={[styles.borderStyle,{height:40}]}></View>
                </View>
                <View style={styles.right}>
                    <View style={[styles.cardBodyHeadBackground,{width:140}]}>
                    <Text style={styles.cardBodyHead}>RESEARCH AREA</Text>
                    </View>
                    
                    <Text style={styles.cardBodyP1}>DIGITAL IMAGE PROCESSING</Text>
                </View>
                
            </View>

            <View style={[styles.cardStyle,{marginTop:-40}]}>
                <View style={styles.left}>
                    <View style={styles.iconView}>
                        <FontAwesome name="graduation-cap" size={24} color="white"  />
                    </View>
                    <View style={[styles.borderStyle,{height:70}]}></View>
                </View>
                <View style={styles.right}>
                    <View style={styles.cardBodyHeadBackground}>
                    <Text style={styles.cardBodyHead}>TITLE</Text>
                    </View>
                    <Text style={styles.cardBodyP2}>Incremental Training Method for Face Recognition: A 
			            Principal Component Analysis Approach.</Text>
                </View>
                
            </View>
            <View style={styles.cardStyle}>
                <View style={styles.left}>
                    <View style={styles.iconView}>
                        <FontAwesome name="graduation-cap" size={24} color="white"  />
                    </View>
                    <View style={[styles.borderStyle,{height:70}]}></View>
                </View>
                <View style={styles.right}>
                    <View style={[styles.cardBodyHeadBackground,{width:120}]}>
                    <Text style={styles.cardBodyHead}>SUPERVISON</Text>
                    </View>
                    <Text style={styles.cardBodyP2}>Dr. L. Pratap Reddy, 
                    Professor, JNTU College of Engineering, Hyderabad.</Text>
                </View>
                
            </View>
            <View style={styles.cardStyle}>
                <View style={styles.left}>
                    <View style={styles.iconView}>
                        <FontAwesome name="graduation-cap" size={24} color="white"  />
                    </View>
                    <View style={[styles.borderStyle,{height:40}]}></View>
                </View>
                <View style={styles.right}>
                    <View style={[styles.cardBodyHeadBackground,{width:200}]}>
                    <Text style={styles.cardBodyHead}>YEAR OF AWARD OF PHD</Text>
                    </View>
                    <Text style={styles.cardBodyP2}>2007</Text>
                </View>
                
            </View>
            <View style={[styles.cardStyle,{marginTop:-40}]}>
                <View style={styles.left}>
                    <View style={styles.iconView}>
                        <FontAwesome name="graduation-cap" size={24} color="white"  />
                    </View>
                    <View style={[styles.borderStyle,{height:40}]}></View>
                </View>
                <View style={styles.right}>
                    <View style={[styles.cardBodyHeadBackground,{width:80}]}>
                    <Text style={styles.cardBodyHead}>COURSE</Text>
                    </View>
                    <Text style={styles.cardBodyP2}>Computer Science</Text>
                </View>
                
            </View>
            
            
           
        </ScrollView>

    )}
 }
 
 const styles = StyleSheet.create({
     headText:{color:'#666',fontSize:20,fontWeight:'bold',marginLeft:5 ,textAlign:'center',marginTop:20,marginBottom:20},
     cardStyle:{padding:20,height:180,flex: 1,flexDirection: "row"},
     iconStyle:{backgroundColor:'#72b626' ,borderRadius:30},
     iconView:{backgroundColor:'#72b626',borderRadius:30,width:50,justifyContent: 'center',alignItems: 'center',padding:10},
     borderStyle:{height:100,borderLeftWidth:1,color:'white',justifyContent: 'center',alignItems: 'center',marginLeft:24,borderColor:"#ddd"},
     left:{flex:1},
     right:{flex:5,marginLeft:20},
     cardBodyHeadBackground:{borderRadius:30,backgroundColor:'#d7d7d7',width:60},
     cardBodyHead:{fontSize:14,color:"#666",padding:5,textAlign:'center'},
     cardBodyP1:{fontSize:18,color:'#666',marginTop:20},
     cardBodyP2:{fontSize:16,color:'#666',marginTop:20}
 });