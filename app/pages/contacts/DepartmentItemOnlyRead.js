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
} from 'react-native';

import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';
import Section from '../../components/Section';
import Cell from '../../components/Cell';

import ContactInformationOnlyRead from './ContactInformationOnlyRead';
const DEPARTMENT = [
    {department_id: '001', department_name: 'department001'},
   // {department_id: '002', department_name: 'department002'},
   // {department_id: '003', department_name: 'department003'},
];
const MENBER = [
    {menber_id: '001', menber_name: '李四王五', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'},
    {menber_id: '002', menber_name: '李四王五', thumbnail: 'http://192.168.3.159:8081/app/images/weixin@2x.png'},
    {menber_id: '003', menber_name: '李四王五', thumbnail: 'http://192.168.3.159:8081/app/images/weibo@2x.png'},
    {menber_id: '001', menber_name: '李四王五', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'},
    {menber_id: '002', menber_name: '李四王五', thumbnail: 'http://192.168.3.159:8081/app/images/weixin@2x.png'},
    {menber_id: '003', menber_name: '李四王五', thumbnail: 'http://192.168.3.159:8081/app/images/weibo@2x.png'},
    {menber_id: '001', menber_name: '李四王五', thumbnail: 'http://192.168.3.159:8081/app/images/qq@2x.png'},
    {menber_id: '002', menber_name: '李四王五', thumbnail: 'http://192.168.3.159:8081/app/images/weixin@2x.png'},
    {menber_id: '003', menber_name: '李四王五', thumbnail: 'http://192.168.3.159:8081/app/images/weibo@2x.png'},
    {menber_id: '002', menber_name: '李四王五', thumbnail: 'http://192.168.3.159:8081/app/images/weixin@2x.png'},
    {menber_id: '003', menber_name: '李四王五', thumbnail: 'http://192.168.3.159:8081/app/images/weibo@2x.png'}
];
export default class DepartmentItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource_department: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            dataSource_menber: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
        };
    }

    componentDidMount() {
        var department = DEPARTMENT;
        var menber = MENBER;
        this.setState({
            dataSource_department: this.state.dataSource_department.cloneWithRows(department),
            dataSource_menber: this.state.dataSource_menber.cloneWithRows(menber),
        });
    }

    renderDepartment(department) {
        return (
            <View>
                <Cell
                    icon={<Image source={{uri: department.thumbnail}} style={{width: 35, height: 35}} />}
                    label={department.department_name}
                    arrow
                />
                <View style={{height: 1/PixelRatio.get(), backgroundColor: '#ccc', marginLeft: 20, marginRight: 20}} />
            </View>
        );
    }

    renderMenber(menber) {
        return (
            <View>
                <Cell
                    icon={<Image source={{uri: menber.thumbnail}} style={{width: 35, height: 35}} />}
                    label={menber.menber_name}
                    onPress = {() => {
                                this.props.navigator.push({
                                component: ContactInformationOnlyRead
                                    })
                                }
                            }
                />
                <View style={{height: 1/PixelRatio.get(), backgroundColor: '#ccc', marginLeft: 20, marginRight: 20}} />
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
                    部门和成员
                </NavTitle>
            </NavBar>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}

                <View style={styles.titleText}>
                    <Text style={{color:'#2196F3'}}>XXX课题组</Text>
                    <Text>  >  </Text>
                    <Text>XXX部门小组</Text>
                </View>
                <ScrollView>
                    <View>
                        <Section>
                            <ListView
                                dataSource={this.state.dataSource_department}
                                renderRow={this.renderDepartment.bind(this)}
                            />
                        </Section>
                    </View>
                    <View style={{marginTop: 10}}>
                        <Section>
                            <ListView
                                dataSource={this.state.dataSource_menber}
                                renderRow={this.renderMenber.bind(this)}
                            />
                        </Section>
                    </View>
                </ScrollView>
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
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
});
