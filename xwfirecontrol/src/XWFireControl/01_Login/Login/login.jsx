import React from 'react';
import LayoutDemo1 from './Layout';
// import { Card, Row, Col, Form, Icon, Input, Button, Checkbox, Select, AutoComplete, Tooltip, Cascader } from 'antd';
// const FormItem = Form.Item;
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default class LoginPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
       <LayoutDemo1/>

      </div>
    );
  }
}



