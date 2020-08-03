import React from 'react'
import PropTypes from 'prop-types'
import defaultLoadingComponent from '../components/PageLoading'

const withRenderComp = (WrappedComponent, stateComponents = null) => {
  const RenderController = ({ isLoading, ...rest }) => {
    const LoadingComponent = stateComponents || defaultLoadingComponent

    if (isLoading) {
      return <LoadingComponent />
    }

    return <WrappedComponent {...rest} />
  }

  RenderController.defaultProps = {
    isLoading: false
  }

  RenderController.propTypes = {
    isLoading: PropTypes.bool
  }

  return RenderController
}

export default withRenderComp
