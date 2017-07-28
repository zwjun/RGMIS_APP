/**
 * Created by gatt on 2016/6/8.
 */
import React, {
    Component
} from 'react';
import ReactNative, {
    StyleSheet,
    View,
} from 'react-native';
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';
import IconTextInput from '../../components/IconTextInput';

export default class SearchPage extends Component {
    renderNavBar() {
        return (
            <NavBar style={Styles.navBar}>
                <NavButton
                    style={Styles.navButton}
                    onPress={() => this.props.navigator.pop()}
                >
                    <Icon name="md-arrow-back" size={25} color="#666" />
                </NavButton>
                <View style={styles.searchBar}>
                    <IconTextInput
                    style={styles.searchInput}
                        placeholder="搜索"
                        autoFocus={true}
                        beforeComponent={
                            <Icon name="ios-search" size={25} color="#666" />
                        }
                    />
                </View>
            </NavBar>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    searchBar: {
        flex: 1,
        marginLeft: 16,
    },
    searchInput: {
      padding: 0,
    }
});
