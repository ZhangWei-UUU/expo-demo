import React,{Component} from 'react';
import {Text,View,StyleSheet,Image,SafeAreaView,ScrollView} from 'react-native';
import Barcode from 'react-native-barcode-builder';
import MaterialTabs from 'react-native-material-tabs';
import Details from '../components/Details';
import Track from '../components/Track';

class QrScreen extends Component {
    static navigationOptions = {
        header:null
    };

    state = {
       item:{},
       selectedTab: 0
    };
    
    setTab = selectedTab => {
        this.setState({ selectedTab });
    };
    async componentDidMount() {
        
    }
    renderChildren = (index) => {
      const { navigation } = this.props;
      const item = navigation.getParam('obj', 'NO-ID');
      switch(index){
          case 0:
          return <Details content={item.handleMeta}/>
          case 1:
          return <Track/>
          case 2:
          return <Text>relation</Text>
          default: return <Details/>
      }
    }
    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('obj', 'NO-ID');
        return (
          <ScrollView style={{ flex: 1 }}>
             <View style={{backgroundColor:"#FF2D5A",height:250,paddingTop:80,alignItems: 'center',zIndex: 1}}>
                <View style={{marginBottom:20,alignItems:'flex-start',width:"100%",marginLeft:30}}>
                    <Text style={{color:"#fff",fontSize:18}}>此商品溯源信息已入区块链</Text>
                    <Text style={{color:"#fff"}}>区块高度：{item.handleMeta.blockHeight?item.handleMeta.blockHeight:"0"}</Text>
                    <Text style={{color:"#fff"}}>区块哈希值：{item.handleMeta.blockHash?item.handleMeta.blockHash:"0"}</Text>
                </View>
                 <View style={{
                    backgroundColor:"#FFF",height:150,width:"90%",
                    justifyContent: "center",
                    borderWidth: 0.5,
                    borderColor: '#d6d7da',
                 }}>
                   <Text style={{color:"#000",fontSize:18,margin:10}}>
                   {item.handleMeta.name?<Text>{item.handleMeta.name}</Text>
                                        :<Text>暂无图片</Text>}
                   </Text>
                   <View style={{ flex: 1,justifyContent: 'space-evenly',flexDirection: 'row',flexWrap: 'wrap'}}>
                       <View style={{width:"30%",height:100,alignItems:"center"}}>
                       {item.handleMeta.thumbnail.url?<Image source={{uri:item.handleMeta.thumbnail.url}} 
                                           style={styles.productImage}/>
                                        :<Text>暂无图片</Text>}
                       </View>
                       <View style={{width:"70%",height:100,alignItems: 'center'}}>
                         {item.handleMeta.barcode?<Barcode value={item.handleMeta.barcode} height={50} width={1}/>:null}
                       </View>
                   </View> 
                   
                 </View>
             </View>
             <View style={{minHeight:500,backgroundColor:"#e8e8e8", zIndex: 0}}>
                <SafeAreaView >
                   <View style={{marginTop:60,marginLeft:20,marginRight:20}}>
                        <MaterialTabs
                            items={['商品信息', '溯源信息','关联信息']}
                            selectedIndex={this.state.selectedTab}
                            onChange={this.setTab}
                            barColor="#e8e8e8"
                            indicatorColor="#03CCA9"
                            activeTextColor="#03CCA9"
                            inactiveTextColor="#000"
                        />   
                    </View>
                </SafeAreaView>
                {this.renderChildren(this.state.selectedTab)}     
             </View>
          </ScrollView>
        );
      }

}

const styles = StyleSheet.create({
    productImage:{
        width:70,
        height: 70,
        resizeMode: 'contain',
        marginTop:10
    }
  });
export default QrScreen
