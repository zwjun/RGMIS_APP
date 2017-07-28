import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ListView,
    TextInput,
    TouchableHighlight,
} from 'react-native';

import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';

export default class SelectTeamType extends Component {

    constructor(props) {
        super(props);

        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        });

        this.state = {
            
            dataSource: dataSource.cloneWithRowsAndSections({
                热门行业: ['a001', 'a002', 'a003', 'c002', 'c003'],
                IT互联网行业: ['b001', 'b002', 'c002', 'c003'],
                制造行业: ['c001', 'c002', 'c003'],
                运输服务行业: ['d001', 'd002', 'd003', 'd004'],
                餐饮旅游行业: ['e001', 'c002', 'c003', 'c002', 'c003']
            }),
            // teamStyle: {
            //     a: ['a001', 'a002', 'a003', 'c002', 'c003'],
            //     b: ['b001', 'b002', 'c002', 'c003'],
            //     c: ['c001', 'c002', 'c003'],
            //     d: ['d001', 'd002', 'd003', 'd004'],
            //     e: ['e001', 'c002', 'c003', 'c002', 'c003']
            // }
        }
    }

    /*renderRow(rowData, rowId, sectionId) {
        return (
            <View style={{height: 40, justifyContent: 'center', alignItems: 'center'}}>
                <Text>
                    {rowData}
                </Text>
            </View>
        )
    }*/
    renderSectionHeader(sectionData, sectionId) {
        return (
            <View style={styles.sectionHeader}>
                <Text style={{color: "#333", fontSize: 15,}}>
                    {sectionId}
                </Text>
            </View>
        )
    }

    renderRow(rowData, rowId, sectionId) {
        return (
            <TouchableHighlight underlayColor="rgba(0, 0, 0, 0.2)">
                <View style={{}}>
                    <View style={{backgroundColor:'#f00', width:100, height: 30,justifyContent: 'center',alignItems: 'center',margin:5}}>
                        <Text>
                            {rowData}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight> 
        )
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
                    选择课题组类型
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
                <ListView
                    
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderSectionHeader={this.renderSectionHeader}
                    showVerticalScrollIndicator = {true}
                />

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
        marginTop: 10,
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
    sectionHeader: {
        flex: 1, 
        backgroundColor: '#fcf',
        paddingBottom: 10, 
        paddingTop: 10,
        paddingLeft: 20,
    },
    list: {
   
  },
});