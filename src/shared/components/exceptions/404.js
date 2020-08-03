/* eslint-disable react/jsx-wrap-multilines */
import React from 'react'
import PropTypes from 'prop-types'
import Intl from 'shared/hocs/intl'
import { Button, Result } from 'antd'

const NotFoundPage = ({ copy, history }) => (
  <Result
    status={copy.shared('ohFour')}
    title={copy.shared('ohFour')}
    subTitle={copy.shared('ohFourSub')}
    extra={
      <Button type="primary" onClick={history.goBack}>
        {copy.shared('home')}
      </Button>
    }
  />
)

NotFoundPage.propTypes = {
  copy: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Intl({})(NotFoundPage)
