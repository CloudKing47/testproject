import { Navigation } from "react-native-navigation";





import Login from './src/screens/Login';


import SideMenuPage from './src/screens/SideMenuPage';
import Home from './src/screens/Home';
import Searchbar from './src/screens/Searchbar';
import ScanQr from './src/screens/ScanQr/ScanQr';
import ImageGallery from './src/screens/ImageGallery/ImageGallery';
import PaymentInfo from './src/screens/PaymentInfo/PaymentInfo';







Navigation.registerComponent(`Login`, () => Login);
Navigation.registerComponent(`Tester`, () => Tester);

Navigation.registerComponent(`SideMenuPage`, () => SideMenuPage);
Navigation.registerComponent(`Home`, () => Home);
Navigation.registerComponent(`Searchbar`, () => Searchbar);
Navigation.registerComponent(`ScanQr`, () => ScanQr);
Navigation.registerComponent(`ImageGallery`, () => ImageGallery);
Navigation.registerComponent(`PaymentInfo`, () => PaymentInfo);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'MAIN_STACK',
        children: [{
          component: {
            name: 'Login',

          }
        }],
        options: {
          topBar: {
            visible: false,
            drawBehind: true,

          }
        },

      },
    }
  });

  

});