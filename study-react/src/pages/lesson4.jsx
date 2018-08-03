import React, { Component } from 'react';

// isLiked 存放在实例的 state 对象当中，这个对象在构造函数里面初始化。
//这个组件的 render 函数内，会根据组件的 state 的中的isLiked不同显示“取消”或“点赞”内容。
class LikeButton extends Component{

    //React.js 提供了一种方式 defaultProps，可以方便的做到默认配置
    //props 一旦传入进来就不能改变
    //你不能改变一个组件被渲染的时候传进来的 props。
    //React.js 希望一个组件在输入确定的 props 的时候，能够输出确定的 UI 显示形态。
    //如果 props 渲染过程中可以被修改，那么就会导致这个组件显示形态和行为变得不可预测，
    //这样会可能会给组件使用者带来困惑。
    static defaultProps = {
        likedText: '取消',
        unlikedText: '点赞'
    }

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

        if (this.props.onClick) {
            this.props.onClick()
        }
    }
    render() {
        const likeText = this.props.likeText;
        const unlikeText = this.props.unlikeText || '点赞';
        return (
             <button onClick={this.handleClickOnLikeButton.bind(this)}>
             {this.state.isLiked?likeText:unlikeText}👍
             </button>
        );
    }
}

export default class Lesson4 extends Component{
    render() {
        return (
            <div>
                {/* 
                    在使用一个组件的时候，可以把参数放在标签的属性当中，所有的属性都会作为 props 对象的键值 
                    可以把任何类型的数据作为组件的参数，包括字符串、数字、对象、数组、甚至是函数等等
                */}

                <LikeButton likeText="已赞" unlikeText="赞" onClick={() => console.log('Click on like button!')}/>
            </div>
        );
    }
}

/*
state 的主要作用是用于组件保存、控制、修改自己的可变状态。
state 在组件内部初始化，可以被组件自身修改，而外部不能访问也不能修改。
你可以认为 state 是一个局部的、只能被组件自身控制的数据源。
state 中状态可以通过 this.setState 方法进行更新，setState 会导致组件的重新渲染。

props 的主要作用是让使用该组件的父组件可以传入参数来配置该组件。
它是外部传进来的配置参数，组件内部无法控制也无法修改。
除非外部组件主动传入新的 props，否则组件的 props 永远保持不变。

state 和 props 有着千丝万缕的关系。它们都可以决定组件的行为和显示形态。
一个组件的 state 中的数据可以通过 props 传给子组件，
一个组件可以使用外部传入的 props 来初始化自己的 state。
但是它们的职责其实非常明晰分明：state 是让组件控制自己的状态，props 是让外部对组件自己进行配置。

尽量少地用 state，尽量多地用 props。
React.js 非常鼓励无状态组件，在 0.14 版本引入了函数式组件——一种定义不能使用 state 组件.
*/

//常规组件
class HelloWorld extends Component{
    constructor(){
        super()
    }

    sayHi(){
        alert('hello world')
    }

    render(){
        return (
            <div onClick={this.sayHi.bind(this)}>Hello World</div>
        )
    }
}

//函数式组件
const HelloWorld = (props)=>{
    const sayHi = (event)=> alert('hello world')
    return (
        <div onClick={sayHi}>Hello World</div>
    )
}