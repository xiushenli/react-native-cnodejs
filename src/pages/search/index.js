import React, { PureComponent } from 'react';
import { connect } from 'dva/mobile';
import Card from './components/Card';
import Seek from './components/Seek';
import { View, Text, TextInput, Button, Image, StatusBar, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import styles from './style';

class Search extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  static navigationOptions = ({ navigation }) => {
    const { state, setParams } = navigation;
    return {
      headerRight: (<Seek />)
    };
  };

  componentDidMount() {
  }

  componentWillReceiveProps(next) {
    const { params } = this.props;
    if (next.params !== params) {

    }
  }

  componentWillUnmount() {
    this.props.clean()
  }

  render() {
    const { data, loading } = this.props
    const { navigate } = this.props.navigation;
    const { width } = Dimensions.get('window');
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <FlatList
          style={{ width: width }}
          data={data}
          extraData={this.state}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => <Card navigate={navigate} item={item} />}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { data, loading } = state.search;
  return { data, loading };
}

function mapDispatchToProps(dispatch) {
  return {
    clean() {
      dispatch({
        type: 'search/clean',
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);