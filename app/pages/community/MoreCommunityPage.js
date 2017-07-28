import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import data from './movie';                            //获取本地json数据

export default class MoreCommunity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount() {
        this.setState({});
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.tab}>
                    <Text>1234</Text>
                </View>
                <View style={styles.content}>
                    <Text>1234</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f0f'
    },
    tab: {
        flex: 1,
        backgroundColor:'#fcf'
    },
    content: {
        flex: 3,
        backgroundColor:'#cfc'
    }
});