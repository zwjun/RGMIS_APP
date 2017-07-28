import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';
import Button from '../../components/Button';

let DEFAULT_URL = 'http://www.lcode.org';

export default class Bulletin extends Component {

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
                    课题文献
                </NavTitle>
                <NavButton style={Styles.navButton}>
                    <Icon name="md-person" size={25} color="#2196F3" />
                </NavButton>
            </NavBar>
        );
    }

    render() {
        return (
            <View style={{flex:1, backgroundColor:'#ffe'}}>
                {this.renderNavBar()}
                
            </View>
        );
    }
}
