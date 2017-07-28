import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Platform,
    Dimensions,
} from 'react-native';
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';
import Styles from '../../components/Styles';
import Button from '../../components/Button';

import CommunityIntro from './CommunityIntro';

export default class CommunityImagePicker extends Component {
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
                    设置社区头像
                </NavTitle>
                
                <NavButton style={[Styles.navButton]}>
                    <Button type="primary" size="mini"
                        onPress={() => {
                            this.props.navigator.push({
                                component: CommunityIntro
                                });
                            }
                        }
                    >
                        <Text>下一步</Text>
                    </Button>          
                </NavButton>
            </NavBar>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <View style={styles.bodyView}>
                    <Text style={{fontSize: 18, color: '#333'}}> 社区头像 </Text>
                    <Text style={{color: '#999', margin: 10}}> 
                        添加一张代表性的图片作为社区头像 
                    </Text>
                    <TouchableOpacity 
                        //style={{borderRadius: 100, backgroundColor: '#ffc'}}
                        onPress={() => this.chooseAvatar()}
                    >
                        <Image style={styles.avatar} source={this.state.avatar} />
                    </TouchableOpacity>
                </View>                 
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    bodyView: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
        paddingTop: Dimensions.get('window').width / 4,
    },
    avatar: {
        width: 120,
        height: 120,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 60,
    },
});