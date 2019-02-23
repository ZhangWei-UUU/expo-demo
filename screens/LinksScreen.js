import React from 'react';
import { ScrollView, StyleSheet,WebView } from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 10}}
      />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
