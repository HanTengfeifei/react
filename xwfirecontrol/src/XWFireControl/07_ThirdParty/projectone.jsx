import React from 'react';
import { Card, Row, Col, Icon, Switch, Modal, Button,AutoComplete, Input,Popover } from 'antd';
const imgsrc = require('../../assets/img/pone.png');
const imgsrcone = require('../../assets/img/logo.png');
const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;
const { TextArea } = Input;
const text = <span>余杭区海创科技中心建模项目余杭区海创科技中心建模项目</span>;

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
          <div className="project_contenttitle"><em></em><span>项目管理</span></div>
          <div className="project_contentsearch">
          <Col span={8}>
             <div className="certain-category-search-wrapper" style={{ width: 250,marginTop:15,marginLeft:15 }}>
                <AutoComplete
                    className="certain-category-search"
                    dropdownClassName="certain-category-search-dropdown"
                    dropdownMatchSelectWidth={false}
                    dropdownStyle={{ width: 300 }}
                    size="large"
                    style={{ width: '100%' }}
                    placeholder="请输入项目名称"
                    optionLabelProp="value"
                  >
                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
                </AutoComplete>
             </div>
          </Col>
          </div>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={4}>
            <Card bodyStyle={{ padding: 0 }} noHovering>
              <Popover placement="topLeft" title={text} className="popoverboxmid">
                <Button className="popoverbox">余杭区海创科技中心建模项目余杭区海创科技中心建模项目</Button>
              </Popover>
              <div style={{position:'relative'}}>
              <img style={{ display: 'block' }} alt="example" width="100%" src={imgsrc} />
              <div style={{ padding: '10px 0px' }} className="projectmenage">
                 <a href="#/projectcheck"><span  className="projectlook" >查看</span></a>
                 <span  className="projectlook" >编辑</span>
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
          <Col span={4}>
            <Card bodyStyle={{ padding: 0 }} noHovering>
              <Popover placement="topLeft" title={text} className="popoverboxmid">
                <Button className="popoverbox">余杭区海创科技中心建模项目余杭区海创科技中心建模项目</Button>
              </Popover>
              <div style={{position:'relative'}}>
              <img style={{ display: 'block' }} alt="example" width="100%" src={imgsrc} />
              <div style={{ padding: '10px 0px' }} className="projectmenage">
              <span  className="projectlook" >查看</span>
              <span  className="projectlook" >编辑</span>
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
          <Col span={4}>
            <Card bodyStyle={{ padding: 0 }} noHovering>
              <Popover placement="topLeft" title={text} className="popoverboxmid">
                <Button className="popoverbox">余杭区海创科技中心建模项目余杭区海创科技中心建模项目</Button>
              </Popover>
              <div style={{position:'relative'}}>
              <img style={{ display: 'block' }} alt="example" width="100%" src={imgsrc} />
              <div style={{ padding: '10px 0px' }} className="projectmenage">
              <span  className="projectlook" >查看</span>
              <span  className="projectlook" >编辑</span>
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
          <Col span={4}>
            <Card bodyStyle={{ padding: 0 }} noHovering>
              <Popover placement="topLeft" title={text} className="popoverboxmid">
                <Button className="popoverbox">余杭区海创科技中心建模项目余杭区海创科技中心建模项目</Button>
              </Popover>
              <div style={{position:'relative'}}>
              <img style={{ display: 'block' }} alt="example" width="100%" src={imgsrc} />
              <div style={{ padding: '10px 0px' }} className="projectmenage">
              <span  className="projectlook" >查看</span>
              <span  className="projectlook" >编辑</span>
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
          <Col span={4}>
            <Card bodyStyle={{ padding: 0 }} noHovering>
              <Popover placement="topLeft" title={text} className="popoverboxmid">
                <Button className="popoverbox">余杭区海创科技中心建模项目余杭区海创科技中心建模项目</Button>
              </Popover>
              <div style={{position:'relative'}}>
              <img style={{ display: 'block' }} alt="example" width="100%" src={imgsrc} />
              <div style={{ padding: '10px 0px' }} className="projectmenage">
              <span  className="projectlook" >查看</span>
              <span  className="projectlook" >编辑</span>
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
          <Col span={4}>
            <Card bodyStyle={{ padding: 0 }} noHovering>
              <Popover placement="topLeft" title={text} className="popoverboxmid">
                <Button className="popoverbox">余杭区海创科技中心建模项目余杭区海创科技中心建模项目</Button>
              </Popover>
              <div style={{position:'relative'}}>
                <img style={{ display: 'block' }} alt="example" width="100%" src={imgsrc} />
                <div style={{ padding: '10px 0px' }} className="projectmenage">
                <span  className="projectlook" >查看</span>
                <span  className="projectlook" >编辑</span>
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
      </div>
    )
  }
}

export default CardDemo;
