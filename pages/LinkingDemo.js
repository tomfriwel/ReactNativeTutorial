//https://reactnavigation.org/docs/deep-linking.html
//https://docs.expo.io/versions/latest/guides/linking.html

import React, { Component } from 'react';
import { Linking, View, Button, Text, StyleSheet } from 'react-native';

//open totest://link/tomfriwel in browser

export default class extends Component {
    componentWillMount() {
        console.log(this)
    }
    render() {
        let info
        if (this.props.navigation.state.params && this.props.navigation.state.params.name) {
            info = 'name is ' + this.props.navigation.state.params.name
        }
        else {
            info = 'no name'
        }
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => {
                        Linking.openURL('https://bing.com');
                    }}
                    title="bing"
                ></Button>
                <Text>{info}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#eee'
    }
})