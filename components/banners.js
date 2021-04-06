import React, { Component } from 'react';
import { StyleSheet, Text, View,Image, ScrollView, Dimensions,TouchableHighlight,Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 



export default class Publication extends React.Component {

    
  
    render(){
    return (
        <ScrollView>
            <Text style={styles.headText}>INTERNATIONAL JOURNALS</Text>
            <View style={styles.cardStyle}>
                <View style={styles.left}>
                    <View style={styles.iconView}>
                        <FontAwesome name="book" size={24} color="white"  />
                    </View>
                    <View style={styles.borderStyle}></View>
                </View>
                <View style={styles.right}>
                    {/* <View style={styles.cardBodyHeadBackground}>
                    <Text style={styles.cardBodyHead}>2007</Text>
                    </View> */}
                    
                    <Text style={styles.cardBodyP1}>1. G.Chamundeswari, G.P.S.Varma, Ch.Satyanarayana, “Contact Distribution Function based Clustering Technique with Self-Organizing Maps”, International Journal of Image, Graphics and Signal Processing, Vol.3, 2018.
                    </Text>
                    {/* <Text style={styles.cardBodyP2}>DAP                  Posted Date: 03-04-2021</Text> */}
                </View>
                
            </View>
            <View style={styles.cardStyle}>
                <View style={styles.left}>
                    <View style={styles.iconView}>
                        <FontAwesome name="book" size={24} color="white"  />
                    </View>
                    <View style={styles.borderStyle}></View>
                </View>
                <View style={styles.right}>
                    {/* <View style={styles.cardBodyHeadBackground}>
                    <Text style={styles.cardBodyHead}>1998</Text>
                    </View> */}
                    
                    <Text style={styles.cardBodyP1}>2. G.Chamundeswari, G.P.S.Varma, Ch.Satyanarayana, “An Edge based Clustering Technique with Self-Organizing Maps” International Journal of Information Technology and Computer Science, Vol.5, 2018.</Text>
                    {/* <Text style={styles.cardBodyP2}>DAP                 Posted Date: 31-03-2021</Text> */}
                </View>
                
            </View>
            <View style={styles.cardStyle}>
                <View style={styles.left}>
                    <View style={styles.iconView}>
                        <FontAwesome name="book" size={24} color="white"  />
                    </View>
                    <View style={[styles.borderStyle,{height:120}]}></View>
                </View>
                <View style={styles.right}>
                    {/* <View style={styles.cardBodyHeadBackground}>
                    <Text style={styles.cardBodyHead}>1990</Text>
                    </View> */}
                    
                    <Text style={styles.cardBodyP1}>3.Chandra Mouli. A, C. Divakar, Ch. Satyanarayana, “Design of Generalized Weighted Laplacian based quality assessment for Software Reliability Growth Models ”, International Journal of Information Technology and Computer Science, Vol.5, 2018.</Text>
                    {/* <Text style={styles.cardBodyP2}>DAP                 Posted Date: 29-03-2021</Text> */}
                </View>
                
            </View>
            <View style={[styles.cardStyle,{marginTop:20}]}>
                <View style={styles.left}>
                    <View style={styles.iconView}>
                        <FontAwesome name="book" size={24} color="white"  />
                    </View>
                    <View style={[styles.borderStyle,{height:80}]}></View>
                </View>
                <View style={styles.right}>
                    {/* <View style={styles.cardBodyHeadBackground}>
                    <Text style={styles.cardBodyHead}>1988</Text>
                    </View> */}
                    
                    <Text style={styles.cardBodyP1}>4.Kavitha A.V, Srikrishna A, Ch.Satyanarayana, “Unsupervised Linear Contact Distributions segmentation algorithm for land cover high resolution panchromatic images”, Multimedia Tools and Applications, Springer, 2018.</Text>
                    {/* <Text style={styles.cardBodyP2}>DAP                 Posted Date: 29-03-2021</Text> */}
                </View>
                
            </View>
            <View style={[styles.cardStyle,{marginTop:20}]}>
                <View style={styles.left}>
                    <View style={styles.iconView}>
                        <FontAwesome name="book" size={24} color="white"  />
                    </View>
                    <View style={[styles.borderStyle,{height:80}]}></View>
                </View>
                <View style={styles.right}>
                    {/* <View style={styles.cardBodyHeadBackground}>
                    <Text style={styles.cardBodyHead}>1988</Text>
                    </View> */}
                    
                    <Text style={styles.cardBodyP1}>5.M.Venkata Ramana, E.Sreenivsa Reddy, Ch.Satyanarayana, “Curvelet Transform for Efficient Static Texture Classification and Image Fusion”, International Journal of Image, Graphics and Signal Processing, Vol.5, 2018.</Text>
                    {/* <Text style={styles.cardBodyP2}>DAP                 Posted Date: 29-03-2021</Text> */}
                </View>
                
            </View>


            <Text style={styles.headText}>INTERNATIONAL CONFERENCES</Text>

            <View style={styles.cardStyle}>
                <View style={styles.left}>
                    <View style={styles.iconView}>
                        <FontAwesome name="handshake" size={24} color="white"  />
                    </View>
                    <View style={[styles.borderStyle,{height:40}]}></View>
                </View>
                <View style={styles.right}>
                    {/* <View style={[styles.cardBodyHeadBackground,{width:140}]}>
                    <Text style={styles.cardBodyHead}>RESEARCH AREA</Text>
                    </View> */}
                    
                    <Text style={styles.cardBodyP1}>1. Mattareddy S , Ch.Satyanarayana, “Implementation Of Eaack Scheme In Manets With Hybrid Cryptography Algorithm-Ecc”, 2nd Intl. Conference on Science, Tech. and Management, University of Delhi, New Delhi, India, September, 2015</Text>
                    {/* <Text style={styles.cardBodyP2}>DAP                 Posted Date: 19-03-2021</Text> */}
                </View>
                
            </View>

            <View style={[styles.cardStyle,{marginTop:40}]}>
                <View style={styles.left}>
                    <View style={styles.iconView}>
                        <FontAwesome name="handshake" size={24} color="white"  />
                    </View>
                    <View style={[styles.borderStyle,{height:70}]}></View>
                </View>
                <View style={styles.right}>
                    {/* <View style={styles.cardBodyHeadBackground}>
                    <Text style={styles.cardBodyHead}>TITLE</Text>
                    </View> */}
                    <Text style={styles.cardBodyP2}>2. M. Radhika Mani, G.P.S. Varma, Potukuchi D.M., Ch. Satyanarayana, “Morphological and Statistical Approach for Boundary based Shape Representation Methods”, IEEE First International Conference on Networks & Soft Computing, pp. 329-334, 19th -20th Aug, Vignan University, India, 2014.</Text>
                        {/* <Text style={styles.cardBodyP2}>DAP                  Posted Date: 19-03-2021</Text> */}
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
     borderStyle:{height:100,borderLeftWidth:1,color:'white',justifyContent: 'center',alignItems: 'center',marginLeft:24},
     left:{flex:1},
     right:{flex:5,marginLeft:20},
     cardBodyHeadBackground:{borderRadius:30,backgroundColor:'#d7d7d7',width:60},
     cardBodyHead:{fontSize:14,color:"#666",padding:5,textAlign:'center'},
     cardBodyP1:{fontSize:18,color:'#666',marginTop:20},
     cardBodyP2:{fontSize:16,color:'#666',marginTop:20}
 });