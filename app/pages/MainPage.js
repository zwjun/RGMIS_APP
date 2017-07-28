/**
 * Created by gatt on 2016/6/2.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    PixelRatio,
    TouchableWithoutFeedback,
    Dimensions,
} from 'react-native';
import SwipeableViews from 'react-swipeable-views/lib/index.native.scroll';
import Icon from 'react-native-vector-icons/Ionicons';

import MessagesPage from './chat';
import DashboardPage from './dashboard';
import ContactsPage from './contacts';
import HomePage from './home';
import CommunityPage from './community';

var dismissKeyboard = require('dismissKeyboard');

const tabs = [{
    component: MessagesPage,
    icon: 'ios-chatbubbles',
    selected_icon: 'ios-chatbubbles-outline',
    title: '消息',
    badge: 120
}, {
    component: ContactsPage,
    icon: 'ios-contact',
    selected_icon: 'ios-contact-outline',
    title: '联系人'
}, {
    component: DashboardPage,
    icon: 'ios-apps',
    selected_icon: 'ios-apps-outline',
    title: '工作'
},{
    component: CommunityPage,
    icon: 'ios-paw',
    selected_icon: 'ios-paw-outline',
    title: '课题社区'
}, {
    component: HomePage,
    icon: 'ios-home',
    selected_icon: 'ios-home-outline',
    title: '我的'
}];

export default class MainPage extends Component {
    constructor(props) {
        super(props);

        let loadStates = new Array(tabs.length).fill(false);
        loadStates[2] = true;

        this.state = {
            index: 2,
            loadStates
        };
    }

    componentDidMount() {
        dismissKeyboard();
    }

    handleChangeIndex(index) {
        if (this.state.index !== index) {
            this.goToTab(index);
        }
    }

    renderBadge(badge) {
        if (badge > 0) {
            return (
                <View style={styles.badge}>
                    <Text numberOfLines={1} style={styles.badgeText}>
                        {badge > 99 ? '99' : badge}
                    </Text>
                </View>
            );
        }
    }

    goToTab(index) {
        if (index != this.state.index) {
            this.setState({
                index,
                loadStates: [
                    ...this.state.loadStates.slice(0, index),
                    true,
                    ...this.state.loadStates.slice(index + 1)
                ]
            });
        }
    }

    renderTab(tab, index) {
        const color = this.state.index == index ? '#2196F3' : '#999';
        return (
            <TouchableWithoutFeedback
                key={index}
                onPress={() => this.goToTab(index)}
                load={this.state.loadStates[index]}
            >
                <View style={styles.tab}>
                    <Icon name={this.state.index == index ? tab.icon : tab.selected_icon} size={28} color={color} />
                    <Text style={{fontSize: 12, color: color}}>{tab.title}</Text>
                    {this.renderBadge(tab.badge)}
                </View>
            </TouchableWithoutFeedback>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <SwipeableViews
                    index={this.state.index}
                    onChangeIndex={(index) => this.handleChangeIndex(index)}
                >
                    {tabs.map((tab, index) => {
                        const Component = tab.component;
                        return (
                            <Component key={index} navigator={this.props.navigator} loaded={this.state.loadStates[index]} />
                        )
                    })}
                </SwipeableViews>
                <View style={styles.tabs}>
                    {tabs.map((tab, index) => {
                        return this.renderTab(tab, index);
                    })}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    tabs: {
        height: 59,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderTopWidth: Math.ceil(PixelRatio.get() / 2) * StyleSheet.hairlineWidth,
        borderTopColor: '#eee',
        backgroundColor: '#f9f9f9',
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    badge: {
        position: 'absolute',
        top: 0,
        left: Dimensions.get('window').width / tabs.length / 2 + 8,
        backgroundColor: '#E51C23',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        height: 18,
        width: 18,
        // paddingLeft: 5,
        // paddingRight: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    badgeText: {
        color: 'white',
        fontSize: 10,
        width: 20,
        textAlign: 'center',
    }
});