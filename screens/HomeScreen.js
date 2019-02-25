import React,{Component} from 'react';
import {ScrollView,Text,View,StyleSheet,TouchableOpacity,FlatList,TextInput} from 'react-native';
import { Icon } from 'expo';
import {HEADER_MENU,MENU} from '../constants/Menu';

const {AntDesign,Ionicons,FontAwesome} = Icon;
class HomeScreen extends Component {
  static navigationOptions = {
    header:null
  };
 

  componentDidMount(){
      fetch('https://apiwx.funningcoin.cn/').then(res=>{
         return res.json()
      }).then(data=>{
          console.log(data)
      })
  }

  render() {
    return (
      <View style={{backgroundColor:"#e8e8e8"}}>
        <ScrollView >
           <View style={styles.header}>
             <View style={{flex: 1,justifyContent: 'space-evenly',
             flexDirection: 'row',flexWrap: 'wrap',height:100,marginBottom:80}}>
                <View style={{width:"70%",paddingLeft:30,paddingTop:50}}>
                    <Text style={{color:"#000",fontSize:35}}>您想查询哪个</Text>
                    <Text style={{color:"#000",fontSize:35}}>商品？</Text>
                </View>
                <View style={{width:"30%"}}>
                    <Text>头像</Text>
                </View>
             </View>
             <View style={{alignItems:"center"}}>
             <TextInput style={{
                 backgroundColor: '#F7F7F7',
                 height: 36,
                 fontSize: 18,
                 borderWidth: 1,
                 borderColor: '#ccc',
                 width:'85%'
             }}/>
             </View>
             <View style={styles.line}>
             {HEADER_MENU.map((obj,key)=>{
                 return(
                    <View style={styles.headerIcon} key={key}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate(obj.location)} style={{alignItems: 'center'}}>
                           <Ionicons name={obj.icon} size={35}/>
                           <Text>{obj.title}</Text>
                        </TouchableOpacity>
                    </View>
                 )
             })}
             
          
             </View>
           </View>
           <View style={styles.whiteBoarder}>
           {MENU.map((obj,key)=>{
               return(
                   <View key={key} style={styles.normalIcon}>
                       <TouchableOpacity onPress={() => this.props.navigation.navigate(obj.location)} style={{alignItems: 'center'}}>
                            <Ionicons name={obj.icon} size={36} color={obj.color}/>
                            <Text>{obj.title}</Text>
                       </TouchableOpacity>
                   </View>
               )
           })}
           </View>
           <FlatList
              data={[{key: 'a'}, {key: 'b'}]}
              renderItem={({item}) => <Text>{item.key}</Text>}
            />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    header: {
      paddingTop:30,
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
        height:50
    },
    normalIcon:{
        width:'25%',
        height:80,
        borderStyle:"solid"
    }
  });
export default HomeScreen
