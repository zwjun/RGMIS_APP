/**
 * Created by gatt on 2016/5/30.
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
import IconTextInput from '../components/IconTextInput'
import Styles from '../components/Styles';
import Button from '../components/Button';

import RegisterPasswordPage from './RegisterPasswordPage';
import MainPage from './MainPage';

export default class RegisterPage extends Component {
    componentDidMount() {

    }
    constructor(props) {
        super(props);

        this.state = {
            secureTextEntry: true,
            userName: "",
            password: ""
        };

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
    getVerificationCode() {
        let code = (Math.random() * 10000000 % 9000) + 1000;
        alert(parseInt(code));
    }

    next() {
        this.props.navigator.push({
            component: RegisterPasswordPage
        });
    }

    login() {
        this.props.navigator.push({
            component: MainPage
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
                    {'验证码登录'}
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
                        placeholder="请输入手机号码"
                        maxLength={11}
                        keyboardType="phone-pad"
                        autoFocus={true}
                        beforeComponent={
                            <Icon ref={(icon) => this.icons[0] = icon} name="ios-phone-portrait-outline" size={22} color="#ccc" />
                            /*<Icon name="ios-phone-portrait-outline" size={25} color="#666" />*/
                        }
                        onFocus={() => this.onFocus(0)}
                        onBlur={() => this.onBlur(0)}
                    />
                    <View style={{height: 20}} />
                    <IconTextInput
                        placeholder="请输入验证码"
                        maxLength={4}
                        keyboardType="numeric"
                        beforeComponent={
                            <Icon ref={(icon) => this.icons[1] = icon} name="md-create" size={22} color="#ccc" />
                        }
                        onFocus={() => this.onFocus(1)}
                        onBlur={() => this.onBlur(1)}

                        afterComponent={
                            <View>
                                <Button
                                    size="small"
                                    type="link"
                                    onPress={() => this.getVerificationCode()}
                                >
                                    获取验证码
                                </Button>
                            </View>
                        }
                    />
                    <View style={{height: 40}} />
                    <Button
                        type="primary" size="default"
                        onPress={() => this.login()}
                    >
                        <Text style={styles.nextButtonText}>登录</Text>
                    </Button>
                </View>
            </View>
        );
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