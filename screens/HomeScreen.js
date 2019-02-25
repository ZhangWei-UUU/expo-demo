import React,{Component} from 'react';
import {ScrollView,Text,View,StyleSheet,TouchableOpacity,FlatList,TextInput,Image,SafeAreaView} from 'react-native';
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
           rencent:[] ,
           selectedTab: 0,
      }
  }
  
  setTab = selectedTab => {
    this.setState({ selectedTab });
  };
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
             <TextInput style={{
                 backgroundColor: '#F7F7F7',
                 height: 36,
                 fontSize: 18,
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
                        data={[{key: 'a'}, {key: 'b'}]}
                        renderItem={({item}) => {
                            return(
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("Qrcode",{key:item.key})}> 
                                   <View style={styles.card}><Text>{item.key}</Text></View>
                               </TouchableOpacity>
                            )
                        }}
                     />
                </View>: <Text>暂无相关信息</Text>}
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
        marginTop:5
    },
    headerImage: {
        width:40,
        height: 40,
        borderRadius:40,
        resizeMode: 'contain',
        marginTop: 50,
        marginLeft:10
    },
  });
export default HomeScreen
