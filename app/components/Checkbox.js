/**
 * Created by gatt on 2016/6/2.
 */
import React, {
    Component
} from 'react';
import ReactNative, {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const sizes = [
    'large', 'default', 'small', 'mini'
];

export default class Checkbox extends Component {
    static propTypes = {
        label: React.PropTypes.string,
        value: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number,
            React.PropTypes.bool
        ]).isRequired,
        checked: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        onCheck: React.PropTypes.func,
        size: React.PropTypes.oneOf(sizes)
    };

    static defaultProps = {
        disabled: false,
        checked: false,
        size: 'default',
    };

    constructor(props) {
        super(props);

        this.state = {
            checked: props.checked
        };
    }

    get value() {
        return this.props.value
    }

    get checked() {
        return this.state.checked;
    }

    get label() {
        return this.props.label;
    }

    onCheck(checked, value) {
        this.setState({
            checked
        });
        if (this.props.onCheck) {
            this.props.onCheck(checked, value);
        }
    }

    render() {
        const {
            label,
            value,
            checked,
            disabled,
        } = this.props;

        return (
            <TouchableHighlight
                underlayColor={disabled ? 'transparent' : 'rgba(0, 0, 0, 0.1)'}
                disabled={disabled}
                onPress={() => this.onCheck(!this.state.checked, value)}
            >
                <View style={styles.checkbox}>
                    <Icon
                        ref="icon"
                        name={this.state.checked ? 'check-box' : 'check-box-outline-blank'}
                        size={24}
                        color={!this.state.checked || disabled ? '#ccc' : '#2196F3'}
                        style={styles.icon}
                    />
                    <Text
                        style={{
                            color: disabled ? 'rgba(0, 0, 0, 0.4)' : '#666'
                        }}
                    >
                        {label}
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    checkbox: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    icon: {
        margin: 5
    },
    label: {

    }
});