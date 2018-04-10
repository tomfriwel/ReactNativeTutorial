import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet
} from 'react-native'
import { StackNavigator } from 'react-navigation'
// import DismissableStackNavigator from '../utils/DismissableStackNavigator'

import NavigationService from '../utils/NavigationService'

class NavigationDemoScreen extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        console.log('NavigationDemoScreen navigation:'+navigation.state.key)
        // console.log(navigation)

        return {
            headerRight: (
                <Button
                    onPress={() => {
                        NavigationService.popToTop()
                    }}
                    title="popToTop"
                    color="#2344A3"
                />
            ),
        }
    }

    render() {
        const { state, goBack } = this.props.navigation;
        const props = {
            ...this.props.screenProps,
            dismiss: () => goBack(state.key),
        }
        return (
            <View style={styles.container}>
                <Text>Navigation Demo</Text>
                <Button
                    onPress={() => {
                        console.log('dismiss button:'+this.props.navigation.state.key)
                        // this.props.screenProps.dismiss()
                        NavigationService.back()
                    }}
                    title="Dismiss"
                />
                <Button
                    onPress={() => {
                        this.props.navigation.navigate('Home', {
                            key:this.props.navigation.state.key
                        })
                    }}
                    title="next"
                />
            </View>
        )
    }
}

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

// const ModalNavigator = DismissableStackNavigator(
//     {
//         Home: {
//             screen: NavigationDemoScreen,
//         },
//     }
// )

const ModalNavigator = StackNavigator(
    {
        Home: {
            screen: NavigationDemoScreen,
        },
    }
)

export default ModalNavigator

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