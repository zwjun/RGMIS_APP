import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableHighlight,
    Dimensions,
    ScrollView,
    ListView,
} from 'react-native';
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';
import Styles from '../../components/Styles';
import Button from '../../components/Button';

import CommunityIntro from './CommunityIntro';

const Guestbook_DATA = [
    {id: '001', author: '李四', word: '韩国近千民众＂剃发＂抗议 要求取消萨德部署韩国近千民众＂剃发＂抗议 韩国近千民众＂剃发＂抗议 要求取消萨德部署韩国近千民众＂剃发＂抗议要求取消萨德部署 .',thumbnail: 'http://pic1.win4000.com/wallpaper/4/510f446941311.jpg', dataTime: '08-01', record_number: '108'},
    {id: '002', author: '张三', word: '兰博基尼车主不舍得打孔 透明胶带粘号牌被罚 .', thumbnail: 'http://beijingww.qianlong.com/mmsource/images/2008/03/28/bjwwlmgd080328014.jpg', dataTime: '08-01', record_number: '108'},
    {id: '003', author: '王五', word: '71岁放鹅爷爷写真帅遍全国 网友：耍酷不分年龄.', thumbnail: 'http://www.1tong.com/uploads/wallpaper/anime/209-3-1920x1200.jpg', dataTime: '08-11', record_number: '108'},
    {id: '006', author: '王五', word: '71岁放鹅爷爷写真帅遍全国 网友：耍酷不分年龄 .', thumbnail: 'http://www.1tong.com/uploads/wallpaper/anime/209-3-1920x1200.jpg', dataTime: '08-21', record_number: '108'},
    {id: '007', author: '李四', word: '韩国近千民众＂剃发＂抗议 要求取消萨德部署韩国近千民众＂剃发＂抗议 要求取消萨德部署 .',thumbnail: 'http://pic1.win4000.com/wallpaper/4/510f446941311.jpg', dataTime: '08-01', record_number: '108'},
    {id: '008', author: '张三', word: '兰博基尼车主不舍得打孔 透明胶带粘号牌被罚 .', thumbnail: 'http://beijingww.qianlong.com/mmsource/images/2008/03/28/bjwwlmgd080328014.jpg', dataTime: '08-01', record_number: '108'},
];

export default class TopicsPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
          dataSource: new ListView.DataSource({
              rowHasChanged: (row1, row2) => row1 !== row2
          }),
          author: '九妹',
          comment: '156',
          pageView: '900',
      };
    }

    componentDidMount() {
        let Guestbook = Guestbook_DATA;
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(Guestbook),
        });
    }
    renderSeparator(sectionID, rowID) {
        return (
            <View key={rowID} style={{height: StyleSheet.hairlineWidth, backgroundColor: '#ccc', marginLeft: 15, marginRight: 15}} />
        )
    }
    //访客留言
    renderGuestbook(Guestbook) {
        return(
            <TouchableHighlight underlayColor="rgba(0, 0, 0, 0.1)" 
                onPress={() => {
                    this.props.navigator.push({
                            component: TopicsPage,
                        });
                }}
            >
                <View style={{flexDirection: 'row', paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 15}}>
                    <View style={{width: 50, height: 50, borderRadius: 25, overflow: 'visible', marginLeft: 5, marginRight: 10, backgroundColor: '#fcc'}}>
                        <Image source={{uri: Guestbook.thumbnail}} style={{width: 50, height: 50,}}/>
                    </View>
                    
                    <View style={{flex: 1}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 12}}>{Guestbook.author}</Text>
                            <Text style={{fontSize: 12}}>{Guestbook.id}楼</Text>
                        </View>
                        <Text numberOfLines={3} style={{fontSize: 16, color: '#444', marginBottom: 5, marginTop: 8}}>{Guestbook.word}</Text>
                        <Text style={{fontSize: 12}}>时间：{Guestbook.dataTime}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
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
                    全部
                </NavTitle>
            </NavBar>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <ScrollView style={{flex: 1}}>
                    <View style={{padding: 20, paddingTop: 10, paddingBottom: 10, marginBottom: 10, backgroundColor: '#fff'}}>
                        <Text style={{fontSize: 18, color: '#333',paddingTop: 4}}>中文十级！福原爱：铜字拆开就是同金 相当于金牌.</Text> 
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require('../../images/qq.png')} style={{width: 16, height: 16, borderRadius: 8}} />
                            <Text style={{marginLeft:4, fontSize:12, color: '#2196F3'}}>{this.state.author}</Text>
                            <Text style={{marginLeft:10, fontSize:12}}>7-28</Text>
                            <Text style={{marginLeft:4, fontSize:12}}>10:30</Text>
                        </View>
                        <Text style={{fontSize: 16, color: '#444', lineHeight: 18, marginBottom: 10, marginTop: 10}}>  
                            中文十级！福原爱：铜字拆开就是同金 相当于金牌.
                            凤凰体育讯 北京时间8月17日消息，在今天凌晨结束的里约奥运会乒乓球女团季军争夺战中，日本队3-1击败了新加坡队，拿到了铜牌。
                        赛后，日本队长福原爱激动不已，她表示，因为上场输了2分，压力很大，哭得被子都湿透了。拿到铜牌后她很开心，因为铜牌得铜字拆开就是同金。
                            据央视记者李武军微博透露，夺得铜牌后，福原爱流下了激动的泪水。“石川佳纯场场拿两分，我场场输两分，压力太大了！我哭的都要把被子湿透了。
                        今天输给于梦雨后，我告诉伊藤美诚，相信自己。尽管离银牌还差一点，但铜牌也相当于金牌了，铜字拆开，不就是同金吗？”
                        </Text>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Text style={{marginLeft:4, fontSize:12}}>阅读  {this.state.pageView}</Text>
                            <View style={{flexDirection:'row'}}>
                                <Icon name="md-text" size={16} color="#2196F3"/>
                                <Text style={{marginLeft:10, fontSize:12, color: '#2196F3'}}>101</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex: 1, backgroundColor: '#fff'}}>
                        <View style={{flexDirection: 'row', marginLeft: 15, marginRight: 15, alignItems: 'center',height: 45, borderBottomColor: '#ccc', borderBottomWidth: StyleSheet.hairlineWidth}}>
                            <Icon name="md-text" size={25} color="#ffa100"/>
                            <Text style={{marginLeft:10, color: '#2196F3'}}>评论 101</Text>
                        </View>
                        <ListView
                            style={{flex: 1}}
                            initialListSize={10}
                            dataSource={this.state.dataSource}
                            renderRow={this.renderGuestbook.bind(this)}
                            renderSeparator={(sectionID, rowID) => this.renderSeparator(sectionID, rowID)}
                        />    
                    </View>
                </ScrollView>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
    bodyView: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
        paddingTop: Dimensions.get('window').width / 4,
    },
});