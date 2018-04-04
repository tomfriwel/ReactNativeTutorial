import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet
} from 'react-native'
import { StackNavigator } from 'react-navigation'

import NavigationDemo from './NavigationDemo'

class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {}

        return {
            headerRight: (
                <Button
                    onPress={() => navigation.navigate('MyModal')}
                    title="Info"
                    color="#2344A3"
                />
            ),
            /* the rest of this config is unchanged */
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Demo List</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('MyModal')}
                    title='present'
                ></Button>
            </View>
        )
    }
}

// Logo icon for headerTitle
class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={require('../assets/images/sample.jpeg')}
                style={{ width: 30, height: 30 }}
            />
        );
    }
}

const MainStack = StackNavigator(
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
            headerTintColor: '#2344A3',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            // headerBackTitle: 'back haha',
            // headerBackImage: require('./assets/images/icon.png')
        },
    }
)

export default StackNavigator(
    {
        Home: {
            screen: MainStack,
        },
        MyModal: {
            screen: NavigationDemo
        }

    },
    {
        mode: 'modal',
        headerMode: 'none',
    },
)

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