import React, {Component} from 'react';
import { Link } from "react-router-dom"

export default class MyInfo extends Component {
    render() {
        return (
            <div style={{fontSize: '24px'}}>
                <Link to="/project">我是人物介绍</Link>
            </div>
        );
    }
}
