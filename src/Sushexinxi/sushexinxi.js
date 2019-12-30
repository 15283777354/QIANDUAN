import React from 'react'
var Houqing=require('../Sushexinxi/sushexinxi.css');
// 维修信息

export default class SushexinxiPage extends React.Component{
    render(){
        return(
            <div className={Houqing.whole}>
                <table className={Houqing.one}  type="text">
                    
                    <tr className={Houqing.r1}>
                        <th  className={Houqing.t1}>学号</th>
                        <th  className={Houqing.t1}>姓名</th>
                        <th  className={Houqing.t1}>寝室号</th>
                        <th  className={Houqing.t1}>手机号</th>
                        
                    </tr>
                    <tr className={Houqing.r1}>
                        <td className={Houqing.d1}>****</td>
                        <td className={Houqing.d1}>****</td>
                        <td className={Houqing.d1}>****</td>
                        <td className={Houqing.d1}>****</td>
                    </tr>
                    
                    
                </table>
                
            </div>
        )
    }
}