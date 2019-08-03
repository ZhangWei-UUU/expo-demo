import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import CardsScreen from '../screens/CardsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ContentScreen from '../screens/ContentScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

/**
 * 首页栈堆的实现
 */
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Content: ContentScreen
  },
  config
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
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  )
};

LinksStack.path = '';

const CardsStack = createStackNavigator(
  {
    Links: CardsScreen,
  },
  config
);

CardsStack.navigationOptions = {
  tabBarLabel: '卡片',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused}
      name={Platform.OS === 'ios' ?
        'ios-link' : 'md-car'} />
  ),
};

CardsStack.path = '';


const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: '我的',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  CardsStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
