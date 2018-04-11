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
                        console.log(1)
                        console.log(BleManager.start)
                        BleManager.start({ showAlert: false })
                            .then(() => {
                                // Success code
                                console.log('Module initialized');
                            }).catch((res)=>{
                                console.log(2)
                                console.log(BleManager.start)
                                console.log(res)
                            });
                    }}
                    title="start"
                ></Button>

                <Button
                    onPress={() => {
                        BleManager.scan([], 5, true)
                            .then(() => {
                                // Success code
                                console.log('Scan started');
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
            </View>
        );
    }
}

export default HomeScreen