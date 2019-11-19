import React from 'react';
import {Button,Icon} from 'antd';
var HeaderCss = require('./header.css');
export default class DefaultHeader extends React.Component{
    render(){
        return(
            <div className={HeaderCss.header}>
                <div>
                   <nav className={HeaderCss.nav}>
                       <ul className={HeaderCss.ul}>
                       <li className={HeaderCss.li}>欢迎来到西南交通大学希望学院寝室报修系统</li>
                       </ul>
                   </nav>
                </div>
                <div className={HeaderCss.two}>
                <Button size="large" type="primary" href="/login">登录</Button>
                </div>
                <div className={HeaderCss.two}>
                    
                <Button size="large" type="primary" href="/register">注册</Button>
                </div>
            </div>
        )
    }
}