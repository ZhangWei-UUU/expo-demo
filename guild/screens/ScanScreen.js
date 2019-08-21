import * as React from 'react';
import { Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import TopBar from '../components/Topbars';
import { BarCodeScanner } from 'expo-barcode-scanner';
export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: "#000"
  },
  scanContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 100,
    backgroundColor: "#000"
  }
});
export default class BarcodeScannerExample extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  // 处理扫描后的二维码
  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>正在请求相机权限</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>请打开相机权限</Text>;
    }
    return (
      <View style={styles.container}>
        {scanned && (
          <Button title={'Tap to Scan Again'}
            onPress={() => this.setState({ scanned: false })} />
        )}
        <TopBar title="条形码/二维码" {...this.props} color="black" />
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={styles.scanContainer}
        >
          <Text>asadasx</Text>
        </BarCodeScanner>
      </View>
    );
  }


}