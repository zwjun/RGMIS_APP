import React, {Component} from 'react';
import {
    Text,
    WebView,
    View,
} from 'react-native';

import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';

let DEFAULT_URL = 'http://www.lcode.org';

export default class DetailWebView extends Component {

    renderNavBar() {
        return (
            <NavBar style={Styles.navBar}>
                <NavButton
                    style={Styles.navButton}
                    onPress={() => this.props.navigator.pop()}
                >
                    <Icon name="md-arrow-back" size={25} color="#2196F3" />
                </NavButton>

                <NavTitle style={Styles.navTitle}>
                    详细
                </NavTitle>
                
            </NavBar>
        );
    }

    render() {
        return (
            <View style={{flex:1, backgroundColor:'#ffe'}}>
                {this.renderNavBar()}
                <WebView 
                    //url={DEFAULT_URL}弃用
                    source={{uri: DEFAULT_URL}}
                    startInLoadingState={true}
                    domStorageEnabled={true}
                    javaScriptEnabled={true}
                >
                </WebView>
            </View>
        );
    }
}
