import React from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import MainApp from './mainApp'
class FireControlApp extends React.Component {
  render() {
    return (
      <div>
        <MainApp >


        </MainApp>
      </div>
    );
  }
}

export default withRouter(connect(({ app }) => ({ app }))(FireControlApp));

