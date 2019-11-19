import React from 'react'
import Background from '../images/14.jpg';
import { Form, Icon, Input, Button, Checkbox,Tooltip,Select, Row, AutoComplete } from 'antd';
//定义背景样式

var sectionStyle = {
  width: "99.6%",
  height: "900px",
  backgroundImage: `url(${Background})` 
};

var LoginCss = require('./login.css');


class NormalLoginForm extends React.Component {
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
              placeholder="学号/工号"
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
            })(<Input.Password  placeholder="密码" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>}/>)}
          </Form.Item>
        
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox><font color="yelloww">记住密码</font></Checkbox>)}
          <a className="login-form-forgot" href=""> </a>
          <Button type="primary" htmlType="submit" className="login-form-button" href="/studentone">学生登录</Button>
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