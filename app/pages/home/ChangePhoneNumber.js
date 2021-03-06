
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

} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import IconTextInput from '../../components/IconTextInput';
import Button from '../../components/Button';
import Styles from '../../components/Styles';

export default class ChangePhoneNumber extends Component {
    constructor(props) {
        super(props);
    }

    /*onFocus(index) {
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
    }*/
    /*next() {
        requestAnimationFrame(() => {
            this.props.navigator.push({
                component: NewPassword
            });
        })
    }*/

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
                    {'修改手机号码'}
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
                        placeholder="请输入你需要更改的号码"
                        placeholderTextColor="#ccc"
                        keyboardType="phone-pad"
                        maxLength={11}
                        autoFocus={true}
                        beforeComponent={
                            <Icon name="ios-phone-portrait-outline" size={22} color="#2196f3" />
                        }
                    />
                    <View style={{height: 40}} />
                    <Button type="primary" size="default" onPress={() => this.props.navigator.pop()}>确认修改</Button>
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
        paddingTop: 30
    }
});