import React, { Component } from 'react'
import {StyleSheet,Text, View,Image,FlatList,TouchableOpacity ,Dimensions,Modal, Alert, PermissionsAndroid,Platform} from 'react-native'
import axios from 'axios'
import { Container, Header,Card } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
const SCREEN_WIDTH=Dimensions.get('window').width
const SCREEN_HEIGHT=Dimensions.get('window').height
1
import RNFetchBlob from 'rn-fetch-blob';
import {request_storage_runtime_permission} from '../../Common/Permission'
 class ImageGallery extends Component {

    constructor(props) {

        super(props);
    
        this.state = {
    
       images:'',
       imageView:'',
       modalImageDisplay:false

    
        };
      }

    async  componentDidMount(){
      await  request_storage_runtime_permission()

    return axios({
        method: "GET",
        url:"http://www.splashbase.co/api/v1/images/latest",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          console.log("ac_sub_menus=>", response);

          this.setState({
                            images:response.data.images
                        })
                        
          return response.data;
        })
        .catch(e => {
          return false;
        });
    }
     
  
    ImageViewModal =(img,val)=>{

        // alert('asdasd')
        this.setState({
          imageView:img,
modalImageDisplay:!val
        })
      }
  
      downloadImage = (img) => {

        console.log('downloadimage',img)
        var date = new Date();
        var image_URL = img;
        var ext = this.getExtention(image_URL);
        ext = "." + ext[0];
        const { config, fs } = RNFetchBlob;
        let PictureDir = fs.dirs.PictureDir
        let options = {
          fileCache: true,
          addAndroidDownloads: {
            useDownloadManager: true,
            notification: true,
            path: PictureDir + "/image_" + Math.floor(date.getTime()
              + date.getSeconds() / 2) + ext,
            description: 'Image'
          }
        }
        config(options).fetch('GET', image_URL).then((res) => {
          Alert.alert("Image Downloaded Successfully.");
        });
      }

      getExtention = (filename) => {
        return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) :
          undefined;
      }
     render() {
      console.log('renderImages',this.state.images)
    return (
        <Container>
 

         <Modal
         // animationType="slide"
          transparent={true}
          // opacity={0.5}
          visible={this.state.modalImageDisplay}
       onRequestClose={()=>this.setState({modalImageDisplay:false})}
         >
         
          <Card style={{height:SCREEN_HEIGHT}} >
            {/* <CardItem style={{ backgroundColor: "transparent" }}> */}
            <Image style={{flex:1,width:SCREEN_WIDTH,height:SCREEN_HEIGHT}}  
resizeMode='contain'
       source={{uri: this.state.imageView}}
       
   
       />
            {/* </CardItem> */}
            <TouchableOpacity
            onPress={()=>this.downloadImage(this.state.imageView)}
            style={styles.button}>
            <Text style={{ color: '#FFF', fontSize: 14 }}>
              Download 
            </Text>
          </TouchableOpacity>
          </Card>
         
        </Modal>
        <Grid style={{flex:1,padding:4}}>

            <FlatList
            numColumns={2}
  data={this.state.images}
  renderItem={({item}) => 
  
   <Col style={{ backgroundColor: '#FFF',height:200,width:200,padding:3 }}>
   <TouchableOpacity onPress={()=>this.ImageViewModal(item.url,this.state.modalImageDisplay)}>
  <Image 
  style={{height:200}}
  source={{uri:item.url}}
   resizeMode='cover'
  />
   </TouchableOpacity>
  </Col>
 
}
/>
         

          
        
        </Grid>
      </Container>
    )
  }
}


export default ImageGallery;


const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  QR_text: {
    color: '#000',
    fontSize: 19,
    padding: 8,
    marginTop: 12
  },
  button: {
    backgroundColor: 'skyblue',
    alignItems: 'center',
    padding: 12,
    width: 300,
    marginTop: 14
  },
});