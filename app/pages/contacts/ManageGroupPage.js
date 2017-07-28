/*
 * 2016-07-06
 * */
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    Alert,
} from 'react-native';
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';
import Section from '../../components/Section';
import Cell from '../../components/Cell';
import Button from '../../components/Button';

import IntroductionPage from './IntroductionPage';
import TeamStyle from './TeamStyle';
import MenberAndGroup from './MenberAndGroup';
import SetPrincipalPage from './SetPrincipalPage';

export default class ManageGroupPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            groupName: '课题组001',
            teamStyle: 'Internet',
            groupIntroduction: '简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
            groupCode: '001122'
        };
    }
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
    more() {
        UIManager.showPopupMenu(
            findNodeHandle(this.refs.more),
            ['Hello1', 'hello2'],
            () => console.log("something went wrong with the popup menu"),
            (e, i)=> console.log(e + " : " + i),
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
                    课题组管理
                </NavTitle>
            </NavBar>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <Section style={{marginTop:10}}>
                    <Cell
                        label="课题组名称"
                        after={
                            <TextInput
                                style={styles.textInput}
                                onChangeText={(text) => this.setState({text})}
                                placeholder={this.state.groupName}
                                placeholderTextColor="#666"
                                underlineColorAndroid="transparent"
                              />
                        }
                    />
                    <Cell
                        label="团队类型"
                        after={this.state.teamStyle}
                        arrow
                        onPress = {() => {
                                this.props.navigator.push({
                                    component: TeamStyle,
                                    params: {
                                        callback: (teamStyle) => {
                                            this.setState({
                                                teamStyle
                                            });
                                        }
                                    }
                            })
                        } }
                    />
                    <Cell
                        label="课题组简介"
                        after={
                            <TextInput
                                style={[styles.textInput,]}
                                onChangeText={(text) => this.setState({text})}
                                maxLength={30}
                                multiline={true}
                                defaultValue={this.state.groupIntroduction}
                                placeholderTextColor="#666"
                                underlineColorAndroid="transparent"
                              />
                        }
                    />
                    {/*<Cell
                        label="邀请码"
                        after={
                            <TextInput
                                style={styles.textInput}
                                onChangeText={(text) => this.setState({text})}
                                placeholder={this.state.groupCode}
                                placeholderTextColor="#666"
                                underlineColorAndroid="transparent"
                                keyboardType="numeric"
                                maxLength={6}
                            />
                        }

                    />*/}
                </Section>

                <Section style={{marginTop: 10}}>
                    <Cell style={{paddingLeft: 10}}
                          icon={{
                            name: 'md-add-circle',
                            size: 25,
                            color: '#3d87ff'
                        }}
                          label="管理成员和部门"
                          after="添加、删除及分组"

                          onPress = {() => {
                            this.props.navigator.push({
                            component: MenberAndGroup
                            })
                        } }
                    />
                    <Cell style={{paddingLeft: 10}}
                          icon={{
                            name: 'md-contact',
                            size: 25,
                            color: '#3d87ff'
                        }}
                          label="设置负责人"
                          after="可以查看数据统计"

                          onPress = {() => {
                            this.props.navigator.push({
                            component: SetPrincipalPage
                            })
                        } }
                    />
                    {/*<Cell style={{paddingLeft: 10}}
                          icon={{
                            name: 'md-share-alt',
                            size: 25,
                            color: '#3d87ff'
                        }}
                          label="邀请同事加入"
                          after="分享课题组邀请链接"

                          onPress = {() => {
                            this.props.navigator.push({
                            component: XXXPage
                            })
                        } }
                    />*/}
                </Section>

                <View style={{padding:10}}>
                    <Button type="danger" size="default" onPress = {() =>this.warning()}>
                        <Text>解散课题组</Text>
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },
    textInput: {
        height: 32,
        width: 210,
        padding: 0
    }
});