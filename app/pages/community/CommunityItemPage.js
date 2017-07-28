import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ListView,
  TouchableHighlight,
  PixelRatio,
  Dimensions,
} from 'react-native';
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';
import Common from '../../components/Common';
import TopicsPage from './TopicsPage';

const Topic_DATA = [
    {id: '001', author: '李四',stickied: true, hot: true, summary: '韩国近千民众＂剃发＂抗议 要求取消萨德部署韩国近千民众＂剃发＂抗议 要求取消萨德部署 .',thumbnail: 'http://pic1.win4000.com/wallpaper/4/510f446941311.jpg', dataTime: '08-01', record_number: '108'},
    {id: '002', author: '张三',stickied: false, hot: true, summary: '兰博基尼车主不舍得打孔 透明胶带粘号牌被罚 .', thumbnail: 'http://beijingww.qianlong.com/mmsource/images/2008/03/28/bjwwlmgd080328014.jpg', dataTime: '08-01', record_number: '108'},
    {id: '003', author: '王五',stickied: false, hot: false, summary: '71岁放鹅爷爷写真帅遍全国 网友：耍酷不分年龄.', thumbnail: 'http://www.1tong.com/uploads/wallpaper/anime/209-3-1920x1200.jpg', dataTime: '08-01', record_number: '108'},
    {id: '004', author: '李四',stickied: true, hot: true, summary: '中文十级！福原爱：铜字拆开就是同金 相当于金牌.', dataTime: '08-01', record_number: '108'},
    {id: '005', author: '张三',stickied: false, hot: true, summary: '兰博基尼车主不舍得打孔 透明胶带粘号牌被罚 .', dataTime: '08-01', record_number: '108'},
    {id: '006', author: '王五',stickied: false, hot: false, summary: '71岁放鹅爷爷写真帅遍全国 网友：耍酷不分年龄 .', thumbnail: 'http://www.1tong.com/uploads/wallpaper/anime/209-3-1920x1200.jpg', dataTime: '08-01', record_number: '108'},
    {id: '007', author: '李四',stickied: true, hot: true, summary: '韩国近千民众＂剃发＂抗议 要求取消萨德部署韩国近千民众＂剃发＂抗议 要求取消萨德部署 .',thumbnail: 'http://pic1.win4000.com/wallpaper/4/510f446941311.jpg', dataTime: '08-01', record_number: '108'},
    {id: '008', author: '张三',stickied: false, hot: true, summary: '兰博基尼车主不舍得打孔 透明胶带粘号牌被罚 .', thumbnail: 'http://beijingww.qianlong.com/mmsource/images/2008/03/28/bjwwlmgd080328014.jpg', dataTime: '08-01', record_number: '108'},
    {id: '009', author: '王五',stickied: false, hot: false, summary: '71岁放鹅爷爷写真帅遍全国 网友：耍酷不分年龄 .', thumbnail: 'http://www.1tong.com/uploads/wallpaper/anime/209-3-1920x1200.jpg', dataTime: '08-01', record_number: '108'},

];

export default class CommunityItemPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
          dataSource: new ListView.DataSource({
              rowHasChanged: (row1, row2) => row1 !== row2
          }),
          loaded: false,
      };
    }

    componentDidMount() {
        let Topic = Topic_DATA;
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(Topic),
            loaded: true,
        });
    }

    renderLoadingView() {
        return Common.renderLoading('正在加载...');
    }

    renderTopic(Topic) {
        return (
            // <View>
            //     <Cell
            //         icon={<Image source={{uri: Topic.thumbnail}} style={{width: 40, height: 40}} />}
            //         label={
            //             <View style={{width: Dimensions.get('window').width - 180}}>
            //                 <Text style={{color:'#333',fontSize:16}} >{Topic.MyCommunity_name}</Text>
            //                 <Text numberOfLines={1}>最新分享的内容最新分享的内容</Text>
            //            </View>
            //         }
            //         after={
            //             <View>
            //                 <Text style={{color: '#2196F3',fontSize: 12}} >{Topic.dataTime}：<Text>{Topic.record_number}</Text> </Text>
            //             </View>
            //         }
            //         onPress = {() => {
            //             this.props.navigator.push({
            //                 component: CommunityItemPage
            //                 })
            //             }
            //         }
            //     />
            // </View>
            <TouchableHighlight underlayColor="rgba(0, 0, 0, 0.1)" 
                onPress={() => {
                    this.props.navigator.push({
                            component: TopicsPage,
                        });
                }}
            >
                <View style={{paddingLeft:15, paddingRight:15, paddingTop:10, paddingBottom:10,flexDirection: 'row',alignItems: 'center' }}>
                    <View style={{flex: 1}}>
                        <Text numberOfLines={2} style={{fontSize:16, color:'#333'}}>{Topic.summary}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                            {/*<Image source={{uri: Topic.thumbnail}} style={{width: 10, height: 10}} />*/}
                            <Image source={require('../../images/qq.png')} style={{width: 16, height: 16, borderRadius: 8}} />
                            <Text style={{marginLeft:4, fontSize:12}}>{Topic.author}  <Text>{Topic.record_number}评论</Text></Text>
                            <View style={{flexDirection: 'row'}}>
                                {Topic.stickied? <View style={{borderColor:'#f00', borderWidth: 2*StyleSheet.hairlineWidth, borderRadius: 2, marginLeft: 10}}><Text style={{color: '#f00', fontSize: 11,marginLeft:3, marginRight: 3}}>置顶</Text></View> : null}
                                {Topic.hot? <View style={{borderColor:'#f00', borderWidth: 2*StyleSheet.hairlineWidth, borderRadius: 3, marginLeft: 10}}><Text style={{color: '#f00', fontSize: 11, marginLeft:3, marginRight: 3}}>热</Text></View> : null}
                            </View>
                        </View>
                    </View>
                    {Topic.thumbnail? <Image source={{uri: Topic.thumbnail}} style={{width: 100, height: 60}} /> : null}
                </View>
            </TouchableHighlight>
        );
    }

    renderSeparator(sectionID, rowID) {
        return (
            <View key={rowID} style={styles.separator} />
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
                    {"社区"}
                </NavTitle>
                
                <NavButton style={[Styles.navButton]}
                    // onPress={() => {
                    //     this.props.navigator.push({
                    //         component: null
                    //         });
                    //     }
                    // }
                    onPress={() => {alert("hello!!!!!")}}
                >
                    <Icon name="md-create" size={20} color="#2196F3" />          
                </NavButton>
            </NavBar>
        );
    }

    itemHeader() {
        return (
            <TouchableHighlight 
                underlayColor="rgba(0, 0, 0, 0.1)"
                // onPress = {() => {
                //     this.props.navigator.push({
                //         component: CommunityItemPage
                //         })
                //     }
                // }
                onPress={() => {alert("欢迎进入社区设置页面！！！！")}}
            >
                <View style={styles.itemHeader}>
                    <Image
                        style={styles.Avatar}
                        //source={{uri: arr.thumbnail}}
                        source={require('../../images/weibo.png')}
                    />

                    <View style={styles.textView}>
                        <Text numberOfLines={1} style={{fontSize:16, color:'#2196F3', marginBottom:5}}>工业学院交流社区</Text>
                        <Text numberOfLines={2}>最新分享的内容最新分享的内容分享的内容最新分享的内容最新分享的内容分享的内容</Text>
                    </View>
                    
                    <Text><Icon name="ios-arrow-forward" size={30} color="#ccc" /></Text>
                </View>
            </TouchableHighlight>
        );
    }
    // render() {
    //     if (this.props.loaded) {
    //         return (
    //             <View style={styles.container}>
    //                 {this.renderNavBar()}                 
    //                  {this.itemHeader()}
    //             </View>
    //         );
    //     }
    //     else {
    //         return Common.renderLoading('正在加载...');
    //     }
    // }
    renderdataSource() {
        if(!this.state.loaded) {
            return Common.renderLoading('正在加载...');
        }
        else {
            return(
                <ListView
                    style={{flex: 1}}
                    //指定在组件刚挂载的时候渲染多少行数据
                    initialListSize={10}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData, sectionID, rowID) => this.renderTopic(rowData, sectionID, rowID)}
                    renderSeparator={(sectionID, rowID) => this.renderSeparator(sectionID, rowID)}
                    //调用onEndReached之前的临界值，单位是像素。
                    onEndReachedThreshold={10}
                    //监听滑动到底部的方法 注意ES6的写法必须要bind要不然this对象不对
                    onEndReached={() => this.onLoadeMore()}
                />      
            );
        }
    }
      
    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()} 
                {this.itemHeader()} 
                {this.renderdataSource()} 
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#fff',
    },
    itemHeader: {
        //flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ccc',
    },
    Avatar: {
        width: 60,
        height: 60,
        borderRadius: 25,
        marginRight: 10,
        //backgroundColor: '#fcc'
    },
    textView: {
        flex: 1,
        justifyContent: "center",
        paddingRight: 10,
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#ccc',
        marginLeft: 15,
        marginRight: 15,
    },
});