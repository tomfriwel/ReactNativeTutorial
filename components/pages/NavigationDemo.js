import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet
} from 'react-native'
import { StackNavigator } from 'react-navigation'

class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {}

        return {
            headerLeft: (
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
                <Text>Navigation Demo</Text>
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
            headerTintColor: '#2344A3',
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
        backgroundColor: '#eee'
    }
})