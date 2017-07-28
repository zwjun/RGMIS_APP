import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ListView,
    ScrollView,
    TouchableHighlight,
    PixelRatio,
    Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Section from '../../components/Section';
import Cell from '../../components/Cell';
import Button from '../../components/Button';

import CommunityItemPage from './CommunityItemPage';
import CreateCommunity from './CreateCommunity';
import DetailWebView from './DetailWebView';

const MyCommunity_DATA = [
    {MyCommunity_id: '001', MyCommunity_name: 'JAVA交流社区',thumbnail: 'http://pic1.win4000.com/wallpaper/4/510f446941311.jpg', dataTime: '08-01', record_number: '108'},
    {MyCommunity_id: '002', MyCommunity_name: 'ASP交流社区', thumbnail: 'http://beijingww.qianlong.com/mmsource/images/2008/03/28/bjwwlmgd080328014.jpg', dataTime: '08-01', record_number: '108'},
    {MyCommunity_id: '003', MyCommunity_name: 'PHP交流社区', thumbnail: 'http://www.1tong.com/uploads/wallpaper/anime/209-3-1920x1200.jpg', dataTime: '08-01', record_number: '108'},
];
const Community_DATA = [
    {Community_id: '001', Community_name: '李四王五', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png', dataTime: '08-01', record_number: '108'},
    {Community_id: '002', Community_name: '李四王五', thumbnail: 'http://192.168.3.159:8081/app/images/weixin@2x.png', dataTime: '08-01', record_number: '108'},
    {Community_id: '003', Community_name: '李四王五', thumbnail: 'http://192.168.3.159:8081/app/images/weibo@2x.png', dataTime: '08-01', record_number: '108'},
    {Community_id: '001', Community_name: '李四王五', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png', dataTime: '08-01', record_number: '108'},
    {Community_id: '002', Community_name: '李四王五', thumbnail: 'http://192.168.3.159:8081/app/images/weixin@2x.png', dataTime: '08-01', record_number: '108'},
    {Community_id: '003', Community_name: '李四王五', thumbnail: 'http://192.168.3.159:8081/app/images/weibo@2x.png', dataTime: '08-01', record_number: '108'},
    {Community_id: '001', Community_name: '李四王五', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png', dataTime: '08-01', record_number: '108'},
    {Community_id: '002', Community_name: '李四王五', thumbnail: 'http://192.168.3.159:8081/app/images/weixin@2x.png', dataTime: '08-01', record_number: '108'},
    {Community_id: '003', Community_name: '李四王五', thumbnail: 'http://192.168.3.159:8081/app/images/weibo@2x.png', dataTime: '08-01', record_number: '108'},
];
export default class MyCommunity extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource_MyCommunity: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            dataSource_Community: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            total_01: '3',
            total_02: '8',
        };
    }

    componentDidMount() {
        var MyCommunity = MyCommunity_DATA;
        var Community = Community_DATA;
        this.setState({
            dataSource_MyCommunity: this.state.dataSource_MyCommunity.cloneWithRows(MyCommunity),
            dataSource_Community: this.state.dataSource_Community.cloneWithRows(Community),
        });
    }

    renderMyCommunity(MyCommunity) {
        return (
            <View>
                <Cell
                    icon={<Image source={{uri: MyCommunity.thumbnail}} style={{width: 40, height: 40}} />}
                    label={
                        <View style={{width: Dimensions.get('window').width - 180}}>
                            <Text style={{color:'#333',fontSize:16}} >{MyCommunity.MyCommunity_name}</Text>
                            <Text numberOfLines={1}>最新分享的内容最新分享的内容</Text>
                       </View>
                    }
                    after={
                        <View>
                            <Text style={{color: '#2196F3',fontSize: 12}} >{MyCommunity.dataTime}：<Text>{MyCommunity.record_number}</Text> </Text>
                        </View>
                    }
                    onPress = {() => {
                        this.props.navigator.push({
                            component: CommunityItemPage
                            })
                        }
                    }
                />
                {/*<View style={{height: 1/PixelRatio.get(), backgroundColor: '#ccc', marginLeft: 20, marginRight: 20}} />*/}
            </View>
        );
    }

    renderCommunity(Community) {
        return (
            <View>
                <Cell
                    icon={<Image source={{uri: Community.thumbnail}} style={{width: 40, height: 40}} />}
                    label={
                        <View style={{width: Dimensions.get('window').width - 180}}>
                            <Text style={{color:'#333',fontSize:16}} >{Community.Community_name}</Text>
                            <Text numberOfLines={1}>最新分享的内容最新分享的内容</Text>
                       </View>
                    }
                    after={
                        <View>
                            <Text style={{color: '#2196F3',fontSize: 12}} >{Community.dataTime}：<Text>{Community.record_number}</Text> </Text>
                        </View>
                    }
                    onPress = {() => {
                        this.props.navigator.push({
                            component: DetailWebView,
                            })
                        }
                    }
                />
                {/*<View style={{height: 1/PixelRatio.get(), backgroundColor: '#ccc', marginLeft: 20, marginRight: 20}} />*/}
            </View>
        );
    }

    renderSeparator(sectionID, rowID) {
        return (
            <View key={rowID} style={styles.separator} />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleText}>
                    <Text>我创建的社区<Text>（{this.state.total_01}）</Text></Text>
                </View>
                <View>
                    <Section>
                        <Cell
                            icon={{
                                name: 'md-add-circle',
                                size: 25,
                                color: '#3d87ff'
                                }}
                            label="创建属于自己的社区"
                            onPress = {() => {
                                    this.props.navigator.push({
                                        component: CreateCommunity,
                                    })
                                }
                            }
                        />
                    </Section>
                    
                    <ListView
                        style={styles.listViewBG}
                        dataSource={this.state.dataSource_MyCommunity}
                        renderRow={this.renderMyCommunity.bind(this)}
                        renderSeparator={(sectionID, rowID) => this.renderSeparator(sectionID, rowID)}
                    />
                    
                </View>

                <View style={styles.titleText}>
                    <Text>我加入的社区<Text>（{this.state.total_02}）</Text></Text>
                </View>

                <View>
                    <ListView
                        style={styles.listViewBG}
                        dataSource={this.state.dataSource_Community}
                        renderRow={this.renderCommunity.bind(this)}
                        renderSeparator={(sectionID, rowID) => this.renderSeparator(sectionID, rowID)}
                    />
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
    titleText: {
        height: 30,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#ccc',
        marginLeft: 20,
        marginRight: 20,
    },
    listViewBG: {
        backgroundColor: '#fff',
    },
});
