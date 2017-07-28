import React, {Component} from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';
import Button from '../../components/Button';
import IconTextInput from '../../components/IconTextInput';
import TextInputCell from '../../components/TextInputCell';
import CreateBulletinPage from './CreateBulletinPage.step2';

let DEFAULT_URL = 'http://www.lcode.org';

export default class CreateBulletinStep1 extends Component {

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
                    发布公告
                </NavTitle>
                <NavButton style={Styles.navButton}>
                    <Text style={{fontSize: 16, color: '#2196F3'}}
                        onPress={() => {
                            this.props.navigator.push({
                                component: CreateBulletinPage
                            });
                        } }
                    >
                    下一步</Text>
                </NavButton>
            </NavBar>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <View style={{backgroundColor: '#fff'}}>
                    <IconTextInput
                        style={styles.inputStyle}
                        placeholder="请输入公告标题"
                        maxLength={40}
                        keyboardType="default"
                        autoFocus={true}
                        multiline={true}
                    />
                    <IconTextInput
                        style={styles.inputStyle}
                        placeholder="公告作者（选填）"
                        keyboardType="default"
                    />
                    <TextInputCell
                        style={{ textAlignVertical: 'top', paddingLeft:10, paddingRight:10}}
                        numberOfLines={10}
                        multiline={true}
                        placeholder="请输入公告内容..."
                        keyboardType="default"
                    />
                    <View style={[styles.uploading]}>
                        <Text style={{fontSize: 16}}>选择上传图片  </Text>
                        <TouchableOpacity onPress = {() => alert('123')}>
                            <Icon name="md-images" size={40} color="#2196F3" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },
    inputStyle: {
        height: 50,
        marginLeft: 20,
        marginRight: 20,
        
    },
    uploading: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        alignItems: 'center',
        flexDirection: 'row',
    }
});