import React from 'react';
import {Col, Icon,AutoComplete, Input,Popover } from 'antd';
import './projects.less';

export default class ProjectsHeaderComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="project_topbox">
      <h5>智慧消防管理后台</h5>
      <div className="project_topboxright">
        <Icon type="user" style={{paddingRight:'8px'}}/>登录
      </div>
    </div>
    );
    
  }
}
