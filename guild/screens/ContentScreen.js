import React, { Component } from 'react';
import { Text, ScrollView, View, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';


class ContentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: undefined,
      result: {}
    }
  }

  componentDidMount() {
    let { id } = this.props.navigation.state.params;
    this.setState({
      id
    });
    this.fetchDataFromServer(id)
  }



  fetchDataFromServer = (id) => {
    fetch(`https://polkadot.cloud-wave.cn/read/${id}?collection=articals`)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.success) {
          this.setState({
            result: responseJson.result
          })
        } else {
          Alert.alert("请检查您的网络是否通畅")
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    let { result } = this.state;

    let tagsStyles = { p: { marginBottom: 2, marginTop: 2 } }
    return (
      <View>
        <View style={{ height: 22, backgroundColor: "#ccc" }}></View>
        <Text style={{
          fontSize: 20, paddingTop: 10, paddingBottom: 10, paddingLeft: 10,
          fontWeight: "bold", borderBottomColor: "#e8e8e8", borderBottomWidth: 1
        }}>{result.title ? result.title : null}</Text>
        <View style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}>
          <ScrollView style={{ flex: 1 }}>
            <View style={{ paddingLeft: 20, paddingRight: 20 }}>
              {result.content ?
                <HTML html={result.content}
                  tagsStyles={tagsStyles}
                /> : null}
            </View>
          </ScrollView>
        </View>
      </View >

    )
  }
}

export default ContentScreen;