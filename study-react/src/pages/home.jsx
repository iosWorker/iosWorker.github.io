import React,{Component} from 'react';
import {connect} from 'react-redux';
import App from '../App';

const mapStateToProps = (store) => {
    console.log("store", store);
    return store;
};

const mapDispatchToProps = (dispatch) => ({
    changeTable: () => {
        dispatch({
            type: "changeTable",
            data: 2222
        })
    }
})

class Home extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    handleClickToChangeStore() {
        this.props.changeTable();
        console.log(this.props)
    }
    render() {
        return (
            <App/>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
