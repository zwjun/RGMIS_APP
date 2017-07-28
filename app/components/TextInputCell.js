/**
 * Created by gatt on 2016/6/6.
 */
import React, {
    Component
} from 'react';
import ReactNative, {
    StyleSheet,
    View,
    Text,
    TextInput
} from 'react-native';

export default class TextInputCell extends Component {
    static propTypes = {
        ...TextInput.propTypes,
        label: React.PropTypes.string,
        labelStyle: Text.propTypes.style
    };

    renderLabel(label, style) {
        if (label) {
            return (
                <Text style={[styles.label, style]}>{label}</Text>
            )
        }
    }

    render() {
        const {
            label,
            labelStyle,
            style,
            ...props
        } = this.props;

        return (
            <View style={styles.cell}>
                {this.renderLabel(label, labelStyle)}
                <TextInput
                    underlineColorAndroid="transparent"
                    {...props}
                    style={[styles.textInput, style]}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cell: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginTop: 15,
        marginBottom: 15,
        width: 60
    },
    textInput: {
        padding: 0,
        flex: 1,
        fontSize: 16,
        borderWidth: 0
    }
})