import React, { Component } from 'react';
import config from './config.json';
import styles from './hello.css'; //导入
class Hello extends Component {
    render() {
        //使用cssModule添加类名的方法
        return ( <
            div className = { styles.root } > { config.helloText } <
            /div>
        );
    }
}

export default Hello