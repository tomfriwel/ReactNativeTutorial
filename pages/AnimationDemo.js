//https://reactnavigation.org/docs/deep-linking.html
//https://docs.expo.io/versions/latest/guides/linking.html

import React, { Component } from 'react';
import {
    Linking,
    View,
    Button,
    Text,
    StyleSheet,
    Animated,
    Easing,
    TouchableWithoutFeedback
} from 'react-native';

//open totest://link/tomfriwel in browser

export default class extends Component {
    state = {
        anim: null,
        isShow: false,
    }
    componentWillMount() {
        console.log(this)
        this.setState({
            anim: new Animated.Value(0)
        })
    }

    startAnimation() {
        let start = 0, dist = 1

        if (this.state.isShow) {
            start = 1
            dist = 0
        }

        this.state.anim.setValue(start);
        Animated.timing(this.state.anim, {
            toValue: dist,
            duration: 400,
            easing: Easing.linear,// 线性的渐变函数
        }).start(() => {
            console.log(start)
            this.setState({
                isShow: !this.state.isShow
            })
        })
    }
    opacityAnimation() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => {

                    }}
                    title='back btn'
                ></Button>
                <TouchableWithoutFeedback
                    onPress={() => {
                        this.startAnimation()
                    }}>

                    <Animated.View
                        style={[styles.cover, {
                            opacity: this.state.anim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 0.7] //线性插值，0对应60，0.6对应30，1对应0
                            })
                        }]}
                    >
                    </Animated.View>
                </TouchableWithoutFeedback>
                <Animated.View
                    style={[styles.view, {
                        // width: this.state.anim.interpolate({
                        //     inputRange: [0, 1],
                        //     outputRange: [100, 600] //线性插值，0对应60，0.6对应30，1对应0
                        // }),
                        height: this.state.anim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [100, 900] //线性插值，0对应60，0.6对应30，1对应0
                        }),
                        // opacity: this.state.anim.interpolate({
                        //     inputRange: [0, 1],
                        //     outputRange: [0.5, 1] //线性插值，0对应60，0.6对应30，1对应0
                        // })
                    }]}
                ></Animated.View>
                <Button
                    onPress={res => {
                        this.startAnimation()
                    }}
                    title={'click'}
                ></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#eee'
    },
    view: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 300,
        backgroundColor: '#fff'
    },
    cover: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#000'
    }
})