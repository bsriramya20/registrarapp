import React, { Component } from 'react';
import { StyleSheet, Text, View,Image, ScrollView, Dimensions,TouchableHighlight,Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
const {width} = Dimensions.get('window');
const screenwidth = (width) *0.4 ;
const borderMargin= (width)*0.3;


export default class Research extends React.Component {

    
  
    render(){
    return (
        <ScrollView>
            {/* <Text style={styles.headText}>EDUCATIONAL QUALIFICATIONS</Text> */}
            <View style={styles.cardStyle}>
                <View style={styles.left}>
                    <View style={styles.iconView}>
                        <FontAwesome name="graduation-cap" size={24} color="white"  />
                    </View>
                    <View style={styles.borderStyle}></View>
                </View>
                <View style={styles.right}>
                    
                    <Text style={styles.cardBodyP1}>
                    1. 2012, M.Seshashayee, “Image Segmentation Methods Based on New Symmetric 
                    Mixture Model and Its Generalizations”, sesha_sayee@yahoo.co.in, 9849193981, 
                    Jawaharlal Nehru Technological University, Kakinada.</Text>
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
                    
                    <Text style={styles.cardBodyP1}>
                    2. 2013, D.Haritha, “Doubly Truncated Multivariate Gaussian Mixture models in Face 
                    Recognition Systems”, harithadasari9@yahoo.com, 9440810901, Jawaharlal Nehru 
                    Technological University, Kakinada.</Text>
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
                    
                    <Text style={styles.cardBodyP1}>
                    3. 2014, B.N.Jagadesh, “Skin Colour Segmentation Using Bivariate Pearsonian Mixture 
                    Models”, nagajagadesh@gmail.com, 9441958969, JNTUK, Kakinada.</Text>
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
                    
                    <Text style={styles.cardBodyP1}>
                    4. 2014, G.Mallikarjuna Rao, “Some Investigations On Kalman Filter And Partile Filter 
                    For Visual Object Tracking”, Mallikarjuna.G@rcilab.in, 9490166665, Jawaharlal 
                    Nehru Technological University, Kakinada.</Text>
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
                    
                    <Text style={styles.cardBodyP1}>
                    5. 2014, N.L.Manasa, “Personal Identification System using Multiple Bio-Metric 
                    Markers”, nadipally.m@gmail.com, 9866296999, JNTUK, Kakinada.</Text>
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
                    
                    <Text style={styles.cardBodyP1}>   
                    6. 2015, S. Krishna, “Design of A Novel Sparse Adaptive Filter for Echo Cancellation”, 
                    Krishna.oume@gmail.com, 9705890045, JNTUK, Kakinada.</Text>
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
                    
                    <Text style={styles.cardBodyP1}>
                    7. 2015, M.Radhika Mani, “Novel Methods for Representation of Shape Components for 
                    Object Recognition”, radhika_madireddy@yahoo.com, 9440484800, JNTUK, 
                    Kakinada.</Text>
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
                    
                    <Text style={styles.cardBodyP1}>
                    8. 2015, SK. Jumlesha, “Novel Approaches for Image Compression Using Discrete 
                    Wavelet Transform Techniques” ahmedsadhiq@gmail.com, 9951747705, Jawaharlal 
                    Nehru Technological University, Hyderabad.</Text>
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
                    
                    <Text style={styles.cardBodyP1}>
                    9. 2017, M.Chinna Rao, “Emotional Recognition System for English Dialects from 
                    India”, chinnarao.mortha@gmail.com, 9963560144, JNTUK, Kakinada.</Text>
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
                    
                    <Text style={styles.cardBodyP1}>
                    10. 2017, D.Raju, “A New Approach for Data Cleaning”, rajurdara@gmail.com,9246411464, JNTUK, Kakinada.
                </Text>
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
                    
                    <Text style={styles.cardBodyP1}>
                    11. 2017, K.Naveen Kumar, “Texture Segmentation Using Multivariate Generalised 
                    Gaussian Mixture Model”, nkumarkuppili@gmail.com, 9963778239, JNTUK, Kakinada
                </Text>
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
                    
                    <Text style={styles.cardBodyP1}>
                12. 2017, G.Sushmitha Valli, “Design and Development of a Compromised system for the 
                diagnosis, prognosis and cure of diabetic retinopathy”, susmitagv@gmail.com, 
                9885211511, JNTUK, Kakinada.
                </Text>
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
                    
                    <Text style={styles.cardBodyP1}>
                13. 2018, A.Gauthami Latha, “Novel Approaches To Domain Knowledge Representations 
                for Content-Based Image Retrieval using Semantic Web”, gauthamilatha@gmail.com, 
                9490228309, JNTUK, Kakinada.
                </Text>
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
                    
                    <Text style={styles.cardBodyP1}>
                14. 2018, T.Jyothirmayi, “Studies on Image Segmentation Based on Generalized Laplace 
                Mixture Model”, kbvrvsp@gmail.com, JNTUK, Kakinada.
                </Text>
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
                    
                    <Text style={styles.cardBodyP1}>
                15. 2018, E.Sudharsan, “Parallel Approach for Backward Coding of Wavelet Trees With 
                Cuda”, medasare@gmail.com, 7799036041, JNTU, Ananthapuram.
                </Text>
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
                    
                    <Text style={styles.cardBodyP1}>
                16. 2018, P.Nageswara Reddy, “Development of efficient brain tumor segmentation 
                algorithms for MR images”, pnageswarareddy@yahoo.com, JNTUK, Kakinada.
                </Text>
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
                    
                    <Text style={styles.cardBodyP1}>
                17. 2019, Y.Sowjanya Kumari, Topic: Texture feature extraction from texture unit and 
                LBP, sowji74@yahoo.co.in, JNTUK, Kakinada.
                </Text>
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
                    
                    <Text style={styles.cardBodyP1}>
                18. 2019, P.Pavan Kumar, “Design and Development Of Soft Real-Time Scheduler For 
                Enhancing the Shared Cache Performance in Multicore Systems”, 8977140144, 
                JNTU, Ananthapuram.
                </Text>
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
                    
                    <Text style={styles.cardBodyP1}>
                19. 2019, A. Chandra Mouli, “Quality Assessment of Software Growth Models under 
                Residual Faults”, 9741551588, JNTUK, Kakinada.
                </Text>
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
                    
                    <Text style={styles.cardBodyP1}>
                20. 2019, R.Venkata Rao, “Facial Age Estimation Based On Bivariate Gaussian Mixture 
                Model”,venkatarao.rampay@gmail.com, 9640129737
                </Text>
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
                    
                    <Text style={styles.cardBodyP1}>
                21. 2019, S.Anuradha, “Content Based Image Retrieval (CBIR) using Adaptive Ground 
                Truth Composition”, ganuharsh@yahoo.co.in, 8500268622
                </Text>
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
                    
                    <Text style={styles.cardBodyP1}>
                22. 2019, Rajeswari Goudar, “Remote monitoring of Computer Networks through Mobile 
                Device”, 9689907465.
                </Text>
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
                    
                    <Text style={styles.cardBodyP1}>
                    
                23. A.V.Kavitha, “Unsupervised Linear Contact Distributions segmentation algorithm 
                panchromatic images”, anubrolukavitha@gmail.com, 9490788712- JNTUK, Kakinada.
                </Text>
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
                    
                    <Text style={styles.cardBodyP1}>
                    
                24. G.Chamundeswari, “Edge based Clustering Technique with Self-Organizing Maps”, 
                ijarichamu@gmail.com, JNTUK, Kakinada.
                </Text>
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
                    
                    <Text style={styles.cardBodyP1}>
                25. P.Lalitha Kumari, “Novel approaches for feature extraction and pattern discovery models, JNTUK, Kakinada.
                </Text>
                </View>                
            </View>
            
            <View style={styles.borderTopStyle}></View>

            <Text style={styles.headText}>PHDS IN PROGRESS</Text>

            <View style={styles.cardStyle}>
                <View style={styles.left}>
                    <View style={styles.iconView}>
                        <FontAwesome name="user" size={24} color="white"  />
                    </View>
                    <View style={styles.borderStyle}></View>
                </View>
                <View style={styles.right}>
                    
                    <Text style={styles.cardBodyP1}>
                           1. M.Venkata Ramana, Topic: Texture Classification using Curvelet Transfroms, 
                            mvramana.gitam@gmail.com, 9390990500.</Text>
                </View>
                
            </View>
            <View style={styles.cardStyle}>
                <View style={styles.left}>
                    <View style={styles.iconView}>
                        <FontAwesome name="user" size={24} color="white"  />
                    </View>
                    <View style={styles.borderStyle}></View>
                </View>
                <View style={styles.right}>
                    
                    <Text style={styles.cardBodyP1}>
                        2. N.Satyanandham, Topic: Data Mining Classification Methods using mixture models, 
                        satya2606@gmail.com, 9951211169.
                        </Text>
                </View>
                
            </View>
            <View style={styles.cardStyle}>
                <View style={styles.left}>
                    <View style={styles.iconView}>
                        <FontAwesome name="user" size={24} color="white"  />
                    </View>
                    <View style={styles.borderStyle}></View>
                </View>
                <View style={styles.right}>
                    
                    <Text style={styles.cardBodyP1}>
                            3. P.S.S. Raju, Topic: Object Super market using service oriented architecture, 
                            vicky.poosapati@mvgrce.edu.in, 9849075577.
                            </Text>
                </View>
                
            </View>
            
            <View style={styles.cardStyle}>
                <View style={styles.left}>
                    <View style={styles.iconView}>
                        <FontAwesome name="user" size={24} color="white"  />
                    </View>
                    <View style={[styles.borderStyle,{height:40}]}></View>
                </View>
                <View style={styles.right}>
                    
                    <Text style={styles.cardBodyP1}>
                            4. V.Anitha, Topic:Bio-Metric Authentication using different Features, 9100807155.
                            </Text>
                </View>
                
            </View>
            <View style={styles.cardStyle}>
                <View style={styles.left}>
                    <View style={styles.iconView}>
                        <FontAwesome name="user" size={24} color="white"  />
                    </View>
                    <View style={[styles.borderStyle,{height:60}]}></View>
                </View>
                <View style={styles.right}>
                    
                    <Text style={styles.cardBodyP1}>
                            5. D.Anjani Suprithi Devi, Topic: Multimodal bio-metric authentication using feature 
                            level fusion.
                            </Text>
                </View>
                
            </View>
            <View style={styles.cardStyle}>
                <View style={styles.left}>
                    <View style={styles.iconView}>
                        <FontAwesome name="user" size={24} color="white"  />
                    </View>
                    <View style={[styles.borderStyle,{height:40}]}></View>
                </View>
                <View style={styles.right}>
                    
                    <Text style={styles.cardBodyP1}>
                            6. Ch. Sabhita, Topic: Shape based approach for tumor identification in MRI Images
                            </Text>
                </View>
                
            </View>
            <View style={styles.cardStyle}>
                <View style={styles.left}>
                    <View style={styles.iconView}>
                        <FontAwesome name="user" size={24} color="white"  />
                    </View>
                    <View style={[styles.borderStyle,{height:10}]}></View>
                </View>
                <View style={styles.right}>
                    
                    <Text style={styles.cardBodyP1}>
                            7. G.P.Kiran, Topic: Deep learning approach for image retrievals.
                            </Text>
                </View>
                
            </View>
            <View style={styles.cardStyle}>
                <View style={styles.left}>
                    <View style={styles.iconView}>
                        <FontAwesome name="user" size={24} color="white"  />
                    </View>
                    <View style={[styles.borderStyle,{height:70}]}></View>
                </View>
                <View style={styles.right}>
                    
                    <Text style={styles.cardBodyP1}>
                           8. G.Chinni Santhi, Topic :Colour Image Segmentation Using Deep Learning, 
                           santhi.gopala07@gmail.com 
                                                   
                            </Text>
                </View>
                
            </View>
           
            
            
           
        </ScrollView>

    )}
 }
 
 const styles = StyleSheet.create({
     headText:{color:'#666',fontSize:20,fontWeight:'bold',marginLeft:5 ,textAlign:'center',marginTop:20,marginBottom:20},
     cardStyle:{padding:20,flex: 1,flexDirection: "row"},
     iconStyle:{backgroundColor:'#72b626' ,borderRadius:30},
     iconView:{backgroundColor:'#72b626',borderRadius:30,width:50,justifyContent: 'center',alignItems: 'center',padding:10},
     borderTopStyle:{borderTopWidth:2,width:screenwidth,marginLeft:borderMargin,borderColor:'#ddd',justifyContent: 'center',textAlign:'center',alignItems: 'center',marginTop:30,marginBottom:50},
     borderStyle:{height:100,borderLeftWidth:1,borderColor:'#ddd',justifyContent: 'center',alignItems: 'center',marginLeft:24},
     left:{flex:1},
     right:{flex:5,marginLeft:20},
     cardBodyHeadBackground:{borderRadius:30,backgroundColor:'#d7d7d7',width:60},
     cardBodyHead:{fontSize:14,color:"#666",padding:5,textAlign:'center'},
     cardBodyP1:{fontSize:16,color:'#666',lineHeight:26},
     cardBodyP2:{fontSize:16,color:'#666',marginTop:20}
 });