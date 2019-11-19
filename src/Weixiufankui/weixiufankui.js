import { Popconfirm, message,Form,Input,Checkbox,Button} from 'antd';
import React from 'react' ;
import Background from '../images/2.jpg';

import { Rate } from 'antd';

function confirm(e) {
  console.log(e);
  message.success('提交成功');
}

function cancel(e) {
  console.log(e);
  message.error('提交失败');
}

const desc = ['糟糕', '不好', '一般', '很好', '完美'];

class Rater extends React.Component {
  state = {
    value: 3,
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <span>
        <Rate tooltips={desc} onChange={this.handleChange} value={value} />
        {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
      </span>
    );
  }
}


//定义背景样式

var sectionStyle = {
  width: "100%",
  height: "900px",
// makesure here is String确保这里是一个字符串，以下是es6写法
  backgroundImage: `url(${Background})` 
};

const { TextArea } = Input;
var WeixiutousuCss=require('../Weixiutousu/weixiutousu.css')
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
          寝室号：{getFieldDecorator('username', {
            rules: [{ required: true, message: '你还没输入你的寝室号' }],
          })(
            <Input
              placeholder=" 请输入寝室号 "
            />,
          )}
        </Form.Item>
        <Form.Item>
          维修单号：{getFieldDecorator('weixiu', {
            rules: [{ required: true, message: '你还没输入你的维修单号' }],
          })(
            <Input
              placeholder="请输入维修单号  "
            />,
          )}
        </Form.Item>
        <Form.Item>
          维修物品：{getFieldDecorator('weixiudanhao', {
            rules: [{ required: true, message: '你还没输入你的维修物品' }],
          })(
            <Input
              placeholder=" 请输入维修物品"
            />,
          )}
        </Form.Item>
        <Form.Item>
          维修服务评分：<Rater />
        </Form.Item>
        
        <Form.Item>
          对本次维修提出的建议：<TextArea rows={4} />
        </Form.Item>
        
    


        <Form.Item>
          
          <Popconfirm
    title="你确定要提交吗？"
    onConfirm={confirm}
    onCancel={cancel}
    okText="是"
    cancelText="否"
  >
    <Button  href="#" type="primary" htmlType="submit" className="login-form-button">提交</Button>
  </Popconfirm>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);


export default class Header extends React.Component{
    render(){
        return(
            <div className={WeixiutousuCss.weixiutousu}  style={sectionStyle}>
                
<WrappedNormalLoginForm />
            </div>
        )
    }
}