import React, { Component } from 'react';
/*
react-router提供了两个组件来完成路由功能，一个是Router,另一个是Route。
前者Router在整个应用中只需要一个实例，代表整个路由器。
后者Route则代表每一个路径对应页面的路由规则，一个应用中应该会有多个Route实例。
*/
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import Home from './pages/home'
import Lesson1 from './pages/lesson1'
import NotFound from './pages/notFound'

const Routes = ()=>{
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/lesson1' component={Lesson1} />
                <Route component={NotFound} />
            </Switch>
        </Router>
        
    )
    
}


