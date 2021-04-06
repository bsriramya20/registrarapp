import React, { Component } from 'react';
import { StyleSheet, Text, View,Image, ScrollView, Dimensions,TouchableHighlight,Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
const {width} = Dimensions.get('window');
const screenwidth = (width) *0.4 ;
const borderMargin= (width)*0.3;


export default class Experience extends React.Component {

    
  
    render(){
    return (

        <ScrollView>
            <View>
                <Text style={styles.headText}>Professional Experience </Text>
                <View style={styles.cardStyle}>
                    <View style={styles.left}>
                        <View style={styles.borderStyle}></View>
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.cardBodyP1}><FontAwesome name="star" size={20} color="#666" />    Professor (Jawaharlal Nehru{"\n"}Technological University,{"\n"}Kakinada-2012- till to date)</Text>
                    </View>
                 </View>
                 <View style={styles.cardStyle}>
                    <View style={styles.left}>
                        <View style={styles.borderStyle}></View>
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.cardBodyP1}><FontAwesome name="star" size={20} color="#666" />    Assoc. Professor (Jawaharlal{"\n"}Nehru Technological University,{"\n"}Kakinada-2006-2012)</Text>
                    </View>
                 </View>
                 <View style={styles.cardStyle}>
                    <View style={styles.left}>
                        <View style={styles.borderStyle}></View>
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.cardBodyP1}><FontAwesome name="star" size={20} color="#666" />    Asst. Professor (Jawaharlal{"\n"}Nehru Technological University,{"\n"}Kakinada-2000-2006)</Text>
                    </View>
                 </View>

                 <View style={styles.borderTopStyle}></View>

                 <Text style={styles.headText}>	Administrative Experience</Text>
                 <View style={styles.cardStyle}>
                    <View style={styles.left}>
                        <View style={[styles.borderStyle,{height:110}]}></View>
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.cardBodyP1}><FontAwesome name="star" size={20} color="#666" />    Registrar - Jawaharlal Nehru{"\n"}Technological University,{"\n"}Kakinada (September, 2016 – Till{"\n"}date)</Text>
                    </View>
                 </View>
                 <View style={styles.cardStyle}>
                    <View style={styles.left}>
                        <View style={[styles.borderStyle,{height:140}]}></View>
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.cardBodyP1}><FontAwesome name="star" size={20} color="#666" />    Director, Academics &{"\n"}Planning - Jawaharlal Nehru{"\n"}Technological University,{"\n"}Kakinada (September, 2016 –{"\n"}November, 2018)</Text>
                    </View>
                 </View>
                 <View style={styles.cardStyle}>
                    <View style={styles.left}>
                        <View style={[styles.borderStyle,{height:110}]}></View>
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.cardBodyP1}><FontAwesome name="star" size={20} color="#666" />    Controller of Examinations -{"\n"}Jawaharlal Nehru Technological{"\n"}University, Kakinada (November,{"\n"}2012- July, 2014).</Text>
                    </View>
                 </View>
                 <View style={styles.cardStyle}>
                    <View style={styles.left}>
                        <View style={[styles.borderStyle,{height:160}]}></View>
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.cardBodyP1}><FontAwesome name="star" size={20} color="#666" />    Head of the Department -{"\n"}Department of Computer Science{"\n"}and Engineering, Jawaharlal{"\n"}Nehru Technological University,{"\n"}Kakinada (February, 2012-{"\n"}November, 2012).</Text>
                    </View>
                 </View>
                 <View style={styles.cardStyle}>
                    <View style={styles.left}>
                        <View style={[styles.borderStyle,{height:110}]}></View>
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.cardBodyP1}><FontAwesome name="star" size={20} color="#666" />    Controller of Examinations -{"\n"}Jawaharlal Nehru Technological{"\n"}University, Kakinada (October,{"\n"}2009-February, 2012).</Text>
                    </View>
                 </View>
                 <View style={styles.cardStyle}>
                    <View style={styles.left}>
                        <View style={[styles.borderStyle,{height:140}]}></View>
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.cardBodyP1}><FontAwesome name="star" size={20} color="#666" />    Addl. Controller of{"\n"}Examinations - Jawaharlal Nehru{"\n"}Technological University,{"\n"}Kakinada (September, 2008-{"\n"}October, 2009).</Text>
                    </View>
                 </View>
                 <View style={styles.cardStyle}>
                    <View style={styles.left}>
                        <View style={[styles.borderStyle,{height:140}]}></View>
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.cardBodyP1}><FontAwesome name="star" size={20} color="#666" />    Coordinator - Software{"\n"}development centre, Jawaharlal{"\n"}Nehru Technological University,{"\n"}Kakinada (September,{"\n"}2008-July, 2014).</Text>
                    </View>
                 </View>
                 <View style={styles.cardStyle}>
                    <View style={styles.left}>
                        <View style={[styles.borderStyle,{height:90}]}></View>
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.cardBodyP1}><FontAwesome name="star" size={20} color="#666" />    Officer-In-Charge of Hostels -{"\n"}JNTU College of Engineering,{"\n"}Kakinada.</Text>
                    </View>
                 </View>
                 <View style={styles.cardStyle}>
                    <View style={styles.left}>
                        <View style={[styles.borderStyle,{height:110}]}></View>
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.cardBodyP1}><FontAwesome name="star" size={20} color="#666" />    Coordinator - B.Tech project{"\n"}works, Dept. of CSE, JNTU College{"\n"}Engineering, Kakinada (2006-{"\n"}2008).</Text>
                    </View>
                 </View>
                 <View style={styles.cardStyle}>
                    <View style={styles.left}>
                        <View style={[styles.borderStyle,{height:110}]}></View>
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.cardBodyP1}><FontAwesome name="star" size={20} color="#666" />    Officer-In-Charge of{"\n"}Examinations-JNTU College of{"\n"}Engineering, Kakinada(2004-{"\n"}2006).</Text>
                    </View>
                 </View>
                 <View style={styles.cardStyle}>
                    <View style={styles.left}>
                        <View style={[styles.borderStyle,{height:110}]}></View>
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.cardBodyP1}><FontAwesome name="star" size={20} color="#666" />    Officer-In-Charge of SC/ST{"\n"}Book Bank - JNTU College of{"\n"}Engineering, Kakinada (2002-{"\n"}2004).</Text>
                    </View>
                 </View>
                 <View style={styles.cardStyle}>
                    <View style={styles.left}>
                        <View style={[styles.borderStyle,{height:110}]}></View>
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.cardBodyP1}><FontAwesome name="star" size={20} color="#666" />    Coordinator - M.Tech/MCA{"\n"}project works, Dept. of CSE, JNTU{"\n"}College Engineering, Kakinada{"\n"}(2000-2002).</Text>
                    </View>
                 </View>
                 <View style={styles.borderTopStyle}></View>
            </View>
        </ScrollView>

    )
    }
};    

const styles = StyleSheet.create({
    headText:{color:'#666',fontSize:20,fontWeight:'bold',marginLeft:5 ,textAlign:'center',marginTop:20,marginBottom:20},
    cardStyle:{padding:15,flex: 1,flexDirection: "row"},
     iconStyle:{backgroundColor:'#72b626' ,borderRadius:30},
     borderStyle:{height:80,borderLeftWidth:1,color:'white',justifyContent: 'center',alignItems: 'center',marginLeft:24,borderColor:"#ddd"},
     borderTopStyle:{borderTopWidth:2,width:screenwidth,marginLeft:borderMargin,borderColor:'#0df109',justifyContent: 'center',textAlign:'center',alignItems: 'center',marginTop:30,marginBottom:30},
     left:{flex:1},
     right:{flex:5,marginLeft:20},
     cardBodyHeadBackground:{borderRadius:30,backgroundColor:'#d7d7d7',width:60},
     cardBodyHead:{fontSize:14,color:"#666",padding:5,textAlign:'center'},
     cardBodyP1:{fontSize:16,color:'#666',lineHeight:28},
     cardBodyP2:{fontSize:16,color:'#666',marginTop:20}
});