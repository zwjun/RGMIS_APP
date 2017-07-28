import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

import Tab from 'react-native-button';
import SwipeableViews from 'react-swipeable-views/lib/index.native.animated';
import MyCommunity from './MyCommunityPage';
import MoreCommunity from './MoreCommunityPage';

export default class TitleTab extends Component {
  //  state = {
  //    index: 0,
  //    checked: false,
  //  };
  constructor(props) {
      super(props);
      this.state = {
          index: 0,
          checked: false,
      };
  }
  handleChangeTabs = (value) => {
    this.setState({
      index: value,
    });
  };

  handleChangeIndex = (index) => {
    this.setState({
      index: index,
    });
  };

  handleChecked = (checked) => {
    this.setState({
      checked: checked,
    });
  };

  render() {
    const { index } = this.state;

    return (
      <View style={{flex: 1}} >
          <View style={{flexDirection: 'row', alignItems: 'center'}} >
              <View style={styles.titleTab} >
                  <Tab
                      style={index === 0 && styles.textStyle}
                      containerStyle={index === 0 && styles.containerStyle}
                      onPress={this.handleChangeTabs.bind(null, 0)}
                  >
                      我的社区
                  </Tab>
              </View>
              <View style={{width: StyleSheet.hairlineWidth, height: 30,backgroundColor: '#ccc'}} />
              <View style={styles.titleTab} >
                  <Tab
                      style={index === 1 && styles.textStyle}
                      containerStyle={index === 1 && styles.containerStyle}
                      onPress={this.handleChangeTabs.bind(null, 1)}
                  >
                      更多社区
                  </Tab>
              </View>         
          </View>
          <SwipeableViews
              index={index}
              onChangeIndex={this.handleChangeIndex}
              containerStyle={styles.slideContainer}
          >
              <ScrollView style={styles.slide}>
                  <MyCommunity {...this.props} />
              </ScrollView>

              <ScrollView style={styles.slide}>
                  <MoreCommunity {...this.props} />
              </ScrollView>
              
          </SwipeableViews>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  slideContainer: {
    flex: 1,
  },
  slide: {
    flex: 1,
  },
  text: {
    color: '#666',
    fontSize: 16,
  },
  titleTab: {
      width: Dimensions.get('window').width / 2 - 1,
      flex: 1,
      height: 43,
      alignItems: 'center',
      justifyContent: 'center',
  },
  textStyle: {
    color: '#2196F3',
  },
  containerStyle: {
    height: 43,
    width: Dimensions.get('window').width / 2, 
    //backgroundColor:'#fcf', 
    borderBottomWidth: 2, 
    borderColor:'#2196F3',
    justifyContent: 'center',
  },
});

