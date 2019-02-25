import React from 'react';
import { Platform } from 'react-native';

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ScannerScreen from '../screens/ScannerScreen';
import WebpageScreen from '../screens/WebpageScreen';
import QrScreen from '../screens/QrScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Webpage:WebpageScreen,
  Scanner:ScannerScreen,
  Qrcode:QrScreen,
},
{
  initialRouteName: "Home" //初始页面为Home
}
);

HomeStack.navigationOptions = ({ navigation }) => {
    if(navigation.state.index===1){
        return {
            tabBarLabel: '首页',
            tabBarVisible: false, 
            tabBarIcon: ({ focused }) => (
                <TabBarIcon
                  focused={focused}
                  name={
                    Platform.OS === 'ios'
                      ? `ios-information-circle${focused ? '' : '-outline'}`
                      : 'md-information-circle'
                  }
                />
              )
        };
    }
    return {
        tabBarLabel: '首页',
        tabBarVisible: false, ////改为true为显示
        tabBarIcon: ({ focused }) => (
                <TabBarIcon
                  focused={focused}
                  name={
                    Platform.OS === 'ios'
                      ? `ios-information-circle${focused ? '' : '-outline'}`
                      : 'md-information-circle'
                  }
                />
        )
    };
};
const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Expo',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: '我的项目',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});
