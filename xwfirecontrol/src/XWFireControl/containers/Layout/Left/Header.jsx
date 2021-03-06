import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'dva/router';
import { Layout, Icon, Menu, Badge, Switch, Popover } from 'antd';
import { CommonMenus } from '../Common';
const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const LeftModeHeader = ({ siderFold, siderRespons, lightThem, siderOpenKeys, menuResponsVisible, onSwitchSidebar, onSwitchTheme, onSwitchMenuMode, onMenuOpenChange, onSwitchMenuPopover }) => {

  const popMenuProps = {
    menuMode: 'left',
    siderFold: false,
    lightThem: true,
    siderOpenKeys,
    onMenuOpenChange,
    onSwitchMenuMode
  }
  return (
    <Header className="leftHeader">
      {
        // 响应式菜单
        siderRespons ?
          <Popover
            placement="bottomLeft"
            onVisibleChange={onSwitchMenuPopover}
            visible={menuResponsVisible}
            trigger="click"
            overlayClassName="responsMenu"
            content={<CommonMenus {...popMenuProps} />}>
            <span className="btnBars"><Icon type='bars' /></span>
          </Popover>
          :
          <span className="btnBars" onClick={onSwitchSidebar}>
            <Icon type={siderFold ? 'menu-unfold' : 'menu-fold'} />
          </span>
      }
      <Menu mode="horizontal" className="rightMenu" onClick={onSwitchMenuMode}>
      
       
        <SubMenu title={<span> <Icon type="user" />Bear熊</span>}>
          <Menu.Item key="profile">
            <Link to="/profile">资料</Link>
          </Menu.Item>
          <Menu.Item key="logout">
            登出
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Header>
  )
}

LeftModeHeader.prototype = {
  siderFold: PropTypes.bool,
  siderRespons: PropTypes.bool,
  lightThem: PropTypes.string,
  siderOpenKeys: PropTypes.array,
  menuResponsVisible: PropTypes.bool,
  onSwitchSidebar: PropTypes.func,
  onSwitchTheme: PropTypes.func,
  onSwitchMenuMode: PropTypes.func,
  onMenuOpenChange: PropTypes.func,
  onSwitchMenuPopover: PropTypes.func,
}

export default LeftModeHeader;
