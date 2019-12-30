import React from 'react'
import Background from '../images/14.jpg';
import { Form, Icon, Input, Button, Checkbox,message, history, Tooltip,Select, Row, AutoComplete } from 'antd';
//定义背景样式

var sectionStyle = {
  width: "99.6%",
  height: "900px",
  backgroundImage: `url(${Background})` 
};

var LoginCss = require('./login.css');


class NormalLoginForm extends React.Component {
  
  constructor(props){
    super(props);
    this.state={}
  }

  changeValue=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  upload = ()=>{
    var data={
      "stuid":this.state.stuid,
      "password":this.state.password,
      "confirm":this.state.confirm,
      "name":this.state.name,
      "phone":this.state.phone,
      "dormitory":this.state.dormitory,
    }
    //fetch
    fetch("/user/userLogin",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    }).then(response=>response.json())
    .then(result=>{
      if(result.state==1){
        message.info("用户名不存在")
      }else if(result.state==2){
        message.info("登录成功")
        window.location.href="/studentone";
      }else if(result.state==3){
        message.info("密码错误")
      }
    }).catch(e=>{
message.error(e);
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('学号/工号', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="学号/工号" name="name" value={this.state.name} onChange={e=>this.changeValue(e)}
            />,
          )}
        </Form.Item>
        <Form.Item  hasFeedback>
            {getFieldDecorator('密码', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input.Password  name="password" value={this.state.password} onChange={e=>this.changeValue(e)} placeholder="密码" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)'  }}/>}/>)}
          </Form.Item>
        
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox><font color="yelloww">记住密码</font></Checkbox>)}
          <a className="login-form-forgot" href=""> </a>
          <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.upload}>学生登录</Button>
          <Button type="primary" htmlType="submit" className="login-form-button" href="/houqin">后勤登录</Button>
          或<a href="../register">现在注册</a>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);



export default class LoginPage extends React.Component{
    render(){
        return(
    <div className={LoginCss.login} style={sectionStyle}>
       <WrappedNormalLoginForm />
    </div>
        )
    }
}