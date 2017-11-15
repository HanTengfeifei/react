import React from 'react';
import {Col, Icon,AutoComplete, Input,Popover } from 'antd';
import './projects.less';

export default class ProjectsSearchComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
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
    );
    
  }
}
