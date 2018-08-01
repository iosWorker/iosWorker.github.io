import React, { Component } from 'react';//从 react 的包当中引入了 React 和 React.js 的组件父类 Component
import ReactDom from 'react-dom';


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

export default class Lesson1 extends Component {
    render() {
        return (
            <Header/>
        )
    }
}




