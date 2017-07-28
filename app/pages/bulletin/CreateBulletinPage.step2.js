import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';
import Button from '../../components/Button';
import Section from '../../components/Section';
import Cell from '../../components/Cell';

import CreateBulletinPage from './CreateBulletinPage.step3';
let DEFAULT_URL = 'http://www.lcode.org';

export default class CreateBulletinStep2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: require('../../images/camera.png')
        };
    }

    //定义相机
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
            quality: 0.5,
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
                    <Icon name="md-arrow-back" size={25} color="#2196F3" />
                </NavButton>

                <NavTitle style={Styles.navTitle}>
                    发布公告
                </NavTitle>
                <NavButton style={Styles.navButton}>     
                    <Text style={{fontSize: 16, color: '#2196F3'}} onPress={() =>alert("发布成功") }>发布</Text>
                </NavButton>
            </NavBar>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <Section style={{paddingTop: 10}}>
                    <Cell
                        label="选择发布范围"
                        arrow
                        onPress={() => {
                            this.props.navigator.push({
                                component: CreateBulletinPage,
                            });
                        }}
                    />
                </Section>
                <Text style={{margin: 10}}>添加公告封面照片</Text>
                <Section>
                    <Cell
                        label={
                            <TouchableOpacity style={styles.imgBorder} onPress={() => this.chooseAvatar()}>
                                <Image style={styles.avatar} source={this.state.avatar} />
                            </TouchableOpacity>
                        }
                        
                    />
                </Section>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },
    imgBorder: {
        height: 80,
        width: 80,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#ccc',
    },
    avatar: {
        width: 80,
        height: 80,
    },
});