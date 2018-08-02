import React, { Component } from 'react';

// isLiked 存放在实例的 state 对象当中，这个对象在构造函数里面初始化。
//这个组件的 render 函数内，会根据组件的 state 的中的isLiked不同显示“取消”或“点赞”内容。
class LikeButton extends Component{
    constructor(){
        super()
        this.state = {
            name:'Tomy',
            isLiked:false
        }
    }
    handleClickOnLikeButton(){
        //setState 方法由父类 Component 所提供。
        //当我们调用这个函数的时候，React.js 会更新组件的状态 state ，
        //并且重新调用 render 方法，然后再把 render 方法所渲染的最新的内容显示到页面上。
        //注意，当我们要改变组件的状态的时候，不能直接用 this.state = xxx 这种方式来修改，
        //如果这样做 React.js 就没办法知道你修改了组件的状态，它也就没有办法更新页面。
        //所以，一定要使用 React.js 提供的 setState 方法，它接受一个对象或者函数作为参数。
        console.log(this.state.isLiked)
        this.setState({
            isLiked:!this.state.isLiked
        })
        
        //传入一个对象的时候，这个对象表示该组件的新状态。但你只需要传入需要更新的部分就可以了，而不需要传入整个对象。
        console.log(this.state.isLiked)
        //你会发现两次打印的都是 false，即使我们中间已经 setState 过一次了。
        //这并不是什么 bug，只是 React.js 的 setState 把你的传进来的状态缓存起来，稍后才会帮你更新到 state 上，
        //所以你获取到的还是原来的 isLiked

        this.setState((prevState) => {
            return { count: 0 }
        })
        this.setState((prevState) => {
            return { count: prevState.count + 1 } // 上一个 setState 的返回是 count 为 0，当前返回 1
        })
        this.setState((prevState) => {
            return { count: prevState.count + 2 } // 上一个 setState 的返回是 count 为 1，当前返回 3
        })
        // 最后的结果是 this.state.count 为 3     
    }
    render() {
        return (
             <button onClick={this.handleClickOnLikeButton.bind(this)}>
             {this.state.isLiked?'取消':'点赞'}👍
             </button>
        );
    }
}

export default class Lesson4 extends Component{
    render() {
        return (
            <div>
                <LikeButton/>
            </div>
        );
    }
}