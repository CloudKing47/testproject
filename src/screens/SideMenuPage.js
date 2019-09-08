import React, { Component } from 'react';
import { View, StyleSheet ,Image} from 'react-native';
import { Container, Content, Text, Button, Icon, Left, Body,ListItem} from 'native-base';

class SideMenuPage extends Component {

 
 

 
    
  
    render() {
        return (
          <Container style={{width:"80%"}}>
          <Container style={{justifyContent:'center',alignItems:'center',height:'10%',backgroundColor:'skyblue',flex:1}}>
     
        

         
              <Image resizeMode={'cover'} source={{uri:'https://previews.123rf.com/images/jemastock/jemastock1903/jemastock190312512/119696107-young-man-smiling-abstract-cartoon-profile-vector-illustration-graphic-design.jpg'}} style={{height: 150, width: 150, borderRadius:90}}/>
        
          <View  style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'#FFF',top:15}}>sadsad</Text>
          </View>
       
          </Container>

            <Container style={styles.container}>
     
            <Content >
         

              <ListItem icon>
           
            
           
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={styles.iconStyle} transparent>
                <Icon active type='FontAwesome' name="home" style={{color:'#fff'}}/>
              </Button>
            </Left>
            <Body>
              <Text style={styles.textStyle}>Home</Text>
            </Body>
            
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={styles.iconStyle} transparent>
                <Icon active type='FontAwesome' name="credit-card" style={{color:'#fff',fontSize: 23,}}/>
              </Button>
            </Left>
            <Body >
              <Text style={styles.textStyle}>Payment</Text>
            </Body>
            
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={styles.iconStyle}  transparent>
                <Icon active type='FontAwesome' name="bullhorn" style={{color:'#fff'}}/>
              </Button>
            </Left>
            <Body>
              <Text style={styles.textStyle}>Scan code</Text>
            </Body>
            
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={styles.iconStyle} transparent>
                <Icon active type='FontAwesome' name="cogs"  style={{color:'#fff'}}/>
              </Button>
            </Left>
            <Body>
              <Text style={styles.textStyle}>Gallery</Text>
            </Body>
            
          </ListItem>
            </Content>
          </Container>
          </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'skyblue',
        flex:2
      
    },
    textStyle:{
        color:'#FFF'
    },
    iconStyle:{
backgroundColor:'skyblue',
color:'#FFF'
    }
});


export default SideMenuPage;
