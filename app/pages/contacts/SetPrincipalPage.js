
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    Alert,
    ListView,
    ScrollView,
    Pix
} from 'react-native';
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';
import Section from '../../components/Section';
import Cell from '../../components/Cell';
import Button from '../../components/Button';

export default class SetPrincipalPage extends Component {
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
                    设置负责人
                </NavTitle>
                <NavButton style={Styles.navButton} >
                    <Button style={{height: 23}} type="primary" size="small" onPress = {() =>this.createGroup()}>
                        <Text>添加</Text>
                    </Button>
                </NavButton>
            </NavBar>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },
});