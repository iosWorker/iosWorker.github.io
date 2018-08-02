import React, { Component } from 'react';

class Title extends Component{
    handleClickOnTitle(word,word1,e){
        console.log('Click on title')
        console.log(e.target.innerHTML)

        //事件监听函数内并不能通过 this 获取到实例
        console.log(this) // => null or undefined
        //如果你想在事件函数当中使用当前的实例，你需要手动地将实例方法 bind 到当前实例上再传入给 React.js
        //bind 会把实例方法绑定到当前实例上，然后我们再把绑定后的函数传给 React.js 的 onClick 事件监听。

        console.log(word)
        console.log(word1)
    }
    render(){
        return(
            // 在 React.js 不需要手动调用浏览器原生的 addEventListener 进行事件监听。
            //React.js 帮我们封装好了一系列的 on* 的属性，
            //当你需要为某个元素监听某个事件的时候，只需要简单地给它加上 on* 就可以了。
            //这些 on* 的事件监听只能用在普通的 HTML 的标签上，而不能用在组件标签上。
            <h2 onClick={this.handleClickOnTitle.bind(this,'hello','react')}>React 小书</h2>
            // 一般在某个类的实例方法里面的 this 指的是这个实例本身。
            //这个传参也有点奇怪
        )
    }
}

export default class Lesson3 extends Component{
    render(){
        return (
            <Title/>
        )
    }
}