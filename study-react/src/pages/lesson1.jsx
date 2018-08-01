import React, { Component } from 'react';
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




