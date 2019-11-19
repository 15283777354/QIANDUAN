import { Table, Divider, Tag } from 'antd';
import  React from 'react';
var WeixiuzhuangtaiCss=require('../Weixiuzhuangtai/weixiuzhuangtai.css')

const columns = [
  {
    title: '维修单号',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  },
  {
    title: '维修物品',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '备注',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '维修状态',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    
    key: 'action',
    
  },
];

const data = [
 
  {
    key: '1 ',
    name: '001  ',
    age:  '床',
    address: ' 无 ',
    tags: ['未维修'],
  },
  {
    key: '2 ',
    name: '002  ',
    age:  '衣柜',
    address: ' 衣柜门坏了 ',
    tags: ['未维修'],
  },
  {
    key: '3 ',
    name: '003',
    age:  '空调',
    address: '空调不能制冷',
    tags: ['未维修'],
  },
  {
    key: '4',
    name: '004 ',
    age:  '厕所冲水器',
    address: ' 冲完后还会继续流',
    tags: ['未维修'],
  },
  {
    key: '5 ',
    name: '005',
    age:  '门',
    address: ' 门锁坏了 ',
    tags: ['未维修'],
  },
  {
    key: '6 ',
    name: '006',
    age:  '灯',
    address: ' 灯坏了 ',
    tags: ['未维修'],
  },
  {
    key: '7 ',
    name: '007',
    age:  '洗漱台水管',
    address: ' 洗漱台水管破了漏水 ',
    tags: ['未维修'],
  },
];
export default class WeixiuzhuangtaiPage extends React.Component{
    render(){
        return(
         <div className={WeixiuzhuangtaiCss.weixiuzhuangtai}>
<Table columns={columns} dataSource={data} />
</div>
        )
    }
}
