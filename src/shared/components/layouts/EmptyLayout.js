import React from 'react'
import { Layout } from 'antd'

const { Content } = Layout

const EmptyLayout = ({ children }) => {
  const layoutContent = (
    <Layout>
      <Content>
        <div style={{ minHeight: 360 }}>{children}</div>
      </Content>
    </Layout>
  )

  return <Layout style={{ minHeight: '100vh' }}>{layoutContent}</Layout>
}

export default EmptyLayout
