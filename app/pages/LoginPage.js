/**
 * Created by gatt on 2016/5/30.
 */
import React, {
    Component
} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    StatusBar,
    ScrollView,
    ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconTextInput from '../components/IconTextInput';
import Button from '../components/Button';


import RegisterPage from './RegisterPage';              //注册
import MainPage from './MainPage';                      //主页
import VerificationLogin from './VerificationLogin';    //验证码登录
import ForgotPasswordPage from './ForgotPasswordPage';  //忘记密码

export default class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            secureTextEntry: true,
            userName: "",
            password: ""

        };

        this.icons = [];
    }

    togglePassword() {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        });
    }

    login() {
        /*if (!this.state.userName || this.state.userName == "") {
            ToastAndroid.show('请输入手机号码！', ToastAndroid.SHORT);
            return;
        }

        if (!this.state.password || this.state.password == "") {
            ToastAndroid.show('请输入密码！', ToastAndroid.SHORT);
            return;
        }*/
        setTimeout(() => {
            this.props.navigator.push({
                component: MainPage
            });
        });
    }

    register() {
        setTimeout(() => {
            this.props.navigator.push({
                component: RegisterPage
            })
        });
    }

    VerificationLogin() {
        this.props.navigator.push({
            component: VerificationLogin
        });
    }

    ForgotPasswordPage() {
        this.props.navigator.push({
            // userName:this.state.userName,
            // password:this.state.password,
            component: ForgotPasswordPage,
            //这里多出了一个 params 其实来自于<Navigator 里的一个方法的参数...
            params: {
                userName: this.state.userName,

            }
        });
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

    render() {
        return (
            /*<ScrollView
                contentContainerStyle={{flex:1}}   //非常重要，让ScrollView的子元素占满整个区域
                keyboardDismissMode='on-drag'      //拖动界面输入法退出
                keyboardShouldPersistTaps={false}  //点击输入法意外的区域，输入法退出
            >
            </ScrollView>*/
            <View style={styles.container}>
                <Image
                    style={styles.background}
                    source={require('../images/login-background.png')}
                >
                    <StatusBar translucent={true} />
                    <View style={styles.inputView}>
                        <IconTextInput
                            style={styles.input}
                            placeholder="手机号"
                            placeholderTextColor="#666666"
                            keyboardType="phone-pad"
                            maxLength={11}
                            autoFocus={true}
                            onChangeText={(text) => {
                                this.setState({
                                    userName: text
                                })
                            }}
                            beforeComponent={
                                <Icon ref={(icon) => this.icons[0] = icon} name="ios-person-outline" size={25} color="#ccc" />
                            }
                            onFocus={() => this.onFocus(0)}
                            onBlur={() => this.onBlur(0)}
                        />
                        <View style={{height: 20}} />
                        <IconTextInput
                            style={styles.input}
                            placeholder="密码"
                            secureTextEntry={this.state.secureTextEntry}
                            placeholderTextColor="#666666"
                            onChangeText={(text) => {
                                this.setState({
                                    password: text
                                })
                            }}
                            beforeComponent={
                                <Icon ref={(icon) => this.icons[1] = icon} name="ios-lock-outline" size={22} color="#ccc" />
                            }
                            afterComponent={
                                <TouchableOpacity onPress={() => this.togglePassword()}>
                                    <Icon name="ios-eye-outline" size={25} color={this.state.secureTextEntry ? '#ccc' : '#2196f3'} />
                                </TouchableOpacity>
                            }
                            onFocus={() => this.onFocus(1)}
                            onBlur={() => this.onBlur(1)}
                        />
                    </View>

                    <View style={styles.otherView}>
                        <TouchableOpacity onPress={() => this.VerificationLogin()}>
                            <Text style={styles.text}>验证码登录</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.ForgotPasswordPage()}>
                            <Text style={styles.text}>忘记密码？</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonView}>
                        <Button type="primary" size="default" onPress={() => this.login()}>
                            <Text>登录</Text>
                        </Button>
                        <Button
                            type="primary" size="default"
                            style={{
                                backgroundColor: 'transparent',
                                borderWidth: 1,
                                borderColor: '#2196f3',
                                marginTop: 10
                            }}
                            onPress={() => this.register()}
                        >
                            <Text style={{
                                color: '#2196f3'
                            }}>注册</Text>
                        </Button>
                    </View>

                    <View style={styles.separatorView}>
                        <View style={styles.separator}></View>
                        <Text style={styles.separatorText}>使用第三方登录</Text>
                        <View style={styles.separator}></View>
                    </View>

                    <View style={styles.thirdpartyView}>
                        <TouchableOpacity>
                            <Image style={styles.thirdpartyImage} source={require('../images/qq.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.thirdpartyImage} source={require('../images/weixin.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.thirdpartyImage} source={require('../images/weibo.png')} />
                        </TouchableOpacity>
                    </View>

                </Image>
            </View>    
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        paddingLeft: 20,
        paddingRight: 20
    },
    button: {
        backgroundColor: '#2196f3',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        borderRadius: 22.5,
        marginTop: 5,
        marginBottom: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    },
    inputView: {
        paddingTop: 60
    },
    input: {
        padding: 4,
        fontSize: 16,
        color: 'white'
    },
    otherView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 10
    },
    text: {
        color: 'white',
        fontSize: 14
    },
    buttonView: {
        paddingTop: 50
    },
    separatorView: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 60
    },
    separatorText: {
        fontSize: 12,
        color: 'white',
        marginLeft: 5,
        marginRight: 5
    },
    separator: {
        backgroundColor: '#666',
        height: 1,
        width: 200,
        flex: 1
    },
    thirdpartyView: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 10
        // paddingLeft: 30,
        // paddingRight: 30
    },

    thirdpartyImage: {
        width: 60,
        height: 60
    }

});
