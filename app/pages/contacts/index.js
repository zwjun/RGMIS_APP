/**
 * Created by gatt on 2016/6/8.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    ScrollView,
    Text,
    UIManager,
    findNodeHandle,
    ListView,
    TouchableOpacity,
    Alert,
    PixelRatio,
} from 'react-native';
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';
import Common from '../../components/Common';    //Loading的component.
import Section from '../../components/Section';
import Cell from '../../components/Cell';
import Button from '../../components/Button';

import SearchPage from './SearchPage';
import AddGroupPage from './AddGroupPage';
import ManageGroupPage from './ManageGroupPage';
import PhoneAddress from './PhoneAddress';
import AddMenberManually from './AddMenberManually';
import GroupFriendPage from './GroupFriendPage';
import MyGroupChat from './MyGroupChat';
import AddMemberFromContacts from './AddMemberFromContacts';
import MenberAndGroupOnlyRead from './MenberAndGroupOnlyRead'

const GROUP_DATA = [
    {group_id:'01', group_name: '课题组01', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'},
    {group_id:'02', group_name: '课题组02', thumbnail: 'http://192.168.3.159:8081/app/images/weibo@2x.png'},
    {group_id:'03', group_name: '课题组03', thumbnail: 'http://192.168.3.159:8081/app/images/weixin@2x.png'},
    {group_id:'04', group_name: '课题组01', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'},
    {group_id:'05', group_name: '课题组01', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'},
    // {group_id:'06', group_name: '课题组01', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'},
    // {group_id:'07', group_name: '课题组01', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'},
    // {group_id:'08', group_name: '课题组01', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'},
    // {group_id:'09', group_name: '课题组01', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'},
    // {group_id:'10', group_name: '课题组01', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'}
];

export default class ContactsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        };
    }

    componentDidMount() {
        var group = GROUP_DATA;
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(group)
        });
    }

    //listview
    renderGroup(group) {
        return (
            <View>
                <Cell
                    //icon={<Image source={{uri:group.thumbnail}} style={{width: 35, height: 35}} />}
                    icon={<Image source={require('../../images/qq.png')} style={{width: 35, height: 35}} />}
                    label={group.group_name}
                    after={
                        <View style={{width: 60, height: 32}}>
                            <Button type="primary" size="small"
                                onPress={() => {
                                    this.props.navigator.push({
                                        component: ManageGroupPage
                                        });
                                    }
                                }
                            >
                                <Text>管理</Text>
                            </Button>
                        </View>
                    }
                    onPress={() => {
                        this.props.navigator.push({
                            component: MenberAndGroupOnlyRead
                            });
                        }
                    }
                />
                <View style={{height: 1/PixelRatio.get(), backgroundColor: '#ccc', marginLeft: 15, marginRight: 15}} />
            </View>
        );
    }

    search() {
        this.props.navigator.push({
            component: SearchPage
        });
    }
    addGroup() {
        this.props.navigator.push({
            component:AddGroupPage
        })
    }
    more() {
        UIManager.showPopupMenu(
            findNodeHandle(this.refs.more),
            ['通过手机联系人添加', '手动添加'],
            () => console.log("something went wrong with the popup menu"),
            (e, i)=> {
                if(i == 0) {
                    this.props.navigator.push({
                        component: AddMemberFromContacts
                    })
                }
                else if(i == 1) {
                    this.props.navigator.push({
                        component: AddMenberManually
                    })
                }
            }
        )
    }
    renderNavBar() {
        return (
            <NavBar style={Styles.navBar}>
                <NavTitle style={Styles.navTitle}>
                    联系人
                </NavTitle>
                <NavButton style={[Styles.navButton,{paddingLeft:10, paddingRight:10}]} onPress={() => this.search()} >
                    <Icon name="ios-search" size={23} color="#666" />
                </NavButton>
                <NavButton style={[Styles.navButton,{paddingLeft:15, paddingRight:15}]} onPress={() => this.addGroup()} >
                    <Icon name="ios-people-outline" size={25} color="#666" />
                </NavButton>
                <NavButton style={[Styles.navButton,{paddingLeft:15}]} onPress={() => this.more()}>
                    <Icon ref="more" name="ios-person-add-outline" size={25} color="#666" />
                </NavButton>
            </NavBar>
        );
    }

    _renderPage(index) {
        return (
            <View style={{width: 300,height: 400,backgroundColor: '#ccc'}}>
                <Text>
                    {Math.random()}
                </Text>
            </View>
        )
    }

    render() {
        if (this.props.loaded) {
            return (
                <View style={styles.container}>
                    {this.renderNavBar()}
                    <View style={styles.titleBoxView}>
                        <TouchableOpacity
                            style={styles.titleBox}
                            onPress={() => {
                                this.props.navigator.push({
                                    component: PhoneAddress
                                    });
                                }
                            }
                        >
                            <Icon name="md-contact" color="#00ff3b" size={50}></Icon>
                            <Text style={styles.titleText}>手机通讯录</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.titleBox}
                            onPress={() => {
                                this.props.navigator.push({
                                    component: GroupFriendPage
                                    });
                                }
                            }
                        >
                            <Icon name="ios-contact" color="#2382ff" size={50}></Icon>
                            <Text style={styles.titleText}>课题组好友</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.titleBox}
                            onPress={() => {
                                this.props.navigator.push({
                                    component: MyGroupChat
                                    });
                                }
                            }
                        >
                            <Icon name="ios-contacts" color="#ff9523" size={50}></Icon>
                            <Text style={styles.titleText}>我的群组</Text>
                        </TouchableOpacity>
                    </View>
                    
                    {/*课题组列表*/}
                    <ScrollView>
                        <Section>
                            <ListView
                                dataSource={this.state.dataSource}
                                renderRow={this.renderGroup.bind(this)}
                            />
                        </Section>

                        <Section style={{marginTop: 10}}>
                            <Cell
                                icon={{
                                    name: 'ios-add-circle',
                                    size: 25,
                                    color: '#00ff99'
                                }}
                                label="创建课题组"
                                onPress={() => {
                                    this.props.navigator.push({
                                        component: AddGroupPage
                                        });
                                    }
                                }
                            />
                        </Section>
                    </ScrollView>
                </View>
            );
        }
        else {
            return Common.renderLoading('正在加载...');
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#eee'
    },
    titleBoxView: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginBottom: 15,
        backgroundColor: '#fff',
        marginTop: 10,
    },
    titleBox: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 12,
        color: '#333',
        paddingTop: 10,
    }
});
