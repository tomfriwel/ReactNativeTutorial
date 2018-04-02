import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'
import { StackNavigator } from 'react-navigation'

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Demo List</Text>
            </View>
        )
    }
}

class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={require('../../assets/images/sample.jpeg')}
                style={{ width: 30, height: 30 }}
            />
        );
    }
}

export default StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
    },
    {
        initialRouteName: 'Home',
        /* The header config from HomeScreen is now here */
        navigationOptions: {
            headerTitle: <LogoTitle />,
            headerStyle: {
                backgroundColor: '#FFD8D8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            // headerBackTitle: 'back haha',
            // headerBackImage: require('./assets/images/icon.png')
        },
    },
)

const Dimensions = require('Dimensions')
const window = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor:'#eee'
    }
})