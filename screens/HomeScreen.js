import React,{Component} from 'react';
import {ScrollView,Text,View,StyleSheet,TouchableOpacity,FlatList,TextInput,Image,SafeAreaView,AsyncStorage} from 'react-native';
import { Icon } from 'expo';
import MaterialTabs from 'react-native-material-tabs';

const {AntDesign,Ionicons,Entypo} = Icon;

class HomeScreen extends Component {
  static navigationOptions = {
    header:null
  };
  
  constructor(props){
      super(props);
      this.state ={
           history:[] ,
           selectedTab: 0,
      }
  }
  
  setTab = selectedTab => {
    this.setState({ selectedTab });
  };

  async componentDidMount(){
    try {
       const value = await AsyncStorage.getItem('record');
       if(value !== null){
           this.setState({
               history:JSON.parse(value)
           })
       }
    }catch(e){
       alert("获取历史数据失败.")
    }
  }
  render() {
    return (
      <View style={{backgroundColor:"#e8e8e8"}}>
        <ScrollView >
           <View style={styles.header}>
             <View style={{flex: 1,justifyContent: 'space-evenly',
             flexDirection: 'row',flexWrap: 'wrap',height:100,marginBottom:50}}>
                <View style={{width:"70%",paddingLeft:30,paddingTop:30}}>
                    <Text style={{color:"#000",fontSize:35}}>您想查询哪个</Text>
                    <Text style={{color:"#000",fontSize:35}}>商品？</Text>
                </View>
                <View style={{width:"30%",alignItems:"flex-end",paddingRight:20}}>
                <Image source={require('../assets/images/header.jpg')} 
                  style={styles.headerImage}/>
                </View>
             </View>
             <View style={{alignItems:"center"}}>
             <TextInput 
             placeholder="在此输入商品编号"
             style={{
                 backgroundColor: '#F7F7F7',
                 height: 36,
                 fontSize: 15,
                 borderWidth: 1,
                 borderColor: '#ccc',
                 width:'85%',
                 marginBottom:30,
                 padding:5
             }}/>
             </View>
             <View style={styles.line}>
                <View style={styles.headerIcon}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Scanner")} 
                        style={{alignItems: 'center'}}>
                          <View style={styles.iconWrapper} backgroundColor="#FF2D5A">
                           <Ionicons name="ios-barcode" size={35} color="#fff" />
                           </View>
                           <Text>条形码</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.headerIcon}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Scanner")} 
                        style={{alignItems: 'center'}}>
                          <View style={styles.iconWrapper} backgroundColor="#3979F1">
                           <AntDesign name="qrcode" size={35} color="#fff" />
                           </View>
                           <Text>二维码</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.headerIcon}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Scanner")} 
                        style={{alignItems: 'center'}}>
                          <View style={styles.iconWrapper} backgroundColor="#03CCA9">
                           <Entypo name="voicemail" size={35} color="#fff" />
                           </View>
                           <Text>AR</Text>
                    </TouchableOpacity>
                </View>
             </View>
           </View>
            <SafeAreaView style={styles.container}>
                <View style={{width:"40%",marginLeft:40,marginBottom:20}}>
                <MaterialTabs
                    items={['最新', '关注']}
                    selectedIndex={this.state.selectedTab}
                    onChange={this.setTab}
                    barColor="#e8e8e8"
                    indicatorColor="#03CCA9"
                    activeTextColor="#03CCA9"
                    inactiveTextColor="#000"
                />
                </View>
                {this.state.selectedTab===0?<View>
                    <FlatList
                        contentContainerStyle={{alignItems: 'center',paddingTops:20}}
                        data={this.state.history}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => {
                            return(
                                <TouchableOpacity 
                                onPress={() => this.props.navigation.navigate("Qrcode",{obj:item})}> 
                                   <View style={styles.card}>
                                     <View style={{width:"40%",alignItems:"center"}}>
                                        <Image source={{uri:item.handleMeta.thumbnail.url}} 
                                           style={styles.productImage}/>
                                        </View>
                                     <View style={{width:"60%"}}>
                                       <Text>{item.handleMeta.name}</Text>
                                       <Text style={styles.smFont}>{item.handleMeta.id}</Text>
                                       <Text style={styles.smFont}>生产商：{item.handleMeta.producer}</Text>
                                       <Text style={styles.smFont}>生产地：{item.handleMeta.area}</Text>
                                       <Text style={styles.smFont}>生产时间：{item.handleMeta.produceDate}</Text>
                                     </View>
                                     
                                   </View>
                               </TouchableOpacity>
                            )
                        }}
                     />
                </View>: <Text style={{textAlign:"center"}}>暂无相关信息</Text>}
            </SafeAreaView>     
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    header: {
      paddingTop:10,
      height:370,
      backgroundColor: '#fff',    
    },
    line:{
        flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    whiteBoarder:{
        flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop:30
    },
    headerIcon:{
        color:"#fff",
        width:'30%',
        height:50,     
    },
    iconWrapper:{
        width:50,
        height:50,
        alignItems: 'center',
        paddingTop:7,
        borderRadius:50,
        marginBottom:7
    },
    container: {
        flex: 1,
        minHeight:400,
    },
    normalIcon:{
        width:'25%',
        height:80,
        borderStyle:"solid"
    },
    card:{
        width:300,
        height:120,
        backgroundColor:"#fff",
        marginBottom:5,
        marginTop:5,
        flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop:10
    },
    headerImage: {
        width:40,
        height: 40,
        borderRadius:40,
        resizeMode: 'contain',
        marginTop: 50,
        marginLeft:10
    },
    productImage:{
        width:70,
        height: 70,
        resizeMode: 'contain',
        marginTop:10
    },
    smFont:{
        fontSize:12,
        color:"#999"
    }
  });
export default HomeScreen
