import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

const Details = (props) => {
    console.log(props)
   return(
   <View style={{backgroundColor:"#fff",minHeight:300,margin:20,padding:20}}>
     <Text style={styles.title}>生产销售</Text>
     <Text style={styles.smFont}>生产商：{props.content.producer}</Text>
     <Text style={styles.smFont}>经销商：{props.content.agency}</Text>
     <Text style={styles.smFont}>分销商：{props.content.retail}</Text>
     <Text style={styles.smFont}>出产地：{props.content.area}</Text>
     <Text style={styles.smFont}>出产时间：{props.content.produceDate}</Text>
     <Text style={styles.title}>监管信息</Text>
     <Text style={styles.smFont}>产品质量申报单号：{props.content.wareTypeId}</Text>
     <Text style={styles.smFont}>检验检疫申报单号：{props.content.verifyerID}</Text>
   </View>
)}

const styles = StyleSheet.create({
    title:{
       fontSize:20,
       fontWeight:'500',
       marginTop:10,
       marginBottom:10
    },
    smFont:{
        fontSize:14,
        color:"#999",
        marginBottom:5,
        marginTop:5
    }
  });
export default Details