import React from 'react';


export default class MainApp extends React.Component {

  constructor(props) {
    super(props);
    this.isLogin = this.isLogin.bind(this);
  }

  isLogin() {
    return false;  
  }

  render() {

    return (
      <div>
        {
          this.isLogin() == true ?
          <h1 >yyyyy</h1> :
          <h1 >nononon</h1>
        }
      </div>
    );
  }
}

 
