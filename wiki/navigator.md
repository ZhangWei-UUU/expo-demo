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