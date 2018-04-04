import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import DefaultPage from '../components/DefaultPage'

export default class extends DefaultPage{
    render() {
        return (
            <View>
                <Text>Default Page</Text>
            </View>
        )
    }
}