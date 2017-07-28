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
    TouchableHighlight
} from 'react-native';

export default class CheckboxGroup extends Component {
    static propTypes = {
        style: View.propTypes.style,
        onCheck: React.PropTypes.func
    };
    
    get value() {
        const {
            children
        } = this.props;

        const values = [];

        children.forEach((checkbox, index) => {
            if (checkbox.checked) {
                values.push({
                    value: checkbox.value,
                    label: checkbox.label,
                    index
                });
            }
        });
    }

    render() {
        const {
            style,
            children
        } = this.props;

        return (
            <View style={style}>
                {children}
            </View>
        )
    }
}