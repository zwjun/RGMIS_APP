/**
 * Created by gatt on 2016/5/31.
 */
import React, {
    Component
} from 'react';
import ReactNative, {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TabBar = React.createClass({
    tabIcons: [],
    currentTab: 0,

    propTypes: {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array,
    },

    componentDidMount() {
        this.currentTab = this.props.activeTab;
        this.setAnimationValue({ value: this.props.activeTab, });
        this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
    },

    setAnimationValue({ value, }) {
        this.tabIcons.forEach((tab, i) => {
            let progress = Math.abs(value - i);
            let color = this.iconColor(progress > 1 ? 1 : progress);
            tab.icon.setNativeProps({
                style: {
                    color: color,
                },
            });
            tab.title.setNativeProps({
                style: {
                    color: color,
                }
            });
        });
    },

    //color between rgb(59,89,152) and rgb(204,204,204)
    iconColor(progress) {
        const red = 33 + (180 - 33) * progress;
        const green = 150 + (180 - 150) * progress;
        const blue = 243 + (180 - 243) * progress;
        return `rgb(${red}, ${green}, ${blue})`;
    },

    goToPage(page) {
        if (this.props.activeTab !== page) {
            this.props.goToPage(page);
        }
        this.currentTab = this.props.scrollValue._value;
    },

    render() {
        /*const tabWidth = this.props.containerWidth / this.props.tabs.length;
        const left = this.props.scrollValue.interpolate({
            inputRange: [0, 1, ], outputRange: [0, tabWidth, ],
        });*/

        return <View>
            <View style={[styles.tabs, this.props.style, ]}>
                {this.props.tabs.map((tab, i) => {
                    this.tabIcons[i] = {};
                    return (
                        <TouchableOpacity
                            key={tab.title}
                            onPressIn={() => this.goToPage(i)}
                            style={styles.tab}
                            activeOpacity={1}
                        >
                            <Icon
                                name={tab.icon}
                                size={30}
                                ref={(icon) => { this.tabIcons[i].icon = icon; }}
                            />
                            <Text
                                style={styles.tabTitle}
                                ref={(title) => { this.tabIcons[i].title = title; }}
                            >
                                {tab.title}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>;
    },
});

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    tabTitle: {
        fontSize: 12,
    },
    tabs: {
        height: 60,
        flexDirection: 'row',
        paddingTop: 5,
        borderWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderTopColor: 'rgba(0,0,0,0.05)',
    },
});

export default TabBar;