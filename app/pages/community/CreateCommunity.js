import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';
import Common from '../../components/Common';
import Button from '../../components/Button';
import RadioButton from '../../components/RadioButton_other';
import RadioButtonGroup from '../../components/RadioButtonGroup';

import CommunityImagePicker from './CommunityImagePicker';

var CommunityStyle_name = [
    '科研', '明星', '情感', '爱好', '电影', '游戏', '健身', '动漫', '小说', '综艺', '家电/数码', 
    '艺术/书法', '其他', '明星', '情感', '爱好', '电影', '游戏', '健身', '动漫', '小说', '综艺', '家电/数码'
    , '明星', '情感', '爱好', '电影', '游戏', '健身', '动漫', '小说', '综艺', '家电/数码'
];
export default class CreateCommunity extends Component {
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
                    创建社区
                </NavTitle>
                
                <NavButton style={[Styles.navButton]}>
                    <Button type="primary" size="mini"
                        onPress={() => {
                            this.props.navigator.push({
                                component: CommunityImagePicker
                                });
                            }
                        }
                    >
                        <Text>下一步</Text>
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
                <View style={{paddingLeft: 20, paddingRight: 20}}>
                    <Text style={{marginTop: 10, marginBottom: 10}} >请输入社区名称，不超过12个字。</Text>
                    <TextInput 
                        style={styles.textInput}
                        autoFocus={true}
                        placeholder="娶个名字吧..."
                        maxLength={12}
                        placeholderTextColor="#ccc"
                        //underlineColorAndroid="transparent"
                        onChangeText={(text) => this.setState({text})}
                    />  
                    <Text style={{marginTop: 10, marginBottom: 10, fontSize: 16, color: '#2196F3'}} >社区类别选择</Text> 
                    
                    <View>
                        <RadioButtonGroup style={{flexDirection: 'row', flexWrap: 'wrap'}} >   

                            {/*<RadioButton style={styles.item} title="科研"/> 
                            <RadioButton style={styles.item} title="明星" />
                            <RadioButton style={styles.item} title="情感" />
                            <RadioButton style={styles.item} title="爱好" />
                            <RadioButton style={styles.item} title="电影"/> 
                            <RadioButton style={styles.item} title="游戏" />
                            <RadioButton style={styles.item} title="健身" />
                            <RadioButton style={styles.item} title="动漫" />
                            <RadioButton style={styles.item} title="小说" />
                            <RadioButton style={styles.item} title="综艺"/> 
                            <RadioButton style={styles.item} title="数码" />
                            <RadioButton style={styles.item} title="书法/艺术" />
                            <RadioButton style={styles.item} title="其他" />  */}   
                            {
                                CommunityStyle_name.map(function (name, index) {
                                    return <RadioButton key={index} style={styles.item} title={name} /> 
                                    //加key,否则会出现警告提示。
                                    //<div>Hello, {name}!</div>
                                })
                            }

                        </RadioButtonGroup>
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
       //backgroundColor: '#eee',
    },
    textInput: {
        fontSize: 16,
        height: 50,
        //width: Dimensions.get('window').width - 40,
        //padding: 0,
        paddingLeft: 10,
    },
    item: {
        width: Dimensions.get('window').width/3 - 20,
        height: 40,     
    }
});