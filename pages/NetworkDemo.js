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
import network from '../utils/network'

export default class extends DefaultPage {
    componentWillMount() {
        console.log('componentWillMount child')
        console.log(this.props.navigation.state.key)
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