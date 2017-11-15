import React from 'react';
import { Card, Row, Col, Icon, Switch, Modal, Button,AutoComplete, Input,Popover } from 'antd';
import './projects.less';
import CardDemo from './projectcheck'
import FoundComponent from  './projectfound'

const imgsrc = require('../../assets/img/pone.png');
const imgsrcone = require('../../assets/img/logo.png');
const imgsrcproject = require('../../assets/img/projectone.png');
const imgsrcprojecttwo = require('../../assets/img/projecttwo.png');
const imgsrcprojectthree = require('../../assets/img/projectthree.png');
const imgsrcprojecttwos = require('../../assets/img/projecttwos.png');
const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;
const { TextArea } = Input;
const text = <span className="popovertopbox">余杭区海创科技中心建模项目余杭区海创科技中心建模项目</span>;

export default class ProjectsCardComponent extends React.Component {

  constructor(props) {
    super(props);
    this.onClickButtonReview = this.onClickButtonReview.bind(this);
    this.onClickButtonReviews = this.onClickButtonReviews.bind(this);
    this.state = {
      isShowProjectDetail : false
    };
    this.state = {
      isShowProjectDetails : false
    };
  }


  onClickButtonReviews(){
    this.setState({
      isShowProjectDetails : true
    });
  }
  onClickButtonReview(){
    this.setState({
      isShowProjectDetail : true
    });
  }
  render() {
    if(this.state.isShowProjectDetail == true){
      return(
        <CardDemo/>
      )
    }
      if(this.state.isShowProjectDetails == true){
        return(
          <FoundComponent/>
        )
      }
    
    return (
        <div className="project_contentbox">
            <Row gutter={8} style={{ marginTop: '20px' }}>
              <Col span={4}>
                <Card bodyStyle={{ padding: 0 }} noHovering>
                  <div className="addcard" onClick={this.onClickButtonReviews}>增加项目</div>
                </Card>
              </Col>
              <Col span={4}> 
                
                <Card bodyStyle={{ padding: 0 }} noHovering>
                  <Popover placement="topLeft" title={text} className="popoverboxmid">
                    <Button className="popoverbox">余杭区海创科技中心建模项目余杭区海创科技中心建模项目</Button>
                  </Popover>
                  <div style={{position:'relative'}}>
                      <img style={{ display: 'block' }} alt="example" width="100%" src={imgsrc} />
                      <div style={{ padding: '3px 0px' }} className="projectmenage">
                          <Button className="popoverlook" onClick={this.onClickButtonReview}>查看</Button>
                          <Button className="popoverlook" onClick={this.onClickButtonReview}>修改</Button>
                          <span onClick={() => {
                              Modal.confirm({
                                title: '您确定要删除该项目吗？',
                                content: '删除后，该项目信息及模型将被清除',
                                onOk() {
                                  console.log('OK');
                                },
                                onCancel() {
                                  console.log('Cancel');
                                },
                              });
                            }}  className="projectlook" >
                                  删除
                          </span>
                      </div>
                  </div>
                  <div className="project_contentime">添加于 2017-10-09 17:09</div>
                </Card>
              </Col>
          </Row>
      </div>
    );
  }
}
