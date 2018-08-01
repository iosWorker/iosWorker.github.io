import React, {Component} from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import My from './my/index';
import Project from './project/index';

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


export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Route path='/my' component={My} />
                        <Route path='/project' component={Project} />
                        <Redirect to='/my' />
                    </Switch>
                </HashRouter>
            </Provider>
        );
    }
}
