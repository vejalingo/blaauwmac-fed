import React from 'react'
import Intl from 'shared/hocs/intl'
import PropTypes from 'prop-types'
import { Typography, Tabs } from 'antd'
import { SettingsForm, ProfileInfo, ChangePassword } from './components'

const { Title } = Typography
const { TabPane } = Tabs

const UserSettings = ({ copy }) => {
  const user = (
    <div className="card-container">
      <Tabs type="card">
        <TabPane tab="Settings" key="1">
          <SettingsForm />
        </TabPane>
        <TabPane tab="Change Password" key="2">
          <ChangePassword />
        </TabPane>
        <TabPane tab="Profile Information" key="3">
          <ProfileInfo />
        </TabPane>
      </Tabs>
    </div>
  )

  return (
    <>
      <Title level={3} className="heading-wrapper">
        {copy.usersettings('Account Settings')}
        {/* <Title type="secondary" style={{ display: 'inline', marginLeft: 5 }} level={4}>
          {copy.usersettings('subTitle')}
        </Title> */}
      </Title>

      <div className="content-empty-wrapper">{user}</div>
    </>
  )
}

UserSettings.propTypes = {
  copy: PropTypes.object.isRequired
}

export default Intl({
  usersettings: 'account.userSettings'
})(UserSettings)
