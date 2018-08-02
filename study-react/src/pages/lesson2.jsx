import React, { Component } from 'react';

class Title extends Component{
    render(){
        return (
            <h1>React 小书</h1>
        )
    }
}

class Header extends Component{
    render(){
        return (
            <div>
                <Title/>
                <Title/>
                <h2>This is Header</h2>
            </div>
            
        )
    }
}
class Main extends Component{
    render(){
        return (
            <h2>This is Main Content</h2>
        )
    }
}
class Footer extends Component{
    render(){
        return (
            <h2>This is Footer</h2>
        )
    }
}


export default class Lesson2 extends Component{
    render(){
        return (
            <div>
                {/* 组件可以和组件组合在一起，
                组件内部可以使用别的组件。
                就像普通的 HTML 标签一样使用就可以。
                这样的组合嵌套，最后构成一个所谓的组件树 */}
                <Header/>
                <Main/>
                <Footer/>
            </div>
            
        )
    }
}