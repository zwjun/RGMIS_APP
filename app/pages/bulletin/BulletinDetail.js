import React, {Component} from 'react';
import {
    Text,
    View,
    Alert,
    StyleSheet,
    ScrollView,
} from 'react-native';

import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';
import Button from '../../components/Button';


let DEFAULT_URL = 'http://www.lcode.org';

export default class BulletinDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '关于研究报销问题的公告',
            author: '生物科技研究小组',
            datatime: '2016.06.22',
            unread: '150',
            read: '15',
            content: '各部门：年末将至,为保证2015年度年终财务决算和2016年财务预算工作的顺利进行, 现将有关财务报销截止时间及相关事项通知如下：1、2015年财务报销截止时间为12月22日；2015年12月23日-2016年1月5日暂停办理财务报销支付款等事宜（含基建）。2、请各部门提前做好各项工作安排，将该结回的各类款项、该收取及上交的各类收入、该支付的各项费用、该清理的相关票据等抓紧时间办理和落实。3、对于在报销截止日期前未办理结算且未说明理由的借款将从借款人工资福利中扣还。请与学院有往来款项的单位和个人在此日期之前尽快办理结算手续。4、12月23日以后财务处将进入年终账务清理、内部结算、汇算清缴等年终决算、年报编制工作。5、芜湖地区卫校比照该通知执行。未尽事宜请咨询3395018。年终结算事宜纷繁，诸多不便敬请谅解，感谢各位一年来对财务处工作的支持、配合和谅解，并预祝新年愉快、身体健康、万事如意！',
            content01: '1、2015年财务报销截止时间为12月22日；2015年12月23日-2016年1月5日暂停办理财务报销支付款等事宜（含基建）。'
        };
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
                    公告
                </NavTitle>
                <NavButton style={Styles.navButton} onPress={() => this.delete()}>   
                    <Text style={{fontSize: 16}}>删除</Text>
                </NavButton>
            </NavBar>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <ScrollView style={styles.content}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>{this.state.title}</Text>
                        <Text style={{color: '#666'}}>{this.state.author}    <Text>{this.state.datatime}</Text></Text>
                    </View>
                    <Text style={styles.read}>{this.state.unread}人未读,  <Text>{this.state.read}人已读</Text></Text>
                    <Text style={styles.contentText}>
                        <Text>{this.state.content01 + '\n'}</Text>
                        <Text>{this.state.content01 + '\n'}</Text>
                        <Text>{this.state.content01 + '\n'}</Text>
                        <Text>{this.state.content01 + '\n'}</Text>
                        <Text>{this.state.content01 + '\n'}</Text>
                        <Text>{this.state.content01 + '\n'}</Text>
                        <Text>{this.state.content01 + '\n'}</Text>
                        <Text>{this.state.content01 + '\n'}</Text>
                        <Text>{this.state.content01 + '\n'}</Text>
                    </Text>
                </ScrollView>
            </View>
        );
    }

    delete() {
        Alert.alert(
            null,
            '删除公告后，该公告消息链接将继续保留，但不能查看详情。',
            [{
                text: '取消',
            }, {
                text: '确定', //onPress: () => BackAndroid.exitApp()
            }]
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },
    content: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#fcfcfc'
    },
    title: {
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        //justifyContent: 'center',
    },
    titleText: {
        marginBottom: 2,
        fontSize: 18, 
        color: '#333'
    },
    read: {
        color: '#2196F3', 
        marginBottom: 10,
    },
    contentText: {
        fontSize: 15,
        color: '#333',
        //letterSpacing: 2,
        lineHeight: 18,
    },
});