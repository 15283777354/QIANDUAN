import React from 'react'
import { Menu, Icon } from 'antd';
import { BrowserRouter,Route,Link} from 'react-router-dom';
import RenyuanxinxiPage from "../Renyuanxinxi/renyuanxinxi";
import WeixiuxinxiPage from "../Weixiuxinxi/weixiuxinxi";
import TousuxinxiPage from "../Tousuxinxi/tousuxinxi";
import FankuixinxiPage from "../Fankuixinxi/fankuixinxi";
import Background from '../images/2.jpg';

//定义背景样式

var sectionStyle = {
  width: "100%",
  height: "900px",
  backgroundImage: `url(${Background})` 
};
var HouqinCss = require('../Houqin/houqin.css');
const { SubMenu } = Menu;

class Sider extends React.Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
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
              <span>所有信息</span>
            </span>
          }
        >
          
            <Menu.Item key="1" ><Link to="/renyuanxinxi">人员信息</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/weixiuxinxi">维修信息</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/tousuxinxi">投诉信息</Link></Menu.Item>
            <Menu.Item key="4"> <Link to="/fankuixinxi">反馈信息</Link></Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}


export default class StudentPage extends React.Component{
    render(){
        return(
            <div className={HouqinCss.houqin} style={sectionStyle}>
              <BrowserRouter>
            <Sider />
            <Route path="/renyuanxinxi" component={RenyuanxinxiPage}></Route>
            <Route path="/weixiuxinxi" component={WeixiuxinxiPage}></Route>
            <Route path="/tousuxinxi" component={TousuxinxiPage}></Route>
            <Route path="/fankuixinxi" component={FankuixinxiPage}></Route>
            </BrowserRouter>
            </div>
        )
    }
}