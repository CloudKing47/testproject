import React, { Component } from 'react';
import {View,SafeAreaView,StyleSheet,Image,TouchableHighlight,Dimensions,TouchableOpacity,Modal,FlatList,Animated,KeyboardAvoidingView,Platform,ScrollView} from 'react-native';

const SCREEN_WIDTH=Dimensions.get('window').width
const SCREEN_HEIGHT=Dimensions.get('window').height
import { Container, Header, Left, Body, Right, Button as Buttons, Title, Text, Content, CardItem ,Card,Thumbnail,Form,Textarea, Item, Label,Input} from 'native-base';

import {Button,} from 'react-native-elements'


import HomeBottomTab from './HomeTabs/HomeBottomTab';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {

      isFocused:false
    };
  }


  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    })
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    })
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })
    this.frontOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [1, 0]
    })
    this.backOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [0, 1]
    })
  }


  componentDidMount() {
  
        //   alert('asd')
        if (this.value >= 90) {
          Animated.spring(this.animatedValue,{
            toValue: 0,
            friction: 8,
            tension: 10,
            useNativeDriver:true
    
          }).start(()=>{
            //   this.flipCard()
          });
        } else {
          Animated.spring(this.animatedValue,{
            toValue: 180,
            friction: 8,
            tension: 10,
            useNativeDriver:true
          }).start(()=>{
            this.flipCard()
          });
        }
    
      }
  

  flipCard =()=>{
    if (this.value >= 90) {
        Animated.spring(this.animatedValue,{
          toValue: 0,
          friction: 8,
          tension: 10,
          useNativeDriver:true
  
        }).start(()=>{
            this.flipCard()
          });
      } else {
        Animated.spring(this.animatedValue,{
          toValue: 180,
          friction: 8,
          tension: 10,
          useNativeDriver:true
        }).start(()=>{
            this.flipCard()
          });
      }
  }

  handleFocus = (event)=>{
this.setState({
  isFocused:true
})
  }

  handleBlur=()=>{
    this.setState({
      isFocused:false
    })
  }

  

  loginHandler =()=>{

    HomeBottomTab()
  }

  render() {


    const frontAnimatedStyle = {
        transform: [
          { rotateY: this.frontInterpolate }
        ]
      }
      const backAnimatedStyle = {
        transform: [
          { rotateY: this.backInterpolate }
        ]
      }
  

      const {isFocused}=this.state
    return (
      
      <ScrollView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
  >

<View style={styles.container}>

      <View style={styles.logoView}>
             <Card style={styles.logoCard} transparent>

           <Animated.View style={[styles.flipCard, frontAnimatedStyle, {opacity: this.frontOpacity}]}>
              <Image style={{flex:1,width:150,height:150,borderRadius:90}}  
resizeMode='cover'
       source={{uri:'https://previews.123rf.com/images/jemastock/jemastock1903/jemastock190312512/119696107-young-man-smiling-abstract-cartoon-profile-vector-illustration-graphic-design.jpg'}}
       
   
       />
          </Animated.View>
          <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle, {opacity: this.backOpacity}]}>
            {/* <Text style={styles.flipText}> */}
            <Image style={{flex:1,width:150,height:150,borderRadius:90}}  
resizeMode='cover'
source={{uri:'https://previews.123rf.com/images/jemastock/jemastock1903/jemastock190312512/119696107-young-man-smiling-abstract-cartoon-profile-vector-illustration-graphic-design.jpg'}}
       
   
       />
            {/* </Text> */}
          </Animated.View>
       


      </Card>

      </View>

      <View style={styles.textInputView}>

          <View style={styles.userInputView}>
          <Item rounded>
            <Input placeholder='Phone/Email' style={isFocused ?styles.inputNameonFoucsed :styles.inputName} 
            getRef={input => {
      this.firstNameRef = input;
    }}
    onFocus={this.handleFocus}
    onBlur={this.handleBlur}
    //underlineColorAndroid={isFocused ? 'skyblue':'gray'}
    />
          </Item>
          </View>
          <View style={styles.passInputView}>
          <Item rounded>
            <Input placeholder='Password' style={isFocused ? styles.inputNameonFoucsed:styles.inputName}
             onFocus={this.handleFocus}
             onBlur={this.handleBlur}
            />
          </Item>
</View>
<View style={styles.buttonView}>
      
  
<Button
onPress={()=>this.loginHandler()}
buttonStyle={{
    // backgroundColor:'skyblue'
     width:SCREEN_WIDTH*0.90,
    borderColor:'skyblue',
    borderBottomColor:'skyblue',
    borderWidth:1
}}
containerStyle={{

}}
title="Login"
type="outline"
titleStyle={{
color:'skyblue'
}}
/>
</View>


<View style={styles.buttonView}>
      
  
<Button

buttonStyle={{
    // backgroundColor:'skyblue'
     width:SCREEN_WIDTH*0.90,
    borderColor:'skyblue',
    borderBottomColor:'skyblue',
    borderWidth:1
}}
containerStyle={{

}}
title="Login with facebook"
type="outline"
titleStyle={{
color:'skyblue'
}}
/>
</View>
      </View>



   

</View>

      

   </ScrollView>   
    
   
    );
  }
}


const styles = StyleSheet.create({
    container: {
       
        height:SCREEN_HEIGHT
      },
      logoView:{
        flex:0.5,
        alignItems: "center",
        justifyContent: "center",
       
      },
      textInputView:{
        flex:1,
        
      },
      logoCard :{
        // flex: 1,
          alignItems: "center",
         justifyContent: "center",
       
      },
      userInputView:{

justifyContent:'center',
alignItems:'center',
margin:15
      },

      passInputView:{
      
        justifyContent:'center',
        alignItems:'center',
        margin:15
  
      },
      inputName:{
flex:1,

borderWidth:1,
borderRadius:21,
borderColor:'skyblue',
      },
      inputNameonFoucsed:{
        flex:1,
         borderColor:'gray',
        borderWidth:1,
        borderRadius:21
        
              },
              buttonView:{
                justifyContent:'center',
                alignItems:'center',
                margin:15
              },
              
      flipCard: {
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'skyblue',
        backfaceVisibility: 'hidden',
        borderRadius: 100,
      },
      flipCardBack: {
        backgroundColor: "skyblue",
        position: "absolute",
        top: 0,
        borderRadius: 100,
        
      },
      flipText: {
        width: 90,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
      }
  });
  