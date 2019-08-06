import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ContentScreen from '../screens/ContentScreen';
import LoginScreen from '../screens/LoginScreen';
import AccountScreen from '../screens/AccountScreen';
import RevenueScreen from '../screens/RevenueScreen';
import ResearchScreen from '../screens/ResearchScreen';
import PhoneScreen from '../screens/PhoneScreen';

/**
 * 首页栈堆的实现
 */
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Content: ContentScreen
  },
  {
    initialRouteName: "Home",
    headerMode: 'none',
  }
);
// 栈集合的配置：1. 文字，2.图标
HomeStack.navigationOptions = {
  tabBarLabel: '首页',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  {
    headerMode: 'none',
  }
);

LinksStack.navigationOptions = {
  tabBarLabel: 'VIP',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-ribbon'} />
  )
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
    Login: LoginScreen,
    Phone: PhoneScreen,
    Account: AccountScreen,
    Revenue: RevenueScreen,
    Research: ResearchScreen
  },
  {
    headerMode: 'none',
  }
);

SettingsStack.navigationOptions = ({ navigation }) => {
  console.log(navigation)
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
    tabBarLabel: '我',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
    ),
  };
};
SettingsStack.path = '';


const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
