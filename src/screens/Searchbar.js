import React, { Component } from 'react'
import { Text, View,FlatList ,StyleSheet,Dimensions} from 'react-native'
// const SCREEN_WIDTH = Dimensions.get("window").width;
// const SCREEN_HEIGHT = Dimensions.get("window").height;
import { SearchBar,ListItem } from 'react-native-elements';
export default class Searchbar extends Component {

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
        }]
        }
      }
  render() {
    return (
      <View style={styles.conatiner}>

          <View style={styles.serchbar}>
 <SearchBar
 
containerStyle={{backgroundColor:'skyblue'}}
//inputStyle={{backgroundColor:'skyblue'}}
        placeholder="Search Here..."
        onChangeText={() => this.openSearchModal()}
        value={this.state.search}
      /> 
     
</View>
<View style={{flex:2}}>
<FlatList
  data={this.state.address}
  renderItem={({item}) => <ListItem
//   key={i}
 
  title={item.placeName}

  bottomDivider
/>}
/>
      </View>
</View>
     
    )
  }
}

const styles = StyleSheet.create({
    conatiner: {
   
      flex:1,
 
     
    }
   });