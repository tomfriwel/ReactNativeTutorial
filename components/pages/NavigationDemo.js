import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import DismissableStackNavigator from '../../utils/DismissableStackNavigator'

class NavigationDemoScreen extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        console.log(navigation)

        return {
            headerRight: (
                <Button
                    onPress={() => navigation.goBack()}
                    title="Dismiss"
                    color="#2344A3"
                />
            ),
        }
    }

    dismiss() {
        const { state } = this.props.navigation
        console.log(state.key)
        console.log(this.props.screenProps.key)
        this.props.navigation.goBack(state.key)
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
                source={require('../../assets/images/sample.jpeg')}
                style={{ width: 30, height: 30 }}
            />
        );
    }
}


// export default NavigationDemoScreen

const ModalNavigator = DismissableStackNavigator({
    FirstModal: { screen: NavigationDemoScreen },
    // SecondModal: { screen: SecondModalScreen }
})

// ModalNavigator

export default StackNavigator(
    {
        Home: {
            screen: NavigationDemoScreen,
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