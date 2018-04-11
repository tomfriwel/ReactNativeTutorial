import React from 'react';
import { Text, View, Button } from 'react-native';
import BleManager from 'react-native-ble-manager'

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
                <Button
                    onPress={() => {
                        BleManager.start({ showAlert: false })
                            .then((res) => {
                                // Success code
                                console.log('Module initialized');
                                console.log(res)
                            }).catch((res)=>{
                            });
                    }}
                    title="start"
                ></Button>

                <Button
                    onPress={() => {
                        BleManager.scan([], 5, true)
                            .then((res) => {
                                // Success code
                                console.log('Scan started');
                                console.log(res)
                            });
                    }}
                    title="scan"
                ></Button>

                <Button
                    onPress={() => {
                        BleManager.stopScan()
                            .then(() => {
                                // Success code
                                console.log('Scan stopped');
                            });
                    }}
                    title="stop scan"
                ></Button>

                <Button
                    onPress={() => {
                        BleManager.getDiscoveredPeripherals()
                            .then((res) => {
                                // Success code
                                console.log('getDiscoveredPeripherals');
                                console.log(res)
                            });
                    }}
                    title="getDiscoveredPeripherals"
                ></Button>
            </View>
        );
    }
}

export default HomeScreen