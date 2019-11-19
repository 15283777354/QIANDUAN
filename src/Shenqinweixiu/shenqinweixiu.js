import React from 'react';
import Background from '../images/2.jpg';
import { Popconfirm, message,Input,Checkbox,Button} from 'antd';

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




function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}
const options = [
  { label: '门', value: '门' },
  { label: '床', value: '床' },
  { label: '柜', value: '柜' },
  { label: '空调', value: '空调' },
  { label: '桌', value: '桌' },
  { label: '灯', value: '灯' },
  { label: '水管', value: '水管' },
  { label: '其他', value: '其他' },
];

export default class ShenqinweixiuPage extends React.Component{
  constructor(props){
    super(props)
  }
    render(){
        return(
        
  <div   className={ShenqinweixiuCss.shenqinweixiu} style={sectionStyle}>

  <div className={ShenqinweixiuCss.a}>
    寝室号：<Input placeholder="请输入寝室号！" />
    姓名：<Input placeholder="请输入姓名！" />
    手机号：<Input placeholder="请输入手机号！" />
    </div>
    <div className={ShenqinweixiuCss.b}>
    维修物品：
    <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
    <br />
    <br />
    <Checkbox.Group
      disabled
      defaultValue={['Apple']}
      onChange={onChange}
    /></div>
    <div className={ShenqinweixiuCss.c}>
备注：<TextArea rows={4} />
</div>
 <Popconfirm
    title="你确定要提交吗？"
    onConfirm={confirm}
    onCancel={cancel}
    okText="是"
    cancelText="否"
  >
    <Button href="#">提交</Button>
  </Popconfirm>
  </div>
        )
    }
}
