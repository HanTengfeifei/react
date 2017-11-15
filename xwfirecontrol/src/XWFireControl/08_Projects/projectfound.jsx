import React from 'react';
import { Card, Row, Col, Icon, Switch, Modal, Button,AutoComplete, Input,Popover,Form, Select, message, DatePicker, Radio, Upload, InputNumber, Slider } from 'antd';
import './projects.less';
const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;
const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { TextArea } = Input;

export default class projectFoundComponent extends React.Component {
    
    render() {
        const gridStyle = {
        width: '25%',
        textAlign: 'center',
     };
   
    return (
        <div className="project_contentbox">
            <div className="project_checkbox">
            <div className="project_checktiitle" style={{marginBottom:'30px'}}>项目信息</div>
                <Row gutter={8} style={{ marginTop: '20px' }}>
                    <Col span={24}>
                            <Demo6App />
                    </Col>
                </Row>
            </div>
        </div >
        
       
    )
  }
}



class Demo6 extends React.Component {
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
    normFile = (e) => {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    }
    render() {
      const { getFieldDecorator } = this.props.form;
      const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
      };
      return (
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            label="项目名称"
            {...formItemLayout}
          >
          {getFieldDecorator('projectname', {
              rules: [
                { required: true, message: '请输入项目名称!' },
              ],
            })(
                <Input placeholder="项目名称" />
            )}
           
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="场景分类"
          >
            {getFieldDecorator('select', {
              rules: [
                { required: true, message: '请选择场景分类!' },
              ],
            })(
              <Select placeholder="场景分类">
                <Option value="china">场景分类一</Option>
                <Option value="use">场景分类二</Option>
              </Select>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="项目图片"
          >
            <div className="dropbox">
              {getFieldDecorator('dragger', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
              })(
                <Upload.Dragger name="files" action="/upload.do">
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                  </p>
                  <p className="ant-upload-text">上传图片</p>
                  <p className="ant-upload-hint"></p>
                </Upload.Dragger>
              )}
            </div>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="项目文件"
            extra="支持扩展名zip"
          >
            {getFieldDecorator('upload', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button>
                  <Icon type="upload" /> 上传文件
                </Button>
              </Upload>
            )}
          </FormItem>
          <FormItem
            label="项目描述"
            {...formItemLayout}
          >
          {getFieldDecorator('projectdepict', {
              rules: [
                { required: true, message: '请输入项目名称!' },
              ],
            })(
                <AutoComplete
                    style={{ width: 368, height: 70 }}
                    onSearch={this.handleSearch}
                    placeholder="请输入"
                >
                    <TextArea onKeyPress={this.handleKeyPress} style={{ height: 70 }} />
                </AutoComplete>
            )}
           
          </FormItem>
          
  
          <FormItem
            wrapperCol={{ span: 12, offset: 6 }}
          >
          <div className="project_fbuttomboxs">
            <Button style={{marginRight:'20px'}}>取消</Button>
            <Button type="primary" htmlType="submit">提交</Button>
          </div>
          </FormItem>
        </Form>
      );
    }
  }
  
  const Demo6App = Form.create()(Demo6);
