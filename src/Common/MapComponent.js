import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import MapView  from 'react-native-maps';
const MapComponent = (props) => {
return (
    // <View>
       <MapView
  
        style={styles.map}
        region={{
          latitude:parseFloat(props.lat),
          longitude:parseFloat(props.long),
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        <MapView.Marker
        coordinate={{
           latitude:parseFloat(props.lat),
          longitude:parseFloat(props.long)
        }}
        
      />
      </MapView>
    // </View>
)
};


const styles = StyleSheet.create({
    
    map: {
      flex:1,
      ...StyleSheet.absoluteFillObject,
    },
   
   });

export default MapComponent;
