/**
 * Created by gatt on 2016/6/6.
 */
import React, {
    Component
} from 'react';
import ReactNative, {
    StyleSheet,
    View,
    Text,
    TextInput,
    ScrollView,
    DatePickerAndroid,
    TimePickerAndroid,
    Navigator
} from 'react-native';
import NavBar, { NavGroup, NavButton, NavTitle, NavButtonText } from 'react-native-nav';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Styles from '../../components/Styles';
import TextInputCell from '../../components/TextInputCell';
import Cell from '../../components/Cell';
import Section from '../../components/Section';
import Button from '../../components/Button';

import RemingPage from './RemindPage';

var moment = require('moment');
require('moment/locale/zh-cn');

export default class AddCalendarPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startTime: new Date(),
            endTime: new Date(),
            remind: {
                label: '提前10分钟',
                value: 2
            }
        };
    }

    async selectTime(time = new Date()) {
        var {action, year, month, day} = await DatePickerAndroid.open({
            date: time
        });
        if (action === DatePickerAndroid.dismissedAction) {
            return;
        }

        var {action, hour, minute} = await TimePickerAndroid.open({
            hour: time.getHours(),
            minute: time.getMinutes(),
            is24Hour: true,
        });
        if (action === TimePickerAndroid.dismissedAction) {
            return;
        }

        return new Date(year, month, day, hour, minute);
    }

    selectRemind() {
        var {navigator} = this.props;
        navigator.push({
            component: RemingPage,
        });
        const listener = navigator.navigationContext.addListener('remindEvent', (e) => {
            //alert(e.data);
            this.setState({
                remind: e.data
            });
            listener.remove();
        })
    }

    renderNavBar() {
        return (
            <NavBar style={Styles.navBar}>
                <NavButton
                    style={Styles.navButton}
                    onPress={() => this.props.navigator.pop()}
                >
                    <Icon name="arrow-back" size={25} color="#666" />
                </NavButton>
                <NavTitle style={Styles.navTitle}>
                    发布日志
                </NavTitle>
                <NavButton
                    style={Styles.navButton}
                    onPress={() => alert('saved')}
                >
                    <NavButtonText>保存</NavButtonText>
                </NavButton>
            </NavBar>
        );
    }

    renderForm() {
        return (
            <ScrollView>
                <Section>
                    <TextInputCell
                        placeholder="标题"
                    />
                    <Cell
                        label="开始时间"
                        arrow={true}
                        after={moment(this.state.startTime).format('YYYY-M-D dddd  HH:mm')}
                        onPress={async () => {
                            const startTime = await this.selectTime(this.state.startTime);
                            if (!startTime) return;
                            this.setState({startTime});
                        }}
                    />
                    <Cell
                        label="结束时间"
                        arrow={true}
                        after={moment(this.state.endTime).format('YYYY-M-D dddd  HH:mm')}
                        onPress={async () => {
                            const endTime = await this.selectTime(this.state.endTime);
                            if (!endTime) return;
                            this.setState({endTime});
                        }}
                    />
                    <Cell
                        label="提醒"
                        arrow={true}
                        after={this.state.remind.label}
                        onPress={() => this.selectRemind()}
                    />
                    <TextInputCell
                        numberOfLines={10}
                        placeholder="内容"
                        multiline={true}
                        style={{
                            textAlignVertical: 'top'
                        }}
                    />
                </Section>
            </ScrollView>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                {this.renderForm()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    }
})