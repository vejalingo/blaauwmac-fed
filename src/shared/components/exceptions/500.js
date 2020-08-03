/* eslint-disable react/jsx-wrap-multilines */
import React from 'react'
import PropTypes from 'prop-types'
import Intl from 'shared/hocs/intl'
import { Button, Result } from 'antd'

const ServerErrorPage = ({ copy, history }) => (
  <Result
    status={copy.shared('ohOh')}
    title={copy.shared('ohOh')}
    subTitle={copy.shared('ohOhSub')}
    extra={
      <Button type="primary" onClick={history.goBack}>
        {copy.shared('home')}
      </Button>
    }
  />
)

ServerErrorPage.propTypes = {
  copy: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Intl({})(ServerErrorPage)
