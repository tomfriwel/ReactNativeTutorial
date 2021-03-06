import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import DismissableStackNavigator from '../utils/DismissableStackNavigator'

class NavigationDemoScreen extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        // console.log('NavigationDemoScreen navigation:'+navigation.state.key)
        // console.log(navigation)

        return {
            headerRight: (
                <Button
                    onPress={() => {
                        // console.log(navigation)
                        // console.log(params.currentKey)
                        // navigation.goBack(params.currentKey)
                        params.currentDismiss()
                    }}
                    title="Dismiss"
                    color="#2344A3"
                />
            ),
        }
    }
    componentWillMount() {
        // console.log(this.props.navigation.state.key)
        this.props.navigation.setParams({ currentDismiss: this.props.screenProps.dismiss});
    }

    push() {

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
                        // this.props.navigation.goBack()
                        // console.log('dismiss button:'+this.props.navigation.state.key)
                        this.props.screenProps.dismiss()
                        // this.dismiss()
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

const ModalNavigator = DismissableStackNavigator(
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