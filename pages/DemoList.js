import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet
} from 'react-native'
import { StackNavigator, NavigationActions } from 'react-navigation'

import NavigationService from '../utils/NavigationService'

import NavigationDemo from './NavigationDemo'
import NavigationServiceDemo from './NavigationServiceDemo'
import NetworkDemo from './NetworkDemo'
import TabDemo from './TabDemo'
import DrawerNavigationDemo from './DrawerNavigationDemo'
import AuthenticationFlowsDemo from './AuthenticationFlowsDemo'
import WithNavigationDemo from './WithNavigationDemo'
import LinkingDemo from './LinkingDemo'
import BluetoothDemo from './BluetoothDemo'

class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {}

        return {
            // headerRight: (
            //     <Button
            //         onPress={() => navigation.navigate('MyModal')}
            //         title="Info"
            //         color="#2344A3"
            //     />
            // ),
            /* the rest of this config is unchanged */
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Demo List</Text>
                <Button
                    onPress={() => {
                        NavigationService.navigate('NavigationServiceDemo')
                    }}
                    title='NavigationService -> NavigationServiceDemo'
                ></Button>
                <Button
                    onPress={() => {
                        // console.log('main button navigation:'+this.props.navigation.state.key)
                        this.props.navigation.navigate('NavigationDemo')
                    }}
                    title='NavigationDemo'
                ></Button>

                <Button
                    onPress={() => this.props.navigation.navigate('NetworkDemo')}
                    title='NetworkDemo'
                ></Button>

                <Button
                    onPress={() => this.props.navigation.navigate('TabDemo')}
                    title='TabDemo'
                ></Button>

                <Button
                    onPress={() => this.props.navigation.navigate('DrawerNavigationDemo')}
                    title='DrawerNavigationDemo'
                ></Button>

                <Button
                    onPress={() => this.props.navigation.navigate('AuthenticationFlowsDemo')}
                    title='AuthenticationFlowsDemo'
                ></Button>

                <Button
                    onPress={() => this.props.navigation.navigate('WithNavigationDemo')}
                    title='WithNavigationDemo'
                ></Button>

                <Button
                    onPress={() => this.props.navigation.navigate('LinkingDemo')}
                    title='LinkingDemo'
                ></Button>

                <Button
                    onPress={() => this.props.navigation.navigate('BluetoothDemo')}
                    title='BluetoothDemo'
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

const DemoList = StackNavigator(
    {
        Home: {
            screen: MainStack,
        },
        NavigationServiceDemo: {
            screen: NavigationServiceDemo,
            path: 'service',
        },
        NavigationDemo: {
            screen: NavigationDemo
        },
        NetworkDemo: {
            screen: NetworkDemo
        },
        TabDemo: {
            screen: TabDemo
        },
        DrawerNavigationDemo: {
            screen: DrawerNavigationDemo
        },
        AuthenticationFlowsDemo: {
            screen: AuthenticationFlowsDemo
        },
        WithNavigationDemo: {
            screen: WithNavigationDemo,
        },
        LinkingDemo: {
            screen: LinkingDemo,
            path: 'link/:name',
        },
        BluetoothDemo: {
            screen: BluetoothDemo
        }
    },
    {
        mode: 'modal',
        headerMode: 'none',
    },
)

// handle url
const previousGetActionForPathAndParams = DemoList.router.getActionForPathAndParams;

Object.assign(DemoList.router, {
    getActionForPathAndParams(path, params) {
        console.log(path)
        console.log(params)
        // if(path) {
        //     console.log('handle custom url')
        //     // returns a profile navigate action for /my/custom/path?magic=yes
        //     return NavigationActions.navigate({
        //         routeName: path,
        //         // action: NavigationActions.navigate({
        //         //     // This child action will get passed to the child router
        //         //     // ProfileScreen.router.getStateForAction to get the child
        //         //     // navigation state.
        //         //     routeName: 'Friends',
        //         // }),
        //     });
        // }
        // if (
        //     path === 'say' &&
        //     params.magic === 'yes'
        // ) {
        //     // returns a profile navigate action for /my/custom/path?magic=yes
        //     return NavigationActions.navigate({
        //         routeName: 'Profile',
        //         action: NavigationActions.navigate({
        //             // This child action will get passed to the child router
        //             // ProfileScreen.router.getStateForAction to get the child
        //             // navigation state.
        //             routeName: 'Friends',
        //         }),
        //     });
        // }
        return previousGetActionForPathAndParams(path, params);
    },
});

export default DemoList

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