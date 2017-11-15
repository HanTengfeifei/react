import React from 'react';
import {Link} from 'dva/router';
import { Card, Row, Col, Icon, Switch, Modal, Button,AutoComplete, Input,Popover } from 'antd';
import './projects.less';
import CardDemo from './projectcheck'


const imgsrc = require('../../assets/img/pone.png');
const imgsrcone = require('../../assets/img/logo.png');
const imgsrcproject = require('../../assets/img/projectone.png');
const imgsrcprojecttwo = require('../../assets/img/projecttwo.png');
const imgsrcprojectthree = require('../../assets/img/projectthree.png');
const imgsrcprojecttwos = require('../../assets/img/projecttwos.png');



export default class ProjectsLeftComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="projectleftbox">
          <div className="project_leftmid">
              <div className="project_logo">
                 <img style={{ display: 'block' }} alt="example" src={imgsrcone} />
              </div>
              <ul className="project_leftmenage">
                <li>
                  <Link to="/register">

                    <img style={{ display: 'block',margin:'0 auto' }} alt="example" src={imgsrcproject} />
                    <span>用户管理</span>

                  </Link>
                </li>
                <li>

                  <Link to="/projectcheck">
                    <img style={{ display: 'block',margin:'0 auto' }} alt="example" src={imgsrcprojecttwos} />
                    <span>项目管理</span>
                    </Link>ss


                </li>
                <li>
                  <a href="">
                    <img style={{ display: 'block',margin:'0 auto' }} alt="example" src={imgsrcprojectthree} />
                    <span>分类管理</span>
                  </a>
                </li>
              </ul>
          </div>
        </div>
    )
  }
}
