/*
* 2016-07-06
* */
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    Alert,
    ListView,
    ScrollView,
    Dimensions,
} from 'react-native';
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';
import Section from '../../components/Section';
import Cell from '../../components/Cell';
import Button from '../../components/Button';

import TeamTypePicker from './TeamStyle';
import AddingWays from './AddingWays'

const CONTACT_DATA = [
    {contact_id:'01', contact_name: '张三', photonumber: '12345678910', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'},
    {contact_id:'02', contact_name: '李四', photonumber: '12345678910', thumbnail: 'http://192.168.3.159:8081/app/images/weibo@2x.png'},
    {contact_id:'03', contact_name: '王五', photonumber: '12345678910', thumbnail: 'http://192.168.3.159:8081/app/images/weixin@2x.png'},
    {contact_id:'04', contact_name: '留美', photonumber: '12345678910', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'},
    {contact_id:'05', contact_name: '七七', photonumber: '12345678910', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'},
    {contact_id:'06', contact_name: '王八', photonumber: '12345678910', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'},
    {contact_id:'07', contact_name: '九妹', photonumber: '12345678910', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'},
    {contact_id:'08', contact_name: '一哥', photonumber: '12345678910', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'},
    {contact_id:'09', contact_name: '二货', photonumber: '12345678910', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'},
    {contact_id:'10', contact_name: '十四郎', photonumber: '12345678910', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'},
];
export default class AddGroupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamStyle: "必填",

            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        };
    }

    componentDidMount() {
        var personal = CONTACT_DATA;
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(personal)
        });
    }

    renderPersonal(personal) {
        return (
            <View>
                <Cell
                    // icon={<Image source={{uri: personal.thumbnail}} style={{width: 35, height: 35}} />}
                    icon={<Image source={require('../../images/qq.png')} style={{width: 35, height: 35}} />}
                    label={personal.contact_name}
                />
                <View style={{height: StyleSheet.hairlineWidth, backgroundColor: '#ccc', marginLeft: 15, marginRight: 15}} />
            </View>
        );
    }

    more() {
        UIManager.showPopupMenu(
            findNodeHandle(this.refs.more),
            ['Hello1', 'hello2'],
            () => console.log("something went wrong with the popup menu"),
            (e, i)=> console.log(e + " : " + i),   
        )
    }
    createGroup() {
        Alert.alert(
            '创建成功！！！',
            null,
            [{
                text: '取消'
            }, {
                text: '确定'
            }]
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
                    创建课题组
                </NavTitle>
                <NavButton style={Styles.navButton} >
                    <Text style={{fontSize: 16, color: '#2196F3'}}
                        onPress = {() =>this.createGroup()}
                    >创建</Text>
                </NavButton>
            </NavBar>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <Section style={{marginTop:10, marginBottom: 10}}>
                    <Cell
                        label="课题组名称"
                        after={
                            <TextInput
                                style={styles.textInput}
                                onChangeText={(text) => this.setState({text})}
                                placeholder="必填"
                                placeholderTextColor="#ccc"
                                underlineColorAndroid="transparent"
                              />
                        }
                    />
                    <Cell
                        label="团队类型"
                        after={<Text>{this.state.teamStyle}</Text>}
                        arrow
                        onPress = {() => {
                                this.props.navigator.push({
                                    component: TeamTypePicker,
                                    params: {
                                        callback: (teamStyle) => {
                                            this.setState({
                                                teamStyle
                                            });
                                        }
                                    }
                                })
                            }
                        }
                    />
                    <Cell
                        label="课题组简介"
                        after={
                            <TextInput
                                style={styles.textInput}
                                onChangeText={(text) => this.setState({text})}
                                placeholder="说点什么吧..."
                                maxLength={30}
                                multiline={true}
                                defaultValue={this.state.groupIntroduction}
                                placeholderTextColor="#ccc"
                                underlineColorAndroid="transparent"
                              />
                        }
                    />
                    {/*<Cell
                        label="邀请码"
                        after={
                            <TextInput
                                style={styles.textInput}
                                onChangeText={(text) => this.setState({text})}
                                placeholder="选填"
                                placeholderTextColor="#ccc"
                                underlineColorAndroid="transparent"
                                keyboardType="numeric"
                                maxLength={6}
                            />
                        }

                    />*/}
                </Section>
                <Section>
                    <Cell
                        icon={{
                            name: 'ios-add-circle',
                            size: 25,
                            color: '#00ff99'
                        }}
                        label="添加课题组成员"
                        arrow
                        onPress = {() => {
                            this.props.navigator.push({
                            component: AddingWays
                            })
                        } }
                    />
                </Section>
                <ScrollView>
                    <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this.renderPersonal.bind(this)}
                    />
                    <View style={styles.buttonView}>
                        <Button type="primary" size="default" onPress = {() =>this.createGroup()}>
                            <Text>立即创建</Text>
                        </Button>
                    </View>
                </ScrollView>
            </View>
        )
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
    textInput: {
        height: 32,
        width: Dimensions.get('window').width - 145,
        padding: 0
    },
    buttonView: {
        padding: 10
    }
});