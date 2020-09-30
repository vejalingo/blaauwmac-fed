/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
/* eslint-disable no-class-assign */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Intl from 'shared/hocs/intl'

import { Typography } from 'antd'

const { Title } = Typography

class Dashboard extends Component {
  render() {
    const { copy } = this.props

    return (
      <>
        <Title level={3} className="heading-wrapper">
          {copy.dashboard('Overview Dashboard')}
        </Title>

        <div className="dashboard">...</div>
      </>
    )
  }
}

const mapStateToProps = ({ shared }) => ({
  ...shared.list
})

Dashboard = connect(mapStateToProps, null)(Dashboard)

export default Intl({
  dashboard: 'sms.dashboard'
})(Dashboard)
