import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text
} from 'react-native';

import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';

import Section from '../../components/Section';
import Cell from '../../components/Cell';

export default class DepartmentPage extends Component {
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
                    选择所在部门
                </NavTitle>
            </NavBar>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <Section style={{marginTop: 10}}>
                    <Cell
                        icon={<Text></Text>}
                        label={
                            <TextInput
                                style={styles.textInput}
                                placeholder="手机号/名称"
                                autoFocus={true}
                                placeholderTextColor="#ccc"
                                underlineColorAndroid="transparent"
                            />
                        }
                    />
                </Section>
            </View>
        );
    }
}

DepartmentPage.propTypes = {};
DepartmentPage.defaultProps = {};

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
    textInput: {
        height: 32,
        width: 210,
        padding: 0
    }
});

