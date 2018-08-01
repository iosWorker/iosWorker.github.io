import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Home from './pages/home';
import Lesson1 from './pages/lesson1';


function changeTable(index) {
    return { type: "channgTable", data:index }
}

const reducer = function(state={"tableIndex":0}, action={}) {
    switch(action.type){
        //当发出type为changeTable的action对state的操作
        case "changeTable":
            let backup = state;
            backup["tableIndex"] = action.data;
            return Object.assign({}, state,backup);
        default :
            return Object.assign({}, state);
    }
}

var store = createStore(reducer);

export default class Routes extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route path='/lesson1' component={Lesson1} />
                        <Redirect to='/home' />
                        {/* <Route component={NotFound} /> */}
                    </Switch>
                </Router>
            </Provider>
        );
    }
}


