import React from 'react';
import { Text, View, Button } from 'react-native';
import BleManager from 'react-native-ble-manager'
const Buffer = require('buffer')

const SERVICE_UUID = 'CDD1'
const CHARACTERISTIC_UUID = 'CDD2'

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
                            }).catch((res) => {
                            });
                    }}
                    title="start"
                ></Button>

                <Button
                    onPress={() => {
                        BleManager.scan([SERVICE_UUID], 5, true)
                            .then((res) => {
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

                <Button
                    onPress={() => {
                        BleManager.getDiscoveredPeripherals()
                            .then((res) => {
                                // Success code
                                console.log('getDiscoveredPeripherals');
                                console.log(res)
                                let names = []
                                if (res.length == 1) {
                                    let peripheralId = res[0].id
                                    BleManager.connect(peripheralId)
                                        .then((res) => {
                                            console.log('cennected')
                                            BleManager.retrieveServices(peripheralId)
                                                .then(res => {
                                                    console.log('retrieveServices:')
                                                    console.log(res)

                                                    BleManager.read(peripheralId, SERVICE_UUID, CHARACTERISTIC_UUID)
                                                        .then((readData) => {
                                                            // Success code
                                                            console.log('Read: ')
                                                            console.log(readData)
                                                            let str = ''
                                                            
                                                            readData.forEach(element => {
                                                                str += String.fromCharCode(element)
                                                            });
                                                            console.log(str)

                                                            // const buffer = Buffer.Buffer.from(readData);    //https://github.com/feross/buffer#convert-arraybuffer-to-buffer
                                                            // const sensorData = buffer.readUInt8(1, true);
                                                            // console.log('sensorData:'+sensorData)
                                                        })
                                                        .catch((error) => {
                                                            // Failure code
                                                            console.log(error);
                                                        });
                                                })
                                            // BleManager.read(peripheralId, SERVICE_UUID, CHARACTERISTIC_UUID)
                                            // .then(res=>{
                                            //     console.log('read:')
                                            //     console.log(res)
                                            // })
                                        })
                                }
                                else {

                                }
                            });
                    }}
                    title="getDiscoveredPeripherals"
                ></Button>
            </View>
        );
    }
}

export default HomeScreen