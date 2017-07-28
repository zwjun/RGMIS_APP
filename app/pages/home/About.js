import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';

export default class AboutUsPage extends Component {
    renderNavBar() {
        return (
            <NavBar style={Styles.navBar}>
                <NavButton
                    style={Styles.navButton}
                    onPress={() => this.props.navigator.pop()}
                >
                    <Icon name="md-arrow-back" size={25} color="#666" />
                </NavButton>
                <NavTitle style={Styles.navTitle}>
                    关于我们
                </NavTitle>
            </NavBar>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <View style={styles.main}>
                    <Image source={require('../../images/qq.png')} style={{width: 80, height: 80, margin: 30}} />
                    <Text>RGMIS_APP</Text>
                    <Text style={styles.text}>当前版本 V1.0.0</Text>
                    <Text style={styles.text}>
                        　　使用React Native，你可以使用标准的平台组件，例如iOS的UITabBar或安卓的Drawer。 这使你的app获得平台一致的视觉效果和体验，并且获得最佳的性能和流畅性。
                        使用对应的React component，就可以轻松地把这些原生组件整合到你的React Native应用中</Text>
                    <Text style={styles.text}>联系方式：020-88888888</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },
    main: {
        flex:1,
        height: 160,
        // justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    text: {
        paddingTop: 10,
        paddingBottom: 10,
        lineHeight: 22
        // fontWeight: '300'
    }
});