import React,{Component} from 'react';
import {ScrollView,Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import { Icon } from 'expo';

class HomeScreen extends Component {
  static navigationOptions = {
    header:null
  };
  

  render() {
    return (
      <View>
        <ScrollView >
           <View style={styles.header}>
             <View>
                 <Text style={styles.logo}>工业物联</Text>
             </View>
             <View style={styles.line}>
           
             <View style={styles.headerText} 
             >
               <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
               <Icon.AntDesign
                   name="scan1"
                   size={35}
                   color="#fff"
               />
                </TouchableOpacity>
               <Text style={{color:"#fff"}}>扫一扫</Text>
             </View>
            
             <View style={styles.headerText} >
             <Icon.FontAwesome
                   name="qrcode"
                   size={35}
                   color="#fff"
               />
             <Text style={{color:"#fff"}}>付款码</Text>
             </View>
             <View style={styles.headerText} >
             <Icon.AntDesign
                   name="creditcard"
                   size={35}
                   color="#fff"
               />
             <Text style={{color:"#fff"}}>NFC</Text>
             </View>
             </View>
           </View>
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
    headerText:{
        color:"#fff",
        alignItems: 'center',
        width:'30%',
        height:50
    }
  });
export default HomeScreen
