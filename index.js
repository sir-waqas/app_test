/**
 * @format
 */
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';

class App extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>AlSalaamuallykum</Text>
            </View>
        );
    }
}
AppRegistry.registerComponent(appName, () => App);
