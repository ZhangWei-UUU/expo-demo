import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { styles } from '../styles/settings';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  return (
    <View style={styles.body}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.Header}>
          <View>
            <Ionicons name="md-contact" size={82} backgroundColor="#e8e8e8" color="#e8e8e8" />
          </View>
          <Text style={styles.grayText}>点击登录</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.cardBar}>
            <Ionicons name="md-card" size={24} color="#fb507a" style={styles.barIcon} />
            <View style={styles.barLeft}>
              <Text>账户</Text>
            </View>
            <View style={styles.barRight}>
              <Text style={styles.Num}>0.00</Text>
            </View>
          </View>
          <View style={styles.cardBar}>
            <Ionicons name="md-journal" size={24} color="#ffc73a" style={styles.barIcon} />
            <View style={styles.barLeft}>
              <Text>订阅期刊</Text>
            </View>
            <View style={styles.barRight}>
              <Text style={styles.Num}>0份</Text>
            </View>
          </View>
          <View style={styles.cardBar}>
            <Ionicons name="md-analytics" size={24} color="#ff6165" style={styles.barIcon} />
            <View style={styles.barLeft}>
              <Text>收益率</Text>
            </View>
            <View style={styles.barRight}>
              <Text style={styles.Num}>0%</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardBar}>
            <Ionicons name="md-paper" size={24} color="#72d658" style={styles.barIcon} />
            <View style={styles.barLeft}>
              <Text>研报</Text>
            </View>
            <View style={styles.barRight}>
              <Text style={styles.Num}></Text>
            </View>
          </View>
          <View style={styles.cardBar}>
            <Ionicons name="md-pie" size={24} color="#46db97" style={styles.barIcon} />
            <View style={styles.barLeft}>
              <Text>数据分析</Text>
            </View>
            <View style={styles.barRight}>
              <Text style={styles.Num}></Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
