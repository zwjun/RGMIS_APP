import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';

export default class IntroductionPage extends Component {
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
                    课题组简介
                </NavTitle>
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

IntroductionPage.propTypes = {};
IntroductionPage.defaultProps = {};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },
    titleText: {
        height: 30,
        justifyContent: 'center',
        paddingLeft: 10,
    },
});
