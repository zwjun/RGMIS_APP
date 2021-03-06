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
import Button from '../../components/Button';
import ModalBox from 'react-native-modalbox';

import AddDepartment from './AddDepartment';
import AddMenberManually from './AddMenberManually';
import AddMemberFromContacts from './AddMemberFromContacts';

const DEPARTMENT = [
    {department_id: '001', department_name: 'department001'},
    {department_id: '002', department_name: 'department002'},
    {department_id: '003', department_name: 'department003'},
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

    /*renderDepartment(department) {
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
    }*/

    renderMenber(menber) {
        return (
            <View>
                <Cell
                    icon={<Image source={{uri: menber.thumbnail}} style={{width: 35, height: 35}} />}
                    label={menber.menber_name}
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
                    管理成员和部门
                </NavTitle>
            </NavBar>
        );
    }

    open() {
        this.refs.modal.open()
    }
    close() {
        this.refs.modal.close()
    }
    toggleDisable() {
        this.setState({isDisabled: !this.state.isDisabled});
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
                
                    {/*<View>
                        <Section>
                         <Cell
                         icon={{
                         name: 'md-add-circle',
                         size: 25,
                         color: '#3d87ff'
                         }}
                         label="添加子部门"
                         onPress = {() => {
                         this.props.navigator.push({
                         component: AddDepartment
                         })
                         }
                         }
                         />
                         </Section>
                        <Section>
                            <ListView
                                dataSource={this.state.dataSource_department}
                                renderRow={this.renderDepartment.bind(this)}
                            />
                        </Section>
                    </View>*/}
                   
                    <Section>
                        <Cell
                            icon={{
                                name: 'md-add-circle',
                                size: 25,
                                color: '#3d87ff'
                            }}
                        label="添加课题组成员"
                        onPress = {() =>this.open()}
                        />
                        </Section>
                    
                    <ListView
                        style={{backgroundColor:'#fff'}}
                        dataSource={this.state.dataSource_menber}
                        renderRow={this.renderMenber.bind(this)}
                    />
                        
                {/*<View style={styles.buttonView}>
                    <View style={styles.buttonItem}>
                        <Button
                            type="primary" size="default"
                            style={{
                                backgroundColor: 'transparent',
                                borderWidth: 1,
                                borderColor: '#2196f3',
                                marginLeft: 20,
                                marginRight: 20,
                            }}
                            onPress = {() => {
                                this.props.navigator.push({
                                component: AddDepartment
                                    })
                                }
                            }
                        >
                            <Text style={{
                                color: '#2196f3'
                            }}>添加子部门</Text>
                        </Button>
                    </View>
                    <View style={styles.buttonItem}>
                        <Button
                            type="primary" size="default"
                            style={{
                                backgroundColor: 'transparent',
                                borderWidth: 1,
                                borderColor: '#2196f3',
                                marginLeft: 20,
                                marginRight: 20,
                            }}
                            onPress = {() =>this.open()}
                        >
                            <Text style={{color: '#2196f3'}}>
                                添加成员</Text>
                        </Button>
                    </View>
                </View>*/}
                <ModalBox
                    style={styles.modal}
                    position={"center"} ref={"modal"}
                    isDisabled={this.state.isDisabled}
                >
                    <View style={[styles.madalItem, {borderBottomWidth: 1, borderBottomColor: '#2196F3'}]}>
                        <Text style={[styles.modalText,{color: '#2196F3'}]}>选择添加方式</Text>
                    </View>
                    <TouchableHighlight
                        style={[styles.madalItem,{borderBottomWidth: .2, borderBottomColor: '#ccc'}]}
                        underlayColor="rgba(0, 0, 0, 0.1)"
                        onPress = {() => {
                                this.props.navigator.push({
                                component: AddMemberFromContacts
                                    })
                                }
                            }
                    >
                        <Text style={styles.modalText}>从手机通讯录添加</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.madalItem}
                        underlayColor="rgba(0, 0, 0, 0.1)"
                        onPress = {() => {
                                this.props.navigator.push({
                                component: AddMenberManually
                                    })
                                }
                            }
                    >
                        <Text style={styles.modalText}>手动输入添加</Text>
                    </TouchableHighlight>
                    {/*<Button onPress = {() =>this.close()} style={styles.btn}>按钮</Button>取消按钮*/}
                </ModalBox>
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
    buttonView: {
        height: 50,
        flexDirection: 'row',
    },
    buttonItem: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 280,
        height: 150,
        borderRadius: 6,
    },
    btn: {
        paddingTop: 10,
        backgroundColor: '#fcf',
        height: 40,
    },
    madalItem: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        width: 280,
    },
    modalText: {
        color: '#333',
        fontSize: 16,

    }

});
