import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import SwipeableViews from 'react-swipeable-views/lib/index.native.animated';
import autoPlay from 'react-swipeable-views/lib/autoPlay';
//import Pagination from '../pagination/Pagination.native';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = StyleSheet.create({
  root: {
    position: 'relative',
  },
  slideContainer: {
    height: 160,
  },
  slide: {
    height: 160,
    backgroundColor: '#eee',
  },
  banner: {
    width: Dimensions.get('window').width,
    height: 180,
  },
});

class BannerPlayAuto extends Component {
  state = {
    index: 0,
  };

  handleChangeIndex = (index) => {
    this.setState({
      index: index,
    });
  };

  render() {
    const {
      index,
    } = this.state;

    return (
      <View style={styles.root}>
        <AutoPlaySwipeableViews
          index={index}
          onChangeIndex={this.handleChangeIndex}
          containerStyle={styles.slideContainer}
          //animateTransitions={false}
        >
          <View style={[styles.slide, styles.slide1]}>
            <Image
              style={styles.banner}
              source={{uri: 'http://demo.qq-online.net:9002/images/wxbanner.jpg'}}
            />
          </View>
          <View style={[styles.slide, styles.slide2]}>
            <Image
              style={styles.banner}
              source={{uri: 'http://pic3.bbzhi.com/fengjingbizhi/gaoqingkuanpingfengguangsheyingps/show_fengjingta_281299_11.jpg'}}
            />
          </View>
          <View style={[styles.slide, styles.slide3]}>
            <Image
              style={styles.banner}
              source={{uri: 'http://paper.taizhou.com.cn/tzwb/res/1/2/2015-01/20/12/res03_attpic_brief.jpg'}}
            />
          </View>
          <View style={[styles.slide, styles.slide3]}>
            <Image
              style={styles.banner}
              source={{uri: 'http://img3.iqilu.com/data/attachment/forum/201308/21/192654ai88zf6zaa60zddo.jpg'}}
            />
          </View>
          <View style={[styles.slide, styles.slide3]}>
            <Image
              style={styles.banner}
              source={{uri: 'http://pic1.win4000.com/wallpaper/4/510f446941311.jpg'}}
            />
          </View>
        </AutoPlaySwipeableViews>
      </View>
    );
  }
}

export default BannerPlayAuto;
