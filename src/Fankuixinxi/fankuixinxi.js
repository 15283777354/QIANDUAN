import React from 'react'
import {Drawer,Form,Col,Row,Input,Checkbox,message,Button,Icon,onClick,Select} from 'antd';
var Houqing=require('../Fankuixinxi/fankuixinxi.css');
// 维修信息

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


export default class FankuixinxiPage extends React.Component{
    render(){
        return(
            <div className={Houqing.whole}>
                <table className={Houqing.one}  type="text">
                    
                    <tr className={Houqing.r1}>
                        <th  className={Houqing.t1}>反馈时间</th>
                        <th  className={Houqing.t1}>维修单号</th>
                        <th  className={Houqing.t1}>寝室号</th>
                        <th  className={Houqing.t1}>维修物品描述</th>
                        <th  className={Houqing.t1}>维修服务评分</th>
                        <th  className={Houqing.t1}>对本次维修提出的建议</th>
                        
                    </tr>
                    <tr className={Houqing.r1}>
                        <td className={Houqing.d1}>2019.01.22</td>
                        <td className={Houqing.d1}>01</td>
                        <td className={Houqing.d1}>3-123</td>
                        <td className={Houqing.d1}>灯管已修好</td>
                        <td className={Houqing.d1}>五颗星</td>
                        <td className={Houqing.d1}>叔叔很负责很满意</td>
                        
                    </tr>
                    <tr className={Houqing.r1}>
                        <td className={Houqing.d1}>2019.03.12</td>
                        <td className={Houqing.d1}>02</td>
                        <td className={Houqing.d1}>2-257</td>
                        <td className={Houqing.d1}>空调已修好，能制冷</td>
                        <td className={Houqing.d1}>五颗星</td>
                        <td className={Houqing.d1}>暂无建议</td>
                    </tr>
                    <tr className={Houqing.r1}>
                        <td className={Houqing.d1}>2019.03.13</td>
                        <td className={Houqing.d1}>03</td>
                        <td className={Houqing.d1}>1-411</td>
                        <td className={Houqing.d1}>寝室门锁已能使用</td>
                        <td className={Houqing.d1}>四颗星</td>
                        <td className={Houqing.d1}>建议稍微快点，等得有点久</td>
                        
                    </tr>
                    <tr className={Houqing.r1}>
                        <td className={Houqing.d1}>2019.03.24</td>
                        <td className={Houqing.d1}>04</td>
                        <td className={Houqing.d1}>1-456</td>
                        <td className={Houqing.d1}>水龙头能关上了</td>
                        <td className={Houqing.d1}>五颗星</td>
                        <td className={Houqing.d1}>来得很及时,一个小时之内就到了</td>
                        
                    </tr>
                    <tr className={Houqing.r1}>
                        <td className={Houqing.d1}>2019.04.23</td>
                        <td className={Houqing.d1}>05</td>
                        <td className={Houqing.d1}>4-563</td>
                        <td className={Houqing.d1}>电视画面可以显示了</td>
                        <td className={Houqing.d1}>三颗星</td>
                        <td className={Houqing.d1}>维修工人一点都不负责，第二天才来</td>
                        
                    </tr>
                    
                </table>
                <div className={Houqing.two} type="button">
                <App />
                </div>
               
            </div>
        )
    }
}
