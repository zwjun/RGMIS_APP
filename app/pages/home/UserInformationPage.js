/**
 * Created by gatt on 2016/6/8.
 */
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    DatePickerAndroid,
    Picker,
    Platform,
    NativeModules,
} from 'react-native';

import ImagePicker from 'react-native-image-picker';
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Styles from '../../components/Styles';
import ProvincePicker from '../../components/ProvincePicker';

import Section from '../../components/Section';
import Cell from '../../components/Cell';
import ChangeUsername from './ChangeUsername';
import ChangePhoneNumber from './ChangePhoneNumber';
import ChangeEmail from './ChangeEmail'

const Item = Picker.Item;

export default class ProfilePage extends Component {
    constructor(props){
        super(props);

        this.state = {
            maxText: '01/01/98',
            province: '广东',
            city: '广州',
            avatar: require('../../images/qq.png')
        };
    }
    //进行创建时间日期选择器
    async showPicker(stateKey, options) {
        try {
            var newState = {};
            const {action, year, month, day} = await DatePickerAndroid.open(options);
            if (action === DatePickerAndroid.dismissedAction) {
                newState[stateKey + 'Text'] = 'dismissed';
            } else {
                var date = new Date(year, month, day);
                newState[stateKey + 'Text'] = date.toLocaleDateString();
                newState[stateKey + 'Date'] = date;
            }
            this.setState(newState);
        } catch ({code, message}) {
            console.warn(`Error in example '${stateKey}': `, message);
        }
    }

    chooseAvatar() {
        ImagePicker.showImagePicker({
            title: '               选择你的头像', //选择器的标题，可以设置为空来不显示标题 ，空格可调整文字位子，但不能通配
            cancelButtonTitle: '                      取消',                       
            takePhotoButtonTitle: '                      拍照',
            chooseFromLibraryButtonTitle: '              从相册里选择',
            allowsEditing: true,
            noData: true,
            maxWidth: 300,
            maxHeight: 300,
            quality: 0.2,
            mediaType: 'photo',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        }, (response) => {
            console.log(response);
            if (response.uri) {
                const source = {uri: response.uri, isStatic: true, width: 40, height: 40};
                this.setState({
                    avatar: source
                });
            }
        });
    }

    renderNavBar() {
        return (
            <NavBar style={Styles.navBar}>
                <NavButton
                    style={Styles.navButton}
                    onPress={() => this.props.navigator.pop()}
                >
                    <Icon name="arrow-back" size={25} color="#666" />
                </NavButton>
                <NavTitle style={Styles.navTitle}>
                    个人信息
                </NavTitle>
            </NavBar>
        );
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                {this.renderNavBar()}

                <Section style={{paddingTop: 10}}>
                    <Cell
                        label="头像"
                        after={
                            <Image source={this.state.avatar} style={styles.avatar} />
                        }
                        onPress={() => this.chooseAvatar()}
                        //onPress={this.chooseAvatar.bind(this)}
                    />
                    <Cell
                        label="姓名"
                        after="蛋蛋的忧伤"
                        onPress={() => {
                            this.props.navigator.push({
                                component: ChangeUsername
                            });
                        }}
                    />
                    <Cell
                        label="性别"
                        after={
                            <Picker
                              style={styles.sex}
                              selectedValue={this.state.sex}
                              onValueChange={(value) => this.setState({sex: value})}
                            >
                              <Item label="男" value="male" />
                              <Item label="女" value="female" />
                            </Picker>
                        }
                    />
                    <Cell
                        label="生日"
                        after={
                            <Text style={styles.text}>{this.state.maxText}</Text>
                        }
                        onPress={this.showPicker.bind(this, 'max', {
                              date: this.state.maxDate,
                              maxDate: new Date()
                            })}
                    />
                    <Cell
                        label="手机"
                        after="13800000000"
                        onPress={() => {
                                this.props.navigator.push({
                                    component: ChangePhoneNumber
                                });
                            }}
                    />
                    <Cell
                        label="邮箱"
                        after="example@qq.com"
                        onPress={() => {
                                this.props.navigator.push({
                                    component: ChangeEmail
                                });
                            }}
                    />
                    <Cell
                        label="地区"
                        after={this.state.province + ' ' + this.state.city}
                        onPress={() => {
                            this.props.navigator.push({
                                component: ProvincePicker,
                                params: {
                                    callback: (province, city) => {
                                        this.setState({
                                            province,
                                            city
                                        });
                                    }
                                }
                            })
                        }}
                    />
                </Section>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },
    avatar: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#fcf',
        borderRadius: 50,
    },
    sex: {
        flex: 1,
        width: 50,
        height: 30,
        backgroundColor: "#fff",
        color: '#888',
    },
});