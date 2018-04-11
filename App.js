/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// import 'expo'
import React from 'react'
import { Platform } from 'react-native'
import DemoList from './pages/DemoList'
import NavigationService from './utils/NavigationService'

// on Android, the URI prefix typically contains a host in addition to scheme
const prefix = Platform.OS == 'android' ? 'totest://totest/' : 'totest://';

export default class App extends React.Component {
    render() {
        return <DemoList
            uriPrefix={prefix}
            ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
            }}
            onNavigationStateChange={(prevState, newState, action)=>{
                // console.log(new Date())
                // console.log(prevState)
                // console.log(newState)
                // console.log(action)
            }}
        />
    }
}