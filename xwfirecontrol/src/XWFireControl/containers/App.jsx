import React from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import { Spin } from 'antd';
import LayoutLeft from './Layout/Left/Header';
import LayoutTop from './Layout/Left/Layout';
import './App.less';
import './projects.less';
import '../07_ThirdParty/projectone.less';
import Compont from '../07_ThirdParty/projectone';

class App extends React.Component {

  render() {

    const { app } = this.props;
    const { menuMode, fakeGlobal } = app;

    return (
      <div>
        <Spin size="large" spinning={fakeGlobal}>
          {
            
            <Compont {...this.props} ></Compont>
          }
        </Spin>
      </div>
    );
  }
}

export default withRouter(connect(({ app }) => ({ app }))(App));
