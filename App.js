// import React, { Component } from 'react';
// import { Button, StyleSheet, Text, View, Screen, Spinner, AppRegistry, Image, Switch } from 'react-native';

import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet, PermissionsAndroid } from 'react-native'

class SwichExample extends Component {
   state = {
      initialPosition: 'unknown',
      lastPosition: 'unknown',
   }
   watchID: ?number = null;

   componentDidMount = () => {
      navigator.geolocation.getCurrentPosition(
         (position) => {
            const initialPosition = JSON.stringify(position);
            this.setState({ initialPosition });
         },
         (error) => alert(error.message),
         { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
      this.watchID = navigator.geolocation.watchPosition((position) => {
         const lastPosition = JSON.stringify(position);
         this.setState({ lastPosition });
      });
   }
   componentWillUnmount = () => {
      navigator.geolocation.clearWatch(this.watchID);
   }
   render() {
      return (
         <View style = {styles.container}>
            <Text style = {styles.boldText}>
               Initial position:
            </Text>

            <Text>
               {this.state.initialPosition}
            </Text>

            <Text style = {styles.boldText}>
               Current position:
            </Text>

            <Text>
               {this.state.lastPosition}
            </Text>
         </View>
      )
   }
}
export default SwichExample

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 50
   },
   boldText: {
      fontSize: 35,
      color: 'red',
   }
})

// export default class App extends React.Component {
//
// myPress = () => {
//   console.log('Button was pressed')
//   console.log()
// };
//
//  randomHex = () => {
//         let letters = '0123456789ABCDEF';
//         let color = '#';
//         for (let i = 0; i < 6; i++ ) {
//             color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color;
//     }
//
// render() {
//     return (
//       <View style={styles.container}>
//         <Text>Welcome to our hack</Text>
// 	<Text> </Text>
//
//   <Image
//             style={{width: 200, height: 200}}
//             source={{uri: 'http://2018.swamphacks.com/public/img/justisland.png'}}
//           />
//
// <Button
//   onPress={this.myPress}
//   title="Show Me The Menu"
//   color="#8F8F29"
// />
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#bafcd6',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//
// });
