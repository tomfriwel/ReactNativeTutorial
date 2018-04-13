import React from 'react';
import { Text, View, Button, NativeModules, NativeEventEmitter } from 'react-native';

const SERVICE_UUID = 'CDD1'
const CHARACTERISTIC_UUID = 'CDD2'

var BluetoothManager = NativeModules.BluetoothManager;
console.log(BluetoothManager)
console.log(NativeModules)

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>CustomNativeModuleDemo!</Text>
                <Button
                    onPress={() => {
                        BluetoothManager.log('tomfriwel', 49)
                    }}
                    title={'log'}
                ></Button>

                <Button
                    onPress={() => {
                        BluetoothManager.bindEvent('onChange', (res)=>{
                            console.log(res)
                        })
                    }}
                    title={'bindEvent'}
                ></Button>
            </View>
        );
    }
}

export default HomeScreen