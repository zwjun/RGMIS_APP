/**
 * Created by gatt on 2016/6/6.
 */
import React, { Component } from 'react';
import ReactNative, {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';
//日历插件
import Calendar from 'react-native-calendar';
import moment from 'moment';

import AddCalendarPage from './AddCalendarPage';

var line = StyleSheet.hairlineWidth;
var {height, width} = Dimensions.get('window');
const customDayHeadings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const customMonthNames = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
const record_data = [
    {recordId: '001', title: '发放科研材料1', main: '安排发放科研材料事宜', timeBucket: '10:30 ~ 12:00'},
    {recordId: '002', title: '发放科研材料2', main: '安排发放科研材料事宜', timeBucket: '10:30 ~ 12:00'},
    {recordId: '003', title: '发放科研材料3', main: '安排发放科研材料事宜', timeBucket: '10:30 ~ 12:00'}, 
];
const task_data =[
    {taskId: '001', title: '看小黄人', department: '电子科技小组', deadline: '2016-10-01'},
    {taskId: '002', title: '看熊大熊二', department: '观影测评小组', deadline: '2016-10-01'}
];
const bulletin_data =[
    {bulletinId: '001', title: '小黄人观影感', department: '电子科技小组', writer: 'Jim', date: '2016-10-01'},
    {bulletinId: '002', title: '熊大熊二', department: '观影测评小组', writer: 'Tom', date: '2016-10-01'}
];

export default class CalendarPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: moment().format(),
        };
    }

    addCalendar() {
        this.props.navigator.push({
            component: AddCalendarPage
        });
    }

    _onPress() {
        setTimeout(() => {
            /*this.props.navigator.push({
                component: ChatPage
            })*/
        })
    }

    renderNavBar() {
        return (
            <NavBar style={Styles.navBar}>
                <NavButton
                    style={Styles.navButton}
                    onPress={() => this.props.navigator.pop()}
                >
                    <Icon name="md-close" size={25} color="#666" />
                </NavButton>
                <NavTitle style={Styles.navTitle}>
                    日历
                </NavTitle>
                <NavButton
                    style={Styles.navButton}
                    onPress={() => this.addCalendar()}
                >
                    <Icon name="md-add" size={25} color="#666" />
                </NavButton>
            </NavBar>
        );
    }

    renderCalendar() {
        return (
            <Calendar
                ref="calendar"
                eventDates={['2016-07-03', '2016-07-05', '2016-07-28', '2016-07-30']}
                scrollEnabled
                //startDate={'2016-07-25'}                  //heading的显示月份
                //selectedDate={'2016-08-25'}
                weekStart={7}
                //today={'2016-07-25'}
                showControls={true} 
                dayHeadings={customDayHeadings}
                monthNames={customMonthNames}
                titleFormat={'MMMM YYYY'}
                prevButtonText={'上个月'}
                nextButtonText={'下个月'}
                onDateSelect={(date) => this.setState({ selectedDate: date })}
                onTouchPrev={() => console.log('Back TOUCH')}     // eslint-disable-line no-console
                onTouchNext={() => console.log('Forward TOUCH')}  // eslint-disable-line no-console
                onSwipePrev={() => console.log('Back SWIPE')}     // eslint-disable-line no-console
                onSwipeNext={() => console.log('Forward SWIPE')}  // eslint-disable-line no-console
                customStyle={{
                    calendarHeading: {borderColor: '#ccc', borderTopWidth: line, borderBottomWidth: line, paddingVertical: 5, backgroundColor: '#2196F3'},
                    dayButton: {borderTopWidth: 0, borderBottomWidth: line, borderBottomColor: '#ccc'},
                    eventIndicatorFiller: {width: 6, height: 6, borderRadius: 3},
                    eventIndicator: {backgroundColor: '#2196F3'}
                }}
            />
        )
    }

    renderRecord() {
        const recodData = record_data;
        return (
            <View style={styles.Content}>
                <View style={styles.titleRow}>
                    <Text style={styles.titleText}>
                        <Icon name="ios-calendar" size={20} color="#2196F3" />
                        <Text>  日志</Text>
                    </Text>
                </View>
                <View>
                    {recodData.map((e) => {
                        return (
                            <TouchableHighlight key={e.recordId} underlayColor="rgba(0, 0, 0, 0.1)" onPress={this._onPress}>
                                <View  style={styles.rowItem}>
                                    <View>
                                        <Text style={[styles.itemTitle,styles.textWidth]}>{e.title}</Text>
                                        <Text numberOfLines={3} style={styles.textWidth}>{e.main}</Text>
                                    </View>
                                    <View>
                                        <Text>{e.timeBucket}</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        )
                    })}
                    {/*<TouchableHighlight underlayColor="rgba(0, 0, 0, 0.1)" onPress={this._onPress}>
                        <View  style={styles.rowItem}>
                            <View>
                                <Text style={[styles.itemTitle,styles.textWidth]}>发放科研材料</Text>
                                <Text numberOfLines={3} style={styles.textWidth}>安排发放科研材料事宜.</Text>
                            </View>
                            <View>
                                <Text>10:30 ~ 12:00</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="rgba(0, 0, 0, 0.1)" onPress={this._onPress}>
                        <View  style={styles.rowItem}>
                            <View>
                                <Text style={[styles.itemTitle,styles.textWidth]}>发放科研材料</Text>
                                <Text numberOfLines={3} style={styles.textWidth}>安排发放科研材安排发放科研材料事宜安排发放科研材料事宜料事宜.</Text>
                            </View>
                            <View>
                                <Text>10:30 ~ 12:00</Text>
                            </View>
                        </View>
                    </TouchableHighlight>*/}
                </View>
            </View>
        )
    }

    renderTask() {
        const taskData = task_data;
        return (
            <View style={styles.Content}>
                <View style={styles.titleRow}>
                    <View>
                        <Text style={styles.titleText}>
                            <Icon name="ios-list-box" size={20} color="#2196F3" />  任务
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {alert("进入任务首页！")}}
                    >
                        <Text style={[styles.titleText,{fontSize: 14}]}>进入首页</Text>
                    </TouchableOpacity>
                </View>
                {taskData.map((e) => {
                    return (
                        <TouchableHighlight key={e.taskId} underlayColor="rgba(0, 0, 0, 0.1)" onPress={this._onPress}>
                            <View style={styles.Item}>
                                
                                <Text style={[styles.itemTitle,styles.textWidth]}>{e.title}</Text>
                                <Text>{e.department}</Text>
                                
                                <Text>截止时间：{e.deadline}</Text>    
                            </View>
                        </TouchableHighlight>
                    )
                })}
            </View>
        )
    }

    renderBulletin() {
        const bulletinData = bulletin_data;
        return (
            <View style={styles.Content}>
                <View style={styles.titleRow}>
                    <View>
                        <Text style={styles.titleText}>
                            <Icon name="ios-clipboard" size={20} color="#2196F3" />  公告
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {alert("进入公告栏首页！")}}
                    >
                        <Text style={[styles.titleText,{fontSize: 14}]}>进入首页</Text>
                    </TouchableOpacity>
                </View>
                {bulletinData.map((e) => {
                    return (
                        <TouchableHighlight key={e.bulletinId} underlayColor="rgba(0, 0, 0, 0.1)" onPress={this._onPress}>
                            <View style={styles.Item}>
                                
                                <Text style={[styles.itemTitle,styles.textWidth]}>{e.title}</Text>
                                <Text>{e.department}</Text>
                                
                                <Text>发布人：{e.writer}</Text>    
                            </View>
                        </TouchableHighlight>
                    )
                })}
                
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <ScrollView>
                    {this.renderCalendar()}
                    <View style={styles.content}>
                        <Text>Selected Date:{moment(this.state.selectedDate).format('MMMM DD YYYY')}</Text>
                    </View>
                    {this.renderRecord()}
                    {this.renderTask()}
                    {this.renderBulletin()}
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
    Content: {
        backgroundColor: '#fff',
        //paddingHorizontal: 10,
        marginVertical: 10,
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    rowItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderTopWidth: line,
        borderTopColor: '#ccc',
        paddingLeft: 20,
        paddingRight: 10,

    },
    Item: {
        paddingVertical: 10,
        borderTopWidth: line,
        borderTopColor: '#ccc',
        paddingLeft: 20,
    },
    titleText: {
        fontSize: 18,
        color: '#2196F3',
        marginVertical: 10,
    },
    itemTitle: {
        fontSize: 16,
        color: '#333',
        //marginVertical: 10,
    },
    textWidth: {
        width: 2 * width / 3,
    }
    
})