/**
 * Created by gatt on 2016/6/8.
 */
import React, {
    Component
} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';
import Common from '../../components/Common';

import ChatPage from '../chat';
import SearchPage from './SearchPage';
import TitleTab from './TitleTab';

import CommunityItemPage from './CommunityItemPage';
import CommunityMessage from './CommunityMessage';

export default class CommunityPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            badge: '10',
        };
    }
    componentDidMount() {

    }
    CommunityItemPage() {
        this.props.navigator.push({
            component: CommunityItemPage
        });
    }
    renderBadge(badge) {
        if (badge > 0) {
            return (
                <View style={{width: 16,height: 16,borderRadius: 8,backgroundColor: 'red',position: 'absolute',top: 0,right: 0,
                    alignItems: 'center',justifyContent: 'center'}}  
                >
                    <Text style={{width:20, color: '#fff', fontSize: 10, textAlign:'center'}} numberOfLines={1} >{badge > 99 ? '99' : badge}</Text>
                </View>    
            );
        }
    }

    renderNavBar() {
        return (
            <NavBar style={Styles.navBar}>
                <NavTitle style={Styles.navTitle}>
                    微社区
                </NavTitle>
                <NavButton style={[Styles.navButton,{paddingLeft:10, paddingRight:15}]}
                    onPress={() => {
                        this.props.navigator.push({
                            component: SearchPage
                        })
                    }}
                >
                    <Icon name="ios-search" size={25} color="#666" />
                </NavButton>
                <NavButton style={[Styles.navButton,{paddingRight:6}]}
                    onPress={() => {
                        this.props.navigator.push({
                            component: CommunityMessage,
                            });
                        }
                    }
                >
                    <Icon name="ios-mail" size={26} color="#2196F3" />
                    {this.renderBadge(this.state.badge)}          
                </NavButton>
            </NavBar>
        );
    }

    render() {
        if (this.props.loaded) {
            return (
                <View style={styles.container}>
                    {this.renderNavBar()}
                    <View style={{height: 8, backgroundColor: '#eee'}} />
                    <TitleTab {...this.props} />
                </View>
            );
        }
        else {
            return Common.renderLoading('正在加载...');
        }
    }
}

const styles = StyleSheet.create({
    container: {
       flex: 1
    },
});