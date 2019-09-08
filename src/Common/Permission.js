
import {Alert, PermissionsAndroid} from 'react-native'

export async function request_storage_runtime_permission() {

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          'title': 'ReactNativeCode Storage Permission',
          'message': 'ReactNativeCode App needs access to your storage to download Photos.'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  
        //Alert.alert("Storage Permission Granted.");
      }
      else {
  
        Alert.alert("Storage Permission Not Granted");
  
      }
    } catch (err) {
      console.warn(err)
    }
  }