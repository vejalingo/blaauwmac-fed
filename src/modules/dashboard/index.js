/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
/* eslint-disable no-class-assign */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Intl from 'shared/hocs/intl'

import withRenderComp from 'shared/hocs/withRenderComp'

import {
  Typography,
  Statistic,
  Icon,
  Card,
  Col,
  Row,
  Progress,
  Alert,
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Modal
} from 'antd'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

import storage from 'shared/lib/storage'
import InboxFormList from './components/inboxlist'

import * as actions from '../claims/state/registration'

const { Title } = Typography

const { Search } = Input
const { Option } = Select
const { RangePicker } = DatePicker

function Render({ listItems, dashboardData, orgId, OnSearch, ...props }) {
  const charts = (
    <BarChart width={1160} height={300} data={dashboardData}>
      <CartesianGrid strokeDasharray="4 4" />
      <XAxis dataKey="name" />
      <YAxis domain={['auto', 'auto']} />
      <Tooltip />
      <Legend wrapperStyle={{ bottom: -15 }} />
      <Bar dataKey="Open Claims" fill="#82ca9d" />
      <Bar dataKey="Paid Claims" fill="#8884d8" />
      <Bar dataKey="Repudiated" fill="#f8f226" />
    </BarChart>
  )

  const filters = (
    <Form layout="inline">
      <Form.Item>
        <Search placeholder="Search by term" onSearch={OnSearch} style={{ width: 200 }} />
      </Form.Item>
    </Form>
  )
  return (
    <div className="content-wrapper-empty">
      <Row justify="center">
        <Col span={12}>{charts}</Col>
      </Row>
      <div className="filter-wrapper">{filters}</div>
      <div className="content-wrapper">
        <InboxFormList {...props} orgId={orgId} listItems={listItems} />
      </div>
    </div>
  )
}

Render = withRenderComp(Render)

class Dashboard extends Component {
  state = {
    orgId: ''
  }

  componentDidMount() {
    const { fetchClaims } = this.props
    const orgId = storage.local.getObj('user').id
    this.updateId(orgId)
    fetchClaims(orgId)
  }

  updateId = id => {
    this.setState(prevState => ({ orgId: id }))
  }

  search = term => {
    const { orgId } = this.state
    const { fetchClaims } = this.props
    fetchClaims(orgId, { claim_number: term })
  }

  render() {
    const { copy, fetching } = this.props
    const { orgId } = this.state

    return (
      <>
        <Title level={3} className="heading-wrapper">
          {copy.dashboard('Total Claims')}
        </Title>

        <Render {...this.props} OnSearch={this.search} orgId={orgId} isLoading={fetching} />
      </>
    )
  }
}

const mapStateToProps = ({ shared }) => ({
  ...shared.list
})

const mapDispatchToProps = actions

Dashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard)

export default Intl({
  dashboard: 'sms.dashboard'
})(Dashboard)
