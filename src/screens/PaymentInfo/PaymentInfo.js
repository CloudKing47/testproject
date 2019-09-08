import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,

  View,
  TouchableOpacity,
  Animated
} from 'react-native';
import { Container, Header, Left, Body, Right, Button as Buttons, Title, Text, Content, CardItem ,Card,Thumbnail,Form,Textarea, Item, Label} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import validator from "validator";

export default class PaymentInfo extends Component {


    constructor(props) {

        super(props);
    
        this.state = {
    
     name:'',
     nameError:null,
     nameStatus:false,
     cvv:'',
     cvvError: null,
     cvvStatus: false

    
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

  flipCard() {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue,{
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
    } 
    else {
      Animated.spring(this.animatedValue,{
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }

  }

  flipCard2() {
    Animated.spring(this.animatedValue,{
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
  }


  changeText =(val)=>{
console.log('textinput',val.length,this.value)
let vl = validator.isLength(val, 16, 16);

    if (vl) {
      // Keyboard.dismiss();
    //  alert('asd')
      this.setState({
        name: val,
        nameError: null,
        nameStatus: true
      });
    } else {
      this.setState({
        nameError: "Please enter valid card number",
        nameStatus: false
      });
    }
if(val.length==16)
{
    // alert('jj')
       
            this.flipCard()
        

}
// else{
//     this.flipCard()
// }

if(val.length<16)
{
    if(this.value==180)
        {
            this.flipCard()
        }
}
this.setState({
    name:val
})
  }


  changeTextCvv =(val)=>{ 
    this.setState({
      cvv:val
  })
  this.flipCard2()
    let vl = validator.isLength(val, 3, 3);
console.log('validateData=>',vl)
    if (vl) {
      // Keyboard.dismiss();
    //  alert('asd')
      this.setState({
        cvv: val,
        cvvError: null,
        cvvStatus: true
      });
    } else {
      this.setState({
        cvvError: "Please enter valid CVV",
        cvvStatus: false
      });
    }
   
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

    return (
      <View style={styles.container}>
        <View>
          <Animated.View style={[styles.flipCard, frontAnimatedStyle, {opacity: this.frontOpacity}]}>
          <View style={{flex:1}}/>
         
          <View style={{flex:1}}>
            <Text style={styles.flipTextMain}>
             {this.state.name}
            </Text>
            </View>
            <View style={{flex:1}}/>
          </Animated.View>
          <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle, {opacity: this.backOpacity}]}>
          <View style={{flex:1}}/>

     
          <View style={{flex:1,backgroundColor:'black'}}/>

      
          <View style={{flex:1}}>
          <Text style={styles.flipText}>
              {this.state.cvv}
            </Text>
            </View>
           
          </Animated.View>
        </View>
      
         <Input
           maxLength={16}
         keyboardType='number-pad'
          underlineColorAndroid='false'
          inputContainerStyle={{ borderBottomWidth: 0,border:!this.state.nameError==""? "red" : "#388e3c"}}
         containerStyle={{borderWidth:1,marginTop:10,borderColor:'skyblue'}}
  placeholder='Card Number'
  onChangeText={(value)=>this.changeText(value)}
  value={this.state.name}
  leftIcon={
    <Icon
      name='user'
      size={24}
      color='black'
    />
  }
  errorMessage={this.state.nameError}
/>

  <Input
  maxLength={3}
  // secureTextEntry={true}
  inputContainerStyle={{ borderBottomWidth: 0,border:!this.state.cvvError==""? "red" : "#388e3c"}}
    keyboardType='number-pad'
  underlineColorAndroid='false'
   containerStyle={{borderWidth:1,marginTop:10,borderColor:'skyblue'}}
  placeholder='CVV'
  onChangeText={(value)=>this.changeTextCvv(value)}
  value={this.state.cvv}
  leftIcon={
    <Icon
      name='credit-card'
      size={24}
      color='black'
    />
   
  }

  errorMessage={this.state.cvvError}

/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding:10,
  //  justifyContent: "center",
  marginTop:70
  },
  flipCard: {
    width: 370,
    height: 200,
   // alignItems: 'center',
   // justifyContent: 'center',
    backgroundColor: 'skyblue',
    backfaceVisibility: 'hidden',
    borderRadius:10
  },
  flipCardBack: {
    backgroundColor: "#009688",
    position: "absolute",
    top: 0,
  },
  flipText: {
    width: 90,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    alignSelf:'flex-end'
  },
  flipTextMain: {
    // width: 90,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    padding:20
  
  },
  inputNameonFoucsed:{
    flex:1,
     borderColor:'gray',
    borderWidth:1,
    borderRadius:21
    
          },
});
