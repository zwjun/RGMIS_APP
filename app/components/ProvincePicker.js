/**
 * Created by gatt on 2016/6/8.
 */
import React, {
    Component
} from 'react';
import ReactNative, {
    StyleSheet,
    View,
    Text,
    ListView,
    TouchableHighlight
} from 'react-native';

import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Styles from '../components/Styles';
import provinces from '../commons/provinces';

import CityPicker from './CityPicker';

export default class ProvincePicker extends Component {
    constructor(props) {
        super(props);

        const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: dataSource.cloneWithRows(provinces)
        };
    }
    /*跳转对应的省份的城市？*/
    selectProvince(province) {
        //var {navigator} = this.props;
        //navigator.navigationContext.emit('provinceEvent', province);
        this.props.navigator.push({
            component: CityPicker,
            params: {
                province,
                callback: this.props.params.callback
            }
        });
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
                    省份选择
                </NavTitle>
            </NavBar>
        );
    }

    renderRow(data, sectionID, rowID) {
        return (
            <TouchableHighlight
                underlayColor="rgba(0, 0, 0, 0.1)"
                onPress={() => this.selectProvince(data)}
            >
                <View style={styles.province}>
                    <Text key={rowID} style={styles.provinceText}>{data}</Text>
                    <Icon name="chevron-right" size={25} color="#ccc" />
                </View>
            </TouchableHighlight>
        );
    }

    renderSeparator(sectionID, rowID) {
        return (
            <View key={rowID} style={styles.separator} />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData, sectionID, rowID) => this.renderRow(rowData, sectionID, rowID)}
                    renderSeparator={(sectionID, rowID) => this.renderSeparator(sectionID, rowID)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    province: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        paddingLeft: 15
    },
    provinceText: {
        flex: 1,
        fontSize: 16
    },
    separator: {
        backgroundColor: '#ccc',
        height: StyleSheet.hairlineWidth
    }
})