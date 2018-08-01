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

export default reducer;
