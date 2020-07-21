# React App 说明文档

### 重点:兼容`ie 10`

1. 删除整个`node_modules` 包

2. 改变`node_modules`  

   ```javascript
   "browserslist": {
       "production": [
         ">0.2%",
         "not dead",
         "not op_mini all",
         "ie > 9"
       ],
       "development": [
         "last 1 chrome version",
         "last 1 firefox version",
         "last 1 safari version",
         "ie > 9"
       ]
   }
   ```

3. 暴露`webpack`配置文件

   ```javascript
   // 添加git仓库
   git add .
   git commit -m '为了运行eject'
   //命令行
   $ npm run eject
   ```

4. 一键安装

   ```javascript
   npm install
   ```

5. 安装兼容依赖

   ```javascript
   npm install setprototypeof react-app-polyfill core-js mutation-observer --save
   ```

6. 编辑`react`入口文件

   ```javascript
   // 这里是src/index.js
   import 'react-app-polyfill/ie9';
   import 'react-app-polyfill/stable';
   import './polyfill';       // 说明 请看序号7
   import 'core-js/es/set';
   import 'core-js/es/map';
   import 'mutation-observer';
   import React from 'react';
   import ReactDOM from 'react-dom';
   import './index.css';
   import App from './App';
   import * as serviceWorker from './serviceWorker';
   
   ReactDOM.render(
       <App />,
     document.getElementById('root')
   );
   serviceWorker.unregister();
   ```

7. `pofyfill`说明

   ```javascript
   # src文件夹下面创建polyfill.js文件
   import  setprototypeof from 'setprototypeof';
   Object.setPrototypeOf = setprototypeof;
   ```

8. 改变`webpack.config.js`

   

文档地址

| 文档名称             | 文档地址                                   |
| -------------------- | ------------------------------------------ |
| Antd Design (UI框架) | https://ant.design/docs/react/introduce-cn |
| React                | https://react.docschina.org/               |
| Axios                | http://www.axios-js.com/docs/              |

## 文件夹结构说明

> 重要面向src目录里面的内容

+ `src/pages`要编写的页面
+ `src/server`request请求函数
+ `src/util` 通用方法
+ `src/components` 公用组件