import React from 'react';
import { Card, Row, Col, Icon, Switch, Modal, Button,AutoComplete, Input,Popover } from 'antd';
const imgsrc = require('../../assets/img/pone.png');
const imgsrcone = require('../../assets/img/logo.png');
const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;

class CardDemo extends React.Component {
  render() {
    const gridStyle = {
      width: '25%',
      textAlign: 'center',
    };

    return (
      <div style={{height:'100%'}}>
        <div className="projectleftbox">
          <div className="project_leftmid">
              <div className="project_logo">
              <img style={{ display: 'block' }} alt="example" src={imgsrcone} />
              </div>
              <ul className="project_leftmenage">
                <li><a href=""><img src="" alt=""/><span>用户管理</span></a></li>
                <li><a href=""><img src="" alt=""/><span>项目管理</span></a></li>
                <li><a href=""><img src="" alt=""/><span>分类管理</span></a></li>
              </ul>
          </div>
        </div>
        <div className="project_topbox">
          <h5>智慧消防管理后台</h5>
          <div className="project_topboxright">
            <Icon type="user" style={{paddingRight:'8px'}}/>登录
          </div>
        </div>
        <div className="project_contentbox">
             <div className="project_checkbox">
                 <div className="project_checktiitle">项目信息</div>
             </div>
       
        </div>
      </div>
    )
  }
}

export default CardDemo;
