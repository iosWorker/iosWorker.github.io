import React, {Component} from 'react';
import { connect } from 'react-redux';
import MyInfo from './MyInfo';

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

class My extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    handleClickToChangeStore() {
        this.props.changeTable();
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <p onClick={this.handleClickToChangeStore.bind(this)}>
                    my{this.props.tableIndex}
                </p>

                <MyInfo/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(My);
