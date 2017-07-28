import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';
import Button from 'react-native-button';

import SwipeableViews from 'react-swipeable-views/lib/index.native.animated';
// There is another version. I'm unsure which one give the best UX.
// import SwipeableViews from 'react-swipeable-views/lib/index.native.scroll';

const Banner = () => (
  <SwipeableViews style={styles.slideContainer} >
    <View style={styles.slide}>
      <Image
        style={styles.banner}
        source={{uri: 'http://demo.qq-online.net:9002/images/wxbanner.jpg'}}
      />
    </View>
    <View style={styles.slide}>
      <Image
        style={styles.banner}
        source={{uri: 'http://demo.qq-online.net:9002/images/wxbanner.jpg'}}
      />
    </View>
    <View style={styles.slide}>
      <Image
        style={styles.banner}
        source={{uri: 'http://demo.qq-online.net:9002/images/wxbanner.jpg'}}
      />
    </View>
  </SwipeableViews>
);

const styles = StyleSheet.create({
  slideContainer: {
    height: 180,
  },
  slide: {
    height: 180,
    backgroundColor: '#ccc',
  },
  banner: {
    width: Dimensions.get('window').width,
    height: 180,
  },
});

export default Banner;