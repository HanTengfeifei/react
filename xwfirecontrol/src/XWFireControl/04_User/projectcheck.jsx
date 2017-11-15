import React from 'react';
import { Card, Row, Col, Icon, Switch, Modal, Button,AutoComplete, Input,Popover } from 'antd';
import './projects.less';
import FoundComponent from  './projectfound'
const imgsrc = require('../../assets/img/pone.png');
const imgsrcone = require('../../assets/img/logo.png');
const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;

class CardDemos extends React.Component {
  constructor(props) {
    super(props);
    this.onClickButtonReview = this.onClickButtonReview.bind(this);
    this.state = {
      isShowProjectDetail : false
    };
  }

  onClickButtonReview(){
    this.setState({
      isShowProjectDetail : true
    });
  }
  render() {
    const gridStyle = {
      width: '25%',
      textAlign: 'center',
    };
    if(this.state.isShowProjectDetail == true){
      return(
        <FoundComponent/>
      )
    }
    return (
       <div className="project_contentbox">
              <div className="project_foundebglbox">
                  <Button style={{marginRight:'20px'}}>WebGL查看</Button>{' '}
                  <Button type="primary">模型管理</Button>{' '}
              </div>
             <div className="project_checkbox">
                
                 <div className="project_checktiitle">项目信息</div>
                 <div className="project_contentboxmid">
                     <div className="project_foundname project_foundall">
                        <span>项目名称：</span>
                        <h6>中测新图</h6>
                     </div>
                     <div className="project_foundselect project_foundall">
                        <span>场景分类：</span>
                        <h6>01-智能家居</h6>
                     </div>
                     <div className="project_upfile project_foundall">
                          <span>项目图片：</span>
                          <img alt="example" src={imgsrc} />
                     </div>
                     <div className="project_foundupimg project_foundall">
                          <span>项目文件：</span>
                          <h6>01-智能家居</h6>
                     </div>
                     <div className="project_founddescript project_foundall">
                          <span>项目描述：</span>
                          <h6 className="pfoundroul">（1）建筑面积：3平方公里；（2）单位地址：浙江省杭州市余杭区梦想小镇</h6>
                     </div>
                     <div className="project_fbuttomboxs">
                         <Button style={{marginRight:'20px'}}>删除</Button>{' '}
                         <Button type="primary" onClick={this.onClickButtonReview}>修改</Button>{' '}
                     </div>
                 </div>
             </div>
        </div>
      )
    }
  }

export default CardDemos;
