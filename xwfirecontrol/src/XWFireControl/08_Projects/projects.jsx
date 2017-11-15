import React from 'react';
import {Layout}from 'antd';
import {row,column }from 'antd';
import { Card, Row, Col, Icon, Switch, Modal, Button,AutoComplete, Input,Popover } from 'antd';
import './projects.less';
import CardDemo from './projectcheck'
import FoundComponent from  './projectfound'
import LeftComponent from './projectsLeftComponent'
import SearchComponent from './projectsSearchComponent'
import CardComponent from './projectsCardComponent'
import HeaderComponent from './projectsHeaderComponent'
const { Content ,Sider}=Layout;


const imgsrc = require('../../assets/img/pone.png');
const imgsrcone = require('../../assets/img/logo.png');
const imgsrcproject = require('../../assets/img/projectone.png');
const imgsrcprojecttwo = require('../../assets/img/projecttwo.png');
const imgsrcprojectthree = require('../../assets/img/projectthree.png');
const imgsrcprojecttwos = require('../../assets/img/projecttwos.png');
const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;
const { TextArea } = Input;
const text = <span className="popovertopbox">余杭区海创科技中心建模项目余杭区海创科技中心建模项目</span>;

export default class ProjectsPage extends React.Component {

  constructor(props) {
    super(props);
    this.onClickButtonReview = this.onClickButtonReview.bind(this);
    // this.createCards = this.createCards.bind(this);
    this.state = {
      isShowProjectDetail : false
    };
    this.dataSource = {
      card1 : "card1",
      card2 : "card2"
    }
  }

  onClickButtonReview(){
    this.setState({
      isShowProjectDetail : true
    });
  }

  // createCards() {
  //
  //   return (
  //       <CardComponent />
  //     );
    // this.dataSource && this.dataSource.map(() => {
    //   return (
    //     <CardComponent />
    //   );
    // });


  render() {

    return (
      <div>
<Layout>
<Sider>
          <LeftComponent  />
</Sider>
  <Layout>
          <HeaderComponent/>
    CardComponent
    <Content>
      <SearchComponent/>
      <CardComponent/>
    </Content>
          {/*<SearchComponent />*/}
          {/*{*/}
            {/*this.createCards()*/}
          {/*}*/}
          </Layout>

</Layout>
      </div>

    );
  }
}
