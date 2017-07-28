import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ListView,
    Image,
    TouchableHighlight,
} from 'react-native';
import BulletinDetail from './BulletinDetail';
UnreadBulletin_DATA = [
    {id: '001', author: '李四', title: '未读的List韩国近千民众.',thumbnail: 'http://pic1.win4000.com/wallpaper/4/510f446941311.jpg', dataTime: '2016.06.12'},
    {id: '002', author: '张三', title: '兰博基尼车主不舍得打孔.', thumbnail: 'http://beijingww.qianlong.com/mmsource/images/2008/03/28/bjwwlmgd080328014.jpg', dataTime: '2016.06.21'},
    {id: '003', author: '王五', title: '71岁放鹅爷爷写真帅遍全国 网友：耍酷不分年龄.', thumbnail: 'http://img5.duitang.com/uploads/item/201508/12/20150812204056_tkr8x.jpeg', dataTime: '2016.06.22'},
    {id: '004', author: '李四', title: '中文十级！福原爱.', thumbnail: 'http://attach.bbs.miui.com/forum/201203/20/170226n5qcwdpusnjdsswy.jpg', dataTime: '2016.06.15'},
    {id: '005', author: '张三', title: '兰博基尼车主不舍得打孔.', thumbnail: 'http://pic.qiantucdn.com/58pic/18/30/27/54R58PICujM_1024.jpg', dataTime: '2016.06.16'},
    {id: '006', author: '王五', title: '网友：耍酷不分年龄 .', thumbnail: 'http://www.1tong.com/uploads/wallpaper/anime/209-3-1920x1200.jpg', dataTime: '2016.06.23'},
    {id: '007', author: '李四', title: '要求取消萨德部署 .',thumbnail: 'http://pic1.win4000.com/wallpaper/4/510f446941311.jpg', dataTime: '2016.06.23'},
    {id: '008', author: '张三', title: '透明胶带粘号牌被罚 .', thumbnail: 'http://beijingww.qianlong.com/mmsource/images/2008/03/28/bjwwlmgd080328014.jpg', dataTime: '2016.06.24'},
    {id: '009', author: '王五', title: '71岁放鹅爷爷写真帅遍全国 网友：耍酷不分年龄.', thumbnail: 'http://i0.sinaimg.cn/ent/2013/1206/U10247P28DT20131206170216.jpg', dataTime: '2016.06.22'},
    {id: '010', author: '李四', title: '中文十级！福原爱.', thumbnail: 'http://i2.sinaimg.cn/ent/2013/1206/U10247P28DT20131206170218.jpg', dataTime: '2016.06.15'},
    {id: '011', author: '张三', title: '兰博基尼车主不舍得打孔.', thumbnail: 'http://p1.img.cctvpic.com/photoworkspace/contentimg/2013/12/16/2013121609522942066.jpg', dataTime: '2016.06.16'},
    {id: '012', author: '王五', title: '网友：耍酷不分年龄.', thumbnail: 'http://pic51.nipic.com/file/20141024/5076642_105127070336_2.jpg', dataTime: '2016.06.23'},
    
];
let hairlineWidth = StyleSheet.hairlineWidth;

export default class UnreadBulletin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
        };
    }
    //加载页面后加载数据
    componentDidMount() {
        var data = UnreadBulletin_DATA;
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data),
        });
    }

    chat() {
        setTimeout(() => {
            this.props.navigator.push({
                component: BulletinDetail,
            })
        })
    }

    //定义Listview列表样式
    renderRow(data) {
        return (
            <TouchableHighlight//只能有一个child
                underlayColor="rgba(0, 0, 0, 0.1)"
                onPress={() => this.chat()}
            >
                <View style={styles.row}>
                    <Image source={{uri: data.thumbnail}} style={styles.avatar}>
                        {/*<View style={styles.badge}><Text style={styles.badgeText}>6</Text></View>*/}
                    </Image>
                    <View style={styles.content}>
                        <View style={styles.title}>
                            <Text style={{fontSize: 16, color: '#333'}}>{data.title}</Text>
                        </View>
                        <View style={styles.message}>
                            <View>
                                <Text>{data.author}</Text>
                            </View>
                            <View>
                                <Text>{data.dataTime}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
    
    //Listview列表分隔符
    renderSeparator(sectionID, rowID) {
        return (
            <View key={rowID} style={styles.separator} />
        )
    }

    render() {
        return (
            <View style={styles.container}>   

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(data) => this.renderRow(data)}
                    renderSeparator={(sectionID, rowID) => this.renderSeparator(sectionID, rowID)}
                >
                </ListView>   

            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#fff',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
    },
    avatar: {
        width: 80,
        height: 60,
    },
    content: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        //justifyContent: 'space-between',
    },
    title: {
        flex: 2,
        //backgroundColor:'#fcc'
    },
    message: {
        flex: 1,
        //backgroundColor:'#cfc',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        height: hairlineWidth,
        backgroundColor: '#ccc',
        marginLeft: 10,
        marginRight: 10
    },
    badge: {
        borderRadius: 8,
        backgroundColor: '#E51C23',
        position: 'absolute',
        top: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5
    },
    badgeText: {
        fontSize: 12,
        color: 'white'
    }
});