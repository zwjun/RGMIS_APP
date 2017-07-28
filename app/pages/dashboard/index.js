/**
 * Created by gatt on 2016/6/8.
 */
import React, {
    Component
} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    Picker,
    UIManager,
    findNodeHandle,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView,
    PixelRatio,
    Modal,
} from 'react-native';

import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import SwipeableViews from 'react-swipeable-views/lib/index.native.scroll';
import Banner from './BannerPlayAuto';

import Styles from '../../components/Styles';
import Checkbox from '../../components/Checkbox';
import Common from '../../components/Common';
import RadioButton from '../../components/RadioButton';
import RadioButtonGroup from '../../components/RadioButtonGroup';

import SearchPage from './SearchPage';
import CalenderPage from '../calendar';
import BulletinPage from '../bulletin';
import WeiyunPage from '../weiyun';
import TaskPage from '../task';
import SyllabusPage from '../syllabus';
import DocumentPage from '../document';
import TestPage from './test';
const numberOfColumns = 3;
let winSize = Dimensions.get('window');

const grid_data = [{
    component: BulletinPage,
    icon: 'ios-clipboard',
    title: '公告',
    bgColor: '#ED9625'
}, {
    component: WeiyunPage,
    icon: 'md-cloud-upload',
    title: '微云',
    bgColor: '#42A9F3'
},{
    component: TaskPage,
    icon: 'md-list-box',
    title: '任务',
    bgColor: '#12C778'
}, {
    component: CalenderPage,
    icon: 'md-calendar',
    title: '日程',
    bgColor: '#E56E56'
},{
    component: SyllabusPage,
    icon: 'md-grid',
    title: '课程表',
    bgColor: '#1296C7'
},{
    component: DocumentPage,
    icon: 'ios-folder-open',
    title: '课题文献',
    bgColor: '#437CDA'
},{
    component: TestPage,
    icon: 'ios-ionitron',
    title: '其他',
    bgColor: '#d400ff'
}];

export default class index extends Component {
    data = [{
        image: ''

    }];

    constructor(props) {
        super(props);

        this.state = {
            team: '广州拓源',
            modalVisible: false,
        }
    }

    search() {
        this.props.navigator.push({
            component: SearchPage
        });
    }

    more() {
        UIManager.showPopupMenu(
            findNodeHandle(this.refs.more),
            ['Hello1', 'hello2'],
            () => console.log("something went wrong with the popup menu"),
            (e, i)=> console.log(e + " : " + i),
        )
    }

    changeTeam() {
        UIManager.showPopupMenu(
            findNodeHandle(this.refs.teams),
            ['广州拓源信息技术服务有限公司', '企强在线'],
            () => console.log("something went wrong with the popup menu"),
            (e, i)=> console.log(e + " : " + i),
        )
    }

    renderNavBar() {
        return (
            <NavBar style={Styles.navBar}>
                <TouchableOpacity ref="teams" style={styles.teams} onPress={() => this.changeTeam()}>
                    <Text ref="teamText" numberOfLines={1} style={styles.teamText}>
                        {this.state.team}
                    </Text>
                    <Icon name="md-arrow-dropdown" size={25} color="#666" style={{marginLeft: 10,marginRight:10}}/>
                </TouchableOpacity>

                <NavButton style={[Styles.navButton, {paddingLeft:10, paddingRight:10}]} onPress={() => this.search()}>
                    <Icon name="ios-search-outline" size={25} color="#666" />
                </NavButton>
                <View>
                    <NavButton style={Styles.navButton} onPress={() => this.more()}>
                        <Icon ref="more" name="ios-menu-outline" size={25} color="#666" />
                    </NavButton>
                </View>
            </NavBar>
        );
    }

    renderGrid(grid, index) {
        const style = {
            borderRightWidth: StyleSheet.hairlineWidth,
            borderBottomWidth: StyleSheet.hairlineWidth,
        };
        if (index % numberOfColumns === 0) {
            style.borderLeftWidth = StyleSheet.hairlineWidth;
        }
        if (index < numberOfColumns) {
            style.borderTopWidth = StyleSheet.hairlineWidth;
        }

        return (
            <View key={index} style={[styles.grid, /*style   //去掉grid的边框*/]}>
                <TouchableOpacity
                    style={styles.gridTouch}
                    onPress={() => {
                        this.props.navigator.push({
                            component: grid.component,
                        })
                    }}
                >
                    <View style={[styles.gridicon_bg, {backgroundColor: grid.bgColor}]}>
                        <Icon name={grid.icon} size={45} color="#fff" />
                    </View>
                    
                    <Text style={styles.gridText}>{grid.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }

     renderGrids() {
        const grids = grid_data;
        return (
            <View style={styles.grids}>
                {grids.map((grid, index) => {
                    return this.renderGrid(grid, index);
                })}
            </View>
        )
    }
    // renderGrids() {
    //     const grids = [];
    //     for (let i = 0; i < 7; i++) {
    //         grids.push(i);
    //     }

    //     return (
    //         <View style={styles.grids}>
    //             {grids.map((g, i) => {
    //                 return this.renderGrid(g, i);
    //             })}
    //         </View>
    //     )
    // }

    render() {
        if (this.props.loaded) {
            return (
                <View style={styles.container}>
                    {this.renderNavBar()}
                    <ScrollView>
                        {/*<Image
                            style={styles.banner}
                            source={{uri: 'http://demo.qq-online.net:9002/images/wxbanner.jpg'}}
                        />*/}
                        <Banner {...this.props} />
                        {this.renderGrids()}

                        <View>
                            <Checkbox label="Hello" value="122"/>
                            <Checkbox label="Hello3" checked={true} disabled={true} value="1232"/>
                            <RadioButtonGroup>
                                <RadioButton title="hello1" />
                                <RadioButton title="hello2" />
                            </RadioButtonGroup>
                        </View>

                        <View onLayout={this.handleTextLayout}>
                            <Text >设备宽度：{winSize.width}</Text>
                            <Text>设备高度：{winSize.height}</Text>
                            <Text>像素密度：{winSize.scale} {PixelRatio.get()}</Text>
                            
                        </View>
                        <TouchableHighlight underlayColor="rgba(0, 0, 0, 0.1)" 
                            style={{height: 60, margin: 20, borderRadius: 5, backgroundColor: '#fcc', alignItems: 'center', justifyContent: 'center'}}
                            //onPress={() => alert('你好，明天！！！')}
                            onPress={() => {
                                    this.setModalVisible(true)
                                }}
                        >
                            <Text>Buttom</Text>
                        </TouchableHighlight>
                        <Modal //弹窗的修改
                            animationType={"fade"}
                            transparent={true}
                            visible={this.state.modalVisible}
                            onRequestClose={() => { this.setModalVisible(!this.state.modalVisible) }}
                        >
                            <View style={{justifyContent:'center', alignItems:'center', flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
                            
                                <TouchableOpacity   //空白
                                    style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}} 
                                    onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible)
                                        }}
                                />
                            
                                <View style={{backgroundColor:'#ffd', height: 200, width: Dimensions.get('window').width - 40, borderRadius: 5, 
                                    position: 'absolute', top: Dimensions.get('window').height/2 - 110, left: 20}}  //弹窗面
                                >
                                    <View style={{alignItems: 'center', padding: 16}}>
                                        <Text style={{fontSize: 18, color: '#333'}}>Hello World!</Text>
                                    </View>
                                    <View style={{width:Dimensions.get('window').width - 40, borderBottomWidth:StyleSheet.hairlineWidth, borderBottomColor: '#ccc'}} />
                                    <View style={{flex:1}}>
                                        <Text>高度：{Dimensions.get('window').height / 2 - 100}</Text>
                                        <Text>宽度：{Dimensions.get('window').width}</Text>
                                    </View>
                                    <TouchableHighlight underlayColor="rgba(0, 0, 0, 0.1)"
                                        style={{alignItems: 'center', padding: 16, backgroundColor:'#f00', margin: 10, borderRadius: 5}}
                                        onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible)
                                        }}
                                    >
                                        <Text>Hide Modal</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </Modal> 
                    </ScrollView>
                </View>
            );
        }
        else {
            return Common.renderLoading('正在加载...');
        }
    }

    handleTextLayout(evt){
        console.log(evt.nativeEvent.layout);
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
}

const styles = StyleSheet.create({
    container: {
       flex: 1
    },
    banner: {
        width: Dimensions.get('window').width,
        height: 180,
    },
    teams: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    teamText: {
        fontSize: 17,
        letterSpacing: 0.5,
        color: '#626262',
        fontWeight: '400',
    },
    gridText: {
        fontSize: 16,
        color: '#666',
    },
    grids: {
        //flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    grid: {
        width: Dimensions.get('window').width / numberOfColumns,
        height: Dimensions.get('window').width / numberOfColumns,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    gridTouch: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridicon_bg: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
});