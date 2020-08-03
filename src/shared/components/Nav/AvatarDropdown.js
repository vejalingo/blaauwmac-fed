import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { logOut } from 'shared/state/actions'
import HeaderDropdown from '../HeaderDropdown'
import { Icon, Menu } from 'antd'

class AvatarDropdown extends React.Component {
  onMenuClick = event => {
    const { logOut, push } = this.props
    const { key } = event

    if (key === 'logout') {
      logOut()
    }

    if (key === 'settings') {
      push('/account/settings')
    }
  }

  render() {
    const { menu } = this.props
    const menuHeaderDropdown = (
      <Menu className="menu" selectedKeys={[]} onClick={this.onMenuClick}>
        {menu && (
          <Menu.Item key="settings">
            <Icon type="setting" />
            My Settings
          </Menu.Item>
        )}
        {menu && <Menu.Divider />}
        <Menu.Item key="logout">
          <Icon type="logout" />
          Sign Out
        </Menu.Item>
      </Menu>
    )
    return (
      <HeaderDropdown overlay={menuHeaderDropdown}>
        <span className="action account">
          <Icon type="setting" />
        </span>
      </HeaderDropdown>
    )
  }
}

const mapStateToProps = ({ shared }) => ({
  ...shared
})

const mapDispatchToProps = { logOut, push }

AvatarDropdown = connect(mapStateToProps, mapDispatchToProps)(AvatarDropdown)

export default AvatarDropdown
