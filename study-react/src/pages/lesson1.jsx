import React, { Component } from 'react';
import './css/lesson1.css'

let titleText;

function renderContent(content){
    titleText = content;
}
renderContent('React 小书');

function renderGoodWord(goodWord,badWord){
    let isGood = true
    return isGood?goodWord:badWord
}

class Header extends Component{
    render(){
        return(
            <div>
                <h1 className='title'>{titleText}</h1>
            </div>
        )
    }
}

//必须要用一个外层的 JSX 元素把所有内容包裹起来。返回并列多个 JSX 元素是不合法的
//在 JSX 当中你可以插入 JavaScript 的表达式，表达式返回的结果会相应地渲染到页面上。表达式用 {} 包裹。
export default class Lesson1 extends Component {
    renderGoodWord1(goodWord,badWord){
        let isGood = true
        return isGood?goodWord:badWord
    }
    render() {
        const word = 'is good'
        const className = 'header'
        let isGood = false
        const goodWord = <strong>is good</strong>
        const badWord = <span>is not good</span>
        return (
            <div>
                <Header/>
                <h1>React 小书 {word}</h1>
                {/* 直接写表达式好奇怪啊 */}
                <h1>React 小书 {(function(){return 'is good'})()}</h1>
                <h1 className={className}>React 小书</h1>
                <h1>
                    React 小书
                    {
                        isGood
                        // 在表达式插入里面返回 null ，那么 React.js 会什么都不显示，相当于忽略了该表达式插入
                        ?null
                        :<span> is not good</span>
                    }
                </h1>
                <h1>
                    {/* 
                    JSX 元素其实可以像 JavaScript 对象那样自由地赋值给变量，
                    或者作为函数参数传递、或者作为函数的返回值。 
                    这里给把两个 JSX 元素赋值给了 goodWord 和 badWord 两个变量，
                    然后把它们作为表达式插入的条件返回值。
                    */}
                    React 小书 {isGood?goodWord:badWord}
                </h1>
                <h1>
                    React 小书
                    {renderGoodWord(<strong> is good111</strong>,<span> is not good111</span>)}
                </h1>
                <h1 className={className}>
                    React 小书
                    {this.renderGoodWord1(<strong> is good22</strong>,<span> is not good222</span>)}
                </h1>
            </div>
           
        )
    }
}




