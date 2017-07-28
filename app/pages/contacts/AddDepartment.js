import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Alert,
} from 'react-native';

import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';
import Button from '../../components/Button';
import Section from '../../components/Section';
import Cell from '../../components/Cell';

export default class AddDepartment extends Component {

    warning() {
        Alert.alert(
            '确定要解散该课题组吗？',
            null,
            [{
                text: '取消'
            }, {
                text: '确定'
            }]
        )
    }

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
                    添加子部门
                </NavTitle>
            </NavBar>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <Section style={{marginTop:10, marginBottom: 10}}>
                    <Cell
                        label="部门名称"
                        after={
                            <TextInput
                                style={styles.textInput}
                                onChangeText={(text) => this.setState({text})}
                                placeholder="必填"
                                placeholderTextColor="#ccc"
                                underlineColorAndroid="transparent"
                              />
                        }
                    />
                    <Cell
                        label="上级部门"
                        after="必填"
                        arrow
                        onPress = {() => {
                                this.props.navigator.push({
                                component: SelectTeamType
                                })
                            }
                        }
                    />
                </Section>
                <View style={styles.buttonView}>
                    <Button type="primary" size="default" onPress = {() =>this.warning()}>
                        <Text>立即创建</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

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
    },
    buttonView: {
        padding: 10
    }
});
