import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    Switch,
    Dimensions,
} from 'react-native';

import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';
import Button from '../../components/Button';

import Section from '../../components/Section';
import Cell from '../../components/Cell';
import ProvincePicker from '../../components/ProvincePicker';
import DepartmentPicker from './DepartmentPicker'

export default class AddMenberManually extends Component {
    constructor(props){
        super(props);

        this.state = {

            province: '',
            city: '',
            department: '必填',
            trueSwitchIsOn: true,
            falseSwitchIsOn: false
        };
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
                    添加课题组成员
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
                        label="姓名"
                        after={
                            <TextInput
                                style={styles.textInput}
                                autoFocus={true}
                                onChangeText={(text) => this.setState({text})}
                                placeholder="必填"
                                placeholderTextColor="#ccc"
                                underlineColorAndroid="transparent"
                              />
                        }
                    />
                    <Cell
                        label="手机号"
                        after={
                            <TextInput
                                style={styles.textInput}
                                onChangeText={(text) => this.setState({text})}
                                placeholder="必填"
                                placeholderTextColor="#ccc"
                                underlineColorAndroid="transparent"
                                keyboardType="numeric"
                                maxLength={11}
                              />
                        }
                    />
                </Section>
                <Section style={{marginTop: 10}}>
                    <Cell
                        label="部门"
                        after={
                            <Text style={{width: 210, color: '#ccc'}}>{this.state.department}</Text>
                        }
                        arrow
                        onPress={() => {
                            this.props.navigator.push({
                                component: DepartmentPicker
                                })
                            }
                        }

                    />
                    <Cell
                        label="邮箱"
                        after={
                            <TextInput
                                style={styles.textInput}
                                onChangeText={(text) => this.setState({text})}
                                placeholder="选填"
                                placeholderTextColor="#ccc"
                                underlineColorAndroid="transparent"
                                keyboardType="email-address"
                              />
                        }
                    />
                    <Cell
                        label="地区"
                        after={this.state.province + '  ' + this.state.city}
                        arrow
                        onPress={() => {
                            this.props.navigator.push({
                                component: ProvincePicker,
                                params: {
                                    callback: (province, city) => {
                                        this.setState({
                                            province,
                                            city
                                        });
                                    }
                                }
                            })
                        }}
                    />
                </Section>
                <Section style={{marginTop: 10}}>
                    <Cell
                        label="号码隐藏"
                        after={
                            <Switch
                                onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                                value={this.state.falseSwitchIsOn} />
                        }
                    />
                </Section>
                <View style={styles.buttonView}>
                    <Button type="primary" size="default" >
                        <Text>保存并继续添加</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
    textInput: {
        height: 32,
        width: Dimensions.get('window').width - 145,
        padding: 0
    },
    buttonView: {
        padding: 10
    }
});
