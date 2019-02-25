import React,{Component} from 'react';
import {Text,View} from 'react-native';
import QRCode from 'react-native-qrcode';
import Barcode from 'react-native-barcode-builder';

class QrScreen extends Component {
  static navigationOptions = {
    title: '溯源信息',
    headerTransparent: true,
    headerTintColor: '#fff',
  };

    state = {
       text: null,
    };
  
    async componentDidMount() {
        this.setState({
            text: 'http://facebook.github.io/react-native'
        })
    }
  
    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('key', 'NO-ID');
        return (
          <View style={{ flex: 1 }}>
             <View style={{backgroundColor:"#FF2D5A",height:250,paddingTop:80,alignItems: 'center',zIndex: 1}}>
                <View style={{marginBottom:20,alignItems:'flex-start',width:"100%",marginLeft:30}}>
                    <Text style={{color:"#fff",fontSize:18}}>此商品溯源信息已入区块链</Text>
                    <Text style={{color:"#fff"}}>区块高度：</Text>
                    <Text style={{color:"#fff"}}>区块哈希值：{itemId}</Text>
                </View>
                 <View style={{
                    backgroundColor:"#FFF",height:180,width:"90%",
                    justifyContent: "center",
                    borderWidth: 0.5,
                    borderColor: '#d6d7da',
                 }}>
                   <Text style={{color:"#000",fontSize:18,margin:10}}>小马电动车EHG-2</Text>
                   <View style={{ flex: 1,justifyContent: 'space-evenly',flexDirection: 'row',flexWrap: 'wrap'}}>
                       <View style={{width:"40%",height:100}}>
                       <Text> 图片</Text>
                       </View>
                       <View style={{width:"60%",height:100,alignItems: 'center'}}>
                         {this.state.text?<Barcode value={this.state.text} height={50} width={0.3}/>:null}
                       </View>
                   </View>        
                 </View>
             </View>
             <View style={{minHeight:800,backgroundColor:"#e8e8e8", zIndex: 0}}>

             </View>
          </View>
        );
      }

}

export default QrScreen
