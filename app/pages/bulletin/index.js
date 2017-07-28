import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    ScrollView,
} from 'react-native';

import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';

import Tab from 'react-native-button';
//import SwipeableViews from 'react-swipeable-views/lib/index.native.animated';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import UnreadBulletin from './UnreadBulletin';
import ReadBulletin from './ReadBulletin';

import CreateBulletinPage from './CreateBulletinPage.step1';

export default class Bulletin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            badge: '10',
            index: 0,
            checked: false,
        };
    }
    handleChangeTabs = (value) => {
        this.setState({
            index: value,
        });
    };

    handleChangeIndex = (index) => {
        this.setState({
            index: index,
        });
    };

    handleChecked = (checked) => {
        this.setState({
            checked: checked,
        });
    };

    renderBadge(badge) {
        if (badge > 0) {
            return (
                <View style={{width: 18,height: 18,borderRadius: 9,backgroundColor: 'red',position: 'absolute',top: 12,right: 50,
                    alignItems: 'center',justifyContent: 'center'}}  
                >
                    <Text style={{width:20, color: '#fff', fontSize: 12, textAlign:'center'}} numberOfLines={1} >{badge > 99 ? '99' : badge}</Text>
                </View>    
            );
        }
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
                    公告栏
                </NavTitle>
                <NavButton style={Styles.navButton}>
                        <Text style={{fontSize: 16, color: '#2196F3'}}
                            onPress={() => {
                                this.props.navigator.push({
                                    component: CreateBulletinPage,
                                });
                            }}>
                        发布公告</Text>
                </NavButton>
            </NavBar>
        );
    }

    render() {

        const { index } = this.state;

        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <ScrollableTabView
                    tabBarUnderlineColor="#2196F3"
                    tabBarActiveTextColor="#2196F3"
                    tabBarTextStyle={{fontSize:16}}
                    renderTabBar={() => <DefaultTabBar />}
                    >
                    <UnreadBulletin tabLabel='Tab #1' {...this.props} />
                    
                    <ReadBulletin tabLabel='Tab #2' {...this.props} /> 

                </ScrollableTabView>
                
                    

            </View>
        );
    }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    flex: 1,
    backgroundColor: '#fcc'
  },
  text: {
    color: '#666',
    fontSize: 16,
  },
  titleBar: {
      flexDirection: 'row', 
      alignItems: 'center',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: '#ccc',
  },
  titleTab: {
      width: Dimensions.get('window').width / 2,
      flex: 1,
      height: 43,
      alignItems: 'center',
      justifyContent: 'center',
  },
  textStyle: {
    color: '#2196F3',
  },
  containerStyle: {
    height: 43,
    width: Dimensions.get('window').width / 2, 
    //backgroundColor:'#fcf', 
    borderBottomWidth: 2, 
    borderColor:'#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
});