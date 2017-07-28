import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  Image,
  ActivityIndicator,
  View,
  StatusBar
} from 'react-native';

const REQUEST_URL = 'https://api.douban.com/v2/movie/top250';

export default class MovieList extends Component {
    constructor(){
        super();
        //state内部维护的一个状态，我们刚开始进来的为空，来加载空的view
        this.state = {
            movies:new ListView.DataSource({
                rowHasChanged:(row1,row2) => row1 !== row2
            }),
            //自己定义的字段标记是否已经加载过了
            loaded:false
        }
        this.fetchData = this.fetchData.bind(this);
    };

    //rn的生命周期，初始化的时候会执行
    componentDidMount() {
        //去拉取电影的接口的数据
        this.fetchData();
    }

    fetchData(){    //这个是js的访问网络的方法
        fetch(REQUEST_URL)
            .then(response => response.json())  //ES6的写法左边代表输入的参数右边是逻辑处理和返回结果
            .then(responseData => {
                console.log(responseData);
                this.setState({
                    //将获取到的数据赋值给movies
                    movies:this.state.movies.cloneWithRows(responseData.subjects),
                    //标记已经加载成功完毕
                    loaded:true,
                })
            })
            .done();
            //console.log(responseData.subjects);
    };

    onLoadeMore() {
        this.fetchData();
    }

    renderMovieList(movie){
      return(
          <View style={styles.item}>
            <View style={styles.itemImage}>
              <Image
                style={styles.image}
                source={{uri:movie.images.small}} />
            </View>
            <View style={styles.itemContent}>
              <Text style={styles.itemHeader}>
                {movie.title}
              </Text>
              <Text style={styles.itemMeta}>
                {movie.original_title} ({movie.year})
              </Text>
              <Text style={styles.redText}>
                {movie.rating.average}
              </Text>
            </View>
          </View>
      );
    }

    render() {

        if (!this.state.loaded) {
            return(
                <View style={styles.container}>
                  <View style={styles.loading}>
                    <ActivityIndicator
                      size='large'
                      color='#ff0000'/>
                  </View>
                </View>
            )
        }
        return (
          <View style={styles.container}>
            <StatusBar
                hidden={false}
                backgroundColor='#ff0000'
                translucent={false}
             />
            <ListView
                style={styles.listView}
                initiaListSize={1}
                onEndReachedThreshold={10}

                dataSource={this.state.movies}
                renderRow={this.renderMovieList}
                //监听滑动到底部的方法 注意ES6的写法必须要bind要不然this对象不对
                onEndReached={this.onLoadeMore.bind(this)}
                />
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  item:{
    flexDirection:'row',
    borderBottomWidth:1,
    borderColor:'rgba(100,53,201,0.1)',
    paddingBottom:6,
    paddingTop:6,
    flex:1,
  },
  itemText:{
    fontSize:16,
    fontFamily:'Helvetica Neue',
    fontWeight:'400',
    color:'rgba(0,0,0,0.8)',
    lineHeight:26,
  },
  image:{
    height:80,
    width:57,
    margin:5,
  },
  itemHeader:{
    fontSize:18,
    fontFamily:'Helvetica Neue',
    fontWeight:'300',
    color:'#6435c9',
    marginBottom:6,
  },
  itemContent:{
    flex:1,
    marginLeft:13,
    marginTop:6,
  },
  itemMeta:{
    fontSize:16,
    color:'rgba(0,0,0,0.6)',
    marginBottom:6,
  },
  redText:{
    color:'#db2828',
    fontSize:15,
  },
  loading:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
});

