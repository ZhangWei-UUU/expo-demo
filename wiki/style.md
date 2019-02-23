# React Native 样式的设置

React Native在样式书写上与传统的react还是有所不同。这篇文章就是专门针对React Native常用样式书写的用法。

## 栅格化

### flexDirection
可以将`<View>`标签视为容器标签，在style设置上有一个属性为`flexDirection`。它接收两个参数`row`或`column`,如果不设置的话默认值为`column`。它们区别在于column为竖直排列，而row则是横排。

### justifyContent

这个属性的设置在于当我们选择一个标签作为flex容器的时候，可以选择其子标签在UI中的位置，它的意思分别为

```js
{
    justifyContent: "flex-start",// 左对齐
    justifyContent: "center",  //居中
    justifyContent: "flex-end", //右对齐
    justifyContent: "space-around", //子节点周围有margin space
    justifyContent: "space-between" //子节点之间有margin space
    justifyContent: "space-evenly" //子节点周围有margin space
}
```

### alignItems

这个属性让其子DOM以某种方式对齐。

```js
{
    alignItems: "flex-start",// 左对齐
    alignItems: "center",  //居中
    alignItems: "flex-end",  //右对齐
    alignItems: "stretch",  //左对齐
}
```
> 在`width` `height`设置百分比上，RN的百分比是指设备的百分比而非父级DOM的百分比。同时样式不具备继承性


## ICON

在Expo中封装了各家的ICONS，如Antd 和Ionic以及FontAwesome，开发者可以根据需求自己选择。
可以在[expo icons 列表](https://expo.github.io/vector-icons/)中查询
