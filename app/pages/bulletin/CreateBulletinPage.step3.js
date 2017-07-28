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


export default class CreateBulletinStep3 extends Component {

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
                    选择发送范围
                </NavTitle>
                <NavButton style={Styles.navButton}>
                    <Text  style={{fontSize: 16, color: '#2196F3'}} onPress={() => this.props.navigator.pop()}>确定</Text>
                </NavButton>
            </NavBar>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    }
});