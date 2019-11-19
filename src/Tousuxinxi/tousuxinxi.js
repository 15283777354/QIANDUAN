import React from 'react'
import {Drawer,Form,Col,Row,Input,Checkbox,message,Button,Icon,onClick,Select} from 'antd';
// 投诉信息

var TousuxinxiCss=require('../Tousuxinxi/tousuxinxi.css');

class DrawerForm extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          <Icon type="search" /> 查询
        </Button>
        <Drawer
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="维修单号">
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: '请输入维修单号' }],
                  })(<Input placeholder="请输入维修单号" />)}
                </Form.Item>
              </Col>
              
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="寝室号">
                  {getFieldDecorator('name1', {
                    rules: [{ required: true, message: '请输入寝室号' }],
                  })(<Input placeholder="请输入寝室号" />)}
                </Form.Item>
              </Col>
              
            </Row>
          </Form>
          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right',
            }}
          >
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
              取消查询
            </Button>
            <Button onClick={this.onClose} type="primary">
              确认查询
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

const App = Form.create()(DrawerForm);

export default class TousuxinxiPage extends React.Component{
    render(){
        return(
            <div className={TousuxinxiCss.whole1}>

               <table className={TousuxinxiCss.table1} border="2px" type="text">
                   <tr className={TousuxinxiCss.rr1}>
                       <th className={TousuxinxiCss.ta1}>投诉单号</th>
                       <th className={TousuxinxiCss.ta1}>学生公寓</th>
                       <th className={TousuxinxiCss.ta1}>寝室号</th>
                       <th className={TousuxinxiCss.ta1}>维修物品</th>
                       <th className={TousuxinxiCss.ta1}>投诉内容</th>
                   </tr>
                   <tr className={TousuxinxiCss.rr1}>
                       <td className={TousuxinxiCss.ta2}>01</td>
                       <td className={TousuxinxiCss.ta2}>三栋</td>
                       <td className={TousuxinxiCss.ta2}>3-122</td>
                       <td className={TousuxinxiCss.ta2}>灯管</td>
                       <td className={TousuxinxiCss.ta2}>灯管坏了</td>
                   </tr>
                   <tr className={TousuxinxiCss.rr1}>
                       <td className={TousuxinxiCss.ta2}>02</td>
                       <td className={TousuxinxiCss.ta2}>四栋</td>
                       <td className={TousuxinxiCss.ta2}>4-114</td>
                       <td className={TousuxinxiCss.ta2}>电视</td>
                       <td className={TousuxinxiCss.ta2}>不能显示画面</td>
                   </tr>
                   <tr className={TousuxinxiCss.rr1}>
                       <td className={TousuxinxiCss.ta2}>03</td>
                       <td className={TousuxinxiCss.ta2}>三栋</td>
                       <td className={TousuxinxiCss.ta2}>3-544</td>
                       <td className={TousuxinxiCss.ta2}>窗户</td>
                       <td className={TousuxinxiCss.ta2}>窗户碎了</td>
                   </tr>
                   <tr className={TousuxinxiCss.rr1}>
                       <td className={TousuxinxiCss.ta2}>04</td>
                       <td className={TousuxinxiCss.ta2}>一栋</td>
                       <td className={TousuxinxiCss.ta2}>1-656</td>
                       <td className={TousuxinxiCss.ta2}>空调</td>
                       <td className={TousuxinxiCss.ta2}>不能制冷气</td>
                   </tr>
                   <tr className={TousuxinxiCss.rr1}>
                       <td className={TousuxinxiCss.ta2}>05</td>
                       <td className={TousuxinxiCss.ta2}>二栋</td>
                       <td className={TousuxinxiCss.ta2}>2-151</td>
                       <td className={TousuxinxiCss.ta2}>热水器不能放热水</td>
                       <td className={TousuxinxiCss.ta2}>热水器不能放热水</td>
                   </tr>
                   <tr className={TousuxinxiCss.rr1}>
                       <td className={TousuxinxiCss.ta2}>06</td>
                       <td className={TousuxinxiCss.ta2}>一栋</td>
                       <td className={TousuxinxiCss.ta2}>1-221</td>
                       <td className={TousuxinxiCss.ta2}>寝室门</td>
                       <td className={TousuxinxiCss.ta2}>门锁坏了</td>
                   </tr>
                   <tr className={TousuxinxiCss.rr1}>
                       <td className={TousuxinxiCss.ta2}>07</td>
                       <td className={TousuxinxiCss.ta2}>一栋</td>
                       <td className={TousuxinxiCss.ta2}>1-346</td>
                       <td className={TousuxinxiCss.ta2}>水龙头</td>
                       <td className={TousuxinxiCss.ta2}>水龙头松了，关不了水了</td>
                   </tr>

               </table>
               <div className={TousuxinxiCss.two2} type="button">
               <App />
                </div>
                
            </div>
        )
    }
}