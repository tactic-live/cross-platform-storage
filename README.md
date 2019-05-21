# cross-platform-storage

cross-platform-storage是跨平台开源统一storage交互库

## Feature
* support h5 and 微信小程序

## install

## Getting started
### npm
```bash
npm install cross-platform-storage --save
```
### yarn
```bash
yarn add cross-platform-storage
```

## Usage

## ES5
```js
var storage = require('cross-platform-storage').getStorage();
```
## ES6
```js
import CrossStorage from 'cross-platform-storage';
const storage = CrossStorage.getStorage();
```

## API 
### getStorage(type)

type | 说明
---|---
session | 返回sessionStorage
local | 返回localStorage
miniprogram | 返回小程序wrapped微信对象
空 | 根据环境自动判断 小程序环境返回wrapped微信对象, web环境返回sessionStorage对象

### setItem 同步写入
```js
storage.setItem('foo', 'foo');
```
### getItem 同步获取
```js
const result = storage.getItem('foo');
console.log(result);
// console result 'foo'
```
### setItemAsync 异步写入
```js
storage.setItem('foo', 'foo').then(function(){
    console.log('success');
});
// console 'success'
```
### getItemAsync 异步获取
```js
storage.getItem('foo').then(function(result){
    console.log(result);
});
// console 'foo'
```

## Change Log

### 1.0.1
change license to MIT