/**
 * Created by gatt on 2016/5/31.
 */
import React, {
    Component
} from 'react';
import ReactNative, {
    View,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import IconTextInput from '../components/IconTextInput';
import Styles from '../components/Styles';
import Button from '../components/Button';

import LoginPage from './LoginPage';

export default class RegisterPasswordPage extends Component {
    constructor(props) {
        super(props);
        this.icons = [];
    }

    onFocus(index) {
        const icon = this.icons[index];
        icon.setNativeProps({
            style: {
                color: '#2196f3'
            }
        });
    }

    onBlur(index) {
        const icon = this.icons[index];
        icon.setNativeProps({
            style: {
                color: '#ccc'
            }
        });
    }

    LoginPage() {
        this.props.navigator.push({
            component: LoginPage
        });
    }

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
                    {'设置密码'}
                </NavTitle>
            </NavBar>
        );
    }

    render() {
        return (
            <View style={styles.wrapper}>
                {this.renderNavBar()}

                <View style={styles.container}>
                    <IconTextInput
                        placeholder="请输入密码"
                        secureTextEntry={true}
                        autoFocus={true}
                        beforeComponent={
                            <Icon ref={(icon) => this.icons[0] = icon} name="ios-lock-outline" size={22} color="#ccc" />
                        }
                        onFocus={() => this.onFocus(0)}
                        onBlur={() => this.onBlur(0)}
                    />
                    <View style={{height: 40}} />
                    <Button type="primary" size="default" onPress={() => this.LoginPage()}>
                        完成注册
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 40
    }
});