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


class Page extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            headerRight: (
                <Button
                    onPress={() => {
                        params.currentDismiss()
                    }}
                    title="Dismiss"
                    color="#2344A3"
                />
            ),
        }
    }

    constructor(props) {
        super(props);
        console.log('props:')
        console.log(props)
    }

    componentWillMount() {
        console.log('componentWillMount')
        console.log(this.props.navigation.state.key)
        this.props.navigation.setParams({ currentDismiss: this.props.screenProps.dismiss});
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Default Page</Text>
            </View>
        )
    }
}

const ModalNavigator = DismissableStackNavigator(
    {
        Home: {
            screen: Page,
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