/**
 * @format
 */
import React, { Component } from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';

class App extends Component {
    render() {
        let pic = {
            // uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
            uri: 'http://mabsapps.com/wp-content/uploads/2018/11/cropped-mabsapps-logo-black-3.png'
        };
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>AlSalaamuallykum</Text>
                <Image source={pic} style={{ width: 200, height: 100 }}></Image>
            </View>
        );
    }
}
AppRegistry.registerComponent(appName, () => App);
