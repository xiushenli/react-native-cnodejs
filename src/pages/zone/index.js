import React, { PureComponent } from 'react';
import { connect } from 'dva/mobile';
import Card from './components/Card';
import { View, Text, Button, Image, StatusBar, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import styles from './style';

class Zone extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  static navigationOptions = ({ navigation }) => {
    const { state, setParams } = navigation;
    return {
      headerTitle: '空间',
    };
  };

  componentDidMount() {
    const { params } = this.props.navigation.state;
    this.props.query(params)
  }

  componentWillReceiveProps(next) {
    const { params } = this.props;
    if (next.params !== params) {

    }
  }

  render() {
    const { data, loading } = this.props
    const { navigate } = this.props.navigation;
    const { width } = Dimensions.get('window');
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <View style={styles.inner}>
            <Image source={{ uri: data.avatar_url }} style={styles.avatar} />
            <View style={styles.col}>
              <Text style={[styles.span, styles.name]}>{data.loginname}</Text>
              <Text style={styles.span}>注册于： {data.create_at}</Text>
            </View>
          </View>
        </View>
        <View style={styles.info}>
          <View style={styles.block}>
            <Image style={styles.infoBtn} source={require('../../assets/images/integral.png')} resizeMode='contain' />
            <View>
              <Text style={styles.text}>积分</Text>
              <Text style={[styles.text, styles.sub]}>{data.score}</Text>
            </View>
          </View>
          <View style={styles.block}>
            <Image style={styles.infoBtn} source={require('../../assets/images/github.png')} resizeMode='contain' />
            <View>
              <Text style={styles.text}>Github</Text>
              <Text style={[styles.text, styles.sub]}>{data.githubUsername}</Text>
            </View>
          </View>
        </View>
        <View style={styles.rowList}>
          <View style={styles.row}>
            <Image style={styles.rowImg} source={require('../../assets/images/notice.png')} resizeMode='contain' />
            <View style={styles.rowInner}>
              <Text style={styles.rowText}>我的消息</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Image style={styles.rowImg} source={require('../../assets/images/comment.png')} resizeMode='contain' />
            <View style={styles.rowInner}>
              <Text style={styles.rowText}>我的评论</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Image style={styles.rowImg} source={require('../../assets/images/post.png')} resizeMode='contain' />
            <View style={styles.rowInner}>
              <Text style={styles.rowText}>我的话题</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Image style={styles.rowImg} source={require('../../assets/images/collection.png')} resizeMode='contain' />
            <View style={styles.rowInner}>
              <Text style={styles.rowText}>我的收藏</Text>
            </View>
          </View>
        </View>
        <View style={styles.rowList}>
          <View style={styles.row}>
            <Image style={styles.rowImg} source={require('../../assets/images/setting.png')} resizeMode='contain' />
            <View style={styles.rowInner}>
              <Text style={styles.rowText}>设置</Text>
            </View>
          </View>
        </View>
        {/* <FlatList
          style={{ width: width }}
          data={data.recent_topics}
          extraData={this.state}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => <Card navigate={navigate} item={item} />}
        /> */}
      </View >
    );
  }
}

function mapStateToProps(state) {
  const { data, loading } = state.zone;
  return { data, loading };
}

function mapDispatchToProps(dispatch) {
  return {
    query(params) {
      dispatch({
        type: 'zone/query',
        payload: params,
      });
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Zone);
