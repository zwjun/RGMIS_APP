import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ListView,
    Image,
    Text,
} from 'react-native';

import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../components/Styles';
import Section from '../../components/Section';
import Cell from '../../components/Cell';

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
export default class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
        // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
        // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                    loaded: true,
                });
            })
            .done();
    }
    renderNavBar() {
        return (
            <NavBar style={Styles.navBar}>
                <NavButton
                    style={Styles.navButton}
                    onPress={() => this.props.navigator.pop()}
                >
                    <Icon name="md-arrow-back" size={25} color="#2196F3" />
                </NavButton>
                <NavTitle style={Styles.navTitle}>
                    手机通讯录
                </NavTitle>
            </NavBar>
        );
    }
    render() {
        if (!this.state.loaded) {
            return (
                <View>
                    {this.renderNavBar()}
                    {this.renderLoadingView()}
                </View>

            );
        }
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <ListView
                    style={{marginTop:10}}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderMovie}
                    initialListSize={14}
                />
            </View>
        );
    }
    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading movies...
                </Text>
            </View>
        );
    }

    renderMovie(movie) {
        return (
            <Section style={styles.container}>
                <Cell
                    icon={
                      <Image source={{uri: movie.posters.thumbnail}} style={{width: 30, height: 30}} />
                    }
                    label={movie.title}
                    after={movie.year}
                />
            </Section>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },
    titleText: {
        height: 30,
        justifyContent: 'center',
        paddingLeft: 10,
    },
});
