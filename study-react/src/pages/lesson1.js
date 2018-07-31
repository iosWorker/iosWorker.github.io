import React, { Component } from 'react';//从 react 的包当中引入了 React 和 React.js 的组件父类 Component
import ReactDom from 'react-dom';//ReactDOM 可以帮助我们把 React 组件渲染到页面上去，没有其它的作用了


let titleText;

function renderContent(content){
    titleText = content;
}
renderContent('React 小书');

class Header extends Component{
    render(){
        return(
            <div>
                <h1 className='title'>{titleText}</h1>
            </div>
        )
    }
}

const Lesson1 = ()=>{
    return (
        <Header/>
    )
}



/*
总结
要记住几个点：

JSX 是 JavaScript 语言的一种语法扩展，长得像 HTML，但并不是 HTML。
React.js 可以用 JSX 来描述你的组件长什么样的。
JSX 在编译的时候会变成相应的 JavaScript 对象描述。
react-dom 负责把这个用来描述 UI 信息的 JavaScript 对象变成 DOM 元素，并且渲染到页面上。
*/