import React from 'react';
import { Link } from 'dva/router';
import {history} from 'dva/router'
import log from '../../assets/img/001.png';
import { Layout } from 'antd';
import reqwest from 'reqwest';
// import Demo2  from './Demo2';
import './Layout.less';


import { Card, Row, Col, Form, Icon, Input, Button, Checkbox, } from 'antd';
import './Layout.less';
const FormItem = Form.Item;
const { Header, Footer, Sider, Content } = Layout;



class LayoutDemo extends React.Component {
  render() {
    const head_footer = {
      background: '-webkit-linear-gradient(left,#272E3E,#4E5462); ',
      color: '#fff'
    }

    // const sider = {
      // background: ' #252B39',
      // color: '#fff',
      // lineHeight: '120px'

    // }

    const content ={
       // background: 'rgba(16, 142, 233, 1)',
      color: '#fff',
      // minHeight: '120px',
      // lineHeight: '120px'
    }



    return (
      <div style={{ textAlign: 'center' }}>


        <Layout   className={"layout"}>
          <Sider className="sider" ><img src={log} alt="brand"/></Sider>
          <Layout className={"layout2"}>
            <Header style={head_footer}>智慧消防管理后台
              {/*<label className={"con"} > <Icon className={"circle"} type="user"/><a href="">登录</a></label>*/}
            </Header>
            <Content   style={content} className="content">

              <Card className="card"   noHovering title="登录框">
                    <Demo2Form />
                  </Card>


            </Content>
            {/*<Footer style={Object.assign(head_footer, footer)}>Footer</Footer>*/}
          </Layout>
        </Layout>
      </div>
    )
  }
}


export default LayoutDemo;








class Demo2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  isOk = () => {

    // let data = {
    //   acctId  : "qiujun",
    //
    //   acctPassword : 123123
    //  };

    // const context =this;}
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
            }
          ),
          type: 'json',
        }).then((data)=>{
          if(data.message =="success")
          {

            alert("欢迎"+values.userName+"!!!");
            window.location.href="#/app";
            // this.context.router.push('/ProjectsPage');
          }
          else{
            alert("账号或者密码错误！！！");
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
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input    size ="large" prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input  size="large"  prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {/*{getFieldDecorator('remember', {*/}
              {/*valuePropName: 'checked',*/}
              {/*initialValue: true,*/}
            {/*})(*/}
              {/*<Checkbox>Remember me</Checkbox>*/}
            {/*)}*/}
            {/*<a className="login-form-forgot" href="">Forgot password</a>*/}
            {/*<Link  to="/ProjectsPage"> <Button type="primary" htmlType="submit" className="login-form-button">*/}
              {/*Log in*/}
            {/*</Button>*/}

            {/*</Link>*/}
            <Button   size="large"   type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>

            {/*Or <Link   to="/register">register now!</Link>*/}
          </FormItem>
        </Form>
      </div>
    );
  }
}

 const Demo2Form = Form.create()(Demo2);


