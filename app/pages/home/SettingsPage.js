
import React, {
    Component
} from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Styles from '../../components/Styles';
import Section from '../../components/Section';
import Cell from '../../components/Cell';

import ChangPhone from './ChangPhone';
import PasswordCheck from './PasswordCheck';
export default class Settings extends Component {
    ChangPhone() {
        this.props.navigator.push({
            component: ChangPhone
        });
    }
    PasswordCheck() {
        this.props.navigator.push({
            component: PasswordCheck
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            trueSwitchIsOn: true,
            falseSwitchIsOn: false
        };
    }//开关按钮的设置
    renderNavBar() {
        return (
            <NavBar style={Styles.navBar}>
                <NavButton
                    style={Styles.navButton}
                    onPress={() => this.props.navigator.pop()}
                >
                    <Icon name="md-arrow-back" size={25} color="#666" />
                </NavButton>
                <NavTitle style={Styles.navTitle}>
                    {'设置'}
                </NavTitle>
            </NavBar>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <Section style={{paddingTop: 10}}>
                    <Cell
                        label="登录手机号"
                        after={<Text>13000000000</Text>}
                        arrow
                        onPress={() => this.ChangPhone()}
                    />
                    <Cell
                        label="登录密码"
                        arrow
                        onPress={() => this.PasswordCheck()}
                    />
                </Section>
                <Section style={{paddingTop: 10}}>
                    <Cell
                        label="允许消息通知"
                        after={
                        <Switch
                          onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                          value={this.state.falseSwitchIsOn} />
                        }
                    />
                </Section>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    }
});
