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
    TouchableHighlight
} from 'react-native';

const LabelShape = {
    name: React.PropTypes.string.isRequired,
}

export default class FormCell extends Component {
    static propTypes = {
        ...TouchableHighlight.propTypes,
        label: React.PropTypes.string,
        labelStyle: Text.propTypes.style,
        input: React.PropTypes.element.isRequired,
        arrow: React.PropTypes.bool
    };

    static defaultProps = {
        arrow: false
    };

    renderLabel(label, style) {
        if (label) {
            return (
                <Text style={[styles.label, style || {}]}>{label}</Text>
            )
        }
    }

    renderInput(input) {
        return input;
    }

    render() {
        const {
            label,
            labelStyle,
            arrow,
            input
        } = this.props;

        return (
            <TouchableHighlight>
                <View style={styles.cell}>
                    {this.renderLabel(label, labelStyle)}
                    {this.renderInput(input)}
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    cell: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        marginBottom: 15,
        width: 60
    }
})