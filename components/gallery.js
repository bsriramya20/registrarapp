import React, { Component } from 'react';
import { StyleSheet, Text,flex,alignSelf, View,Image,Button,TouchableOpacity} from 'react-native';
import {Card} from 'react-native-paper';
import { Content,Icon,Thumbnail,Item,Input, Row, } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';


export default class Home extends Component
{
  
  constructor(props)
  {
    super(props);
   const EducationQualifcation =[
      {Id:'1', year:'2007',EducationQualifcation:'Ph.D.',Collage:'Jawaharlal Nehru Technological University',Course:'Computer Science',image:'https://i2.wp.com/commsverse.blog/wp-content/uploads/2017/07/ant-man-portrait-session-1806x1254.jpeg?fit=1806%2C1254&ssl=1'},
      {Id:'2', year:'1998',EducationQualifcation:'MASTER DEGREE( m.tECH)',Collage:'ANDHRA UNIVERSITY',Course:'Computer Science and Technology',image:'https://png.pngitem.com/pimgs/s/520-5208506_fat-reduction-questions-thinking-a-person-for-youtube.png'},
      {Id:'3', year:'1996',EducationQualifcation:'BACHELOR DEGREE(B.TECH)',Collage:'ANDHRA UNIVERSITY',Course:'Computer Science and Engineering',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpW_7Igi_y5X2wXkVwRAaHvP8Ogab-nP57g81V9oSvew&usqp=CAU&ec=45682160'},
      {Id:'4', year:'1990',EducationQualifcation:'INTERMEDIATE',Collage:'APR JUNIOR COLLEGE, NAGARJUNA SAGAR,GUNTUR DIST',Course:'MPC',image:'https://i2.wp.com/commsverse.blog/wp-content/uploads/2017/07/ant-man-portrait-session-1806x1254.jpeg?fit=1806%2C1254&ssl=1'},
      {Id:'5', year:'1988',EducationQualifcation:'SSC',Collage:'AP RESIDENTIAL HIGH SCHOOL, PULIGDDA, KRISHNA DIST',Course:'',image:'https://png.pngitem.com/pimgs/s/520-5208506_fat-reduction-questions-thinking-a-person-for-youtube.png'}
    ];

    this.state={
       studentsList : EducationQualifcation,
       usersFiltered : EducationQualifcation

    };
  }

//   searchUser(text){
//     // alert(text);
//     this.setState({
//       usersFiltered: this.state.studentsList.filter(i =>
//         i.year.toLowerCase().includes(text.toLowerCase()),
//       ),
//     });
//   };

//   onClickAboutButton = ()=>{
//     this.props.navigation.navigate('About');
//  }

  render()
  {
  
  return (
    
   <View style={styles.container}>
    {/* <Button title="Go to about Page" onPress={this.onClickAboutButton}/> */}
     {/* <Header /> */}
     {/* <Item searchBar rounded>
       <Icon name="search"  />
       <Input placeholder="Search" onChangeText={text => this.searchUser(text)} />  
     </Item> */}
     <Content>
       <Text style={{marginLeft:50,fontSize:20,fontWeight:'bold',flex:-1}}>EDUCATIONAL QUALIFICATIONS</Text>
      
          {this.state.usersFiltered.map(item => (
              <TouchableOpacity key={item.Id} >
           <Card  style={styles.list} key={item.Id}>
           {/* <View style={styles.item}  >
           <Image source = {{uri:`${item.image}`}}
                style = {{ width: 90, height: 90,marginLeft:10 }}
                />
          </View> */}
          <View style={{borderRadius:10,marginTop:-10,marginLeft:15,position:'absolute'}}>
          <Octicons name="primitive-dot" size={70} color="green" />
          </View>
          <View style={{borderRadius:10,marginTop:15,marginLeft:20,position:'absolute'}}>
          <FontAwesome5 name="graduation-cap" size={20} color="white"/>
          </View>
          <View style={styles.cardview}>
            <Text style={styles.incard,{backgroundColor:'#e8e8e8'}}>{item.year}</Text>
          </View>
          <View style={styles.cardview}>
            <Text style={styles.incard,{fontWeight:'bold'}}>{item.EducationQualifcation}</Text>
          </View>
          <View style={styles.cardview}>
            <Text style={styles.incard,{marginTop:-15}}>{item.Collage}</Text>
          </View>
          <View style={styles.cardview}>
            <Text style={styles.incard}>{item.Course}</Text>
          </View>
        </Card>
        </TouchableOpacity>
          ))}
        
        {/* <FlexDirectionBasics /> */}
        <Text style={{marginLeft:50,fontSize:20,fontWeight:'bold',flex:-1}}>DETAILS OF DOCTORAL THESIS</Text>
   
          {this.state.usersFiltered.map(item => (
              <TouchableOpacity key={item.Id} >
           <Card  style={styles.list} key={item.Id}>
           {/* <View style={styles.item}  >
           <Image source = {{uri:`${item.image}`}}
                style = {{ width: 90, height: 90,marginLeft:10 }}
                />
          </View> */}
          <View style={{borderRadius:10,marginTop:-10,marginLeft:15,position:'absolute'}}>
          <Octicons name="primitive-dot" size={70} color="green" />
          </View>
          <View style={{borderRadius:10,marginTop:15,marginLeft:20,position:'absolute'}}>
          <FontAwesome5 name="graduation-cap" size={20} color="white"/>
          </View>
          <View style={styles.cardview}>
            <Text style={styles.incard,{backgroundColor:'#e8e8e8'}}>{item.year}</Text>
          </View>
          <View style={styles.cardview}>
            <Text style={styles.incard,{fontWeight:'bold'}}>{item.EducationQualifcation}</Text>
          </View>
          <View style={styles.cardview}>
            <Text style={styles.incard,{marginTop:-15}}>{item.Collage}</Text>
          </View>
          <View style={styles.cardview}>
            <Text style={styles.incard}>{item.Course}</Text>
          </View>
        </Card>
        </TouchableOpacity>
          ))}
        </Content>
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    margin:6,
      borderLeftColor:'#000000',
    },
  cardview:{
      flex:1,
      flexDirection:'row',
       padding: 10,
        marginLeft:100,
      },
    incard:{
      flex:1,
      fontSize:15,
    },
    item:{
      alignSelf: "flex-start",
      position:'absolute',
      paddingTop: 15
      }
});