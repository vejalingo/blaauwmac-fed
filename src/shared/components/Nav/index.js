/* eslint-disable global-require */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/no-array-index-key */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Intl from 'shared/hocs/intl'
import { Layout, Menu, Icon } from 'antd'
import { getModules } from 'shared/static/modules'
import storage from 'shared/lib/storage'

const { Sider } = Layout
const { SubMenu } = Menu

const Nav = ({ copy, isCollapsed, OnCollapse }) => {
  const orgId = storage.local.getObj('user').id
  const modules = getModules(orgId)
  const Logo = (
    <div className="ant-pro-sider-menu-logo" id="logo">
      <Link to="/dashboard">
        <img src={require('shared/assets/logo.jpeg')} alt="Blaaumac" />
        <h1>{copy.shared('mainTitle')}</h1>
      </Link>
    </div>
  )

  return (
    <>
      <Sider width={300} collapsible collapsed={isCollapsed} onCollapse={OnCollapse}>
        {Logo}
        {modules.length ? (
          <span>
            <Menu theme="light" mode="inline">
              {modules.map(({ key, link, title, icon, sub }, idx) =>
                sub && sub.length > 0 ? (
                  <SubMenu
                    key={`sub${idx}`}
                    title={
                      <span>
                        <Icon type={icon} />
                        <span>{title}</span>
                      </span>
                    }
                  >
                    {sub &&
                      sub.map((item, index) => (
                        <Menu.Item key={`${item.title.replace(/\s/g, '-')}${index}`}>
                          <Icon type={item.icon} />
                          <span>
                            <Link to={item.link} className="sub-menu-row">
                              {item.title}
                            </Link>
                          </span>
                        </Menu.Item>
                      ))}
                  </SubMenu>
                ) : (
                  <Menu.Item key={`${key}${idx}`}>
                    <Icon type={icon} />
                    <span>
                      <Link to={link}>{title}</Link>
                    </span>
                  </Menu.Item>
                )
              )}
            </Menu>
          </span>
        ) : null}
      </Sider>
    </>
  )
}

Nav.propTypes = {
  copy: PropTypes.object.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
  OnCollapse: PropTypes.func.isRequired
}

export default Intl({})(Nav)
