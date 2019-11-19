import React from 'react'
import {Drawer,Form,Col,Row,Input,Checkbox,message,Button,Icon,onClick,Select} from 'antd';
var Houqing=require('../Weixiuxinxi/weixiuxinxi.css');
// 维修信息
const info = () => {
  message.info('保存成功');
};
const { Option } = Select;

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
                  {getFieldDecorator('name1', {
                    rules: [{ required: true, message: '请输入维修单号' }],
                  })(<Input placeholder="请输入维修单号" />)}
                </Form.Item>
              </Col>
              
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="寝室号">
                  {getFieldDecorator('name', {
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


function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

 

export default class WeixiuxinxiPage extends React.Component{

    
    render(){
        return(
            <div className={Houqing.whole}>
                <table className={Houqing.one}  type="text">
                    <tr className={Houqing.r1}>
                        <th  className={Houqing.t1}>维修单号</th>
                        <th  className={Houqing.t1}>学生公寓</th>
                        <th  className={Houqing.t1}>寝室号</th>
                        <th  className={Houqing.t1}>维修物品</th>
                        <th  className={Houqing.t1}>维修状态</th>
                        <th  className={Houqing.t1}>备注</th>
                        <th  className={Houqing.t1}>联系电话</th>
                        
                    </tr>
                    <tr className={Houqing.r1}>
                        <td className={Houqing.d1}>01</td>
                        <td className={Houqing.d1}>三栋</td>
                        <td className={Houqing.d1}>3-123</td>
                        <td className={Houqing.d1}>灯管</td>
                        <td className={Houqing.d1}>
                        <Select
    showSearch
    style={{ width: 200 }}
    placeholder="未维修"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">已维修</Option>
    <Option value="lucy">未维修</Option>
  </Select></td>
                        <td className={Houqing.d1}>暂无</td>
                        <td className={Houqing.d1}>12512547896</td>
                        
                    </tr>
                    <tr className={Houqing.r1}>
                        <td className={Houqing.d1}>02</td>
                        <td className={Houqing.d1}>二栋</td>
                        <td className={Houqing.d1}>2-257</td>
                        <td className={Houqing.d1}>空调</td>
                        <td className={Houqing.d1}><Select
    showSearch
    style={{ width: 200 }}
    placeholder="未维修"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">已维修</Option>
    <Option value="lucy">未维修</Option>
  </Select></td>
                        <td className={Houqing.d1}>暂无</td>
                        <td className={Houqing.d1}>13554258796</td>
                        
                    </tr>
                    <tr className={Houqing.r1}>
                        <td className={Houqing.d1}>03</td>
                        <td className={Houqing.d1}>一栋</td>
                        <td className={Houqing.d1}>1-411</td>
                        <td className={Houqing.d1}>寝室门</td>
                        <td className={Houqing.d1}><Select
    showSearch
    style={{ width: 200 }}
    placeholder="未维修"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">已维修</Option>
    <Option value="lucy">未维修</Option>
  </Select></td>
                        <td className={Houqing.d1}>寝室门锁坏了</td>
                        <td className={Houqing.d1}>17852415263</td>
                        
                    </tr>
                    <tr className={Houqing.r1}>
                        <td className={Houqing.d1}>04</td>
                        <td className={Houqing.d1}>一栋</td>
                        <td className={Houqing.d1}>1-456</td>
                        <td className={Houqing.d1}>水龙头</td>
                        <td className={Houqing.d1}><Select
    showSearch
    style={{ width: 200 }}
    placeholder="未维修"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">已维修</Option>
    <Option value="lucy">未维修</Option>
  </Select></td>
                        <td className={Houqing.d1}>暂无</td>
                        <td className={Houqing.d1}>12458796312</td>
                        
                    </tr>
                    <tr className={Houqing.r1}>
                        <td className={Houqing.d1}>05</td>
                        <td className={Houqing.d1}>四栋</td>
                        <td className={Houqing.d1}>4-563</td>
                        <td className={Houqing.d1}>电视</td>
                        <td className={Houqing.d1}><Select
    showSearch
    style={{ width: 200 }}
    placeholder="未维修"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">已维修</Option>
    <Option value="lucy">未维修</Option>
  </Select></td>
                        <td className={Houqing.d1}>电视画面不能显示</td>
                        <td className={Houqing.d1}>12354689745</td>
                        
                    </tr>
                    
                   
                </table> 
                 <div className={Houqing.two} >
                    <App />
                </div>
                <div className={Houqing.two}>  
                 <Button type="primary" onClick={info}>保存维修状态</Button>
                    </div>
               
            </div>
        )
    }
}
