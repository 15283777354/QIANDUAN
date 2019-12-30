import { Popconfirm, message,Form,Input,Checkbox,Button} from 'antd';
import React from 'react' ;
import Background from '../images/2.jpg';

function confirm(e) {
  console.log(e);
  message.success('提交成功');
}

function cancel(e) {
  console.log(e);
  message.error('提交失败');
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

}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default class Header extends React.Component{

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
      "orders":this.state.orders,
      "dormitory":this.state.dormitory,
      "item":this.state.item,
      "score":this.state.score,
      "advice":this.state.advice,
    }
    //fetch
    fetch("/Fankui/Weixiufankui",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    }).then(response=>response.json())
    .then(result=>{
      if(result.state==2){
        message.info("反馈失败")
      }else if(result.state==1){
        message.info("反馈成功")
      }
    }).catch(e=>{
message.error(e);
    })
  }
    render(){
        return(
            <div className={WeixiutousuCss.weixiutousu}  style={sectionStyle}>
<div   className={WeixiutousuCss.weixiutousu} style={sectionStyle}>

<div className={WeixiutousuCss.a}>
  <div>维修单号：<Input placeholder="请输入维修单号！" name="orders" value={this.state.orders} onChange={e=>this.changeValue(e)}/></div>
  <div> 寝室号：<Input placeholder="请输入寝室号！" name="dormitory" value={this.state.dormitory} onChange={e=>this.changeValue(e)}/></div>
  <div>对本次维修评分：<Input placeholder="请输入:1-5星" name="score" value={this.state.score} onChange={e=>this.changeValue(e)}/></div>
  </div>
  <div className={WeixiutousuCss.b}>
  维修物品：<Input placeholder="如：灯、门、床、空调" name="item" value={this.state.item} onChange={e=>this.changeValue(e)}/>
 </div>
  <div className={WeixiutousuCss.c}>
建议：<TextArea rows={5} name="advice" value={this.state.advice} onChange={e=>this.changeValue(e)}/>
</div>
  <Button onClick={this.upload}>提交</Button>
</div>
            </div>
        )
    }
}