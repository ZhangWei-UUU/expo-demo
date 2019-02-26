import React,{Component} from 'react';
import {StyleSheet,Text,View,AsyncStorage} from 'react-native';
import {  Constants, BarCodeScanner, Permissions } from 'expo';

const URL = "https://trombone-staging.umarkcloud.com/oboe/resources/86%2Fmilk.shanghai%2Fguangming%2F12345678?%24class=com.umarkcloud.solution.handle.resolve.server.asset.Handle"
class ScannerScreen extends Component {
  static navigationOptions = {
    title: '扫一扫',
    headerTransparent: true,
    headerTintColor: '#fff',
  };

  state = {
    hasCameraPermission: null,
  }
  
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  _retrieveData = async (obj) => {
    try {
      const value = await AsyncStorage.getItem('record');
      if (value !== null) {
        let parsedArray = JSON.parse(value);
        let same = false;
        parsedArray.forEach(o=>{
            if(o.blockHash === obj.blockHash){
                same = true
            }
        });

        if(!same){
            parsedArray.push(obj);
        }
        
        await AsyncStorage.setItem('record', JSON.stringify(parsedArray));
      }else{
        var newArray = [obj]
        await AsyncStorage.setItem('record', JSON.stringify(newArray));
      }
    } catch (error) {
       alert("本地无法存储数据，请检查内存容量!")
    }
  };

  handleBarCodeScanned = ({ type, data }) => {
      if(data){
        fetch(URL,{
            method:"GET",
            credentials:"include",
            headers: { 
             "Content-Type":"application/json",
             "accept":"application/json",
             "Authorization": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzczNTZmMzM1ZmU2YzAwMzEyY2FkY2EiLCJ1c2VySWQiOiJ4eG0zIiwidXNlck5hbWUiOiJ4eG0zIiwiY2xvdWRIU01FbmFibGVkIjpmYWxzZSwidGVuYW50SWQiOiI1YzczNTZmMzM1ZmU2YzAwMzEyY2FkYzkiLCJ1c2VyUm9sZSI6WyJURU5BTlRfQURNSU4iLCJhZG1pbiJdLCJsYXN0TW9kaWZpZWRCeSI6Inh4bTMiLCJuZXR3b3JrSWQiOiJ0cmlhbC1tY2tvdWotMCIsIm9yZ0lkIjoicHJvdmVuYW5jZS5jb20iLCJsYXN0TW9kaWZpZWRUaW1lIjoxNTUxMDYzMTg2MTc0LCJob21lIjoiL2Rhc2hib2FyZCIsImlhdCI6MTU1MTE0NzA1MiwiZXhwIjoxNTUxMjMzNDUyfQ.RgOPJYuPA4orWm6xbD5dA66p--yt3AKONA3wpsOiaJU"
             },
        }).then(res=>res.json()).then(back=>{
            if(back.error){
                alert(back.error)
            }else{
                this._retrieveData(back.payload)
                this.props.navigation.navigate('Qrcode',{obj:back.payload})
            }
           
        })
       
      }
  }
    render() {
        const { hasCameraPermission } = this.state;
    
        if (hasCameraPermission === null) {
          return <Text>正在请求相机权限中</Text>;
        }
        if (hasCameraPermission === false) {
          return <Text>没有相机权限</Text>;
        }
        return (
          <View style={{ flex: 1 }}>
            <BarCodeScanner
              onBarCodeScanned={this.handleBarCodeScanned}
              style={styles.absoluteFill}
            />
          </View>
        );
      }

}

const styles = StyleSheet.create({
    absoluteFill: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
    }
  });
export default ScannerScreen
