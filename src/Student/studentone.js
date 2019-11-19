import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter, Route, Link,withRouter } from 'react-router-dom';
import SushexinxiPage from "../Sushexinxi/sushexinxi";
import ShenqinweixiuPage from "../Shenqinweixiu/shenqinweixiu";
import WeixiuzhuangtaiPage from "../Weixiuzhuangtai/weixiuzhuangtai";
import WeixiutousuPage from "../Weixiutousu/weixiutousu";
import WeixiufankuiPage from "../Weixiufankui/weixiufankui";
import Background from '../images/2.jpg';

//定义背景样式

var sectionStyle = {
  width: "100%",
  height: "900px",
  backgroundImage: `url(${Background})`
};
var StudentCss = require('./studentone.css');
const { SubMenu } = Menu;




class StudentPage extends React.Component {
  render() {
    return (
      <div className={StudentCss.studentone} style={sectionStyle}>
        <BrowserRouter>
        <div className={StudentCss.m}>
          <Menu
            onClick={this.handleClick}
            style={{ width: 156 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="crown" />
                  <span>个人信息</span>
                </span>
              }
            >

              <Menu.Item key="1" ><Link to="/sushexinxi">宿舍信息</Link></Menu.Item>
              <Menu.Item key="2"><Link to="shenqinweixiu">申请维修</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/weixiuzhuangtai">维修状态</Link></Menu.Item>
              <Menu.Item key="4"> <Link to="/weixiutousu">维修投诉</Link></Menu.Item>
              <Menu.Item key="5"><Link to="/weixiufankui">维修反馈</Link></Menu.Item>
            </SubMenu>
          </Menu>
          </div>
          <div className={StudentCss.r}>
          <Route path="/sushexinxi" component={SushexinxiPage}></Route>
          <Route path="/shenqinweixiu" component={ShenqinweixiuPage} history={this.props.history}></Route>
          <Route path="/weixiuzhuangtai" component={WeixiuzhuangtaiPage}></Route>
          <Route path="/weixiutousu" component={WeixiutousuPage}></Route>
          <Route path="/weixiufankui" component={WeixiufankuiPage}></Route>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
export default withRouter(StudentPage)
