
import React from 'react';
import { StyleSheet, View,Text, ScrollView,TouchableHighlight,Button } from 'react-native';





export default  function Screens({navigation,title}) {
  


  return (
    
    <ScrollView style={styles.container} >
      <View>
      <Text style={styles.textHead}>Dr. Ch. Satyanarayana</Text>
      <Text style={styles.textp1}>Professor of Computer Science and Engineering, {"\n"}Jawaharlal Nehru Technological University Kakinada.</Text>
      <Text style={styles.textp2}>Dr. Ch. Satyanarayana is currently working as Professor in the Department of Computer Science and Engineering and Registrar, Jawaharlal Nehru Technological University Kakinada, AP, INDIA. He received his PhD in 2007 from JNTU. He has 20+ years of Teaching, Research experience and 10 years of Administrative Experience in various capacities like Director Academic and Planning, Controller of Examinations and Head of the Department. He is member of various administrative committees governed by AICTE, UGC etc., He has supervised 25 PhD students and 200+ Master’s Students. He has published 125+ research papers in international journals and international conference proceedings. He is a Senior Member of IEEE. His research interests include Image Processing, Speech Recognition, Pattern Recognition, Network Security and Big data analytics and Computational Intelligence.</Text>
      
      
      </View>
      <View >
      
      <TouchableHighlight 
                style ={{
                    padding:10,
                    borderRadius:30,
                    backgroundColor : "#72b626",
                    marginLeft :50,
                    marginRight:50,
                    marginTop :50,
                    marginBottom:50
                    
                }}>
            <Button            
            title="MORE ABOUT ME"
            color="white"
            accessibilityLabel="Learn more about this button"
            onPress={()=> navigation.navigate('ABOUT')}
          /> 
          </TouchableHighlight> 
      </View>

      
      </ScrollView>
     
    
  )

}

const styles = StyleSheet.create({
  container: {padding:20,textAlign:'justify'},
  textHead:{ fontSize:32,fontWeight:'bold',color:'#72b626'},
  textp1:{fontSize:15,color:'#666',marginTop:50,textAlign:'justify',lineHeight:28},
  textp2:{fontSize:16,marginTop:50,textAlign:'justify',lineHeight:28},
  buttonStyle:{backgroundColor:'#72b626',padding:20}
  
});