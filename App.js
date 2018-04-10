/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import DemoList from './pages/DemoList'
import NavigationService from './utils/NavigationService'

export default class App extends React.Component {
  render() {
    return <DemoList
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  }
}