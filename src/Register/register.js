import React,{Component} from 'react'
import { Form, Input, Tooltip,  Icon, Select, Row, Checkbox, message, Button, AutoComplete, } from 'antd';
import Background from '../images/12.jpg';
//定义背景样式

var sectionStyle = {
  width: "100%",
  height: "900px",
  backgroundImage: `url(${Background})` 
};
var RegisterCss = require('./register.css');

  const { Option } = Select;
  class RegistrationForm extends Component {
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
      fetch("/user/register",{
        method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      }).then(response=>response.json())
      .then(result=>{
        if(result.state==2){
          message.info("用户名已存在")
        }else if(result.state==1){
          message.info("注册成功")
        }
      }).catch(e=>{
message.error(e);
      })
      //axios
      // Axios.post({
      //     url:"/user/register",
      //     data:JSON.stringify(data)
      //   }).then(result=>{
      //   if(result.state==2){
      //     message.info("用户名已存在")
      //   }else if(result.state==1){
      //     message.info("注册成功")
      //   }
      // })
    }
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
  
    handleConfirmBlur = e => {
      const { value } = e.target;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
  
    compareToFirstPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };
  
    validateToNextPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };
  
    handleWebsiteChange = value => {
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
      }
      this.setState({ autoCompleteResult });
    };
  
    render() {
      const { getFieldDecorator } = this.props.form;

  
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
      const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '86',
      })(
        <Select style={{ width: 70 }}>
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>,
      );
  
      return (
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="学号">
            {getFieldDecorator('email', {
            })(<Input name="stuid" value={this.state.stuid} onChange={e=>this.changeValue(e)}/>)}
          </Form.Item>
          <Form.Item label="密码" hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input.Password name="password" value={this.state.password} onChange={e=>this.changeValue(e)}/>)}
          </Form.Item>
          <Form.Item label="确认密码" hasFeedback>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  validator: this.compareToFirstPassword,
                },
              ],
            })(<Input.Password onBlur={this.handleConfirmBlur} name="confirm" value={this.state.confirm} onChange={e=>this.changeValue(e)}/>)}
          </Form.Item>
          <Form.Item
            label={
              <span>
                姓名&nbsp;
                <Tooltip title="What do you want others to call you?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('nickname', {
              rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
            })(<Input name="name" value={this.state.name} onChange={e=>this.changeValue(e)}/>)}
          </Form.Item>
          <Form.Item label="手机号">
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Please input your phone number!' }],
            })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} name="phone" value={this.state.phone} onChange={e=>this.changeValue(e)}/>)}
          </Form.Item>
          <Form.Item label="寝室号">
            {getFieldDecorator('寝室号', {
            })(
            
                
              
                <Input placeholder="请输入寝室号！如1111" name="dormitory" value={this.state.dormitory} onChange={e=>this.changeValue(e)}/>
              
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" onClick={this.upload}>
             确认注册
            </Button>然后<a href="../login">前往登录</a>
          </Form.Item>
        </Form>
      );
    }
  }
  
  const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
  

export default class RegisterPage extends React.Component{
    render(){
        return(
            <div className={RegisterCss.register} style={sectionStyle}>
                <WrappedRegistrationForm />
            </div>
        )
    }
}