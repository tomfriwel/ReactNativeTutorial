import React, { Component } from 'react';
import { Linking, View, Button, Text, StyleSheet } from 'react-native';

//open totest://link/tomfriwel in browser

export default class extends Component {
    componentWillMount() {
        console.log(this)
    }
    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => {
                        Linking.openURL('https://bing.com');
                    }}
                    title="bing"
                ></Button>
                <Text>{'name is ' + this.props.navigation.state.params.name}</Text>
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