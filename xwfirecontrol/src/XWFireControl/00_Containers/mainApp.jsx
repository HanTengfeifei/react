import React from 'react';
import LoginPage from '../01_Login/Login/login'
import ProjectsPage from '../08_Projects/projects'

export default class MainApp extends React.Component {

  constructor(props) {
    super(props);
    this.isLogin = this.isLogin.bind(this);
    this.state = {
      isLogin : false
    };
  }

  componentDidMount() {
    this.loginWithRequest();
  }

  loginWithRequest() {
    //TODO: 请求登录接口
    if(true) {
      this.setState({
        isLogin : true
      });
    } else {
      console.log('Please confirm the password!!!');
    }
  }

  isLogin() {
    return this.state.isLogin;
  }



  render() {

    return (
      <div>
        {/*<LoginPage>*/}
        {/*</LoginPage>*/}

          {/*<ProjectsPage > */}
            {/*{this.props.children}*/}
          {/*</ProjectsPage>*/}

        {/*this.isLogin() == true ?*/}
        {/*<ProjectsPage ></ProjectsPage>*/}
        {/*:*/}
        {/*<LoginPage ></LoginPage>*/}


      </div>
    );
  }
}


