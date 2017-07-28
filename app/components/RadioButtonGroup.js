/**
 * Created by gatt on 2016/6/7.
 */
import React, {
    Component,
} from 'react';
import ReactNative, {
    StyleSheet,
    View,
    Text
} from 'react-native';
import RadioButton from './RadioButton';
//为community的类型选择添加的RadioButton_other，做了样式上的调整以使用createCommunity.js的使用
import RadioButtonOther from './RadioButton_other';

export default class RadioButtonGroup extends Component {
    static propTypes = {
        onSelect: React.PropTypes.func,
        selectedIndex: React.PropTypes.number,
        style: View.propTypes.style
    };

    static defualtProps = {
        selectedIndex: -1
    };

    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: -1
        }
    }

    _onSelect(index) {
        if (this.state.selectedIndex === index) {
            return;
        }

        setTimeout(() => {
            var {
                onSelect
            } = this.props;
            this.setState({
                selectedIndex: index
            });

            if (onSelect) {
                onSelect(index);
            }
        });
    }

    render() {
        const { selectedIndex } = this.state;
        const targetIndex = selectedIndex !== -1? selectedIndex : this.props.defaultSelect;

        const children = React.Children.map(this.props.children, (child, index) => {
            if (child.type === RadioButton || child.type === RadioButtonOther) {
                return React.cloneElement(child, {
                    onPress: () => this._onSelect(index),
                    isSelected: index == targetIndex
                })
            }

            return child;
        });

        return (
            <View style={this.props.style}>
                {children}
            </View>
        )
    }
}