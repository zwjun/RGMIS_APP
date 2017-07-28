
import React, {
    Component
} from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Button from '../../components/Button';

 import MainPage from './../MainPage';
 import LoginPage from './../LoginPage'

export default class SuccessfulPage extends Component {

    MainPage() {
        requestAnimationFrame(() => {
            this.props.navigator.push({
                component: MainPage
            });
        })
    }
    LoginPage() {
        requestAnimationFrame(() => {
            this.props.navigator.push({
                component: LoginPage
            });
        })
    }
    /*renderNavBar() {
        return (
            <NavBar>
                <NavButton
                    style={Styles.navButton}
                    onPress={() => this.props.navigator.pop()}
                >
                    <Icon name="md-arrow-back" size={25} color="#666" />
                </NavButton>
                <NavTitle style={Styles.navTitle}>
                    {'更改密码'}
                </NavTitle>
            </NavBar>
        );
    }*/
    render() {
        return (
            <View style={styles.wrapper}>
                {/*{this.renderNavBar()}*/}
                <View style={styles.container}>
                    <View style={styles.text}>
                        <Text style={{fontSize: 30, color: '#4CAF50'}}>修改成功！</Text>
                    </View>
                    <View style={styles.button}>
                        <Button type="primary" size="default" style={{flex: 1, marginRight: 15}} onPress={() => this.LoginPage()}>重新登录</Button>
                        <Button type="success" size="default" style={{flex: 1}} onPress={() => this.MainPage()}>返回主页</Button>
                    </View>
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
        paddingTop: 20
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100,
        paddingBottom: 100
    },
    button: {
        flex: 1,
        flexDirection: 'row'
    }
});