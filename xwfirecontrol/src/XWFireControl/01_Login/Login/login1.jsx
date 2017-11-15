import React from 'react';
import { Link } from 'dva/router';
import {history} from 'dva/router'
import { Layout } from 'antd';
import reqwest from 'reqwest';
// import './login1.less';


import { Card, Row, Col, Form, Icon, Input, Button, Checkbox,message } from 'antd';
const FormItem = Form.Item;
const { Header, Footer, Sider, Content } = Layout;



class LoginDemo extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Card className="card"   noHovering title="登录框">
          <Demo2Form />
        </Card>
      </div>
    )
  }
}
export default LoginDemo;


class LoginDemo2 extends React.Component {

  constructor(props) {
    super(props);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {

      if (!err) {
        reqwest({
          url: 'login',
          method: 'POST',
          contentType:"application/json; charset=UTF-8",
          data: JSON.stringify({
            "acctId": values.userName,
            "acctPassword" : values.password
          }),
          type: 'json',
        }).then((data)=>{
          if(data.message =="success"){
            message.success('登录成功！');
            window.location.href="#/Dashboard1";
            // this.context.router.push()
          }else{
            message.error('账号或密码错误！');
            window.location.href="#/"
          }
        });
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div id="components-form-demo-normal-login">
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input size="large" placeholder="用户名" value="" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input size="large" type="password" placeholder="密码" value="" />
            )}
          </FormItem>
          <Button type="primary" htmlType="submit"  className="login-form-button">登录</Button>
        </Form>
      </div>
    );
  }
}
const Demo2Form = Form.create()(LoginDemo2);

