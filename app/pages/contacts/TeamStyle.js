import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    ScrollView,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';

export default class TeamStyle extends Component {
    constructor(props) {
        super(props);
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
                    课题组类型
                </NavTitle>
            </NavBar>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}

                <View  style={styles.searchBar}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="搜索"
                        autoFocus={false}
                        placeholderTextColor="#ccc"
                        underlineColorAndroid="transparent"
                    />
                </View>
                <ScrollView>
                    <TeamStyleBody>
                        <TeamStyleSection
                            SectionName="热门行业"
                            SectionIcon="ios-flame"
                            iconColor="#f00"
                        />
                        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                            <TeamStyleRow {...this.props} RowName="互联网" />
                            <TeamStyleRow {...this.props} RowName="电子商务" />
                            <TeamStyleRow {...this.props} RowName="服装/纺织" />
                            <TeamStyleRow {...this.props} RowName="批发/零售" />
                            <TeamStyleRow {...this.props} RowName="餐饮" />
                            <TeamStyleRow {...this.props} RowName="教育" />
                            <TeamStyleRow {...this.props} RowName="农/林/牧/渔" />
                            <TeamStyleRow {...this.props} RowName="家庭" />
                            {/*
                                data01.map(function (name, index) {
                                    return <TeamStyleRow key={index} RowName={name} {...this.props} /> 
                                    //加key,否则会出现警告提示。
                                    //<div>Hello, {name}!</div>
                                })
                            */}
                        </View>
                    </TeamStyleBody>

                    <TeamStyleBody>
                        <TeamStyleSection
                            SectionName="IT互联网行业"
                            SectionIcon="md-globe"
                            
                        />
                        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                            <TeamStyleRow {...this.props} RowName="计算机软件" />
                            <TeamStyleRow {...this.props} RowName="计算机硬件" />
                            <TeamStyleRow {...this.props} RowName="IT服务" />
                            <TeamStyleRow {...this.props} RowName="互联网" />
                            <TeamStyleRow {...this.props} RowName="电子商务" />
                            <TeamStyleRow {...this.props} RowName="游戏" />
                            <TeamStyleRow {...this.props} RowName="通信" />
                            <TeamStyleRow {...this.props} RowName="电子/半导体" />
                        </View>
                    </TeamStyleBody>

                    <TeamStyleBody>
                        <TeamStyleSection
                            SectionName="制造行业"
                            SectionIcon="ios-construct"
                        />
                        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                            <TeamStyleRow {...this.props} RowName="日用/化妆品" />
                            <TeamStyleRow {...this.props} RowName="食品/饮料" />
                            <TeamStyleRow {...this.props} RowName="服装/纺织" />
                            <TeamStyleRow {...this.props} RowName="家电/数码" />
                            <TeamStyleRow {...this.props} RowName="奢侈品/珠宝" />
                            <TeamStyleRow {...this.props} RowName="酒品" />
                            <TeamStyleRow {...this.props} RowName="烟草类" />
                            <TeamStyleRow {...this.props} RowName="办公/工艺品" />
                            <TeamStyleRow {...this.props} RowName="医药品" />
                            <TeamStyleRow {...this.props} RowName="家具" />
                            <TeamStyleRow {...this.props} RowName="化学原料" />
                            <TeamStyleRow {...this.props} RowName="金属类" />
                            <TeamStyleRow {...this.props} RowName="汽车/交通类" />
                            <TeamStyleRow {...this.props} RowName="通信/计算机" />
                        </View>
                    </TeamStyleBody>

                    <TeamStyleBody>
                        <TeamStyleSection
                            SectionName="贸易/物流"
                            SectionIcon="ios-car"
                            size={22}
                        />
                        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                            <TeamStyleRow {...this.props} RowName="进出口" />
                            <TeamStyleRow {...this.props} RowName="批发/零售" />
                            <TeamStyleRow {...this.props} RowName="商店/超市" />
                            <TeamStyleRow {...this.props} RowName="物流/仓储" />
                            <TeamStyleRow {...this.props} RowName="交通运输" />
                        </View>
                    </TeamStyleBody>

                    <TeamStyleBody>
                        <TeamStyleSection
                            SectionName="建筑/房地产"
                            SectionIcon="ios-home"
            
                        />
                        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                            <TeamStyleRow {...this.props} RowName="建筑设计" />
                            <TeamStyleRow {...this.props} RowName="土木工程" />
                            <TeamStyleRow {...this.props} RowName="房地产" />
                            <TeamStyleRow {...this.props} RowName="物业管理" />
                            <TeamStyleRow {...this.props} RowName="建材" />
                            <TeamStyleRow {...this.props} RowName="装修装潢" />
                        </View>
                    </TeamStyleBody>

                    <TeamStyleBody>
                        <TeamStyleSection
                            SectionName="金融行业"
                            SectionIcon="logo-yen"
                            size={20}
                        />
                        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                            <TeamStyleRow {...this.props} RowName="银行" />
                            <TeamStyleRow {...this.props} RowName="保险" />
                            <TeamStyleRow {...this.props} RowName="证券/基金等" />
                            <TeamStyleRow {...this.props} RowName="投资" />
                        </View>
                    </TeamStyleBody>

                    <TeamStyleBody>
                        <TeamStyleSection
                            SectionName="服务业"
                            SectionIcon="ios-headset"
                            
                        />
                        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                            <TeamStyleRow {...this.props} RowName="酒店" />
                            <TeamStyleRow {...this.props} RowName="餐饮" />
                            <TeamStyleRow {...this.props} RowName="旅游" />
                            <TeamStyleRow {...this.props} RowName="休闲娱乐/健身" />
                            <TeamStyleRow {...this.props} RowName="家政服务" />
                            <TeamStyleRow {...this.props} RowName="中介" />
                        </View>
                    </TeamStyleBody>

                    <TeamStyleBody>
                        <TeamStyleSection
                            SectionName="政府/事业单位"
                            SectionIcon="ios-podium"
                            
                        />
                        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                            <TeamStyleRow {...this.props} RowName="教育" />
                            <TeamStyleRow {...this.props} RowName="医院" />
                            <TeamStyleRow {...this.props} RowName="民政" />
                            <TeamStyleRow {...this.props} RowName="公安" />
                            <TeamStyleRow {...this.props} RowName="交通" />
                            <TeamStyleRow {...this.props} RowName="司法" />
                            <TeamStyleRow {...this.props} RowName="市政" />
                            <TeamStyleRow {...this.props} RowName="工商" />
                            <TeamStyleRow {...this.props} RowName="公共事业" />
                            <TeamStyleRow {...this.props} RowName="研究所/院" />
                            <TeamStyleRow {...this.props} RowName="税务" />
                        </View>
                    </TeamStyleBody>

                    <TeamStyleBody>
                        <TeamStyleSection
                            SectionName="教育培训行业"
                            SectionIcon="ios-school"
                            
                        />
                        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                            <TeamStyleRow RowName="高等教育" />
                            <TeamStyleRow RowName="初中等教育" />
                            <TeamStyleRow RowName="培训" />
                            <TeamStyleRow RowName="驾校" />
                        </View>
                    </TeamStyleBody>

                    <TeamStyleBody>
                        <TeamStyleSection
                            SectionName="文化传媒行业"
                            SectionIcon="ios-film"
                            
                        />
                        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                            <TeamStyleRow RowName="广告/公关" />
                            <TeamStyleRow RowName="报纸/杂志" />
                            <TeamStyleRow RowName="广播" />
                            <TeamStyleRow RowName="影视" />
                            <TeamStyleRow RowName="出版" />
                            <TeamStyleRow RowName="艺术/工艺" />
                            <TeamStyleRow RowName="体育" />
                            <TeamStyleRow RowName="动漫" />
                        </View>
                    </TeamStyleBody>

                    <TeamStyleBody>
                        <TeamStyleSection
                            SectionName="企业服务"
                            SectionIcon="ios-calculator"
                            
                        />
                        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                            <TeamStyleRow RowName="会计/审计" />
                            <TeamStyleRow RowName="人力资源" />
                            <TeamStyleRow RowName="管理咨询" />
                            <TeamStyleRow RowName="法律" />
                            <TeamStyleRow RowName="检测/认证" />
                            <TeamStyleRow RowName="翻译" />
                        </View>
                    </TeamStyleBody>

                    <TeamStyleBody>
                        <TeamStyleSection
                            SectionName="亲朋好友"
                            SectionIcon="ios-people"
                            
                        />
                        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                            <TeamStyleRow RowName="家庭" />
                            <TeamStyleRow RowName="朋友" />
                            <TeamStyleRow RowName="同学" />
                        </View>
                    </TeamStyleBody>

                    <TeamStyleBody>
                        <TeamStyleSection
                            SectionName="其他组织"
                            SectionIcon="md-apps"
                            
                        />
                        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                            <TeamStyleRow RowName="公益" />
                            <TeamStyleRow RowName="协会" />
                            <TeamStyleRow RowName="宗教" />
                            <TeamStyleRow RowName="学生会" />
                            <TeamStyleRow RowName="医疗" />
                            <TeamStyleRow RowName="环境" />
                            <TeamStyleRow RowName="租赁服务" />
                            <TeamStyleRow RowName="农/林/牧/渔" />
                            <TeamStyleRow RowName="能源" />
                            <TeamStyleRow RowName="金属" />
                            <TeamStyleRow RowName="自定义" />                        
                        </View>
                    </TeamStyleBody>

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
    titleText: {
        height: 30,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    searchBar: {
        marginTop: 8,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    textInput: {
        height: 40,
        padding: 0,
        backgroundColor: '#fff',
        textAlign: 'center',
    },
});

class TeamStyleBody extends Component {
    render() {
        return (
            <View style={{
                borderBottomWidth: StyleSheet.hairlineWidth, 
                borderTopWidth: StyleSheet.hairlineWidth,
                borderColor: '#ccc',
                backgroundColor: '#fff', marginTop:8,
            }}>
                {this.props.children}
            </View>
        );
    }
}

class TeamStyleSection extends Component {
    render() {
        return (
            <View>
                <View style={{
                    height: 50,  
                    flexDirection: 'row', 
                    alignItems: 'center',
                    paddingLeft: 20,
                }}>
                    <View style={{marginRight: 10}}>
                        <Icon 
                            name={this.props.SectionIcon} 
                            size={this.props.size || 23} 
                            color={this.props.iconColor || '#4F8EF7'} />
                    </View>
                    <View>
                        <Text style={{color: '#4F8EF7'}}> {this.props.SectionName} </Text>
                    </View>
                </View>
                <View style={{borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#ccc', marginLeft: 20, marginRight: 20}} />
            </View>
        );
    }
}

class TeamStyleRow extends Component {
    pressButton(){
        //const { navigator } = this.props;
        if(this.props.callback){
            this.props.callback(this.props.RowName);
        }

        if(this.props.navigator){
            this.props.navigator.pop();
        }
    }

    render() {
        return (
            <TouchableOpacity style={{
                flexDirection: 'row', 
                paddingBottom: 10, 
                paddingTop: 10, 
                width: Dimensions.get('window').width/3 - 25, 
                height: 40,            
                alignItems: 'center',
                marginLeft: 25,
            }}
                onPress = {() => this.pressButton()}
            >
                <View style={{width: 1, height: 12, backgroundColor: '#ccc', marginRight: 10}}/>
                <View
                    
                    //onPress={() => this.props.navigator.pop()}
                >
                    <Text style={{color: '#333'}} >{this.props.RowName}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
