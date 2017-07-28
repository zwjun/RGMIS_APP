import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    ListView,
    Text,
    View,
    Alert,
    TouchableHighlight,
    ActivityIndicator,
    PixelRatio,
    TextInput,
} from 'react-native';

import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';

// API URL
var API_URL = "http://7xr387.com1.z0.glb.clouddn.com/users_data.json";

export default class GroupFriendPage extends Component {
    // initial state
    constructor(props) {
        super(props);
        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        }

        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        }
        this.state = {
            loaded: false,
            dataSource: new ListView.DataSource({
                getSectionData: getSectionData,
                getRowData: getRowData,
                rowHasChanged: (row1, row2) => row1 !== row2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            })
        };
    }

    // loading data
    componentDidMount() {
        this.fetchData()
    }

    // fetch data
    fetchData() {
        fetch(API_URL)
            .then((response) => response.json())
            .then((responseData) => {
                var organizations = responseData.results,
                    length = organizations.length,
                    dataBlob = {},
                    sectionIDs = [],
                    rowIDs = [],
                    organization,
                    users,
                    userLength,
                    user,
                    i,
                    j;

                console.log(organizations)

                for (i = 0; i < length; i++) {
                    organization = organizations[i];

                    // Add Section to Section ID Array
                    sectionIDs.push(organization.id);

                    // Set Value for Section ID that will be retrieved by getSectionData
                    dataBlob[organization.id] = organization.organization;

                    users = organization.users;
                    userLength = users.length;

                    // Initialize Empty RowID Array for Section Index
                    rowIDs[i] = [];

                    for (j = 0; j < userLength; j++) {
                        user = users[j].user;

                        // Add Unique Row ID to RowID Array for Section
                        rowIDs[i].push(user.md5);

                        // Set Value for unique Section+Row Identifier that will be retrieved by getRowData
                        dataBlob[organization.id + ':' + user.md5] = user;
                    }
                }

                // set state
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
                    loaded: true
                });
            }).done();
    }

    render() {
        return this.renderListView();
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
                    我的好友
                </NavTitle>
            </NavBar>
        );
    }

    renderListView() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                {/*<View  style={styles.searchBar}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="手机号/名称"
                        autoFocus={false}
                        placeholderTextColor="#ccc"
                        underlineColorAndroid="transparent"
                    />
                </View>*/}
                <ListView
                    initialListSize = {20}
                    dataSource = {this.state.dataSource}
                    style      = {styles.listview}
                    renderRow  = {this.renderRow}
                    renderSectionHeader = {this.renderSectionHeader}
                />
            </View>
        )
    }

    renderSectionHeader(sectionData, sectionID) {
        return (
            <View>
                <View style={styles.section}>
                    <Text style={styles.sectionText}>{sectionData}</Text>
                </View>
                <View style={{marginLeft: 10, marginRight: 15, height: 1, backgroundColor: '#ccc'}} />
            </View>
        );
    }

    renderRow(rowData, sectionID, rowID) {
        return (
            <TouchableHighlight underlayColor="rgba(0, 0, 0, 0.1)" onPress={() => this.onPressRow(rowData, sectionID)}>
                <View>
                    <View style={styles.rowStyle}>
                        <Image
                            style={styles.userAvatar}
                            //source={{uri: rowData.avatar}}
                            source={require('../../images/qq.png')} 
                            />
                        <View style={styles.userName}>
                            <Text style={styles.rowText}>{rowData.username} </Text>
                        </View>
                        <View style={styles.userName}>
                            <Text style={styles.rowText}>{rowData.email} </Text>
                        </View>
                    </View>
                    <View style={{marginLeft: 45, marginRight: 15, height: 1/PixelRatio.get(), backgroundColor: '#ccc'}} />
                </View>
            </TouchableHighlight>
        );
    }

    onPressRow(rowData, sectionID) {
        Alert.alert(
            'Alert Title', [{
                text: 'Cancel'
            }, {
                text: 'OK',
                onPress: () => this.createCalendarEvent(rowData, sectionID)
            }, ]
        );
    }


    /*render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <View  style={styles.searchBar}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="手机号/名称"
                        autoFocus={false}
                        placeholderTextColor="#ccc"
                        underlineColorAndroid="transparent"
                    />
                </View>
            </View>
        );
    }*/
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
        
        // borderTopWidth: 1,
         borderBottomWidth: 1/PixelRatio.get(),
         borderColor: '#ccc',
    },
    textInput: {
        height: 40,
        padding: 0,
        backgroundColor: '#fff',
        textAlign: 'center',
    },
    activityIndicator: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    listview: {
        marginTop: 10,
        backgroundColor: '#fff',
    },
    header: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#fcf'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
    },
    sectionText: {
        color: '#999',
        fontSize: 16,
    },
    rowStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,       
    },
    userAvatar: {
        width: 35,
        height: 35,
        borderRadius: 17,
        marginRight: 10,
    },
    userName: {
        flex: 1,
        justifyContent: "center",
    },
    rowText: {
        color: '#666',
        fontSize: 14,
    },
    subText: {
        fontSize: 14,
        color: '#757575'
    },
    section: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
    },
});
