/* eslint-disable react/jsx-wrap-multilines */
import React from 'react'
import PropTypes from 'prop-types'
import Intl from 'shared/hocs/intl'
import { Button, Result } from 'antd'

const NoPermissionsPage = ({ copy, history }) => (
  <Result
    status={copy.shared('ohThree')}
    title={copy.shared('ohThree')}
    subTitle={copy.shared('ohThreeSub')}
    extra={
      <Button type="primary" onClick={history.goBack}>
        {copy.shared('home')}
      </Button>
    }
  />
)

NoPermissionsPage.propTypes = {
  copy: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Intl({})(NoPermissionsPage)
