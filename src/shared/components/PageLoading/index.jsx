import React from 'react'
import { Card, Col, Row, Skeleton } from 'antd'

const LoadingComponent = () => {
  return (
    <div className="dashboard">
      <Row gutter={[16, 16]}>
        <Col md={12} xs={48} sm={12} lg={6}>
          <Card
            bordered={false}
            className="Charts"
            style={{ 'flex-direction': 'column', textAlign: 'center' }}
          >
            <Skeleton active />
          </Card>
        </Col>
        <Col md={12} xs={48} sm={12} lg={6}>
          <Card
            bordered={false}
            className="Charts"
            style={{ 'flex-direction': 'column', textAlign: 'center' }}
          >
            <Skeleton active />
          </Card>
        </Col>
        <Col md={12} xs={48} sm={12} lg={6}>
          <Card
            bordered={false}
            className="Charts"
            style={{ 'flex-direction': 'column', textAlign: 'center' }}
          >
            <Skeleton active />
          </Card>
        </Col>
        <Col md={12} xs={48} sm={12} lg={6}>
          <Card
            bordered={false}
            className="Charts"
            style={{ 'flex-direction': 'column', textAlign: 'center' }}
          >
            <Skeleton active />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card
            hoverable={false}
            className="linechart"
            style={{ 'flex-direction': 'column', textAlign: 'center', marginTop: '10px' }}
          >
            <Skeleton active />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card
            hoverable={false}
            className="linechart"
            style={{ 'flex-direction': 'column', textAlign: 'center', marginTop: '10px' }}
          >
            <Skeleton active />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default LoadingComponent
