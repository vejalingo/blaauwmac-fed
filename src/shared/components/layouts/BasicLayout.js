import React, { useState, useEffect, lazy, Suspense } from 'react'
import { connect } from 'react-redux'
import Nav from 'shared/components/Nav'
import PropTypes from 'prop-types'
import storage from 'shared/lib/storage'
import { Layout, Icon, Select, Spin } from 'antd'
import Avatar from '../Nav/AvatarDropdown'

const MainFooter = lazy(() => import('./MainFooter.js'))

const { Header, Content } = Layout
const { Option } = Select

const BasicLayout = ({ children }) => {
  const [collapsed, onCollapsed] = useState(false)

  const onCollapse = pred => {
    onCollapsed(pred)
  }

  const toggle = () => {
    onCollapsed(!collapsed)
  }

  const userDetails = () => {
    const { names, surname, email } = storage.local.getObj('user')
    return (names && `${names} ${surname}`) || `${email} `
  }

  const layoutContent = (
    <Layout>
      <Header>
        <span className="ant-pro-global-header-trigger">
          <Icon
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={toggle}
            className="trigger"
          />
        </span>

        <span className="menu-right">
          <span style={{ fontWeight: 'bold', color: '#fff' }}>{userDetails()}</span>
          <Avatar menu />
        </span>
      </Header>

      <Content>
        <div style={{ minHeight: 360 }}>{children}</div>
      </Content>
      <Suspense fallback={<Spin size="large" />}>
        <MainFooter />
      </Suspense>
    </Layout>
  )

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Nav isCollapsed={collapsed} OnCollapse={onCollapse} />
      {layoutContent}
    </Layout>
  )
}

BasicLayout.propTypes = {
  children: PropTypes.object.isRequired
}

export default connect(null, null)(BasicLayout)
