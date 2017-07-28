/**
 * Created by gatt on 2016/6/1.
 */

import React, { Component } from 'react';
import {
    Navigator,
    BackAndroid,
} from 'react-native';

import LoginPage from './pages/LoginPage';

export default class App extends Component {
    constructor(props) {
        super(props);

        this._listeners = [];
        this.lastClickTime = (new Date()).getTime();
    }

    goBack() {
        let navigator = this.refs.navigator;
        if (navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
        }
        else {
            let time = (new Date()).getTime();
            if (time - this.lastClickTime < 1000) {
                BackAndroid.exitApp();
            } else {
                this.lastClickTime = time;
                //ToastAndroid.show('再按一次退出程序！', ToastAndroid.SHORT);
            }
        }
        return true;
    }

    componentDidMount() {
        this._listeners = [
            BackAndroid.addEventListener('hardwareBackPress', () => this.goBack())
        ];
    }

    componentWillUnmount() {
        this._listeners.forEach(function (listener) {
            listener.remove();
        })
    }

    render() {
        return (
            <Navigator
                ref="navigator"
                initialRoute={{component: LoginPage}}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} params={route.params || {}} />
                  }}
                sceneStyle={{flex: 1}}
                configureScene={(route, routeStack) => {
                    return route.configureScene || Navigator.SceneConfigs.PushFromRight;
                }}
            >

            </Navigator>
        );
    }

}