import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ListView,
    Image,
    TouchableHighlight,
} from 'react-native';
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';

THEME_DATA = [
    {theme: '解析工业制造与传统制造的异同', Respondent: '学霸李四', message: '在干嘛？'},
    {theme: '摩擦力应用新的研究方式', Respondent: '学霸李四', message: '这部电影超垃圾'},
    {theme: '摩擦力应用新的研究方式', Respondent: '学霸李四', message: '哦'},
    {theme: '摩擦力应用新的研究方式', Respondent: '学霸李四', message: '呵呵\u{1F600}'},
    {theme: '解析工业制造与传统制造的异同', Respondent: '学霸李四', message: '超长文字测试超长文字测试超长文字测试超长文字测试超长文字测试超长文字测试'},
    {theme: '解析工业制造与传统制造的异同', Respondent: '学霸李四', message: '在干嘛？'},
    {theme: '摩擦力应用新的研究方式', Respondent: '学霸李四', message: '这部电影超垃圾'},
    {theme: '摩擦力应用新的研究方式', Respondent: '学霸李四', message: '哦'},
    {theme: '摩擦力应用新的研究方式', Respondent: '学霸李四', message: '呵呵\u{1F600}'},
    {theme: '解析工业制造与传统制造的异同', Respondent: '学霸李四', message: '在干嘛？'},
    {theme: '摩擦力应用新的研究方式', Respondent: '学霸李四', message: '这部电影超垃圾'},
    {theme: '摩擦力应用新的研究方式', Respondent: '学霸李四', message: '哦'},
    {theme: '摩擦力应用新的研究方式', Respondent: '学霸李四', message: '呵呵\u{1F600}'},
    {theme: '解析工业制造与传统制造的异同', Respondent: '学霸李四', message: '在干嘛？'},
    {theme: '摩擦力应用新的研究方式', Respondent: '学霸李四', message: '这部电影超垃圾'},
    {theme: '摩擦力应用新的研究方式', Respondent: '学霸李四', message: '哦'},
    {theme: '摩擦力应用新的研究方式', Respondent: '学霸李四', message: '呵呵\u{1F600}'},
];

export default class CommunityMessage extends Component {
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
        var data = THEME_DATA;
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data),
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
                    社区消息
                </NavTitle>
                
            </NavBar>
        );
    }

    chat() {
        setTimeout(() => {
            /*this.props.navigator.push({
                component: ChatPage
            })*/
        })
    }
    //定义Listview列表样式
    renderRow(data) {
        return (
            <TouchableHighlight
                underlayColor="rgba(0, 0, 0, 0.1)"
                onPress={() => this.chat()}
            >
                <View style={styles.row}>
                    <Image style={styles.avatar} source={require('../../images/qq.png')}>
                        {/*<View style={styles.badge}><Text style={styles.badgeText}>6</Text></View>*/}
                    </Image>
                    <View style={styles.content}>
                        <Text style={styles.name}>{data.theme}</Text>
                        <Text style={styles.message} numberOfLines={1}>
                            {data.Respondent}：<Text>{data.message}</Text>
                        </Text>
                    </View>
                    <View>
                        <Text>6月3日</Text>
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
                {this.renderNavBar()}   

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
        width: 40,
        height: 40
    },
    content: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10
    },
    name: {
        fontSize: 15,
        color: '#666'
    },
    message: {
        fontSize: 13,
        color: '#aaa',
        flex: 1,
    },
    separator: {
        height: StyleSheet.hairlineWidth,
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