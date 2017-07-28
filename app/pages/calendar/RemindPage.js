/**
 * Created by gatt on 2016/6/6.
 */
import React, {
    Component
} from 'react';
import ReactNative, {
    StyleSheet,
    View,
    Text
} from 'react-native';
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Styles from '../../components/Styles';
import RadioButton from '../../components/RadioButton';
import RadioButtonGroup from '../../components/RadioButtonGroup';

export default class RemindPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            times: [
                {label: '准时', value: 1},
                {label: '提前10分钟', value: 2},
                {label: '提前30分钟', value: 3},
                {label: '提前1小时', value: 4},
                {label: '提前1天', value: 5},
                {label: '自定义', value: -1},
            ]
        }
    }

    onSelect(index) {
        const time = this.state.times[index];
        if (time.value !== -1) {
            setTimeout(() => {
                this.props.navigator.pop();
                this.props.navigator.navigationContext.emit('remindEvent', this.state.times[index]);
            });
        }
        else {
            alert('custom selectRemind');
        }
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
                    提醒
                </NavTitle>
            </NavBar>
        );
    }

    renderCustomRemind() {

    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <RadioButtonGroup
                    onSelect={(index) => this.onSelect(index)}
                >
                    {this.state.times.map((time, index) => {
                        return (
                            <RadioButton style={styles.radio} key={index} title={time.label} />
                        )
                    })}
                </RadioButtonGroup>
                {this.renderCustomRemind()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    radio: {
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ccc'
    }
})