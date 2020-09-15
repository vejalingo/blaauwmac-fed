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

function Render({ listItems, orgId, OnSearch, ...props }) {
  const buildingCombinedOpened = listItems
    ?.filter(pred => pred.policy_section === 'Combined')
    .filter(pred => !['Settled', 'Repudiated'].includes(pred.status)).length

  const buildingCombinedPaid = listItems
    ?.filter(pred => pred.policy_section === 'Combined')
    .filter(pred => pred.status === 'Settled').length

  const buildingCombinedRepudiated = listItems
    ?.filter(pred => pred.policy_section === 'Combined')
    .filter(pred => pred.status === 'Repudiated').length

  const businessOpened = listItems
    ?.filter(pred => pred.policy_section === 'Business All Risks')
    .filter(pred => !['Settled', 'Repudiated'].includes(pred.status)).length

  const businessPaid = listItems
    ?.filter(pred => pred.policy_section === 'Business All Risks')
    .filter(pred => pred.status === 'Settled').length

  const businessRepudiated = listItems
    ?.filter(pred => pred.policy_section === 'Business All Risks')
    .filter(pred => pred.status === 'Repudiated').length

  const motorOpened = listItems
    ?.filter(pred => pred.policy_section === 'Motor')
    .filter(pred => !['Settled', 'Repudiated'].includes(pred.status)).length

  const motorPaid = listItems
    ?.filter(pred => pred.policy_section === 'Motor')
    .filter(pred => pred.status === 'Settled').length

  const motorRepudiated = listItems
    ?.filter(pred => pred.policy_section === 'Motor')
    .filter(pred => pred.status === 'Repudiated').length

  const liabilityOpened = listItems
    ?.filter(pred => pred.policy_section === 'Public Liability')
    .filter(pred => !['Settled', 'Repudiated'].includes(pred.status)).length

  const liabilityPaid = listItems
    ?.filter(pred => pred.policy_section === 'Public Liability')
    .filter(pred => pred.status === 'Settled').length

  const liabilityRepudiated = listItems
    ?.filter(pred => pred.policy_section === 'Public Liability')
    .filter(pred => pred.status === 'Repudiated').length

  const data = [
    {
      name: 'Building Combined',
      'Open Claims': buildingCombinedOpened,
      'Paid Claims': buildingCombinedPaid,
      Repudiated: buildingCombinedRepudiated
    },
    {
      name: 'Business All Risk',
      'Open Claims': businessOpened,
      'Paid Claims': businessPaid,
      Repudiated: businessRepudiated
    },
    {
      name: 'Motor',
      'Open Claims': motorOpened,
      'Paid Claims': motorPaid,
      Repudiated: motorRepudiated
    },
    {
      name: 'Public Liability',
      'Open Claims': liabilityOpened,
      'Paid Claims': liabilityPaid,
      Repudiated: liabilityRepudiated
    }
  ]

  const charts = (
    <BarChart width={1160} height={300} data={data}>
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
    const { copy, listItems, fetching } = this.props
    console.log(listItems)

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
