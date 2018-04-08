// https://reactnavigation.org/docs/connecting-navigation-prop.html

import React from 'react';
import { View, Button } from 'react-native';
import { StackNavigator, withNavigation } from 'react-navigation';

class MyBackButton extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title="Back" onPress={() => { this.props.navigation.goBack() }} />;
                <Button title="Push" onPress={() => { this.props.navigation.navigate('Home') }} />;
            </View>
        )
    }
}

const stack = StackNavigator({
    Home: {
        screen: MyBackButton
    }
})

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(MyBackButton);