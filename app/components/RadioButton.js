/**
 * Created by gatt on 2016/6/7.
 */
import React, {
    Component
} from 'react';
import ReactNative, {
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class RadioButton extends Component {
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
            const color = disabled ? '#ccc' : '#666';
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
        const icon = !isSelected || disabled ? 'radio-button-unchecked' : 'radio-button-checked';

        return (
            <TouchableHighlight
                underlayColor="rgba(0, 0, 0, 0.1)"
                disabled={disabled}
                onPress={onPress}
            >
                <View style={[styles.radio, style]}>
                    <Icon name={icon} size={25} color={color} />
                    {this.renderTitle(title)}
                </View>
            </TouchableHighlight>
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