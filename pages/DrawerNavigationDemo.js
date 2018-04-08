// https://reactnavigation.org/docs/drawer-based-navigation.html

import React from 'react';
import { Text, View, Image, Button, StyleSheet, StatusBar } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

class MyHomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../assets/images/icon.png')}
                // source={require('./notif-icon.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#6a51ae"
                />
                <Button
                    onPress={() => this.props.navigation.navigate('Notifications')}
                    title="Go to notifications"
                />
            </View>
        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../assets/images/icon.png')}
                // source={require('./notif-icon.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="red"
                />
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back home"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

const MyApp = DrawerNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
});

export default MyApp