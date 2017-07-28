import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    Alert,
} from 'react-native';

import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';

import Section from '../../components/Section';
import Cell from '../../components/Cell';
import Button from '../../components/Button';

export default class ContactInformation extends Component {
    constructor(props){
        super(props);

        this.state = {
            phoneNumber: '150000000',
            email: 'exampleexample@110.com',
            // province: '',
            // city: '',
            // department: '必填',
            // trueSwitchIsOn: true,
            // falseSwitchIsOn: false
        };
    }
    componentDidMount() {

        
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
                    编辑成员信息
                </NavTitle>
            </NavBar>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                
                <Section style={{paddingTop: 10}}>
                    <Cell
                        icon={
                            <Image source={require('../../images/weixin.png')} style={{width: 50, height: 50}} />
                        }
                        label={
                            <View>
                                <Text style={{fontSize: 17, color: '#333'}}>蛋蛋的忧伤</Text>
                                <Text>hello world</Text>
                            </View>
                        }
                    />
                </Section>
                <Section style={{paddingTop: 10}}>
                    <Cell 
                        icon={<Text>手机号码</Text>}
                        label={this.state.phoneNumber}
                        after={
                            <View style={{flexDirection:'row'}}>
                                <Text style={{width:30,textAlign:'center',marginRight: 20}}
                                    onPress={
                                        () => {alert('拨打电话？')}
                                    }
                                >
                                    <Icon name="ios-phone-portrait" size={26} color="#2196F3"/>
                                </Text>
                                <Text style={{width:30,textAlign:'center'}}
                                    onPress={
                                        () => {alert('发信息？')}
                                    }
                                >
                                    <Icon name="ios-text" size={30} color="#4CAF50"/>
                                </Text>
                            </View>
                            
                        }
                    />
                    <Cell 
                        icon={<Text>邮箱地址</Text>}
                        label={this.state.email}
                        after={
                            <Text style={{width:30,textAlign:'center'}}
                                onPress={
                                        () => {alert('发送邮件？')}
                                    }
                            >
                                <Icon name="ios-mail" size={30} color="#e8a517"/>
                            </Text>
                        }
                    />
                </Section>
                <View style={{margin: 20}}>
                        <Button type="default" size="default" 
                        onPress = {() => Alert.alert(
                            '警告','确定要移除该课题组成员吗？',
                            [{text: '取消',onPress: () => console.log('Foo Pressed!')}, 
                            {text: '确定',onPress: () => console.log('Foo Pressed!') }]
                        )}
                        >
                            <Text>移除该用户</Text>
                        </Button>
                    </View>
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
