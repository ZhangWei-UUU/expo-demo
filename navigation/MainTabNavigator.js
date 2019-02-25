import React from 'react';
import { Platform } from 'react-native';

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ScannerScreen from '../screens/ScannerScreen';
import CameraScreen from '../screens/CameraScreen';
import LocationScreen from '../screens/LocationScreen';
import FingerprintScreen from '../screens/FingerprintScreen';
import WebpageScreen from '../screens/WebpageScreen';
import QrScreen from '../screens/QrScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Webpage:WebpageScreen,
  Scanner:ScannerScreen,
  Camera:CameraScreen,
  Fingerprint:FingerprintScreen,
  Qrcode:QrScreen,
  Location:LocationScreen,
  Login:LoginScreen,  //在这个键值对中 Login会以字符串形式作为参数让其他函数进行调用。
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
        tabBarVisible: true,
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
