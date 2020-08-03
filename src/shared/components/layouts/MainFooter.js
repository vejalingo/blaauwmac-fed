import React from 'react'
import Intl from 'shared/hocs/intl'
import PropTypes from 'prop-types'
import { Layout } from 'antd'

const { Footer } = Layout
const MainFooter = ({ copy }) => {
  return (
    <Footer
      style={{
        textAlign: 'center'
      }}
    >
      {copy.shared('footer')}
    </Footer>
  )
}

MainFooter.propTypes = {
  copy: PropTypes.object.isRequired
}

export default Intl({})(MainFooter)
