import React, { Component } from 'react'
import { View ,StyleSheet,Dimensions} from 'react-native';

import { SearchBar } from 'react-native-elements';
import SearchModal from './Home/SearchModal';
import MapComponent from '../Common/MapComponent';
const SCREEN_WIDTH = Dimensions.get("window").width;
// const SCREEN_HEIGHT = Dimensions.get("window").height;

// import { Navigation } from "react-native-navigation";

export default class Home extends Component {

constructor(props) {
  super(props)
  this.state={
    search:'',
    address:[{
      placeName:'Btm Bangalore',
      lat:'12.916576',
      long:'77.610115'
  },
  {
    placeName:'Belgaum',
    lat:'15.849695',
    long:'74.497673'
},
{
    placeName:'New York',
    lat:'40.712776',
    long:'-74.005974'
}],
modalVisible:false,
lat:19.075983,
long:72.877655
  }
}
  updateSearch = search => {
    console.log('oooo',search)
    this.setState({ search });
  };

   openSearchModal=(val)=> {
   
    this.setState({
      modalVisible:!val
    })
  }

  selectPlace =(place)=>{
this.setState({
  lat:place.lat,
  long:place.long,
  modalVisible:false
})
  }
  render() {
    console.log('list',this.state.lat,this.state.long)

  
    return (
      <View style={styles.container}>
<SearchModal 
modalVisible={this.state.modalVisible}
address={this.state.address}
selectPlace={this.selectPlace}
openSearchModal={this.openSearchModal}
search={this.state.search}
updateSearch={this.updateSearch}
/>
<MapComponent 
lat={this.state.lat}
long={this.state.long}
/>
     
<View style={styles.serchbar}>
 <SearchBar

containerStyle={{backgroundColor:'skyblue'}}

        placeholder="Search Here..."
        onChangeText={() => this.openSearchModal(this.state.modalVisible)}
        value={this.state.search}
      /> 
     
</View>
    
    </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
   
    flex:1,
    
  },
  serchbar:{

    bottom:0,
    position:'absolute',
    zIndex:999,
    width:SCREEN_WIDTH
  },

 });