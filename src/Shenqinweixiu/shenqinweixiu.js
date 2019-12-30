import React from 'react';
import Background from '../images/2.jpg';
import { message,Input,Checkbox,Button} from 'antd';

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
var ShenqinweixiuCss = require('./shenqinweixiu.css');
   const { TextArea } = Input;



export default class ShenqinweixiuPage extends React.Component{

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
      "dormitory":this.state.dormitory,
      "name":this.state.name,
      "phone":this.state.phone,
      "item":this.state.item,
      "note":this.state.note,
    }
    //fetch
    fetch("/user/conplaint",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    }).then(response=>response.json())
    .then(result=>{
      if(result.state==2){
        message.info("提交失败")
      }else if(result.state==1){
        message.info("提交成功")
      }
    }).catch(e=>{
message.error(e);
    })
  }
    render(){
        return(
        
  <div   className={ShenqinweixiuCss.shenqinweixiu} style={sectionStyle}>

  <div className={ShenqinweixiuCss.a}>
    寝室号：<Input placeholder="请输入寝室号！" name="dormitory" value={this.state.dormitory} onChange={e=>this.changeValue(e)}/>
    姓名：<Input placeholder="请输入姓名！" name="name" value={this.state.name} onChange={e=>this.changeValue(e)}/>
    手机号：<Input placeholder="请输入手机号！" name="phone" value={this.state.phone} onChange={e=>this.changeValue(e)}/>
    </div>
    <div className={ShenqinweixiuCss.b}>
    维修物品：<Input placeholder="如：灯、门、床、空调" name="item" value={this.state.item} onChange={e=>this.changeValue(e)}/>
   </div>
    <div className={ShenqinweixiuCss.c}>
备注：<TextArea rows={5} name="note" value={this.state.note} onChange={e=>this.changeValue(e)}/>
</div>
    <Button onClick={this.upload}>提交</Button>
  </div>
        )
    }
}
