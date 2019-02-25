import React,{Component} from 'react';
import {ScrollView,Text,View,StyleSheet,TouchableOpacity,FlatList} from 'react-native';
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
      <View>
        <ScrollView >
           <View style={styles.header}>
             <View>
                <Text style={styles.logo}>呆萌</Text>
             </View>
             <View style={styles.line}>
             {HEADER_MENU.map((obj,key)=>{
                 return(
                    <View style={styles.headerIcon} key={key}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate(obj.location)} style={{alignItems: 'center'}}>
                           <Ionicons name={obj.icon} size={35} color="#fff"/>
                           <Text style={{color:"#fff"}}>{obj.title}</Text>
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
      height:170,
      backgroundColor: '#3a7ef3',    
    },
    logo:{
        color:"#fff",
        fontSize:30,
        alignItems:"center",
        textAlign:"center",
        marginBottom:25
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
