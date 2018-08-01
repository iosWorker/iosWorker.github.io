import React from 'react';//从 react 的包当中引入了 React 和 React.js 的组件父类 Component
import ReactDOM from 'react-dom';//ReactDOM 可以帮助我们把 React 组件渲染到页面上去，没有其它的作用了
import Routes from './Routes'
import './index.css';
import registerServiceWorker from './registerServiceWorker';



/*ReactDOM.render 功能就是把组件渲染并且构造 DOM 树
然后插入到页面上某个特定的元素上（在这里是 id 为 root 的 div 元素）*/
ReactDOM.render(
    <Routes />,
    document.getElementById('root')
);

registerServiceWorker();

/*
总结
要记住几个点：

JSX 是 JavaScript 语言的一种语法扩展，长得像 HTML，但并不是 HTML。
React.js 可以用 JSX 来描述你的组件长什么样的。
JSX 在编译的时候会变成相应的 JavaScript 对象描述。
react-dom 负责把这个用来描述 UI 信息的 JavaScript 对象变成 DOM 元素，并且渲染到页面上。
*/



