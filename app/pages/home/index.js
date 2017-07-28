/**
 * Created by gatt on 2016/6/8.
 */
import React, {
    Component
} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    UIManager,
    findNodeHandle,
    Alert,
    BackAndroid,
} from 'react-native';
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';
import Common from '../../components/Common';

import Section from '../../components/Section';
import Cell from '../../components/Cell';
import Button from '../../components/Button';

import UserInformationPage from './UserInformationPage';

import SearchPage from './SearchPage';
import SettingsPage from './SettingsPage';
import About from './About'

export default class index extends Component {
    exit() {
        Alert.alert(
            '确定要退出应用吗？',
            null,
            [{
                text: '取消'
            }, {
                text: '确定', onPress: () => BackAndroid.exitApp()
            }]
        )
    }
    search() {
        this.props.navigator.push({
            component: SearchPage
        });
    }
    more() {
        UIManager.showPopupMenu(
            findNodeHandle(this.refs.more),
            ['Hello1', 'hello2'],
            () => Alert("something went wrong with the popup menu"),
            (e, i)=> console.log(e + " : " + i),
        )
    }
    renderNavBar() {
        return (
            <NavBar style={Styles.navBar}>
                <NavTitle style={Styles.navTitle}>
                    我的
                </NavTitle>
                <NavButton style={[Styles.navButton,{paddingLeft:10, paddingRight:15}]} onPress={() => this.search()}>
                    <Icon name="ios-search" size={25} color="#666"/>
                </NavButton>
                <View>
                    <NavButton style={Styles.navButton} onPress={() => this.more()}>
                        <Icon ref="more" name="ios-menu" size={25} color="#666"/>
                    </NavButton>
                </View>
            </NavBar>
        );
    }

    render() {
        if (this.props.loaded) {
            return (
                <View style={styles.container}>
                    {this.renderNavBar()}

                    <Section style={{paddingTop: 10}}>
                        <Cell
                            icon={
                                <Image source={require('../../images/weixin.png')} style={{width: 50, height: 50}} />
                            }
                            label={
                                <View>
                                    <Text style={{fontSize: 17, color: '#333'}}>蛋蛋的忧伤</Text>
                                    <Text>hello world</Text>
                                </View>
                            }
                            after=""
                            arrow={false}
                            onPress={() => {
                                this.props.navigator.push({
                                    component: UserInformationPage
                                });
                            }}
                        />
                    </Section>

                    <Section style={{paddingTop: 10}}>
                        <Cell
                            label="设置"
                            icon={{
                                name: 'ios-cog',
                                size: 28,
                                color: '#666'
                            }}
                            onPress={() => {
                                this.props.navigator.push({
                                    component: SettingsPage
                                })
                            }}
                        />
                    </Section>

                    <Section style={{paddingTop: 10}}>
                        <Cell
                            label="检查更新"
                            icon={{
                                name: 'ios-clock',
                                size: 25,
                                color: '#666'
                            }}
                        />
                        <Cell
                            label="关于我们"
                            icon={{
                                name: 'ios-information-circle',
                                size: 25,
                                color: '#666'
                            }}
                              onPress={() => {
                                this.props.navigator.push({
                                    component: About
                                });
                            }}
                        />
                        { /*<Cell style={{paddingLeft: 10}}
                            label="关于我们"
                            icon={{
                                name: 'help-outline',
                                size: 25,
                                color: '#666'
                            }}
                            onPress={() => {
                                this.props.navigator.push({
                                    component: AboutUsPage
                                });
                            }}
                        />*/}
                    </Section>

                    <View style={{padding: 10}}>
                        <Button type="danger" onPress={() => this.exit()}>退出登录</Button>
                    </View>
                    {/*<View>
                        <Text>登录时使用的手机号:{this.props.userName}</Text>
                        <Text>登录时使用的密码:{this.props.password}</Text>
                    </View>*/}
                </View>
            );
        }
        else {
            return Common.renderLoading('正在加载...');
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    }
});
