import React, {
    Component
} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    ScrollView,
    ListView,
    Image,
    TouchableHighlight,
} from 'react-native';
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';
import Common from '../../components/Common';

import Button from 'react-native-button';
import SwipeableViews from 'react-swipeable-views/lib/index.native.animated';

import ChatPage from '../chat';
import SearchPage from './SearchPage';
import TitleTab from './TitleTab';

import MyCommunity from './MyCommunityPage';
import CommunityItemPage from './CommunityItemPage';
import CommunityMessage from './CommunityMessage';
import CreateCommunity from './CreateCommunity';

const MyCommunity_DATA = [
    {MyCommunity_id: '001', MyCommunity_name: 'JAVA交流社区',thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png', dataTime: '08/01', record_number: '108'},
    {MyCommunity_id: '002', MyCommunity_name: 'ASP交流社区', thumbnail: 'http://192.168.3.159:8081/app/images/weibo@2x.png', dataTime: '08/01', record_number: '108'},
    {MyCommunity_id: '003', MyCommunity_name: 'PHP交流社区', thumbnail: 'http://192.168.3.159:8081/app/images/weixin@2x.png', dataTime: '08/01', record_number: '108'},
];
const Community_DATA = [
    {Community_id: '001', Community_name: '李四王五', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png', dataTime: '08/01', record_number: '108'},
    {Community_id: '002', Community_name: '李四王五', thumbnail: 'http://192.168.3.159:8081/app/images/weixin@2x.png', dataTime: '08/01', record_number: '108'},
    {Community_id: '003', Community_name: '李四王五', thumbnail: 'http://192.168.3.159:8081/app/images/weibo@2x.png', dataTime: '08/01', record_number: '108'},
    {Community_id: '001', Community_name: '李四王五', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png', dataTime: '08/01', record_number: '108'},
    {Community_id: '002', Community_name: '李四王五', thumbnail: 'http://192.168.3.159:8081/app/images/weixin@2x.png', dataTime: '08/01', record_number: '108'},
    {Community_id: '003', Community_name: '李四王五', thumbnail: 'http://192.168.3.159:8081/app/images/weibo@2x.png', dataTime: '08/01', record_number: '108'},
    {Community_id: '001', Community_name: '李四王五', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png', dataTime: '08/01', record_number: '108'},
    {Community_id: '002', Community_name: '李四王五', thumbnail: 'http://192.168.3.159:8081/app/images/weixin@2x.png', dataTime: '08/01', record_number: '108'},
    {Community_id: '003', Community_name: '李四王五', thumbnail: 'http://192.168.3.159:8081/app/images/weibo@2x.png', dataTime: '08/01', record_number: '108'},
];

export default class CommunityPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            badge: '200',
            index: 0,
            checked: false,
            total_01: '3',
            total_02: '8',

            dataSource_MyCommunity: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            dataSource_Community: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
        };
    }
    //加载数据
    componentDidMount() {
        var MyCommunity = MyCommunity_DATA;
        var Community = Community_DATA;
        this.setState({
            dataSource_MyCommunity: this.state.dataSource_MyCommunity.cloneWithRows(MyCommunity),
            dataSource_Community: this.state.dataSource_Community.cloneWithRows(Community),
        });
    }

    handleChangeTabs = (value) => {
        this.setState({
            index: value,
        });
    };

    handleChangeIndex = (index) => {
        this.setState({
            index: index,
        });
    };
    //社区消息数量显示
    renderBadge(badge) {
        if (badge > 0) {
            return (
                <View style={{width: 16,height: 16,borderRadius: 8,backgroundColor: 'red',position: 'absolute',top: 0,right: 0,
                    alignItems: 'center',justifyContent: 'center'}}  
                >
                    <Text style={{width:20, color: '#fff', fontSize: 10, textAlign:'center'}} numberOfLines={1} >{badge > 99 ? '99' : badge}</Text>
                </View>    
            );
        }
    }
    //titlebar导航栏
    renderNavBar() {
        return (
            <NavBar style={Styles.navBar}>
                <NavTitle style={Styles.navTitle}>
                    微社区
                </NavTitle>
                <NavButton style={[Styles.navButton,{paddingLeft:10, paddingRight:10}]}
                    onPress={() => {
                        this.props.navigator.push({
                            component: SearchPage
                        })
                    }}
                >
                    <Icon name="ios-search-outline" size={25} color="#666" />
                </NavButton>
                <NavButton style={[Styles.navButton,{paddingRight:6}]}
                    onPress={() => {
                        this.props.navigator.push({
                            component: CommunityMessage
                            });
                        }
                    }
                >
                    <Icon name="ios-mail" size={26} color="#2196F3" />
                    {this.renderBadge(this.state.badge)}          
                </NavButton>
            </NavBar>
        );
    }
    //选择Tab按钮
    renderTitleTab() {
         const { index } = this.state;
        return (
            <View style={{flex: 1}} >
                <View style={{flexDirection: 'row', alignItems: 'center'}} >
                    <View style={styles.titleTab} >
                        <Button
                            style={index === 0 && {color: '#2196F3'}}
                            containerStyle={index === 0 && styles.containerStyle}
                            onPress={this.handleChangeTabs.bind(null, 0)}
                        >
                            我的社区
                        </Button>
                    </View>
                    <View style={{width: 1,height: 20,backgroundColor: '#ccc'}} />
                    <View style={styles.titleTab} >
                        <Button
                            style={index === 1 && {color: '#2196F3'}}
                            containerStyle={index === 1 && styles.containerStyle}
                            onPress={this.handleChangeTabs.bind(null, 1)}
                        >
                            更多社区
                        </Button>
                    </View>         
                </View>
                <SwipeableViews
                    index={index}
                    onChangeIndex={this.handleChangeIndex}
                    containerStyle={{flex: 1}}
                >
                    <ScrollView style={{flex: 1}}>
                        {this.renderListView()}
                    </ScrollView>
                    <ScrollView style={{flex: 1, backgroundColor: '#f00'}} >
                        
                    </ScrollView>
                </SwipeableViews>
            </View>
        );
    }

    //我创建的社区ListView列表定义
    renderMyCommunity(MyCommunity) {
        return (
        //    {/* <View>
        //         <Cell
        //             icon={<Image source={{uri: MyCommunity.thumbnail}} style={{width: 40, height: 40}} />}
        //             label={
        //                 <View style={{width: Dimensions.get('window').width - 180}}>
        //                     <Text style={{color:'#333',fontSize:16}} >{MyCommunity.MyCommunity_name}</Text>
        //                     <Text numberOfLines={1}>最新分享的内容最新分享的内容</Text>
        //                </View>
        //             }
        //             after={
        //                 <View>
        //                     <Text style={{color: '#2196F3',fontSize: 12}} >{MyCommunity.dataTime}：<Text>{MyCommunity.record_number}</Text> </Text>
        //                 </View>
        //             }
        //             onPress = {() => {
        //                 this.props.navigator.push({
        //                     component: CommunityItemPage
        //                     })
        //                 }
        //             }
        //         />
        //         <View style={{height: 1/PixelRatio.get(), backgroundColor: '#ccc', marginLeft: 20, marginRight: 20}} />
        //     </View> */}
            <TouchableHighlight 
                underlayColor="rgba(0, 0, 0, 0.1)"
                onPress = {() => {
                    this.props.navigator.push({
                        component: CommunityItemPage
                        })
                    }
                }
            >
                <View style={styles.rowStyle}>
                    <Image
                        style={styles.Avatar}
                        source={{uri: MyCommunity.thumbnail}}
                        //source={require('../../images/qq.png')}
                    />
                    <View style={styles.textView}>
                        <Text numberOfLines={1} style={styles.rowTitle}>{MyCommunity.MyCommunity_name} </Text>
                        <Text numberOfLines={1} style={styles.rowText}>最新分享的内容最新分享的内容分享的内容 </Text>
                    </View>
                    <View style={styles.rowTime}>
                        <Text style={styles.rowTimeStyle}>{MyCommunity.dataTime}：<Text>{MyCommunity.record_number}</Text></Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

     //我加入的社区ListView列表定义
    renderCommunity(Community) {
        return (
            <TouchableHighlight 
                underlayColor="rgba(0, 0, 0, 0.1)"
                onPress = {() => {
                    this.props.navigator.push({
                        component: CommunityItemPage
                        })
                    }
                }
            >
                <View style={styles.rowStyle}>
                    <Image
                        style={styles.Avatar}
                        source={{uri: Community.thumbnail}}
                        //source={require('../../images/qq.png')}
                    />
                    <View style={styles.textView}>
                        <Text numberOfLines={1} style={styles.rowTitle}>{Community.Community_name} </Text>
                        <Text numberOfLines={1} style={styles.rowText}>最新分享的内容最新分享的内容分享的内容 </Text>
                    </View>
                    <View style={styles.rowTime}>
                        <Text style={styles.rowTimeStyle}>{Community.dataTime}：<Text>{Community.record_number}</Text></Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
    //列表分割线
    renderSeparator(sectionID, rowID) {
        return (
            <View key={rowID} style={styles.separator} />
        )
    }

    renderListView() {
        return (
            <View style={{flex: 1, backgroundColor: '#eee'}}>
                <View style={{height: 30, justifyContent: 'center',paddingLeft: 10}}>
                    <Text>我创建的社区<Text>（{this.state.total_01}）</Text></Text>
                </View>
                <View>
                    {/*<Section>
                        <Cell
                            icon={{
                                name: 'md-add-circle',
                                size: 25,
                                color: '#3d87ff'
                                }}
                            label="创建属于自己的社区"
                            onPress = {() => {
                                    this.props.navigator.push({
                                        component: CreateCommunity
                                    })
                                }
                            }
                        />
                    </Section>*/}
                    {/**创建属于自己的社区 */}
                    <TouchableHighlight 
                        underlayColor="rgba(0, 0, 0, 0.1)"
                        onPress = {() => {
                            this.props.navigator.push({
                                component: CreateCommunity
                                })
                            }
                        }
                    >
                        <View style={{paddingTop: 10,paddingBottom: 10,paddingLeft: 30,flexDirection: 'row',alignItems: 'center',
                                    backgroundColor: '#fff',borderBottomWidth: StyleSheet.hairlineWidth,
                                    borderTopWidth: StyleSheet.hairlineWidth,borderColor: '#ccc'}}>
                            <Text><Icon name="md-add-circle" size={25} color="#4F8EF7" /></Text>
                            <Text style={{color: '#333',fontSize: 16,marginLeft: 20}}>创建属于自己的社区</Text>
                        </View>
                    </TouchableHighlight>
                    <ListView
                        style={{backgroundColor: '#fff'}}
                        dataSource={this.state.dataSource_MyCommunity}
                        renderRow={this.renderMyCommunity.bind(this)}
                        renderSeparator={(sectionID, rowID) => this.renderSeparator(sectionID, rowID)}
                    />
                    
                </View>

                <View style={{height: 30, justifyContent: 'center',paddingLeft: 10}}>
                    <Text>我加入的社区<Text>（{this.state.total_02}）</Text></Text>
                </View>

                <View>
                    <ListView
                        style={{backgroundColor: '#fff'}}
                        dataSource={this.state.dataSource_Community}
                        renderRow={this.renderCommunity.bind(this)}
                        renderSeparator={(sectionID, rowID) => this.renderSeparator(sectionID, rowID)}
                    />
                </View> 
            </View>
        )
    }

    render() {
        if (this.props.loaded) {
            return (
                <View style={styles.container}>
                    {this.renderNavBar()}
                    <View style={{height: 8, backgroundColor: '#eee'}} />
                    {this.renderTitleTab()}
                    
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
    flex: 1
  },
  text: {
    color: '#666',
    fontSize: 16,
  },
  titleTab: {
      //width: Dimensions.get('window').width / 2,
      flex: 1,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
  },
  containerStyle: {
    height: 45,
    width: Dimensions.get('window').width / 2 - 20, 
    //backgroundColor:'#fcf', 
    borderBottomWidth: 1, 
    borderColor:'#2196F3',
    justifyContent: 'center',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#ccc',
    marginLeft: 20,
    marginRight: 20
  },
  rowStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    Avatar: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginRight: 20,
        //backgroundColor: '#fcc'
    },
    textView: {
        flex: 1,
        justifyContent: "center",
    },
    rowTime: {
        justifyContent: "center",
    },
    rowTitle: {
        color: '#333',
        fontSize: 16,
    },
    rowText: {
        color: '#666',
        fontSize: 14,
    },
    rowTimeStyle: {
        color: '#2196F3',
        fontSize: 12,
    },
});