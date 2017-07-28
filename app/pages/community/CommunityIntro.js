import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TextInput,
} from 'react-native';
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';
import Button from '../../components/Button';

export default class CommunityIntro extends Component {
    constructor(props) {
      super(props);
      this.state = {
          
      };
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
                    社区简介
                </NavTitle>
                
                <NavButton style={[Styles.navButton]}>
                    <Button type="primary" size="mini"
                        onPress={() =>alert('完成创建！！！') }
                        // onPress={() => {
                        //     this.props.navigator.push({
                        //         component: CommunityMessage
                        //         });
                        //     }
                        // }
                    >
                        <Text>完成创建</Text>
                    </Button>          
                </NavButton>
            </NavBar>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}  
                <ScrollView
                    style={{flex: 1, backgroundColor: '#fff'}}
                    //contentContainerStyle={{flex:1}}   //非常重要，让ScrollView的子元素占满整个区域
                    keyboardDismissMode='on-drag'      //拖动界面输入法退出
                    keyboardShouldPersistTaps={false}  //点击输入法意外的区域，输入法退出
                >  
                    <View style={styles.bodyView}>
                        <Text style={styles.introTitle}>简介</Text>
                        <View style={styles.inputBorder}>
                            <TextInput 
                                style={styles.textInput}
                                autoFocus={true}
                                placeholder="150字以内的社区介绍..."
                                maxLength={150}
                                placeholderTextColor="#ccc"
                                underlineColorAndroid="transparent"
                                multiline={true}
                                numberOfLines={8}
                                onChangeText={(text) => this.setState({text})}
                            />
                        </View>  
                    </View>
                </ScrollView>               
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#eee',
    },
    bodyView: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    introTitle: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
        color: '#333',
    },
    textInput:{
        fontSize: 16,
        color: '#666',
    },
    inputBorder: {
        borderWidth: 1,
        borderColor: '#ccc',
    },
});