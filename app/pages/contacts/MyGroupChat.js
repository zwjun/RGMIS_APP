import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ListView,
    Image,
    PixelRatio,
    ScrollView
} from 'react-native';
import Section from '../../components/Section';
import Cell from '../../components/Cell';

import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';

const GROUP_DATA = [
    {group_id:'01', group_name: '课题组01', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'},
    {group_id:'02', group_name: '课题组02', thumbnail: 'http://192.168.3.159:8081/app/images/weibo@2x.png'},
    {group_id:'03', group_name: '课题组03', thumbnail: 'http://192.168.3.159:8081/app/images/weixin@2x.png'},
    {group_id:'04', group_name: '课题组01', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'},
    {group_id:'05', group_name: '课题组01', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'},
    {group_id:'06', group_name: '课题组01', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'},
    {group_id:'07', group_name: '课题组01', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'},
    {group_id:'08', group_name: '课题组01', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'},
    {group_id:'09', group_name: '课题组01', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'},
    {group_id:'10', group_name: '课题组01', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'},
    {group_id:'07', group_name: '课题组01', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'},
    {group_id:'08', group_name: '课题组01', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'},
    {group_id:'09', group_name: '课题组01', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'},
    {group_id:'10', group_name: '课题组01', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'},
];

export default class MyGroupChat extends Component {

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
                    onPress={() => alert(group.group_id)}
                    /*onPress={() => {
                        this.props.navigator.push({
                            component: ManageGroupPage
                            });
                        }
                    }*/
                />
                <View style={{height: 1/PixelRatio.get(), backgroundColor: '#ccc', marginLeft: 15, marginRight: 15}} />
            </View>
        );
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
                    我的群组
                </NavTitle>
            </NavBar>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                
                    <ListView
                        style={{marginTop: 10, backgroundColor: '#fff'}}
                        initialListSize={14}
                        dataSource={this.state.dataSource}
                        renderRow={this.renderGroup.bind(this)}
                    />
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
});
