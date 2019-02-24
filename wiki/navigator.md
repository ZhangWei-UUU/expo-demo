# 解构路由

在使用了`react-navigator`组件的项目只需在`class`中添加`static navigationOptions`对象即可：

```jsx
static navigationOptions = {
    title: 'Home',
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
  };
```

但如果需要去掉默认的头部则需要：

```js
 static navigationOptions = {
    header:null
  };
```

简单的介绍一下React Navigation:
在我们传统的web浏览器中，页面的跳转通常是通过`<a>`标签来进行。当用户点击一个超链接的时候，一个URL就会push进浏览器中的`history stack`。当点击浏览器上的back按钮后，浏览器又会pop出之前的URL。对于原生的React Native而言，它并不存在这种机制。所以React Navigation模仿了这个机制。

React Navigation's stack navigator provides a way for your app to transition between screens and manage navigation history. If your app uses only one stack navigator then it is conceptually similar to how a web browser handles navigation state - your app pushes and pops items from the navigation stack as users interact with it, and this results in the user seeing different screens. A key difference between how this works in a web browser and in React Navigation is that React Navigation's stack navigator provides the gestures and animations that you would expect on Android and iOS when navigating between routes in the stack.

## createStackNavigator

`createStackNavigator`是最为常用的创建路由函数，它接收的参数为一个对象，在该对象中进行相关路由的配置。

