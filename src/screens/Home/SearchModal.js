import React from 'react';
import { Text, View,Modal,TouchableHighlight,FlatList,StyleSheet } from 'react-native';
import { SearchBar,ListItem } from 'react-native-elements';



//. filter(item=>);
const SearchbarModal = (props) => {

    let spclity = props.address.filter(items => {
        console.log('lowercase==>', props.search)
        let str = items.placeName.toLowerCase();
        let strStart = props.search.toLowerCase();
        return str.startsWith(strStart)
      })  
return (
    <View>
       <Modal
          animationType="slide"
          transparent={false}
          visible={props.modalVisible}
          onRequestClose={() =>props.openSearchModal(props.modalVisible)}>
      
   

<View>
<SearchBar

containerStyle={{backgroundColor:'skyblue'}}
//inputStyle={{backgroundColor:'skyblue'}}
placeholder="Search Here..."
onChangeText={(value) => props.updateSearch(value)}
 value={props.search}
/> 

</View>
<View style={{flex:2}}>
<FlatList
data={spclity}
renderItem={({item}) => <ListItem
//   key={i}

title={item.placeName}
onPress={()=>props.selectPlace(item)}
bottomDivider
/>}
/>
</View>
{/* </View> */}
        </Modal>
    </View>
)};

export default SearchbarModal;
