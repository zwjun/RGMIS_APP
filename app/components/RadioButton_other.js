/**
 *参考RadioButton.js,仅在createCommunity.js的使用
 */
import React, {
    Component
} from 'react';
import ReactNative, {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class RadioButtonOther extends Component {
    static propTypes = {
        title: React.PropTypes.oneOfType([
            React.PropTypes.string, React.PropTypes.element
        ]),
        isSelected: React.PropTypes.bool,
        onPress: React.PropTypes.func,
        style: View.propTypes.style
    };

    static defaultProps = {
        isSelected: false
    };

    renderTitle(title) {
        if (!title) {
            return;
        }

        const {disabled} = this.props;

        if (typeof(title) === 'string') {
            const color = disabled ? '#ccc' : '#333';
            return (
                <Text style={{marginLeft: 10, color, fontSize: 16}}>{title}</Text>
            );
        }
        else if (title.props !== null) {
            return (
                <View style={{
                    flex: 1
                }}>
                    {title}
                </View>
            );
        }
    }

    render() {
        const {
            title,
            isSelected,
            disabled,
            onPress,
            style,
        } = this.props;

        const color = !isSelected || disabled ? '#ccc' : '#2196F3';
        const icon = !isSelected || disabled ? 'check-box-outline-blank' : 'check-box';

        return (
            <TouchableOpacity
                style={{height: 40, marginRight: 4, marginBottom: 10}}
                //underlayColor="rgba(0, 0, 0, 0.5)"
                disabled={disabled}
                onPress={onPress}
            >
                <View style={[styles.radio, style]}>
                    <Icon name={icon} size={20} color={color} />
                    {this.renderTitle(title)}
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    radio: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10
    }
})