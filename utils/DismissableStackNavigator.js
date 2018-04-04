// https://devdude.me/blog/rnDismissableModalStacks

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

export default function DismissableStackNavigator(routes, options) {
    const StackNav = StackNavigator(routes, options);

    return class DismissableStackNav extends Component {
        static router = StackNav.router;

        render() {
            const { state, goBack, navigate } = this.props.navigation;
            const props = {
                ...this.props.screenProps,
                dismiss: () => goBack(state.key),
                key:state.key
            };
            
            this.props.navigation['dismiss'] = () => goBack(state.key)

            // console.log('DismissableStackNav navigation:'+this.props.navigation.state.key)
            // console.log(this.props.navigation)

            return (
                <StackNav
                    screenProps={props}
                    navigation={this.props.navigation}
                />
            )
        }
    }
};