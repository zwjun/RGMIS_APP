
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
    TouchableHighlight,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import IconTextInput from '../../components/IconTextInput';
import Styles from '../../components/Styles';
import Button from '../../components/Button';

import SuccessfulPage from './SuccessfulPage';
import MainPage from '../MainPage';

export default class NewPassword extends Component {
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

    SuccessfulPage() {
        this.props.navigator.push({
            component: SuccessfulPage
        });
    }

    MainPage() {
        this.props.navigator.push({
            component: MainPage
        });
    }

    next() {
        Alert.alert(
            '修改密码成功！',
            null,
             [{
                text: '确定', onPress:() => this.MainPage()
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
                    <Icon name="md-arrow-back" size={25} color="#666" />
                </NavButton>
                <NavTitle style={Styles.navTitle}>
                    {'设置新密码'}
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
                        placeholder="新密码"
                        secureTextEntry={true}
                        autoFocus={true}
                        beforeComponent={
                            <Icon ref={(icon) => this.icons[0] = icon} name="ios-unlock-outline" size={22} color="#ccc" />
                        }
                        onFocus={() => this.onFocus(0)}
                        onBlur={() => this.onBlur(0)}
                    />
                    <View style={{height: 20}} />
                    <IconTextInput
                        placeholder="确认密码"
                        secureTextEntry={true}
                        beforeComponent={
                            <Icon ref={(icon) => this.icons[1] = icon} name="ios-lock-outline" size={22} color="#ccc" />
                        }
                        onFocus={() => this.onFocus(1)}
                        onBlur={() => this.onBlur(1)}
                    />
                    <View style={{height: 40}} />
                    <Button
                        type="primary" size="default"
                        onPress={() => this.next()}
                    >
                        确认更改
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
        paddingTop: 30
    }
});