


import { Navigation } from 'react-native-navigation';

import Icon from 'react-native-vector-icons/Ionicons';







const HomeBottomTab = (indd) => {
  // console.log('bo',this.props)
  Promise.all([
    Icon.getImageSource("md-home", 30),
    Icon.getImageSource("md-notifications", 30),
    Icon.getImageSource("md-calendar", 30),
    Icon.getImageSource("md-help-buoy", 30),

  ]).then(sources => {

  

    Navigation.setRoot({
      root: {
        sideMenu: {
          left: {
            component: {
              id: 'leftSideComponentId',
              name: 'SideMenuPage',

            }
          }, center: {
         
            bottomTabs: {

              children: [{

                stack: {
                  id: "myId",  //ltr try removing or editing it
                  children: [{
                    component: {

                      name: 'Home',
                      passProps: {
                        // student_info: login_info
                      }

                    },

                  }],
                  options: {
                    bottomTab: {
                      text: 'Home',
                      icon: sources[0],
                      testID: 'FIRST_TAB_BAR_BUTTON',

                    },
                    topBar: {

                      drawBehind: true,
                      visible: true,
                      title:{
                        text:'Home',
                        alignSelf: 'center',
                      },
backgroundColor:{
  color: 'skyblue',
}

                    },
                    statusBar: {
                      backgroundColor: "#2AB750",
                      style: 'white',
                    },
                    layout: {
                      orientation: ['portrait'],
                    },


                  }
                }
              },
              {
                stack: {

                  children: [{
                    component: {
                      id: "SecondScreenId",
                      // name: access ? 'react-skill.Sell' : 'react-skill.NotAllowed',
                      name: 'ScanQr',
                    },
                  }],
                  options: {
                    bottomTab: {

                      visible: true,
                      text: 'Scan',
                      icon: sources[1],
                      testID: 'SECOND_TAB_BAR_BUTTON',
                      currentTabIndex: 1,
                      badge: ''
                      // badgeColor: 'red',
                    },
                    topBar: {
                      // hideOnScroll: true,
                      drawBehind: true,
                      visible: true,
                      title: {
                        text: 'Scan Code'
                      },
                    },
                    statusBar: {
                      backgroundColor: "#2AB750",
                      style: 'white',
                    },
                    layout: {
                      orientation: ['portrait'],
                    },
                  },
                }

              },
              {
                stack: {
                  id: "myId",
                  children: [{
                    component: {
                      // name: access ? 'react-skill.Sell' : 'react-skill.NotAllowed',
                      name: 'ImageGallery',
                    },
                  }],
                  options: {
                    bottomTab: {
                      visible: true,
                      text: 'Gallery',
                      icon: sources[2],
                      testID: 'SECOND_TAB_BAR_BUTTON1'
                    },
                    topBar: {
                      drawBehind: true,
                      visible: true,
                      title: {
                        text: 'Image Gallery'
                      },

                    },
                    statusBar: {
                      backgroundColor: "#2AB750",
                      style: 'white',
                    },
                    layout: {
                      orientation: ['portrait'],
                    },
                  },

                }
              },
              {
                stack: {
                  id: "myId",
                  children: [{
                    component: {
                      // name: access ? 'react-skill.Sell' : 'react-skill.NotAllowed',
                      name: 'PaymentInfo',
                    },
                  }],
                  options: {
                    bottomTab: {
                      visible: true,
                      text: 'Payement',
                      icon: sources[3],
                      testID: 'SECOND_TAB_BAR_BUTTON1'
                    },
                    topBar: {
                      drawBehind: true,
                      visible: true,
title:{
    text:'Payement Details'
}
                    },
                    statusBar: {
                      backgroundColor: "#2AB750",
                      style: 'white',
                    },
                    layout: {
                      orientation: ['portrait'],
                    },

                  },


                }
              }],
              options: {
                bottomTabs: {
                  currentTabIndex: indd
                }
              }

            },

            // }],


            // }
          }
        },
      },

    });
  });
};



export default HomeBottomTab;





