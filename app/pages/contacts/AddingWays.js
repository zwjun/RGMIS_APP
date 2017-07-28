import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';

import Section from '../../components/Section';
import Cell from '../../components/Cell';
import AddMemberFromContacts from './AddMemberFromContacts';
import AddMenberManually from './AddMenberManually';

export default class AddingWays extends Component {
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
                    添加课题组成员
                </NavTitle>
            </NavBar>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <Section style={{marginTop: 20}} >
                    <Cell
                        label="从通讯录添加"
                        arrow
                        onPress = {() => {
                            this.props.navigator.push({
                            component: AddMemberFromContacts
                            })
                        } }
                    />
                </Section>
                <Section style={{marginTop: 20}} >
                    <Cell
                        label="手动添加"
                        arrow
                        onPress = {() => {
                            this.props.navigator.push({
                            component: AddMenberManually
                            })
                        } }
                    />
                </Section>
            </View>
        );
    }
}

AddingWays.propTypes = {};
AddingWays.defaultProps = {};

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
